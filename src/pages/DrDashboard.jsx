import CardStatus from "@/components/customeComponents/CardStatus";

import React from "react";
import { Outlet } from "react-router-dom";

const DrDashboard = () => {
  return (
    <>
      <div className="flex gap-4 w-full bg-slate-50">
        <CardStatus />
        <CardStatus />
        <CardStatus />
        <CardStatus />
      </div>
    </>
  );
};

export default DrDashboard;
