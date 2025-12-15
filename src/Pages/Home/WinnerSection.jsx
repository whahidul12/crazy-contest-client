// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const WinnerSection = () => {
  return (
    <div className="hero bg-secondary-c mx-auto my-16 min-h-[400px] w-11/12 overflow-hidden rounded-xl lg:w-full">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.img
          src="https://img.freepik.com/free-vector/winners-concept-illustration_114360-128.jpg"
          className="w-4/5 rounded-lg shadow-2xl sm:max-w-sm"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-xl font-bold sm:text-5xl">
            Become the Next Winner!
          </h1>
          <p className="py-6 text-sm sm:text-lg">
            Over <span className="text-secondary-o font-bold">$100,000</span>{" "}
            distributed in prizes this month alone. Join our community of
            creators and showcase your talent to the world.
          </p>
          <button className="btn bg-secondary-o border-none">
            Confusion Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default WinnerSection;
