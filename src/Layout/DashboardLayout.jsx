import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
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
import useRole from "../Hooks/useRole";
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
        <title>Crazy Contest | Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-primary-dark flex min-h-screen flex-col p-8">
        {/* Page content here */}
        <div className="sticky top-4 z-50">
          <label
            htmlFor="my-drawer-2"
            className="btn bg-secondary-c drawer-button float-right mb-4 w-fit lg:hidden"
          >
            Open Menu
          </label>
        </div>
        {/* <Outlet /> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-card-dark text-primary-light flex min-h-full w-fit flex-col justify-between p-4">
          {/* Sidebar content */}
          <div>
            <div className="mb-6 px-4">
              <Link to={"/"} className="text-secondary-c text-2xl font-bold">
                <span>Crazy Contest</span>
              </Link>
              <p className="text-sm tracking-widest uppercase opacity-70">
                {role}
              </p>
            </div>

            {/* Admin Menu */}
            {role === "Admin" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/my-profile"
                    className={({ isActive }) =>
                      isActive
                        ? "btn bg-secondary-c my-1 border-none"
                        : "btn bg-secondary-c/30 my-1 border-none"
                    }
                  >
                    <FaUser /> My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manage-users"
                    className={({ isActive }) =>
                      isActive
                        ? "btn bg-secondary-c my-1 border-none"
                        : "btn bg-secondary-c/30 my-1 border-none"
                    }
                  >
                    <FaUsers /> Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manage-contests"
                    className={({ isActive }) =>
                      isActive
                        ? "btn bg-secondary-c my-1 border-none"
                        : "btn bg-secondary-c/30 my-1 border-none"
                    }
                  >
                    <FaList /> Manage Contests
                  </NavLink>
                </li>
              </>
            )}

            {/* Creator Menu */}
            {role === "Contest Creator" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/my-profile"
                    className={({ isActive }) =>
                      isActive
                        ? "btn bg-secondary-c my-1 border-none"
                        : "btn bg-secondary-c/30 my-1 border-none"
                    }
                  >
                    <FaUser /> My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/add-contest"
                    className={({ isActive }) =>
                      isActive
                        ? "btn bg-secondary-c my-1 border-none"
                        : "btn bg-secondary-c/30 my-1 border-none"
                    }
                  >
                    <FaAd /> Add New Contest
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/my-created-contests"
                    className={({ isActive }) =>
                      isActive
                        ? "btn bg-secondary-c my-1 border-none"
                        : "btn bg-secondary-c/30 my-1 border-none"
                    }
                  >
                    <FaList /> My Created Contests
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/submitted-tasks"
                    className={({ isActive }) =>
                      isActive
                        ? "btn bg-secondary-c my-1 border-none"
                        : "btn bg-secondary-c/30 my-1 border-none"
                    }
                  >
                    <FaBook /> Submitted Tasks
                  </NavLink>
                </li>
              </>
            )}

            {/* User Menu (Always visible for Normal User, optional logic if roles are exclusive) */}
            {role === "Normal User" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/my-profile"
                    className={({ isActive }) =>
                      isActive
                        ? "btn bg-secondary-c my-1 border-none"
                        : "btn bg-secondary-c/30 my-1 border-none"
                    }
                  >
                    <FaUser /> My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/my-participated-contests"
                    className={({ isActive }) =>
                      isActive
                        ? "btn bg-secondary-c my-1 border-none"
                        : "btn bg-secondary-c/30 my-1 border-none"
                    }
                  >
                    <FaWallet /> My Participated Contests
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/my-winning-contests"
                    className={({ isActive }) =>
                      isActive
                        ? "btn bg-secondary-c my-1 border-none"
                        : "btn bg-secondary-c/30 my-1 border-none"
                    }
                  >
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
                className="btn border-none bg-red-500 text-white hover:bg-red-600"
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
