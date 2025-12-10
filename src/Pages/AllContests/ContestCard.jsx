import { Link, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";

const ContestCard = ({ contest }) => {
  const { _id, name, image, participantsCount, description, price, type } =
    contest;
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    if (!user) {
      // If not logged in, redirect to login page
      navigate("/login");
    } else {
      // Logged in, navigate to details page
      navigate(`/contests/${_id}`);
    }
  };

  return (
    <motion.div
      className="card bg-base-100 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <figure className="relative h-56">
        <img src={image} alt={name} className="h-full w-full object-cover" />
        <div className="badge badge-primary absolute top-2 right-2">{type}</div>
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title mb-2 text-2xl">{name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description.slice(0, 100)}...
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-secondary font-bold">Fee: ${price}</span>
          <span className="text-sm font-medium">
            Participants: {participantsCount}
          </span>
        </div>
        <div className="card-actions mt-4 justify-end">
          <button
            onClick={handleDetailsClick}
            className="btn btn-primary btn-sm"
          >
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

ContestCard.propTypes = {
  contest: PropTypes.object.isRequired,
};

export default ContestCard;
