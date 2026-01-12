import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    quote:
      "ContestHub completely launched my career. I won my first design challenge here and got hired by a top agency the next week!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    quote:
      "The code review process is incredibly fair. Unlike other platforms, I actually get feedback on my submissions. Highly recommended.",
  },
  {
    id: 3,
    name: "Amara Okonjo",
    role: "Digital Marketer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    quote:
      "I love the variety of contests available. It's a great way to build a portfolio and earn some extra income on the side.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-10">
      <div className="mb-12 text-center">
        <h2 className="text-secondary-c dark:text-primary-light mb-4 text-3xl font-bold">
          Trusted by Creators
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
          Join a community where talent is recognized and rewarded. Here's what
          our winners have to say.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="dark:bg-card-dark border-secondary-o relative flex flex-col justify-between rounded-2xl border-t-4 bg-white p-8 shadow-lg"
          >
            <FaQuoteLeft className="absolute top-4 right-4 text-4xl text-gray-100 dark:text-gray-700" />

            <div className="mb-6">
              <div className="mb-4 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < item.rating ? "fill-current" : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <p className="relative z-10 leading-relaxed text-gray-600 italic dark:text-gray-300">
                "{item.quote}"
              </p>
            </div>

            <div className="mt-auto flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="border-secondary-c h-12 w-12 rounded-full border-2 object-cover"
              />
              <div>
                <h4 className="text-primary-dark dark:text-primary-light font-bold">
                  {item.name}
                </h4>
                <p className="text-xs tracking-wide text-gray-500 uppercase">
                  {item.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
