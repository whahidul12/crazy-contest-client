import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AllContests from "../pages/AllContests/AllContests";
import ContestDetails from "../pages/ContestDetails/ContestDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
// import DashboardLayout from "../layout/DashboardLayout";
// Import dashboard components (to be created in Part 3)
// import Leaderboard from "../pages/Leaderboard/Leaderboard";
// import HelpCenter from "../pages/HelpCenter/HelpCenter";

// ... (Import all dashboard components here: MyProfile, MyParticipatedContests, AddContest, etc.) ...

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-contests",
        element: <AllContests />,
      },
      {
        path: "/contest/:id",
        element: (
          <PrivateRoute>
            <ContestDetails />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/leaderboard",
      //   element: <Leaderboard />, // Dynamic leaderboard (Challenge Task)
      // },
      // {
      //   path: "/help-center",
      //   element: <HelpCenter />, // Extra meaningful route
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      // Payment route will be nested here
      // {
      //     path: "/payment/:id",
      //     element: <PrivateRoute><Payment /></PrivateRoute>
      // }
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    // Children will be added in Part 3
    children: [
      // Normal User Routes (Example)
      // { path: 'my-profile', element: <MyProfile /> },
      // { path: 'participated-contests', element: <MyParticipatedContests /> },
      // Creator Routes (Example)
      // { path: 'add-contest', element: <AddContest /> },
      // Admin Routes (Example)
      // { path: 'manage-users', element: <ManageUsers /> },
    ],
  },
]);
