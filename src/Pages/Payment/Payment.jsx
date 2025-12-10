import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

// Replace with your actual Publishable Key from Stripe Dashboard
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
  const location = useLocation();
  const { contestId, entryFee, contestName } = location.state || {};

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="mb-10 text-center text-3xl font-bold">
        Payment for: {contestName}
      </h2>
      <div className="bg-base-100 mx-auto max-w-md rounded-xl border p-8 shadow-xl">
        <p className="mb-6 text-lg">
          Total Amount:{" "}
          <span className="text-primary font-bold">${entryFee}</span>
        </p>
        <Elements stripe={stripePromise}>
          <CheckoutForm contestId={contestId} price={entryFee} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
