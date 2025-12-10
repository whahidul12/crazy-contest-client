import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Implement search redirection or logic here
  };

  return (
    <div className="hero bg-base-200 relative min-h-[500px] overflow-hidden">
      {/* Abstract Background Design */}
      <div className="from-primary/10 to-secondary/10 absolute inset-0 z-0 bg-linear-to-r"></div>

      <div className="hero-content text-neutral-content relative z-10 text-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-base-content mb-5 text-5xl font-bold"
          >
            Unleash Your Creativity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base-content mb-5"
          >
            Join the world's leading contest platform. Participate in Design,
            Coding, Writing, and Gaming challenges to win big prizes!
          </motion.p>

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <form
              onSubmit={handleSearch}
              className="join w-full max-w-md shadow-lg"
            >
              <input
                type="text"
                className="input input-bordered join-item w-full text-black"
                placeholder="Search contest types (e.g., Design)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-primary join-item">Search</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
