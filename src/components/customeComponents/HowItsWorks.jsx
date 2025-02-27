import React from "react";
import { LuUserRound } from "react-icons/lu";
import { FaUserMd } from "react-icons/fa";

import { GrSchedule } from "react-icons/gr";

const HowItsWorks = () => {
  return (
    <>
      <div className="w-72 flex flex-col items-center gap-2">
        <img src="./doctor.png" className="w-14" alt="" />
        <h2 className="text-center text-xl font-semibold">Search Doctor</h2>
        <p className="text-center text-sm font-semibold text-gray-600">
          Browse available doctors based on specialization and schedule.
        </p>
      </div>
      <div className="w-72 flex flex-col items-center gap-2">
        <img src="./doctor2.png" className="w-14" alt="" />
        <h2 className="text-center text-xl font-semibold">
          Check Docter's profile
        </h2>
        <p className="text-center text-sm font-semibold text-gray-600">
          Choose from 100's of doctors from out list
        </p>
      </div>
      <div className="w-72 flex flex-col items-center gap-2">
        <img src="./schedule.png" className="w-12" alt="" />
        <h2 className="text-center text-xl font-semibold">
          Schedule Appointment
        </h2>
        <p className="text-center text-sm font-semibold text-gray-600">
          Schedule an appointment with available dates
        </p>
      </div>
      <div className="w-72 flex flex-col items-center gap-2">
        <img src="./solution.png" className="w-14" alt="" />
        <h2 className="text-center text-xl font-semibold">Get Solution</h2>
        <p className="text-center text-sm font-semibold text-gray-600">
          Get best solution for your requirements
        </p>
      </div>
    </>
  );
};

export default HowItsWorks;
