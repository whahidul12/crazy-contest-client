import React from "react";
import { motion } from "framer-motion";
import { FaUserPlus, FaSearch, FaCloudUploadAlt, FaAward } from "react-icons/fa";

const steps = [
  {
    icon: FaUserPlus,
    title: "Create Account",
    desc: "Sign up in seconds and join our community of talented creators from around the world.",
    color: "from-blue-500 to-blue-600",
    delay: 0.1,
  },
  {
    icon: FaSearch,
    title: "Find Contests",
    desc: "Browse hundreds of active contests and find the perfect match for your skills and interests.",
    color: "from-purple-500 to-purple-600",
    delay: 0.2,
  },
  {
    icon: FaCloudUploadAlt,
    title: "Submit Work",
    desc: "Upload your creative entry, code, or design before the deadline and showcase your talent.",
    color: "from-green-500 to-green-600",
    delay: 0.3,
  },
  {
    icon: FaAward,
    title: "Win Prizes",
    desc: "Get judged by industry experts, climb the leaderboard, and claim your well-deserved rewards.",
    color: "from-orange-500 to-orange-600",
    delay: 0.4,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-32 w-32 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-40 w-40 rounded-full bg-gradient-to-r from-green-500/10 to-orange-500/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
        <div className="absolute top-10 right-1/4 h-28 w-28 rounded-full bg-gradient-to-r from-yellow-500/10 to-red-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Start your journey from spectator to champion in four simple steps. 
            Join thousands of creators who have already transformed their passion into profit.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800"
            >
              {/* Background Blur Elements */}
              <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${step.color} opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-20`}></div>
              <div className={`absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-gradient-to-br ${step.color} opacity-5 blur-2xl transition-opacity duration-300 group-hover:opacity-15`}></div>

              <div className="relative z-10">
                {/* Step Number */}
                <div className="mb-6 flex items-center justify-between">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg`}
                  >
                    <step.icon size={24} />
                  </motion.div>
                  <div className="text-6xl font-bold text-gray-100 dark:text-gray-700">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  {step.desc}
                </p>

                {/* Arrow for connection (except last card) */}
                {idx < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: step.delay + 0.5, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-2xl text-gray-300 dark:text-gray-600"
                    >
                      →
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-10`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;