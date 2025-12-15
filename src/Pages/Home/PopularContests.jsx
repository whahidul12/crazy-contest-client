import { useQuery } from "@tanstack/react-query";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const PopularContests = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch popular contests (Top 5)
  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["popularContests"],
    queryFn: async () => {
      const res = await axiosPublic.get("/contests/popular");
      // Note: Ensure your backend has this route or logic
      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="py-10 text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div className="my-16 px-4">
      <h2 className="text-secondary-c dark:text-primary-light mb-10 text-center text-3xl font-bold sm:text-4xl">
        Popular Contests
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contests.map((contest) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            key={contest._id}
            className="card bg-card-light dark:bg-card-dark border border-gray-100 shadow-xl dark:border-gray-700"
          >
            <figure>
              <img
                src={contest.image}
                alt={contest.name}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary-dark dark:text-primary-light">
                {contest.name}
              </h2>
              <p className="text-primary-dark/70 dark:text-primary-light/70">
                {contest.description.slice(0, 80)}...
              </p>
              <p className="text-secondary-c font-semibold">
                Participants: {contest.participantsCount}
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/contests/${contest._id}`}
                  className="btn bg-secondary-o btn-sm border-none"
                >
                  Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/all-contests" className="btn btn-outline btn-wide">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default PopularContests;
