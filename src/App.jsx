import React from "react";
import { Button } from "./components/ui/button";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { useCheckAuthQuery } from "./rtkQuery/auth";
import { setLogin, setUser } from "./redux/AuthSlice";
import useAuth from "./hook/useAuth";
import Loader from "./components/customeComponents/Loader";
import ViewDoctor from "./pages/ViewDoctor";
import AllDoctors from "./pages/AllDoctors";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import MyAppointment from "./pages/MyAppointment";
import UserProfile from "./pages/UserProfile";
import DrAccount from "./pages/DrAccount";
import { ProtectedRoute } from "./lib/ProtectedRoute";
import DrProfile from "./pages/DrDashboard";
import Dashboard from "./pages/Doctor/Dashboard";
import DrDashboard from "./pages/DrDashboard";
const App = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Loader />;
  }
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/doctor/:id",
          element: <ViewDoctor />,
        },
        {
          path: "/all-doctors",
          element: <AllDoctors />,
        },
        {
          path: "/account",
          element: <UserProfile />,
        },
        {
          path: "/dr-account",
          element: <DrAccount />,
        },
        {
          path: "/my-appointments",
          element: <MyAppointment />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
          children: [
            {
              path: "",
              element: <DrDashboard />,
            },
            {
              path: "my-appointments",
              element: <MyAppointment />,
            },
            {
              path: "profile",
              element: <UserProfile />,
            },
          ],
        },
        {
          path: "/dr-profile",
          element: <DrProfile />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/about-us",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
