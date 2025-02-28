import React from "react";

const DoctorCard = ({
  id,
  name,
  experience,
  qualification,
  specialization,
  consultationFee,
  availability,
  image,
  location,
}) => {
  return (
    <>
      <div className="w-64  cursor-pointer border rounded-lg hover:shadow-lg hover:scale-105 transition-all p-4  bg-white text-center">
        <div className="flex flex-col items-center">
          <img
            src={
              image ||
              "https://www.pngarts.com/files/3/Female-Doctor-Transparent-Background-PNG.png"
            }
            alt={name}
            className="w-32 object-cover mb-4"
          />
          <span className="text-green-600 font-medium flex items-center gap-1">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            {availability}
          </span>
          <h2 className="text-xl font-semibold mt-2">{name}</h2>
          <p className="text-gray-500">{specialization}</p>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
