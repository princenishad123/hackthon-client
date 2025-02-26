import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <main className="px-1 sm:px-5 lg:px-16 min-h-[88vh]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
