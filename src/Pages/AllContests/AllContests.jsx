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
  const [activeTab, setActiveTab] = useState("All");
  const axiosPublic = useAxiosPublic();

  // Fetch all approved contests
  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["allContests", activeTab],
    queryFn: async () => {
      let url = "/contests/approved";
      if (activeTab !== "All") {
        url = `/contests/approved?type=${activeTab}`;
      }
      const res = await axiosPublic.get(url);
      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="py-20 text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-10">
      <Helmet>
        <title>ContestHub | All Contests</title>
      </Helmet>
      <h1 className="mb-10 text-center text-4xl font-bold">
        Explore All Contests
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
            className={`tab ${activeTab === type ? "tab-active bg-primary text-primary-content" : ""}`}
            onClick={() => setActiveTab(type)}
            whileHover={{ scale: 1.05 }}
          >
            {type}
          </motion.a>
        ))}
      </div>

      {/* Contests Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {contests.length > 0 ? (
          contests.map((contest) => (
            <ContestCard key={contest._id} contest={contest} />
          ))
        ) : (
          <p className="text-error col-span-full text-center text-xl">
            No contests found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllContests;
