import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaUserPlus, FaCloudUploadAlt, FaAward } from "react-icons/fa";

const steps = [
  {
    icon: FaUserPlus,
    title: "1. Join a Contest",
    desc: "Browse hundreds of active contests and find the one that matches your skills.",
  },
  {
    icon: FaCloudUploadAlt,
    title: "2. Submit Work",
    desc: "Upload your design, code, or creative entry before the deadline hits.",
  },
  {
    icon: FaAward,
    title: "3. Win Prizes",
    desc: "Get judged by experts, climb the leaderboard, and claim your cash reward.",
  },
];

const HowItWorks = () => {
  return (
    <section>
      <div className="mb-12 text-center">
        <h2 className="text-secondary-c mb-4 text-3xl font-bold md:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
          Start your journey from spectator to champion in three simple steps.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-base-100 dark:bg-card-dark relative overflow-hidden rounded-2xl border border-gray-200 p-8 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-gray-700"
          >
            <div className="bg-secondary-c/10 absolute -top-4 -right-4 h-24 w-24 rounded-full blur-2xl"></div>
            <div className="bg-secondary-c/10 text-secondary-c mb-6 inline-block rounded-full p-4">
              <step.icon size={32} />
            </div>
            <h3 className="text-primary-dark dark:text-primary-light mb-3 text-xl font-bold">
              {step.title}
            </h3>
            <p className="leading-relaxed text-gray-500 dark:text-gray-400">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
