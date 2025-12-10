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
    // children: [
    //   // Normal User Routes
    //   { path: "my-profile", element: <MyProfile /> },
    //   { path: "my-participated-contests", element: <MyParticipatedContest /> },
    //   { path: "my-winning-contests", element: <MyWinningContests /> },

    //   // Creator Routes
    //   { path: "add-contest", element: <AddContest /> },
    //   { path: "my-created-contests", element: <MyCreatedContests /> },
    //   { path: "submitted-tasks", element: <SubmittedTasks /> },
    //   { path: "edit-contest/:id", element: <EditContest /> },

    //   // Admin Routes
    //   { path: "manage-users", element: <ManageUsers /> },
    //   { path: "manage-contests", element: <ManageContests /> },

    //   // Default Dashboard Home (redirect based on role in DashboardLayout or use this)
    //   // { path: '', element: <DashboardHomeComponent /> }
    // ],
  },
]);
