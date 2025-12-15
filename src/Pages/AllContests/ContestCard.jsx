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
      className="card bg-card-light dark:bg-card-dark shadow-xl transition-shadow duration-300 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <figure className="relative h-56">
        <img src={image} alt={name} className="h-full w-full object-cover" />
        <div className="badge badge-primary absolute top-2 right-2">{type}</div>
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title text-primary-dark dark:text-primary-light mb-2 text-2xl">
          {name}
        </h2>
        <p className="text-primary-dark/70 dark:text-primary-light/70 text-sm">
          {description.slice(0, 100)}...
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-secondary-c font-bold">
            Fee: <span className="text-secondary">${price}</span>
          </span>
          <span className="text-secondary-c text-sm font-medium">
            Participants: {participantsCount}
          </span>
        </div>
        <div className="card-actions mt-4 justify-end">
          <button
            onClick={handleDetailsClick}
            className="btn bg-secondary-o btn-sm border-none"
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
