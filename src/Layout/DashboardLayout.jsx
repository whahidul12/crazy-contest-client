import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaTrophy,
  FaUser,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import useRole from "../hooks/useRole";
import { Helmet } from "react-helmet-async";
import useAuth from "../Hooks/useAuth";

const DashboardLayout = () => {
  const [role] = useRole();
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <title>ContestHub | Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-8">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button mb-4 lg:hidden"
        >
          Open Menu
        </label>
        {/* <Outlet /> */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content flex min-h-full w-80 flex-col justify-between p-4">
          {/* Sidebar content */}
          <div>
            <div className="mb-6 px-4">
              <h2 className="text-primary text-2xl font-bold">ContestHub</h2>
              <p className="text-sm tracking-widest uppercase opacity-70">
                {role}
              </p>
            </div>

            {/* Admin Menu */}
            {role === "Admin" && (
              <>
                <li>
                  <NavLink to="/dashboard/manage-users">
                    <FaUsers /> Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-contests">
                    <FaList /> Manage Contests
                  </NavLink>
                </li>
              </>
            )}

            {/* Creator Menu */}
            {role === "Contest Creator" && (
              <>
                <li>
                  <NavLink to="/dashboard/add-contest">
                    <FaAd /> Add New Contest
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-created-contests">
                    <FaList /> My Created Contests
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/submitted-tasks">
                    <FaBook /> Submitted Tasks
                  </NavLink>
                </li>
              </>
            )}

            {/* User Menu (Always visible for Normal User, optional logic if roles are exclusive) */}
            {role === "Normal User" && (
              <>
                <li>
                  <NavLink to="/dashboard/my-profile">
                    <FaUser /> My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-participated-contests">
                    <FaWallet /> My Participated Contests
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-winning-contests">
                    <FaTrophy /> My Winning Contests
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>

            {/* Shared Links */}
            <li>
              <NavLink to="/">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-contests">
                <FaSearch /> All Contests
              </NavLink>
            </li>
          </div>

          {/* Logout Button at Bottom */}
          <div className="mb-4">
            <li>
              <button
                onClick={handleLogOut}
                className="bg-red-500 text-white hover:bg-red-600"
              >
                Logout
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
