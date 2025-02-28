import PopUp from "@/components/customeComponents/PopUp";
import useAuth from "@/hook/useAuth";
import { useGetDoctorProfileQuery } from "@/rtkQuery/auth";
import React, { useState, useEffect } from "react";
import { FaCamera, FaEdit, FaSave, FaTimes } from "react-icons/fa";

const UserProfile = () => {
  const { user } = useAuth();
  const [data, setData] = useState();

  useEffect(() => {
    if (user) {
      setData(user);
    }
  }, [user]);
  return (
    <div className="flex max-md:flex-col  gap-6 p-6 max-w-4xl mx-auto bg-white rounded-lg">
      {/* Profile Images */}
      <div className="flex flex-col items-center gap-3">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="User"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>

      {/* Profile Details */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold">{data?.name}</h2>

        {/* Contact Info */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-700">
            CONTACT INFORMATION
          </h3>
          <p className="text-gray-600">
            Email id:{" "}
            <a href={`mailto:${data?.email}`} className="text-blue-500">
              {data?.email}
            </a>
          </p>
          <p className="text-gray-600">
            Phone:{" "}
            <a href="tel:+11234567890" className="text-blue-500">
              {data?.phone}
            </a>
          </p>
          <p className="text-gray-600">{data?.address}</p>
        </div>

        {/* Basic Info */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-700">
            BASIC INFORMATION
          </h3>
          <p className="text-gray-600">Gender: {data?.address || ""}</p>
          <p className="text-gray-600">Birthday: {data?.dob || ""}</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <PopUp />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
