// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const WinnerSection = () => {
  return (
    <div className="hero bg-base-200 my-16 min-h-[400px] overflow-hidden rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.img
          src="https://img.freepik.com/free-vector/winners-concept-illustration_114360-128.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold">Become the Next Winner!</h1>
          <p className="py-6 text-lg">
            Over <span className="text-primary font-bold">$100,000</span>{" "}
            distributed in prizes this month alone. Join our community of
            creators and showcase your talent to the world.
          </p>
          <button className="btn btn-primary">Join Now</button>
        </motion.div>
      </div>
    </div>
  );
};

export default WinnerSection;
