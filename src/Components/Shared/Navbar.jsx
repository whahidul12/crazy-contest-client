import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  // Theme Toggle Logic
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-contests">All Contests</NavLink>
      </li>
      <li>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
      </li>
      {/* Extra Link as requested */}
      <li>
        <NavLink to="/help-center">Help Center</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-primary text-xl font-bold">
          ContestHub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end gap-2">
        {/* Theme Controller */}
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "dark"}
          />
          {/* moon icon */}
          <FaMoon className="swap-off h-6 w-6 fill-current" />
          {/* sun icon */}
          <MdWbSunny className="swap-on h-6 w-6 fill-current" />
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
                    src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li className="mb-2 border-b px-4 py-2 text-center font-bold">
                  {user?.displayName}
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
