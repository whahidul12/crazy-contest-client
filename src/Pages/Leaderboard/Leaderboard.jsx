import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import { FaCrown, FaTrophy } from "react-icons/fa";

const Leaderboard = () => {
  const axiosPublic = useAxiosPublic();
  const { data: leaderboard = [], isLoading } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users/leaderboard");
      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="py-20 text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div className="bg-primary-light dark:bg-primary-dark mx-auto -mt-20 min-h-screen px-4 py-10 pt-24">
      <Helmet>
        <title>ContestHub | Leaderboard</title>
      </Helmet>
      <h1 className="text-primary mb-10 flex items-center justify-center gap-4 text-center text-5xl font-extrabold">
        <FaCrown className="text-yellow-500" />{" "}
        <span className="text-secondary-c dark:text-primary-light">
          Contest Champions
        </span>{" "}
        <FaCrown className="text-yellow-500" />
      </h1>

      <div className="bg-card-light/50 dark:bg-card-dark/50 overflow-x-auto rounded-xl p-6 shadow-2xl">
        <table className="table w-full">
          <thead>
            <tr className="text-primary-dark dark:text-primary-light text-lg">
              <th>Rank</th>
              <th>User</th>
              <th className="text-center">Contests Won</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((user, index) => (
              <tr
                key={user._id}
                className={
                  index < 3
                    ? "bg-card-light dark:bg-card-dark text-primary-dark dark:text-primary-light font-bold"
                    : ""
                }
              >
                <td className="text-2xl font-bold">
                  {index === 0 ? (
                    <FaTrophy className="text-yellow-500" />
                  ) : index === 1 ? (
                    <FaTrophy className="text-gray-400" />
                  ) : index === 2 ? (
                    <FaTrophy className="text-amber-700" />
                  ) : (
                    index + 1
                  )}
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={
                            user.photo || "https://i.ibb.co/5GzXkwq/user.png"
                          }
                          alt="User Avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="text-primary-dark dark:text-primary-light text-center text-xl">
                  {user.wins || 0}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
