import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 w-full bg-slate-50">
      <aside className="w-64 bg-white h-screen">
        <h1 className="text-2xl text-start py-4">Doctor Profile</h1>
        <ul>
          <NavLink to={"/dashboard"}>
            <li className="text-py-2 px-4 my-4">Dashbaord</li>
          </NavLink>
          <NavLink to={"profile"}>
            <li className="text-py-2 px-4 my-4">Profile</li>
          </NavLink>

          <NavLink to={"my-appointments"}>
            <li className="text-py-2 px-4 my-4">My Patients</li>
          </NavLink>
        </ul>
      </aside>

      <div className=" m-4 p-4 bg-white w-full rounded-md">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
