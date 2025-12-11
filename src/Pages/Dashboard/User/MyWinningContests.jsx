import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrophy } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useAuth from "../../../Hooks/useAuth";

const MyWinningContests = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: wins = [], isLoading } = useQuery({
    queryKey: ["myWins", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests/winner/${user.email}`);
      return res.data;
    },
  });

  if (isLoading)
    return <span className="loading loading-spinner loading-lg"></span>;

  return (
    <div>
      <h2 className="mb-8 text-center text-3xl font-bold">My Victories</h2>

      {wins.length === 0 ? (
        <div className="mt-10 text-center text-gray-500">
          <h3 className="text-xl">No wins yet. Keep trying!</h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wins.map((win, index) => (
            <motion.div
              key={win._id}
              className="card bg-base-100 border-2 border-yellow-400 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="card-body items-center text-center">
                <FaTrophy className="mb-4 text-6xl text-yellow-500" />
                <h2 className="card-title text-2xl">{win.contestName}</h2>
                <p className="text-lg">Prize Won:</p>
                <p className="text-3xl font-bold text-green-600">
                  ${win.prizeMoney}
                </p>
                <div className="card-actions mt-4">
                  <div className="badge badge-outline">Winner</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyWinningContests;
