import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaPenNib,
  FaCamera,
  FaChartLine,
  FaGamepad,
} from "react-icons/fa";

const categories = [
  { name: "Web Development", icon: FaCode, color: "bg-blue-500" },
  { name: "Graphic Design", icon: FaPaintBrush, color: "bg-pink-500" },
  { name: "Content Writing", icon: FaPenNib, color: "bg-yellow-500" },
  { name: "Photography", icon: FaCamera, color: "bg-purple-500" },
  { name: "Digital Marketing", icon: FaChartLine, color: "bg-green-500" },
  { name: "Game Dev", icon: FaGamepad, color: "bg-red-500" },
];

const Categories = () => {
  return (
    <section>
      <h2 className="text-primary-dark dark:text-primary-light mb-10 text-center text-3xl font-bold">
        Explore Categories
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="group dark:bg-card-dark hover:border-secondary-o flex cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 dark:border-gray-700"
          >
            <div
              className={`mb-3 rounded-full p-3 text-white ${cat.color} bg-opacity-90 transition-transform group-hover:scale-110`}
            >
              <cat.icon size={20} />
            </div>
            <span className="text-center text-sm font-semibold text-gray-700 dark:text-gray-200">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
