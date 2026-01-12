import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaBell,
  FaGift,
  FaStar,
} from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [msg, setMsg] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus("error");
      setMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setMsg("Welcome to the community! Check your inbox for exclusive content.");
      setEmail("");
    }, 1500);
  };

  const benefits = [
    { icon: FaBell, text: "Early contest notifications" },
    { icon: FaGift, text: "Exclusive bonus rewards" },
    { icon: FaStar, text: "Pro tips from winners" },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-gradient-to-r from-pink-500/20 to-red-500/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 h-28 w-28 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-1 shadow-2xl"
        >
          {/* Inner Container */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 px-8 py-16 sm:px-12 lg:px-20">
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 rounded-full bg-white/5 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl"></div>

            <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row">
              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center text-white lg:w-1/2 lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="mb-4 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm"
                >
                  🎉 Join 50,000+ Creators
                </motion.div>

                <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                  Don't Miss the Next{" "}
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Big Win
                  </span>
                </h2>
                
                <p className="mb-6 text-lg text-blue-100 sm:text-xl">
                  Get exclusive access to high-paying contests, insider tips from top winners, 
                  and be the first to know about new opportunities.
                </p>

                {/* Benefits */}
                <div className="mb-8 space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-blue-100"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                        <benefit.icon size={14} />
                      </div>
                      <span className="font-medium">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Form Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full max-w-md lg:w-1/2"
              >
                <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === "error") setStatus("idle");
                        }}
                        disabled={status === "success" || status === "loading"}
                        placeholder="Enter your email address"
                        className={`w-full rounded-xl border-0 bg-white px-6 py-4 text-gray-900 placeholder-gray-500 shadow-lg transition-all focus:ring-4 focus:outline-none ${
                          status === "error"
                            ? "ring-2 ring-red-500 focus:ring-red-400"
                            : "focus:ring-white/50"
                        }`}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === "success" || status === "loading"}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          <span>Subscribing...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span>Get Exclusive Access</span>
                          <FaPaperPlane className="transition-transform group-hover:translate-x-1" />
                        </div>
                      )}
                    </motion.button>

                    {/* Feedback Messages */}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 rounded-lg bg-red-500/20 p-3 text-sm font-semibold text-red-100"
                      >
                        <FaExclamationCircle /> {msg}
                      </motion.div>
                    )}
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 rounded-lg bg-green-500/20 p-3 text-sm font-bold text-green-100"
                      >
                        <FaCheckCircle /> {msg}
                      </motion.div>
                    )}
                  </form>

                  <p className="mt-4 text-center text-xs text-blue-200">
                    No spam, unsubscribe at any time. We respect your privacy.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 right-20 hidden lg:block"
            >
              <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                <FaBell className="text-2xl text-white" />
              </div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-20 left-20 hidden lg:block"
            >
              <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                <FaGift className="text-2xl text-white" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;