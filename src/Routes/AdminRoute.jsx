import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log(user);
  const location = useLocation();

  if (loading) {
    // Show full screen loading spinner while checking auth status
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  Swal.fire({
    icon: "error",
    title: "Stop Right There",
    text: "Only ADMIN can Access the Admin Panle",
    showConfirmButton: false,
    timer: 2000,
  });
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoute;
