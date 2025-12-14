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
  // New state to hold the search term that will trigger the API call
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [endActiveTab, setEndActiveTab] = useState("All");
  const axiosPublic = useAxiosPublic();

  // Function to handle form submission (Search button click)
  const handleSearch = (e) => {
    e.preventDefault();
    // Set the search term to trigger the useQuery
    setSearchQuery(searchTerm);
  };

  // Fetch all approved contests
  const { data: contests = [], isLoading } = useQuery({
    // 1. ADD searchQuery to the queryKey dependency
    queryKey: ["allContests", activeTab, searchQuery],
    queryFn: async () => {
      let url = "/contests/approved";

      // Add type filter
      if (activeTab !== "All") {
        url += `?type=${activeTab}`;
      }

      // 2. ADD search query to the URL
      if (searchQuery) {
        // If we already have a '?' (from type), use '&', otherwise use '?'
        url += (url.includes("?") ? "&" : "?") + `search=${searchQuery}`;
      }

      const res = await axiosPublic.get(url);
      return res.data;
    },
  });

  // Reset searchQuery when the activeTab changes
  // This is a good practice to ensure category filtering works correctly
  // when a search was previously performed.
  const handleTabClick = (type) => {
    setActiveTab(type);
    setSearchTerm("");
    setSearchQuery("");
  };

  // Fetch all Ended contests (No change needed here for the ongoing contest search feature)
  const { data: endedContests = [], isLoading: isEndedLoading } = useQuery({
    queryKey: ["endedContests", endActiveTab],
    queryFn: async () => {
      let url = "/contests/closed";
      if (endActiveTab !== "All") {
        url = `/contests/closed?type=${endActiveTab}`;
      }
      const res = await axiosPublic.get(url);
      return res.data;
    },
  });

  // Removed the commented-out isLoading block for cleaner code

  return (
    <div className="tabs tabs-box">
      <input
        type="radio"
        name="my_tabs_2"
        className="tab w-1/2"
        aria-label="Ongoing Contest"
        defaultChecked
      />
      <div className="tab-content container mx-auto px-4 py-10">
        <Helmet>
          <title>ContestHub | All Ongoing Contests</title>
        </Helmet>
        <h1 className="text-center text-4xl font-bold">
          Explore All Ongoing Contests
        </h1>
        {/* Search Section (No changes here, the form is already set up) */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="my-10 flex justify-center"
        >
          <form
            onSubmit={handleSearch} // This now sets the searchQuery state
            className="join mx-auto w-11/12 shadow-lg sm:w-lg"
          >
            <input
              type="text"
              className="input input-bordered join-item w-full text-black"
              placeholder="Search contest name or creator name" // Updated placeholder for clarity
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary join-item">Search</button>
          </form>
        </motion.div>

        {/* Tabs for Filtering */}
        <div
          role="tablist"
          className="tabs tabs-boxed mb-10 justify-center overflow-x-auto"
        >
          {contestTypes.map((type) => (
            <motion.a
              key={type}
              role="tab"
              className={`tab ${activeTab === type ? "tab-active bg-primary text-primary-content" : ""}`}
              onClick={() => handleTabClick(type)} // Use the new handler
              whileHover={{ scale: 1.05 }}
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {contests.length > 0 ? (
              contests.map((contest) => (
                <ContestCard key={contest._id} contest={contest} />
              ))
            ) : (
              <p className="text-error col-span-full text-center text-xl">
                {/* Updated message to reflect search/filter state */}
                No contests found for the current filter/search.
              </p>
            )}
          </div>
        )}
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        className="tab w-1/2"
        aria-label="Ended Contest"
      />
      <div className="tab-content container mx-auto px-4 py-10">
        <Helmet>
          <title>ContestHub | All Ended Contests</title>
        </Helmet>
        <h1 className="mb-10 text-center text-4xl font-bold">
          Explore All Ended Contests
        </h1>

        {/* Tabs for Filtering (Unchanged) */}
        <div
          role="tablist"
          className="tabs tabs-boxed mb-10 justify-center overflow-x-auto"
        >
          {contestTypes.map((type) => (
            <motion.a
              key={type}
              role="tab"
              className={`tab ${endActiveTab === type ? "tab-active text-primary-content bg-red-500" : ""}`}
              onClick={() => setEndActiveTab(type)}
              whileHover={{ scale: 1.05 }}
            >
              {type}
            </motion.a>
          ))}
        </div>

        {/* Contests Grid (Unchanged) */}
        {isEndedLoading ? (
          <div className="py-20 text-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default AllContests;
