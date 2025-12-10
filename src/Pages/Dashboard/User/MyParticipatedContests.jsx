import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import moment from "moment";
import useAuth from "../../../Hooks/useAuth";

const MyParticipatedContests = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Fetch participated contests
  const { data: participated = [], isLoading } = useQuery({
    queryKey: ["myParticipated", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/participated/${user.email}`);
      return res.data;
    },
  });

  // Sort by upcoming deadline
  const sortedParticipated = [...participated].sort(
    (a, b) => new Date(a.deadline) - new Date(b.deadline),
  );

  if (isLoading)
    return <span className="loading loading-spinner loading-lg"></span>;

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">My Participated Contests</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Contest Name</th>
              <th>Deadline</th>
              <th>Entry Fee</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedParticipated.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="font-bold">{item.contestName}</div>
                </td>
                <td>
                  {moment(item.deadline).format("MMM Do YYYY, h:mm a")}
                  {moment().isAfter(moment(item.deadline)) && (
                    <span className="badge badge-error badge-sm ml-2">
                      Expired
                    </span>
                  )}
                </td>
                <td>${item.entryFee}</td>
                <td>
                  <span className="badge badge-success text-white">Paid</span>
                </td>
                <td>
                  {moment().isBefore(moment(item.deadline)) ? (
                    <button className="btn btn-xs btn-outline btn-secondary">
                      Upcoming
                    </button>
                  ) : (
                    <span className="text-xs text-gray-400">Closed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParticipatedContests;
