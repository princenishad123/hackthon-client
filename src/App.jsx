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
          path: "/doctor",
          element: <ViewDoctor />,
        },
        {
          path: "/all-doctors",
          element: <AllDoctors />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
