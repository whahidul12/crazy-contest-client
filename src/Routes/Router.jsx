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
import Leaderboard from "../Pages/Leaderboard/Leaderboard";
import HelpCenter from "../Pages/HelpCenter/HelpCenter";
import Payment from "../Pages/Payment/Payment";
import MyProfile from "../Pages/Dashboard/User/MyProfile";
import MyParticipatedContests from "../Pages/Dashboard/User/MyParticipatedContests";
import MyWinningContests from "../Pages/Dashboard/User/MyWinningContests";
import AddContest from "../Pages/Dashboard/Creator/AddContest";
import MyCreatedContests from "../Pages/Dashboard/Creator/MyCreatedContests";
import SubmittedTasks from "../Pages/Dashboard/Creator/SubmittedTasks";
import EditContest from "../Pages/Dashboard/Creator/EditContest";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import ManageContests from "../Pages/Dashboard/Admin/ManageContests";
import AdminRoute from "./AdminRoute";

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
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/help-center",
        element: <HelpCenter />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // Normal User Routes
      { path: "my-profile", element: <MyProfile /> },
      { path: "my-participated-contests", element: <MyParticipatedContests /> },
      { path: "my-winning-contests", element: <MyWinningContests /> },

      // Creator Routes
      { path: "add-contest", element: <AddContest /> },
      { path: "my-created-contests", element: <MyCreatedContests /> },
      { path: "submitted-tasks", element: <SubmittedTasks /> },
      { path: "edit-contest/:id", element: <EditContest /> },

      // Admin Routes
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manage-contests",
        element: (
          <AdminRoute>
            <ManageContests />
          </AdminRoute>
        ),
      },

      // Default Dashboard Home (redirect based on role in DashboardLayout or use this)
      // { path: '', element: <DashboardHomeComponent /> }
    ],
  },
]);
