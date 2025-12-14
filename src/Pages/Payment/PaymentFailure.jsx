import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTimesCircle, FaRedo, FaHome } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

/**
 * Payment Failure Page Component
 * Displays an error message and suggests clear next steps to the user.
 */
const PaymentFailure = () => {
  const navigate = useNavigate();

  // The payment failure handler should ideally redirect the user
  // to the product page where they started, so we use navigate(-1).
  const handleTryAgain = () => {
    // Go back one step in history, which should be the ContestDetails page
    navigate(-1);
  };

  const handleGoHome = () => {
    // Go to the main contest listing or home page
    navigate("/all-contests");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <motion.div
        className="w-full max-w-lg rounded-xl border-t-4 border-red-500 bg-white p-10 text-center shadow-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaTimesCircle className="mx-auto mb-6 text-7xl text-red-500" />

        <h1 className="mb-3 text-4xl font-extrabold text-gray-800">
          Payment Failed
        </h1>

        <p className="mb-8 text-lg text-gray-600">
          We were unable to process your payment. Please check your card details
          or try a different method.
        </p>

        <div
          className="mb-8 border-l-4 border-red-400 bg-red-50 p-4 text-red-700"
          role="alert"
        >
          <p className="font-semibold">What went wrong?</p>
          <ul className="mt-2 list-inside list-disc text-left text-sm">
            <li>The card was declined by your bank.</li>
            <li>The card details (number, expiry, CVC) were incorrect.</li>
            <li>There were insufficient funds.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <button
            className="btn btn-warning btn-lg flex w-full items-center justify-center"
            onClick={handleTryAgain}
          >
            <FaRedo className="mr-2" />
            Try Registering Again
          </button>

          <button
            className="btn btn-outline btn-neutral flex w-full items-center justify-center"
            onClick={handleGoHome}
          >
            <FaHome className="mr-2" />
            Go to Contest Listings
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentFailure;
