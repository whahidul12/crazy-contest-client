import { useQuery } from "@tanstack/react-query";
import { Link, useParams, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import moment from "moment";
import Countdown from "react-countdown";
import { FaTrophy, FaUsers, FaDollarSign, FaFileAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SubmissionModal from "./SubmissionModal";
import useAuth from "../../Hooks/useAuth";

const ContestDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch contest details
  const {
    data: contest = {},
    isLoading,
    // refetch: refetchContest,
  } = useQuery({
    queryKey: ["contestDetails", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests/${id}`);
      return res.data;
    },
  });

  // Check if the current user has already registered (paid)
  const {
    data: hasRegistered = false,
    isLoading: isCheckingRegistration,
    // refetch: refetchRegistration,
  } = useQuery({
    queryKey: ["userRegistrationStatus", id, user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/participated/check/${id}?email=${user.email}`,
      );
      return res.data.isRegistered;
    },
  });

  // *** NEW: Check if the current user has already submitted the task ***
  const {
    data: hasSubmitted = false,
    isLoading: isCheckingSubmission,
    refetch: refetchSubmissionStatus, // <-- Added refetch for status update
  } = useQuery({
    queryKey: ["userSubmissionStatus", id, user?.email],
    // Only check if they are registered and not checking registration status
    enabled: !!user?.email && hasRegistered,
    queryFn: async () => {
      // You will need to implement a new backend endpoint for this check.
      // For now, let's assume one exists at `/submissions/check/:contestId`
      const res = await axiosSecure.get(
        `/submissions/check/${id}?email=${user.email}`,
      );
      return res.data.hasSubmitted;
    },
  });

  const deadline = moment(contest.deadline);
  const isContestEnded = moment().isAfter(deadline);

  // Renderer for the countdown timer
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <span className="badge badge-error p-3 text-xl font-bold text-white">
          Contest Ended
        </span>
      );
    } else {
      return (
        <div className="flex gap-2">
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": days }}></span>
          </span>
          days
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": hours }}></span>
          </span>
          hrs
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": minutes }}></span>
          </span>
          min
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": seconds }}></span>
          </span>
          sec
        </div>
      );
    }
  };

  // *** UPDATED isLoading check ***
  if (isLoading || isCheckingRegistration || isCheckingSubmission)
    return (
      <div className="py-20 text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  const handleRegisterClick = () => {
    if (hasRegistered) {
      Swal.fire({
        icon: "info",
        title: "Already Registered",
        text: "You have already paid and registered for this contest.",
      });
      return;
    }

    // Redirect to payment page
    // You will implement the Payment component in Part 3

    // Prepare state for payment redirection (Crucial for successful payment callback)
    const paymentData = {
      contestId: contest._id,
      entryFee: contest.price,
      contestName: contest.name,
      participantEmail: user.email,
    };

    Swal.fire({
      title: "Proceed to Payment?",
      text: `Entry Fee: $${contest.price}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Pay Now",
    }).then((result) => {
      if (result.isConfirmed) {
        // Navigate to the payment route, passing data via state
        navigate(`/payment/${contest._id}`, { state: paymentData });
      }
    });
  };

  const handleTaskSubmission = (submissionLink) => {
    // Handle submission logic (POST to backend)
    const submissionInfo = {
      contestId: id,
      contestName: contest.name,
      participantEmail: user.email,
      submissionLink: submissionLink,
      submissionTime: moment().toISOString(),
      contestDeadline: contest.deadline,
      status: "Submitted",
    };

    axiosSecure
      .post("/submissions", submissionInfo)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Task Submitted!",
            text: "Your submission has been recorded.",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsSubmissionModalOpen(false);
          // *** Crucial Step: Refetch the submission status after successful submission ***
          refetchSubmissionStatus();
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Failed to submit task.", "error");
      });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <Helmet>
        <title>ContestHub | {contest.name}</title>
      </Helmet>

      <motion.div
        className="bg-base-100 rounded-xl p-6 shadow-2xl lg:p-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column: Image and Main Info */}
          <div className="lg:col-span-2">
            <img
              src={contest.image}
              alt={contest.name}
              className="mb-6 max-h-[500px] w-full rounded-lg object-cover"
            />
            <h1 className="text-primary mb-3 text-5xl font-extrabold">
              {contest.name}
            </h1>
            <p className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
              Type: {contest.type}
            </p>

            <div className="mb-6 flex flex-wrap items-center gap-6 border-y py-4 dark:border-gray-700">
              <p className="flex items-center gap-2 text-xl font-bold text-green-600">
                <FaDollarSign /> Prize Pool: ${contest.prizeMoney}
              </p>
              <p className="flex items-center gap-2 text-xl">
                <FaUsers /> Participants: {contest.participantsCount}
              </p>
              <div className="flex items-center gap-2 text-xl">
                Deadline:
                <Countdown date={deadline.toDate()} renderer={renderer} />
              </div>
            </div>

            {/* Winner Info (Shown only after winner is declared) */}
            {contest.winner && (
              <motion.div
                className="alert alert-success mt-6 shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <FaTrophy className="text-3xl" />
                <div>
                  <h3 className="text-lg font-bold">CONGRATULATIONS!</h3>
                  <p className="text-sm">
                    Winner: **{contest.winner.name}** ({contest.winner.email})
                  </p>
                  {contest.winner.photo && (
                    <img
                      src={contest.winner.photo}
                      alt="Winner"
                      className="mt-2 h-10 w-10 rounded-full"
                    />
                  )}
                </div>
              </motion.div>
            )}

            <h2 className="mt-8 mb-4 text-3xl font-bold">
              Contest Description
            </h2>
            <p className="whitespace-pre-line text-gray-700 dark:text-gray-400">
              {contest.description}
            </p>

            <h2 className="mt-8 mb-4 flex items-center gap-2 text-3xl font-bold">
              <FaFileAlt /> Task Details
            </h2>
            <div className="bg-base-200 rounded-lg border border-dashed border-gray-400 p-4">
              <p className="whitespace-pre-line">{contest.taskInstruction}</p>
            </div>
          </div>

          {/* Right Column: Actions */}
          <div className="bg-base-200 sticky top-20 h-fit rounded-lg p-6 shadow-inner lg:col-span-1">
            <h2 className="mb-4 border-b pb-2 text-2xl font-bold">Actions</h2>

            {/* 1. Register Button */}
            <button
              onClick={handleRegisterClick}
              className="btn btn-primary btn-block mb-4 text-lg"
              disabled={isContestEnded || hasRegistered}
            >
              {isContestEnded
                ? "Contest Ended"
                : hasRegistered
                  ? "Already Paid"
                  : `Register / Pay $${contest.price}`}
            </button>

            {/* 2. Submit Task Button (Visible only after payment and if contest is not ended) */}
            {hasRegistered && !isContestEnded && (
              <button
                onClick={() => {
                  if (hasSubmitted) {
                    Swal.fire({
                      icon: "info",
                      title: "Already Submitted",
                      text: "You have already submitted your task for this contest.",
                    });
                    return;
                  }
                  setIsSubmissionModalOpen(true);
                }}
                className="btn btn-secondary btn-block text-lg"
                // *** IMPORTANT: Add the disabled attribute here ***
                disabled={hasSubmitted}
              >
                {/* *** Update button text based on status *** */}
                {hasSubmitted ? "Task Submitted" : "Submit Task"}
              </button>
            )}
            {/* 3. Status Display */}
            {isContestEnded && (
              <p className="text-error mt-4 text-center font-bold">
                This contest has ended.
              </p>
            )}

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Contest Created by: {contest.creatorName || "Unknown"}</p>
              <p>
                Created on: {moment(contest.creationDate).format("MMM D, YYYY")}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Submission Modal */}
      <SubmissionModal
        isOpen={isSubmissionModalOpen}
        onClose={() => setIsSubmissionModalOpen(false)}
        onSubmit={handleTaskSubmission}
      />
    </div>
  );
};

export default ContestDetails;
