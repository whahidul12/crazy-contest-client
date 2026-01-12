import React from "react";
import { motion } from "framer-motion";
import { 
  FaShieldAlt, 
  FaBolt, 
  FaUsers, 
  FaDollarSign, 
  FaAward, 
  FaHeadset 
} from "react-icons/fa";

const features = [
  {
    icon: FaShieldAlt,
    title: "Secure & Trusted",
    description: "Your work is protected with enterprise-grade security. We ensure fair judging and secure payments every time.",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-500/10 to-blue-600/10",
    delay: 0.1,
  },
  {
    icon: FaBolt,
    title: "Lightning Fast",
    description: "Quick contest discovery, instant submissions, and rapid results. Get paid within 24 hours of winning.",
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-500/10 to-orange-500/10",
    delay: 0.2,
  },
  {
    icon: FaUsers,
    title: "Global Community",
    description: "Connect with 50,000+ creators worldwide. Learn, collaborate, and grow together in our supportive ecosystem.",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
    delay: 0.3,
  },
  {
    icon: FaDollarSign,
    title: "High Rewards",
    description: "Competitive prize pools with guaranteed payouts. Over $2.5M distributed to creators in the past year alone.",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-500/10 to-emerald-500/10",
    delay: 0.4,
  },
  {
    icon: FaAward,
    title: "Expert Judging",
    description: "Industry professionals and experienced creators evaluate your work with detailed, constructive feedback.",
    color: "from-red-500 to-pink-500",
    bgColor: "from-red-500/10 to-pink-500/10",
    delay: 0.5,
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    description: "Our dedicated support team is always here to help. Get assistance whenever you need it, day or night.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-500/10 to-purple-500/10",
    delay: 0.6,
  },
];

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

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
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

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-gradient-to-r from-green-500/10 to-yellow-500/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 h-28 w-28 rounded-full bg-gradient-to-r from-pink-500/10 to-red-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 h-36 w-36 rounded-full bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 blur-3xl"></div>
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 text-sm font-semibold text-blue-800 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-200"
          >
            ✨ Why Choose Crazy Contest
          </motion.div>
          
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            The Platform That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Powers Success
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Discover why thousands of creators choose our platform to showcase their talent, 
            build their careers, and earn substantial rewards.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800"
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}></div>
              
              {/* Floating Background Elements */}
              <div className={`absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br ${feature.color} opacity-10 blur-2xl transition-all duration-300 group-hover:opacity-20 group-hover:scale-110`}></div>
              <div className={`absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-gradient-to-br ${feature.color} opacity-5 blur-2xl transition-all duration-300 group-hover:opacity-15 group-hover:scale-110`}></div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}
                >
                  <feature.icon size={24} />
                </motion.div>

                {/* Content */}
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-4 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400"
                >
                  Learn more →
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-10`}></div>
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
          <div className="mb-6">
            <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
              Ready to Join the Winners?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Start your journey today and discover why we're the #1 choice for creators worldwide.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Start Competing Now
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-xl border-2 border-gray-300 bg-white px-8 py-4 text-lg font-bold text-gray-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;