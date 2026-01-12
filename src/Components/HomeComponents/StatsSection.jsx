import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaUsers,
  FaTrophy,
  FaGlobeAmericas,
  FaProjectDiagram,
} from "react-icons/fa";

const stats = [
  { id: 1, icon: FaUsers, count: "50k+", label: "Active Creators" },
  { id: 2, icon: FaTrophy, count: "$1M+", label: "Prizes Awarded" },
  { id: 3, icon: FaGlobeAmericas, count: "120+", label: "Countries" },
  {
    id: 4,
    icon: FaProjectDiagram,
    count: "5,000+",
    label: "Completed Contests",
  },
];

const StatsSection = () => {
  return (
    <div className="bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 p-8 shadow-xl dark:border-gray-700">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center space-y-2 text-center"
          >
            <stat.icon className="text-secondary-o mb-2 text-4xl" />
            <h3 className="text-primary-dark dark:text-primary-light text-3xl font-bold">
              {stat.count}
            </h3>
            <p className="text-sm font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
