import React, { useState } from "react";
import {
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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
      setMsg("Welcome to the community! Check your inbox.");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="from-secondary-c relative overflow-hidden rounded-3xl bg-linear-to-r to-cyan-800 px-6 py-16 shadow-2xl sm:px-12 lg:px-20">
      <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
        <div className="text-white lg:w-1/2">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Don't Miss the Next Big Win
          </h2>
          <p className="text-lg text-cyan-100">
            Join 50,000+ creators receiving the best contests, tips, and winner
            announcements directly in their inbox.
          </p>
        </div>

        <div className="w-full max-w-md lg:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
                className={`w-full rounded-xl px-5 py-4 text-gray-900 transition-all focus:ring-4 focus:outline-none ${
                  status === "error"
                    ? "border-2 border-red-500 focus:ring-red-400"
                    : "focus:ring-cyan-300/50"
                }`}
              />
              <button
                type="submit"
                disabled={status === "success" || status === "loading"}
                className="bg-secondary-o absolute top-2 right-2 bottom-2 flex min-w-[60px] items-center justify-center rounded-lg px-6 font-bold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  <FaPaperPlane />
                )}
              </button>
            </div>

            {/* Feedback Messages */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm font-semibold text-red-200"
              >
                <FaExclamationCircle /> {msg}
              </motion.div>
            )}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm font-bold text-green-200"
              >
                <FaCheckCircle /> {msg}
              </motion.div>
            )}
          </form>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
      <div className="bg-secondary-o/20 absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Newsletter;
