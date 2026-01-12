import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaDollarSign, FaUsers, FaArrowRight } from "react-icons/fa";

const WinnerSection = () => {
  const stats = [
    { icon: FaDollarSign, value: "$2.5M+", label: "Total Prizes Awarded" },
    { icon: FaUsers, value: "50K+", label: "Active Creators" },
    { icon: FaTrophy, value: "1,200+", label: "Contests Completed" },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 h-24 w-24 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 text-sm font-semibold text-orange-800 dark:from-yellow-900/30 dark:to-orange-900/30 dark:text-orange-200"
              >
                <FaTrophy className="mr-2" />
                Join the Winners Circle
              </motion.div>

              <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                Become the Next{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Champion
                </span>
              </h1>

              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl">
                Join a thriving community where talent meets opportunity. Over{" "}
                <span className="font-bold text-orange-600 dark:text-orange-400">
                  $100,000
                </span>{" "}
                distributed in prizes this month alone. Showcase your skills, compete with the best, and turn your creativity into cash.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                    <stat.icon size={20} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Start Competing
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-xl border-2 border-gray-300 bg-white px-8 py-4 text-lg font-bold text-gray-700 transition-all duration-300 hover:border-orange-500 hover:text-orange-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-orange-400 dark:hover:text-orange-400"
              >
                View Winners
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src="https://img.freepik.com/free-vector/winners-concept-illustration_114360-128.jpg"
                  alt="Winners celebration"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-sm dark:bg-gray-800/90"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                    <FaTrophy size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      Contest Winner
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      $5,000 Prize
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-sm dark:bg-gray-800/90"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-bold text-gray-600 uppercase dark:text-gray-400">
                      Live Contest
                    </span>
                  </div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">
                    234 Participants
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WinnerSection;