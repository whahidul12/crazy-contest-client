import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import ContestCard from "./ContestCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const contestTypes = [
  "All",
  "Image Design",
  "Article Writing",
  "Business Idea",
  "Gaming Review",
  "Coding Challenge",
];

const AllContests = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [endActiveTab, setEndActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [endCurrentPage, setEndCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const axiosPublic = useAxiosPublic();
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchTerm);
    setCurrentPage(1);
  };

  const handleTabClick = (type) => {
    setActiveTab(type);
    setSearchTerm("");
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleEndTabClick = (type) => {
    setEndActiveTab(type);
    setEndCurrentPage(1);
  };

  const { data: ongoingData = { contests: [], totalCount: 0 }, isLoading } =
    useQuery({
      queryKey: ["allContests", activeTab, searchQuery, currentPage],
      queryFn: async () => {
        let url = "/contests/approved";
        let params = `?page=${currentPage}&limit=${itemsPerPage}`;
        if (activeTab !== "All") {
          params += `&type=${activeTab}`;
        }
        if (searchQuery) {
          params += `&search=${searchQuery}`;
        }
        url += params;
        const res = await axiosPublic.get(url);
        return res.data;
      },
    });

  const contests = ongoingData.contests;
  const totalContests = ongoingData.totalCount;
  const totalPages = Math.ceil(totalContests / itemsPerPage);

  const {
    data: endedData = { contests: [], totalCount: 0 },
    isLoading: isEndedLoading,
  } = useQuery({
    queryKey: ["endedContests", endActiveTab, endCurrentPage],
    queryFn: async () => {
      let url = "/contests/closed";
      let params = `?page=${endCurrentPage}&limit=${itemsPerPage}`;
      if (endActiveTab !== "All") {
        params += `&type=${endActiveTab}`;
      }
      url += params;
      const res = await axiosPublic.get(url);
      return res.data;
    },
  });

  const endedContests = endedData.contests;
  const totalEndedContests = endedData.totalCount;
  const totalEndedPages = Math.ceil(totalEndedContests / itemsPerPage);
  const renderPaginationButtons = (currentP, totalP, setPageFn) => {
    if (totalP <= 1) return null;
    const pages = [...Array(totalP).keys()].map((i) => i + 1);

    return (
      <div className="my-10 flex justify-center">
        <div className="join shadow-lg">
          {/* Previous Button */}
          <button
            className="join-item btn bg-secondary-o text-primary-dark dark:text-primary-light"
            disabled={currentP === 1}
            onClick={() => setPageFn(currentP - 1)}
          >
            « Prev
          </button>

          {/* Page Number Buttons */}
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setPageFn(page)}
              className={`join-item btn ${currentP === page ? "bg-primary-dark text-secondary-o dark:bg-primary-light dark:text-secondary-o" : "bg-card-light dark:bg-card-dark text-primary-dark dark:text-primary-light"}`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            className="join-item btn bg-secondary-o text-primary-dark dark:text-primary-light"
            disabled={currentP === totalP}
            onClick={() => setPageFn(currentP + 1)}
          >
            Next »
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="tabs tabs-box bg-primary-light dark:bg-primary-dark -mt-20">
      {/* ======================= ONGOING CONTESTS TAB ======================= */}
      <input
        type="radio"
        name="my_tabs_6"
        className="tab text-secondary-o dark:text-primary-light border-secondary-o mt-20 w-1/2 border"
        aria-label="Ongoing Contest"
        defaultChecked
      />
      <div className="tab-content container mx-auto px-4 py-10">
        <Helmet>
          <title>Crazy Contest | All Ongoing Contests</title>
        </Helmet>
        <h1 className="text-secondary-c dark:text-primary-light text-center text-3xl font-bold sm:text-4xl">
          Explore All Ongoing Contests
        </h1>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="my-10 flex justify-center"
        >
          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="join mx-auto w-11/12 shadow-lg sm:w-lg"
          >
            <input
              type="text"
              className="input input-bordered join-item bg-card-light dark:bg-card-dark border-primary-dark/30 dark:border-primary-light/30 placeholder:text-primary-dark/50 dark:placeholder:text-primary-light/50 text-primary-dark dark:text-primary-light w-full border"
              placeholder="Search contest name or creator name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn bg-secondary-o join-item border-none">
              Search
            </button>
          </form>
        </motion.div>

        {/* Category Tabs */}
        <div
          role="tablist"
          className="tabs tabs-boxed mb-10 justify-center overflow-x-auto"
        >
          {contestTypes.map((type) => (
            <motion.a
              key={type}
              role="tab"
              className={`tab ${activeTab === type ? "tab-active bg-secondary-o text-primary-dark dark:text-primary-light rounded-sm border-none" : "text-primary-dark dark:text-primary-light"}`}
              onClick={() => handleTabClick(type)}
            >
              {type}
            </motion.a>
          ))}
        </div>

        {/* Contests Grid */}
        {isLoading ? (
          <div className="py-20 text-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {contests.length > 0 ? (
                contests.map((contest) => (
                  <ContestCard key={contest._id} contest={contest} />
                ))
              ) : (
                <p className="text-error col-span-full text-center text-xl">
                  No contests found for the current filter/search.
                </p>
              )}
            </div>

            {/* Pagination for Ongoing Contests */}
            {renderPaginationButtons(currentPage, totalPages, setCurrentPage)}
          </>
        )}
      </div>

      {/* ========================= ENDED CONTESTS TAB ========================= */}
      <input
        type="radio"
        name="my_tabs_6"
        className="tab text-secondary-o dark:text-primary-light border-secondary-o mt-20 w-1/2 border"
        aria-label="Ended Contest"
      />
      <div className="tab-content container mx-auto px-4 py-10">
        <Helmet>
          <title>Crazy Contest | All Ended Contests</title>
        </Helmet>
        <h1 className="text-secondary-c dark:text-primary-light mb-10 text-center text-4xl font-bold">
          Explore All Ended Contests
        </h1>

        {/* Tabs for Filtering */}
        <div
          role="tablist"
          className="tabs tabs-boxed mb-10 justify-center overflow-x-auto"
        >
          {contestTypes.map((type) => (
            <motion.a
              key={type}
              role="tab"
              className={`tab ${endActiveTab === type ? "tab-active text-primary-content bg-secondary-o rounded-sm border-none" : "text-primary-dark dark:text-primary-light"}`}
              onClick={() => handleEndTabClick(type)}
            >
              {type}
            </motion.a>
          ))}
        </div>

        {/* Contests Grid */}
        {isEndedLoading ? (
          <div className="py-20 text-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {endedContests.length > 0 ? (
                endedContests.map((contest) => (
                  <ContestCard key={contest._id} contest={contest} />
                ))
              ) : (
                <p className="text-error col-span-full text-center text-xl">
                  No contests found for this category.
                </p>
              )}
            </div>

            {/* Pagination for Ended Contests */}
            {renderPaginationButtons(
              endCurrentPage,
              totalEndedPages,
              setEndCurrentPage,
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllContests;
