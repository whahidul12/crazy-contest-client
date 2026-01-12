import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaPenNib,
  FaCamera,
  FaChartLine,
  FaGamepad,
  FaMobile,
  FaVideo,
} from "react-icons/fa";

const categories = [
  { 
    name: "Web Development", 
    icon: FaCode, 
    color: "from-blue-500 to-blue-600",
    description: "Build responsive websites and web applications",
    count: "150+ contests"
  },
  { 
    name: "Graphic Design", 
    icon: FaPaintBrush, 
    color: "from-pink-500 to-pink-600",
    description: "Create stunning visual designs and branding",
    count: "200+ contests"
  },
  { 
    name: "Content Writing", 
    icon: FaPenNib, 
    color: "from-yellow-500 to-yellow-600",
    description: "Craft compelling copy and engaging content",
    count: "120+ contests"
  },
  { 
    name: "Photography", 
    icon: FaCamera, 
    color: "from-purple-500 to-purple-600",
    description: "Capture moments and tell visual stories",
    count: "80+ contests"
  },
  { 
    name: "Digital Marketing", 
    icon: FaChartLine, 
    color: "from-green-500 to-green-600",
    description: "Drive growth through strategic campaigns",
    count: "90+ contests"
  },
  { 
    name: "Game Development", 
    icon: FaGamepad, 
    color: "from-red-500 to-red-600",
    description: "Create immersive gaming experiences",
    count: "60+ contests"
  },
  { 
    name: "Mobile Apps", 
    icon: FaMobile, 
    color: "from-indigo-500 to-indigo-600",
    description: "Develop innovative mobile solutions",
    count: "110+ contests"
  },
  { 
    name: "Video Production", 
    icon: FaVideo, 
    color: "from-teal-500 to-teal-600",
    description: "Produce engaging video content",
    count: "70+ contests"
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

const Categories = () => {
  return (
    <section className="relative py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-primary-dark dark:text-primary-light mb-4 text-4xl font-bold md:text-5xl">
            Explore Categories
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Discover your passion and showcase your skills across diverse creative and technical domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}></div>
              
              {/* Floating Background Elements */}
              <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-xl"></div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
                >
                  <category.icon size={24} />
                </motion.div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-100">
                  {category.name}
                </h3>
                <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {category.count}
                  </span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-sm font-semibold text-blue-600 dark:text-blue-400"
                  >
                    Explore →
                  </motion.div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;