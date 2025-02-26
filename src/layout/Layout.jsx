import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <main className="px-1 sm:px-5 lg:px-16 min-h-[88vh]">
        <Outlet />
      </main>

      <Footer />

      <Toaster />
    </div>
  );
};

export default Layout;
