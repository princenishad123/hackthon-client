import { useGetAppointmentByIdQuery } from "@/rtkQuery/auth";
import React from "react";
import { useSelector } from "react-redux";

const MyPatients = () => {
  const appointments = [
    {
      id: 1,
      patientName: "Richard James",
      department: "Richard James",
      age: 28,
      dateTime: "24th July, 2024, 10:AM",
      doctorName: "Dr. Richard James",
      fees: "$50",
      image: "https://randomuser.me/api/portraits/men/1.jpg", // Sample image
    },
    {
      id: 2,
      patientName: "Richard James",
      department: "Richard James",
      age: 28,
      dateTime: "24th July, 2024, 10:AM",
      doctorName: "Dr. Richard James",
      fees: "$50",
      image: "https://randomuser.me/api/portraits/men/1.jpg", // Sample image
    },
  ];
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetAppointmentByIdQuery({
    id: user?._id,
  });

  console.log(data?.appointment);
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Patient</th>
            <th className="p-3 text-left">Department</th>
            <th className="p-3 text-left">Age</th>
            <th className="p-3 text-left">Date & Time</th>
            <th className="p-3 text-left">Doctor</th>
            <th className="p-3 text-left">Fees</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.appointment?.map((appointment, index) => (
            <tr
              key={appointment?.id}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="p-3">{index + 1}</td>
              <td className="p-3 flex items-center gap-2">
                <img
                  src={appointment?.image}
                  alt="Patient"
                  className="w-10 h-10 rounded-full"
                />
                {appointment?.userId?.name}
              </td>
              <td className="p-3">{appointment?.department}</td>
              <td className="p-3">{appointment?.age}</td>
              <td className="p-3">{appointment?.dateTime}</td>
              <td className="p-3 flex items-center gap-2">
                <img
                  src={appointment?.image}
                  alt="Doctor"
                  className="w-10 h-10 rounded-full"
                />
                {appointment?.doctorName}
              </td>
              <td className="p-3">{appointment?.fees}</td>
              <td className="p-3 text-center">
                <button className="bg-red-100 text-red-600 hover:bg-red-200 rounded-full p-2">
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPatients;
