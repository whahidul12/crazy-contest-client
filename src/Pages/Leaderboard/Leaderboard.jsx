import { useQuery } from "@tanstack/react-query";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import { FaCrown, FaTrophy, FaMedal, FaStar } from "react-icons/fa";
import { useMemo } from "react";

const Leaderboard = () => {
  const axiosPublic = useAxiosPublic();
  const { data: leaderboard = [], isLoading } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users/leaderboard");
      return res.data;
    },
  });

  // Memoized rank icons for performance
  const getRankIcon = useMemo(
    () => (index) => {
      switch (index) {
        case 0:
          return (
            <FaTrophy className="text-2xl text-yellow-500 drop-shadow-lg" />
          );
        case 1:
          return <FaTrophy className="text-2xl text-gray-400 drop-shadow-lg" />;
        case 2:
          return (
            <FaTrophy className="text-2xl text-amber-700 drop-shadow-lg" />
          );
        default:
          return (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-slate-200 to-slate-300 text-lg font-bold text-slate-700 shadow-md dark:from-slate-600 dark:to-slate-700 dark:text-slate-200">
              {index + 1}
            </div>
          );
      }
    },
    [],
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: 0.1,
      },
    },
  };

  const loadingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  if (isLoading) {
    return (
      <motion.div
        className="flex min-h-screen items-center justify-center bg-linear-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900"
        variants={loadingVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-4 text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <div className="h-16 w-16 rounded-full border-4 border-indigo-200 border-t-indigo-600"></div>
          </motion.div>
          <motion.p
            className="text-lg font-medium text-slate-600 dark:text-slate-300"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading Champions...
          </motion.p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="overflow-hiddenw relative -mt-20 min-h-screen">
      {/* Animated Background with Blur Effect */}
      <div className="dark:to-secondary-o absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 h-32 w-32 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 opacity-20 blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 h-24 w-24 rounded-full bg-gradient-to-br from-purple-200 to-purple-400 opacity-20 blur-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 h-20 w-20 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 opacity-20 blur-xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 pt-24">
        <Helmet>
          <title>Crazy Contest | Leaderboard</title>
        </Helmet>

        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 text-center"
        >
          <motion.div
            className="mb-4 flex items-center justify-center gap-4"
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              <FaCrown className="text-4xl text-yellow-500 drop-shadow-lg" />
            </motion.div>
            <h1 className="text-primary-dark dark:text-primary-light mt-12 text-4xl font-extrabold md:text-5xl">
              Contest Champions
            </h1>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <FaCrown className="text-4xl text-yellow-500 drop-shadow-lg" />
            </motion.div>
          </motion.div>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Celebrating our top performers and their incredible achievements
          </motion.p>
        </motion.div>

        {/* Leaderboard Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl"
        >
          <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/70 shadow-2xl backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-800/70">
            {/* Top 3 Podium */}
            {leaderboard.length > 0 && (
              <motion.div
                className="bg-secondary-o/10 border-b border-slate-200/20 p-8 dark:border-slate-700/50"
                variants={itemVariants}
              >
                <div className="mb-8 flex items-end justify-center gap-8">
                  {/* Second Place */}
                  {leaderboard[1] && (
                    <motion.div
                      className="text-center"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative mb-4">
                        <div className="flex h-24 w-20 items-end justify-center rounded-t-lg bg-gradient-to-t from-gray-300 to-gray-100 pb-2 shadow-lg">
                          <span className="text-2xl font-bold text-gray-700">
                            2
                          </span>
                        </div>
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 transform">
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 0.5,
                            }}
                          >
                            <FaMedal className="text-3xl text-gray-400 drop-shadow-lg" />
                          </motion.div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <img
                          src={
                            leaderboard[1].photo ||
                            "https://i.ibb.co/5GzXkwq/user.png"
                          }
                          alt={leaderboard[1].name}
                          className="mx-auto h-16 w-16 rounded-full border-4 border-gray-300 object-cover shadow-lg"
                        />
                        <h3 className="font-bold text-slate-800 dark:text-slate-200">
                          {leaderboard[1].name}
                        </h3>
                        <p className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                          {leaderboard[1].wins || 0}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* First Place */}
                  {leaderboard[0] && (
                    <motion.div
                      className="text-center"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative mb-4">
                        <div className="flex h-32 w-24 items-end justify-center rounded-t-lg bg-gradient-to-t from-yellow-400 to-yellow-200 pb-2 shadow-xl">
                          <span className="text-3xl font-bold text-yellow-800">
                            1
                          </span>
                        </div>
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                          <motion.div
                            animate={{
                              y: [0, -8, 0],
                              rotate: [0, 5, -5, 0],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            <FaCrown className="text-4xl text-yellow-500 drop-shadow-xl" />
                          </motion.div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="relative">
                          <img
                            src={
                              leaderboard[0].photo ||
                              "https://i.ibb.co/5GzXkwq/user.png"
                            }
                            alt={leaderboard[0].name}
                            className="mx-auto h-20 w-20 rounded-full border-4 border-yellow-400 object-cover shadow-xl"
                          />
                          <motion.div
                            className="absolute -top-1 -right-1"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <FaStar className="text-lg text-yellow-500 drop-shadow-lg" />
                          </motion.div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                          {leaderboard[0].name}
                        </h3>
                        <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                          {leaderboard[0].wins || 0}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Third Place */}
                  {leaderboard[2] && (
                    <motion.div
                      className="text-center"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative mb-4">
                        <div className="flex h-20 w-18 items-end justify-center rounded-t-lg bg-gradient-to-t from-amber-600 to-amber-400 pb-2 shadow-lg">
                          <span className="text-xl font-bold text-amber-900">
                            3
                          </span>
                        </div>
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 transform">
                          <motion.div
                            animate={{ y: [0, -3, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 1,
                            }}
                          >
                            <FaMedal className="text-2xl text-amber-600 drop-shadow-lg" />
                          </motion.div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <img
                          src={
                            leaderboard[2].photo ||
                            "https://i.ibb.co/5GzXkwq/user.png"
                          }
                          alt={leaderboard[2].name}
                          className="mx-auto h-14 w-14 rounded-full border-4 border-amber-500 object-cover shadow-lg"
                        />
                        <h3 className="font-bold text-slate-800 dark:text-slate-200">
                          {leaderboard[2].name}
                        </h3>
                        <p className="text-xl font-bold text-amber-600 dark:text-amber-400">
                          {leaderboard[2].wins || 0}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Full Leaderboard Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200/50 dark:border-slate-700/50">
                    <th className="px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-300">
                      Rank
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-300">
                      Participant
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-slate-700 dark:text-slate-300">
                      Contests Won
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {leaderboard.map((user, index) => (
                      <motion.tr
                        key={user._id}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        custom={index}
                        whileHover={{
                          backgroundColor: "rgba(99, 102, 241, 0.05)",
                          scale: 1.01,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        className={`cursor-pointer border-b border-slate-100/50 dark:border-slate-700/30 ${
                          index < 3
                            ? "bg-secondary-o/10 dark:from-indigo-900/20 dark:to-purple-900/20"
                            : ""
                        }`}
                      >
                        <td className="px-6 py-4">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {getRankIcon(index)}
                          </motion.div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <motion.div
                              className="relative"
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <img
                                src={
                                  user.photo ||
                                  "https://i.ibb.co/5GzXkwq/user.png"
                                }
                                alt={user.name}
                                className="h-12 w-12 rounded-full border-2 border-slate-200 object-cover shadow-md dark:border-slate-600"
                                loading="lazy"
                              />
                              {index < 3 && (
                                <motion.div
                                  className="absolute -top-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-gradient-to-br from-yellow-400 to-yellow-600 dark:border-slate-800"
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                />
                              )}
                            </motion.div>
                            <div className="min-w-0 flex-1">
                              <h4 className="truncate font-semibold text-slate-800 dark:text-slate-200">
                                {user.name}
                              </h4>
                              <p className="truncate text-sm text-slate-500 dark:text-slate-400">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <motion.div
                            className="inline-flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <span
                              className={`text-2xl font-bold ${
                                index === 0
                                  ? "text-yellow-600 dark:text-yellow-400"
                                  : index === 1
                                    ? "text-gray-600 dark:text-gray-400"
                                    : index === 2
                                      ? "text-amber-600 dark:text-amber-400"
                                      : "text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {user.wins || 0}
                            </span>
                          </motion.div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {leaderboard.length === 0 && (
              <motion.div
                className="py-16 text-center"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <FaTrophy className="mx-auto mb-4 text-6xl text-slate-300 dark:text-slate-600" />
                <h3 className="mb-2 text-xl font-semibold text-slate-600 dark:text-slate-400">
                  No Champions Yet
                </h3>
                <p className="text-slate-500 dark:text-slate-500">
                  Be the first to win a contest and claim your spot on the
                  leaderboard!
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Leaderboard;
