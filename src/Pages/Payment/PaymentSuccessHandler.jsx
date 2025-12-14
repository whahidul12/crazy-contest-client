import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure"; // Assuming this path is correct

const PaymentSuccessHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sessionId = params.get("session_id"); // e.g., cs_...
    // *** CRUCIAL: Get the original product URL passed from your backend ***
    const originalProductPath = params.get("return_to"); // e.g., /product/contest-id-123

    if (sessionId) {
      // Call the new backend endpoint to verify the payment and finalize participation
      axiosSecure
        .post("/verify-payment", { sessionId: sessionId })
        .then((res) => {
          setLoading(false);

          const { status, paymentIntentId, contestId } = res.data;

          if (status === "succeeded" && paymentIntentId) {
            // Success: Redirect to the clean success page
            navigate("/payment-success", {
              replace: true, // Prevents user from landing back here with the browser back button
              state: {
                // Pass the path back to the final success page
                from: originalProductPath || "/contests",
                transactionId: paymentIntentId,
                contestId: contestId,
              },
            });
          } else {
            // Failure or not succeeded
            // Navigate to a dedicated failure page
            navigate("/payment-failure", { replace: true });
          }
        })
        .catch((error) => {
          console.error("Payment verification failed:", error);
          setLoading(false);
          navigate("/payment-failure", { replace: true });
        });
    } else {
      // No session ID, redirect to home or products
      // setLoading(false);
      navigate("/", { replace: true });
    }
  }, [navigate, location.search, axiosSecure, loading]);

  return (
    <div className="bg-base-100 flex min-h-screen flex-col items-center justify-center">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <h2 className="mt-4 text-xl font-semibold">Confirming Payment...</h2>
      <p className="text-gray-500">
        Please wait while we verify your transaction with Stripe.
      </p>
    </div>
  );
};

export default PaymentSuccessHandler;
