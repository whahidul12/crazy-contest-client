import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaCheck, FaTrash, FaTimes } from "react-icons/fa";
import moment from "moment";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 10; // Required pagination limit

const ManageContests = () => {
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch contests with pagination parameters
  const {
    data: contestData = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allContestsAdmin", currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/contests/all?page=${currentPage}&limit=${ITEMS_PER_PAGE}`,
      );
      return res.data; // Expected structure: { contests: [...], totalCount: 100 }
    },
  });
  console.log(">>>", contestData);
  const contests = contestData.contests || [];
  const totalCount = contestData.totalCount || 0;
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  if (isLoading)
    return <span className="loading loading-spinner loading-lg"></span>;

  const handleAction = (id, action) => {
    Swal.fire({
      title: `Confirm ${action}?`,
      text: `Are you sure you want to ${action} this contest?`,
      icon: action === "Delete" ? "warning" : "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${action} it!`,
    }).then((result) => {
      if (result.isConfirmed) {
        let promise;
        if (action === "Confirm" || action === "Reject") {
          promise = axiosSecure.patch(`/contests/status/${id}`, {
            status: action === "Confirm" ? "Confirmed" : "Rejected",
          });
        } else if (action === "Delete") {
          promise = axiosSecure.delete(`/contests/${id}`);
        }

        promise
          .then((res) => {
            if (res.data.modifiedCount > 0 || res.data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Success!",
                `Contest ${action}ed successfully.`,
                "success",
              );
            } else {
              Swal.fire("Error", `Failed to ${action} contest.`, "error");
            }
          })
          .catch((error) => {
            Swal.fire(
              "Error",
              error.message || `Failed to perform ${action}.`,
              "error",
            );
          });
      }
    });
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`btn btn-sm ${currentPage === i ? "btn-primary" : "btn-outline"}`}
        >
          {i}
        </button>,
      );
    }
    return buttons;
  };

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">
        Manage Contests ({totalCount})
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Creator</th>
              <th>View Details</th>
              <th>Deadline</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contests.map((contest, index) => (
              <tr key={contest._id}>
                <th>{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</th>
                <td>{contest.name}</td>
                <td>{contest.creatorEmail}</td>
                <td>
                  <Link
                    to={`/contests/${contest._id}`}
                    target="_blank"
                    className="btn btn-xs btn-info text-white"
                  >
                    View
                  </Link>
                </td>
                <td>{moment(contest.deadline).format("MMM Do YYYY")}</td>
                <td>
                  <span
                    className={`badge ${contest.status === "Confirmed" ? "badge-success" : contest.status === "Rejected" ? "badge-error" : "badge-info"} text-white`}
                  >
                    {contest.status}
                  </span>
                </td>
                <td className="flex justify-center gap-2">
                  <button
                    onClick={() => handleAction(contest._id, "Confirm")}
                    className="btn btn-xs btn-success text-white"
                    disabled={
                      contest.status === "Confirmed" ||
                      contest.status === "Closed"
                    }
                  >
                    <FaCheck /> Confirm
                  </button>
                  <button
                    onClick={() => handleAction(contest._id, "Reject")}
                    className="btn btn-xs btn-warning text-white"
                    disabled={
                      contest.status === "Rejected" ||
                      contest.status === "Closed"
                    }
                  >
                    <FaTimes /> Reject
                  </button>
                  <button
                    onClick={() => handleAction(contest._id, "Delete")}
                    className="btn btn-xs btn-error text-white"
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <div className="join">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="join-item btn btn-sm btn-outline"
              disabled={currentPage === 1}
            >
              «
            </button>
            {renderPaginationButtons()}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="join-item btn btn-sm btn-outline"
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageContests;
