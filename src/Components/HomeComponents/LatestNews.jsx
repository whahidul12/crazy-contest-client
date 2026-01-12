import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "Top 10 Design Trends for 2026",
    category: "Design",
    date: "Jan 10, 2026",
    image:
      "https://img.freepik.com/free-photo/graphic-design-men-working_23-2148432367.jpg",
    excerpt:
      "From neo-brutalism to AI-assisted layouts, discover what's dominating the creative industry this year.",
  },
  {
    id: 2,
    title: "How to Win Your First Coding Hackathon",
    category: "Development",
    date: "Jan 05, 2026",
    image:
      "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
    excerpt:
      "Strategies for time management, team formation, and presenting your MVP effectively to judges.",
  },
  {
    id: 3,
    title: "New Payment Methods Added: Crypto & Wise",
    category: "Platform Update",
    date: "Dec 28, 2025",
    image:
      "https://img.freepik.com/free-photo/coins-paper-money-globe-white-statistic-form_1387-296.jpg",
    excerpt:
      "We've expanded our payout options to ensure creators from over 150 countries can get paid instantly.",
  },
];

const LatestNews = () => {
  return (
    <section>
      <div className="mb-10 flex flex-col items-end justify-between gap-4 md:flex-row">
        <div className="text-left">
          <h2 className="text-secondary-c dark:text-primary-light mb-2 text-3xl font-bold">
            Latest News & Insights
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Stay updated with platform announcements and industry tips.
          </p>
        </div>
        <Link
          to="/blog"
          className="btn btn-outline border-secondary-o text-secondary-o hover:bg-secondary-o hover:border-secondary-o hover:text-white"
        >
          View All Posts
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {newsItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -8 }}
            className="card bg-base-100 dark:bg-card-dark group overflow-hidden border border-gray-100 shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-gray-700"
          >
            <figure className="relative h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="badge bg-secondary-o absolute top-4 left-4 border-none p-3 font-semibold text-white">
                {item.category}
              </div>
            </figure>
            <div className="card-body p-6">
              <div className="mb-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <FaCalendarAlt />
                <span>{item.date}</span>
              </div>
              <h3 className="card-title text-primary-dark dark:text-primary-light group-hover:text-secondary-c mb-2 text-xl font-bold transition-colors">
                {item.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {item.excerpt}
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/blog/${item.id}`}
                  className="text-secondary-c flex items-center gap-2 font-bold hover:underline"
                >
                  Read More <FaArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
