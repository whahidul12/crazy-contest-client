import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import moment from "moment";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";

const MyCreatedContests = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Fetch contests created by the current user
  const {
    data: contests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myCreatedContests", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests/creator/${user.email}`);
      return res.data;
    },
  });

  if (isLoading)
    return <span className="loading loading-spinner loading-lg"></span>;

  const handleDelete = (id, status) => {
    if (status !== "Pending") {
      Swal.fire("Denied", "Only pending contests can be deleted.", "warning");
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/contests/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your contest has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">
        My Created Contests ({contests.length})
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Participants</th>
              <th>Deadline</th>
              <th>Submissions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contests.map((contest) => (
              <tr key={contest._id}>
                <td>{contest.name}</td>
                <td>
                  <span
                    className={`badge ${contest.status === "Confirmed" ? "badge-success" : contest.status === "Rejected" ? "badge-error" : "badge-warning"} text-white`}
                  >
                    {contest.status}
                  </span>
                </td>
                <td>{contest.participantsCount}</td>
                <td>{moment(contest.deadline).format("MMM Do YYYY")}</td>
                <td>
                  {contest.status === "Confirmed" ? (
                    <Link
                      to={`/dashboard/submitted-tasks?contestId=${contest._id}`}
                      className="btn btn-xs btn-info"
                    >
                      See Submissions
                    </Link>
                  ) : (
                    <button
                      className="btn btn-xs btn-ghost text-gray-400"
                      disabled
                    >
                      N/A
                    </button>
                  )}
                </td>
                <td>
                  {/* Edit button only visible if Pending */}
                  <Link to={`/dashboard/edit-contest/${contest._id}`}>
                    <button
                      className="btn btn-xs btn-primary mr-2"
                      disabled={contest.status !== "Pending"}
                    >
                      <FaEdit />
                    </button>
                  </Link>
                  {/* Delete button only visible if Pending */}
                  <button
                    onClick={() => handleDelete(contest._id, contest.status)}
                    className="btn btn-xs btn-error"
                    disabled={contest.status !== "Pending"}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCreatedContests;
