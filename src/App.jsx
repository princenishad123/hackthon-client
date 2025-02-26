import React from "react";
import { Button } from "./components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { useCheckAuthQuery } from "./rtkQuery/auth";

const App = () => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  // console.log(user, isLoggedIn);

  const data = useCheckAuthQuery();

  console.log(data);

  // console.log(isError);

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
