import { Outlet, NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaTrophy,
  FaList,
  FaUsers,
  FaAd,
  FaPlusCircle,
  FaGavel,
} from "react-icons/fa";
import useRole from "../hooks/useRole";
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const [role] = useRole(); // Custom hook from Part 2
  const { user } = useAuth();

  // Navigation items based on roles
  const userLinks = (
    <>
      <li>
        <NavLink to="/dashboard/my-profile">
          <FaUser /> My Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/my-participated-contests">
          <FaList /> Participated Contests
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/my-winning-contests">
          <FaTrophy /> Winning Contests
        </NavLink>
      </li>
    </>
  );

  const creatorLinks = (
    <>
      <li>
        <NavLink to="/dashboard/add-contest">
          <FaPlusCircle /> Add Contest
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/my-created-contests">
          <FaList /> My Created Contests
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/contest-submitted">
          <FaUsers /> Submitted Tasks
        </NavLink>
      </li>
    </>
  );

  const adminLinks = (
    <>
      <li>
        <NavLink to="/dashboard/manage-users">
          <FaUsers /> Manage Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manage-contests">
          <FaGavel /> Manage Contests
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <title>ContestHub | Dashboard</title>
      </Helmet>
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-8">
        {/* Mobile Hamburger */}
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-primary drawer-button mb-4 w-fit lg:hidden"
        >
          Open Menu
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 gap-2 p-4">
          {/* User Info Header */}
          <div className="mb-6 flex flex-col items-center">
            <img
              src={user?.photoURL}
              alt=""
              className="mb-2 h-20 w-20 rounded-full object-cover"
            />
            <span className="text-lg font-bold">{user?.displayName}</span>
            <span className="badge badge-primary badge-outline mt-1">
              {role}
            </span>
          </div>

          {/* Role Specific Links */}
          {role === "Admin" && adminLinks}
          {role === "Contest Creator" && creatorLinks}
          {role === "Normal User" && userLinks}

          <div className="divider"></div>

          {/* Shared Links */}
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
