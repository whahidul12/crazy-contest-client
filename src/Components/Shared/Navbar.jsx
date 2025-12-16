import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import logo from "../../assets/logo.png";
import { ThemeContext } from "../../Providers/ThemeProvider";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { isDark, setDark } = useContext(ThemeContext);

  // Theme Toggle Logic
  const handleToggle = () => {
    setDark(!isDark);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-secondary-c/50 text-primary-dark dark:text-primary-light border-secondary-o border-b-2 text-lg font-bold"
              : "text-primary-dark dark:text-primary-light text-lg"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-contests"
          className={({ isActive }) =>
            isActive
              ? "bg-secondary-c/50 text-primary-dark dark:text-primary-light border-secondary-o border-b-2 text-lg font-bold"
              : "text-primary-dark dark:text-primary-light text-lg"
          }
        >
          All Contests
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/leaderboard"
          className={({ isActive }) =>
            isActive
              ? "bg-secondary-c/50 text-primary-dark dark:text-primary-light border-secondary-o border-b-2 text-lg font-bold"
              : "text-primary-dark dark:text-primary-light text-lg"
          }
        >
          Leaderboard
        </NavLink>
      </li>
      {/* Extra Link as requested */}
      <li>
        <NavLink
          to="/help-center"
          className={({ isActive }) =>
            isActive
              ? "bg-secondary-c/50 text-primary-dark dark:text-primary-light border-secondary-o border-b-2 text-lg font-bold"
              : "text-primary-dark dark:text-primary-light text-lg"
          }
        >
          Help Center
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-primary-light/50 dark:bg-primary-dark/50 dark:shadow-primary-light/50 sticky top-0 z-50 shadow-lg backdrop-blur-xs">
      <div className="navbar mx-auto max-w-screen-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-primary-dark dark:text-primary-light lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-card-light dark:bg-card-dark dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <Link
            to="/"
            className="text-primary-dark dark:text-primary-light flex items-center justify-center text-xl font-bold"
          >
            Crazy Contest
            <img src={logo} alt="crazy contest logo" className="-ml-2 w-10" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end gap-2">
          {/* Theme Controller */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleToggle} checked={isDark} />
            {/* moon icon */}
            <FaMoon className="swap-off text-primary-dark h-6 w-6 fill-current" />
            {/* sun icon */}
            <MdWbSunny className="swap-on text-primary-light h-6 w-6 fill-current" />
          </label>

          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar border-primary border"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="User"
                      src={
                        user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-card-light dark:bg-card-dark text-primary-dark dark:text-primary-light rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li className="mb-2 border-b px-4 py-2 text-center font-bold">
                    {user?.displayName}
                  </li>
                  <li>
                    <Link to="/dashboard/my-profile">Dashboard</Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn bg-secondary-o border-none">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
