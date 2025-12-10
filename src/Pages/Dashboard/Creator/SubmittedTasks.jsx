import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import moment from "moment";
import Swal from "sweetalert2";
import { FaTrophy } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const SubmittedTasks = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [searchParams] = useSearchParams();
  const contestIdFilter = searchParams.get("contestId"); // Use contestId from URL query

  // Fetch submissions for contests created by the user, filtered by contestId if present
  const {
    data: submissions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["submittedTasks", user?.email, contestIdFilter],
    queryFn: async () => {
      // Backend should handle filtering by creator email AND optional contestId
      const res = await axiosSecure.get(`/submissions/creator/${user.email}`, {
        params: { contestId: contestIdFilter },
      });
      return res.data;
    },
  });

  // Fetch contests to check for winner status and deadline
  const { data: contests = [] } = useQuery({
    queryKey: ["creatorContests", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests/creator/${user.email}`);
      return res.data;
    },
  });

  // Helper function to check if winner is already declared or deadline passed
  const getContestStatus = (id) => {
    const contest = contests.find((c) => c._id === id);
    if (!contest) return { status: "Contest Not Found", canDeclare: false };

    const isEnded = moment().isAfter(moment(contest.deadline));
    const winnerDeclared = !!contest.winner;

    if (winnerDeclared) return { status: "Winner Declared", canDeclare: false };
    if (!isEnded) return { status: "Deadline Not Met", canDeclare: false };

    return { status: "Ready to Declare", canDeclare: true };
  };

  const handleDeclareWinner = (submission) => {
    const status = getContestStatus(submission.contestId);

    if (!status.canDeclare) {
      Swal.fire(
        "Denied",
        status.status +
          ". The contest must be ended and a winner not yet declared.",
        "warning",
      );
      return;
    }

    Swal.fire({
      title: `Declare ${submission.participantEmail} as Winner?`,
      text: `This action is irreversible and will mark the contest as closed.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Declare Winner!",
    }).then((result) => {
      if (result.isConfirmed) {
        const winnerInfo = {
          winnerEmail: submission.participantEmail,
          winnerName: submission.participantName, // Assuming you add participantName during submission
          submissionId: submission._id,
        };

        axiosSecure
          .put(`/contests/declare-winner/${submission.contestId}`, winnerInfo)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch(); // Refetch submissions to update view
              Swal.fire(
                "Winner Declared!",
                "The winner has been successfully recorded.",
                "success",
              );
            } else {
              Swal.fire(
                "Error",
                "Failed to declare winner. Contest or submission not found.",
                "error",
              );
            }
          });
      }
    });
  };

  if (isLoading)
    return <span className="loading loading-spinner loading-lg"></span>;

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">
        Submitted Tasks ({submissions.length})
      </h2>

      {contestIdFilter && (
        <p className="text-info mb-4">
          Showing submissions for Contest ID: {contestIdFilter}
        </p>
      )}

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Contest</th>
              <th>Participant</th>
              <th>Submission Link</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((sub) => {
              const contestStatus = getContestStatus(sub.contestId);
              return (
                <tr key={sub._id}>
                  <td>{sub.contestName}</td>
                  <td>
                    <div className="font-bold">
                      {sub.participantName || sub.participantEmail}
                    </div>
                    <div className="text-sm opacity-50">
                      {sub.participantEmail}
                    </div>
                  </td>
                  <td>
                    <a
                      href={sub.submissionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link link-primary block max-w-[150px] truncate text-sm"
                    >
                      View Task
                    </a>
                  </td>
                  <td>{moment(sub.submissionTime).format("MMM Do YYYY")}</td>
                  <td>
                    <button
                      onClick={() => handleDeclareWinner(sub)}
                      className="btn btn-xs btn-success text-white"
                      disabled={!contestStatus.canDeclare}
                    >
                      <FaTrophy /> Declare Winner
                    </button>
                    {!contestStatus.canDeclare && (
                      <span className="text-error mt-1 block text-xs">
                        {contestStatus.status}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmittedTasks;
