import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the state passed from the PaymentSuccessHandler
  const { state } = location;

  // Fallback path if the 'from' state is not set (should not happen if handled correctly)
  const returnPath = state?.from || "/contests";

  const handleReturnClick = () => {
    // Option 1: Go back to the previous page in history (most accurate)
    // navigate(-1);

    // Option 2: Navigate directly to the stored path (more reliable when coming from external redirects)
    navigate(returnPath, { replace: true });
  };

  return (
    <div className="bg-primary-light dark:bg-primary-dark flex min-h-screen flex-col items-center justify-center p-4">
      <motion.div
        className="w-full max-w-lg rounded-xl bg-white p-10 text-center shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FaCheckCircle className="text-success mx-auto mb-6 text-6xl" />
        <h1 className="mb-3 text-4xl font-extrabold text-green-600">
          Payment Successful!
        </h1>
        <p className="mb-6 text-lg text-gray-700">
          Thank you for registering. You can now submit your task.
        </p>

        <div className="bg-base-200 mb-8 rounded-lg p-4 text-left">
          <p className="font-semibold">Transaction Details:</p>
          <p className="text-sm wrap-break-word">
            **Contest ID:** {state?.contestId || "N/A"}
          </p>
          <p className="text-sm wrap-break-word">
            **Transaction ID:** {state?.transactionId || "N/A"}
          </p>
        </div>

        <button
          className="btn bg-secondary-o btn-lg w-full border-none"
          onClick={handleReturnClick}
        >
          Go Back to Contest Details
        </button>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
