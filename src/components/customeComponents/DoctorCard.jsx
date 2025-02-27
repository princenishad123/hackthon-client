import React from "react";

const DoctorCard = () => {
  return (
    <>
      <div className="w-64  cursor-pointer border rounded-lg hover:shadow-lg hover:scale-105 transition-all p-4  bg-white text-center">
        <div className="flex flex-col items-center">
          <img
            src="https://www.pngarts.com/files/3/Female-Doctor-Transparent-Background-PNG.png"
            alt="Dr. Richard James"
            className="w-32 object-cover mb-4"
          />
          <span className="text-green-600 font-medium flex items-center gap-1">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            Available
          </span>
          <h2 className="text-xl font-semibold mt-2">Dr. Richard James</h2>
          <p className="text-gray-500">General physician</p>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
