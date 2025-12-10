import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaLock, FaCreditCard } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useCallback, useEffect } from "react"; // <-- Import useEffect as well

const Payment = () => {
  // --- 1. CALL ALL HOOKS UNCONDITIONALLY AT THE TOP ---
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Retrieve data passed from ContestDetails (this is just reading a variable)
  const paymentData = location.state;

  // --- 2. Define Callbacks/Handlers unconditionally ---

  // Define onSubmit handler using useCallback unconditionally
  const onSubmit = useCallback(() => {
    // This runs only when the form is submitted
    const participationInfo = {
      contestId: paymentData.contestId,
      contestName: paymentData.contestName,
      entryFee: paymentData.entryFee,
      participantEmail: paymentData.participantEmail,
      transactionId: `MOCK_TX_${Date.now()}`,
      paymentDate: new Date().toISOString(),
      deadline: paymentData.deadline,
    };

    axiosSecure
      .post("/participated", participationInfo)
      .then((res) => {
        if (res.data.insertedId || res.data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Payment Successful!",
            text: `You have successfully registered for ${paymentData.contestName}.`,
            showConfirmButton: false,
            timer: 2500,
          });
          navigate(`/contest/${paymentData.contestId}`, { replace: true });
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire(
          "Error",
          "Payment recorded, but failed to update participation status. Please contact support.",
          "error",
        );
      });
  }, [axiosSecure, navigate, paymentData]);

  // --- 3. Use useEffect for side effects or conditional logic that runs *after* render ---

  // Use useEffect to handle the navigation/error condition cleanly
  useEffect(() => {
    if (!paymentData || paymentData.contestId !== id) {
      Swal.fire(
        "Error",
        "Invalid payment session. Please start registration again.",
        "error",
      );
      // Navigate after the component has rendered and mounted
      navigate(`/contest/${id}`);
    }
  }, [paymentData, id, navigate]);
  // Note: The component will briefly render null or the UI with invalid data before useEffect runs and redirects.

  // --- 4. Render based on state/data availability ---

  // We can conditionally render *after* all hooks have been called.
  // Since we use useEffect to handle the redirect, if we reach the return statement,
  // we assume paymentData is valid (or the redirect is pending).

  // If you prefer to block rendering entirely while the redirect happens:
  if (!paymentData || paymentData.contestId !== id) {
    return <div className="py-20 text-center">Redirecting...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <Helmet>
        <title>ContestHub | Payment</title>
      </Helmet>
      <div className="bg-base-100 mx-auto max-w-xl rounded-xl p-8 shadow-2xl">
        <h1 className="text-primary mb-6 flex items-center justify-center gap-2 text-center text-3xl font-bold">
          <FaCreditCard /> Complete Registration Payment
        </h1>

        <div className="alert alert-warning mb-6">
          <FaLock />
          <span>
            This is a secure mock payment gateway. No real transaction will
            occur.
          </span>
        </div>

        <div className="bg-base-200 mb-6 rounded-lg border p-4">
          <p className="text-xl font-semibold">
            Contest: {paymentData.contestName}
          </p>
          <p className="text-2xl font-extrabold text-green-600">
            Total Due: ${paymentData.entryFee.toFixed(2)}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Card Number */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Card Number (Mock)</span>
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="input input-bordered"
              {...register("cardNumber", {
                required: true,
                pattern: /^\d{16}$/,
              })}
            />
            {errors.cardNumber && (
              <span className="text-sm text-red-500">
                Valid 16-digit number required.
              </span>
            )}
          </div>

          {/* Expiry and CVC */}
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Expiry Date (MM/YY)</span>
              </label>
              <input
                type="text"
                placeholder="01/28"
                className="input input-bordered"
                {...register("expiry", { required: true })}
              />
              {errors.expiry && (
                <span className="text-sm text-red-500">Required.</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">CVC</span>
              </label>
              <input
                type="text"
                placeholder="123"
                className="input input-bordered"
                {...register("cvc", { required: true, pattern: /^\d{3,4}$/ })}
              />
              {errors.cvc && (
                <span className="text-sm text-red-500">
                  Valid 3-4 digit CVC required.
                </span>
              )}
            </div>
          </div>

          <div className="form-control pt-4">
            <button type="submit" className="btn btn-primary btn-lg">
              Pay ${paymentData.entryFee.toFixed(2)}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
