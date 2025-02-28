import { useGetAppointmentByIdQuery } from "@/rtkQuery/auth";
import React from "react";
import { useSelector } from "react-redux";

const MyAppointment = () => {
  const { user } = useSelector((state) => state.auth);
  const appointments = [
    {
      id: 1,
      name: "Dr. Richard James",
      specialization: "General physician",
      address: "57th Cross, Richmond Circle, Church Road, London",
      dateTime: "25, July, 2024 | 8:30 PM",
      status: "unpaid",
    },
    {
      id: 2,
      name: "Dr. Richard James",
      specialization: "General physician",
      address: "57th Cross, Richmond Circle, Church Road, London",
      dateTime: "25, July, 2024 | 8:30 PM",
      status: "pending",
    },
    {
      id: 3,
      name: "Dr. Richard James",
      specialization: "General physician",
      address: "57th Cross, Richmond Circle, Church Road, London",
      dateTime: "25, July, 2024 | 8:30 PM",
      status: "paid",
    },
  ];

  const { data, isLoading } = useGetAppointmentByIdQuery({ id: user?._id });
  console.log(data);
  return (
    <div className="max-w-4/5 mx-auto my-5 p-8 bg-white rounded-2xl ">
      <h2 className="text-xl font-semibold mb-8 text-gray-800 border-b pb-4 flex items-center gap-3">
        <span className="text-blue-500"></span> My Appointments
      </h2>
      <div className="space-y-6">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center gap-8 p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-gray-100 "
          >
            <div className="relative size-40 overflow-hidden">
              <img
                src="https://www.pngarts.com/files/3/Female-Doctor-Transparent-Background-PNG.png"
                alt="Doctor"
                className="max-w-fill object-cover"
              />
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                {appointment.name}
              </h3>
              <p className="text-blue-600 font-medium flex items-center gap-2">
                <span className="text-sm">👨‍⚕️</span> {appointment.specialization}
              </p>
              <div className="text-gray-600 space-y-2">
                <p className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">📍</span>
                  {appointment.address}
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">🕒</span>
                  {appointment.dateTime}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-3">
              {appointment.status === "unpaid" && (
                <button className="bg-blue-500 text-sm hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
                  Pay online
                </button>
              )}
              {appointment.status === "paid" && (
                <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2">
                  Paid
                </button>
              )}
              <button className="border border-gray-300 hover:border-red-500 hover:text-red-500 px-8 py-3 rounded-lg text-gray-600 font-medium transition-all duration-200 flex items-center gap-2 hover:bg-red-50 text-sm">
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
