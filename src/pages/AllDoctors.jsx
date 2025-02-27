import DoctorCard from "@/components/customeComponents/DoctorCard";
import React from "react";

const AllDoctors = () => {
  const doctorTypes = [
    "General Physician",
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Orthopedic Surgeon",
    "Pediatrician",
    "Psychiatrist",
    "Gynecologist",
    "Ophthalmologist",
    "ENT Specialist",
  ];
  return (
    <>
      <h2 className="text-xl font-semibold m-4">All Doctors</h2>
      <div className="flex py-4 gap-4">
        <aside className="w-72 h-auto border px-4 rounded-lg">
          <ul>
            <h2 className="my-4 ">Filter</h2>
            {doctorTypes.map((e, idx) => (
              <li
                key={idx}
                className="text-sm py-4 px-6 my-2 cursor-pointer rounded-lg hover:bg-blue-50 border "
              >
                {e}
              </li>
            ))}
          </ul>
        </aside>

        <div>
          <DoctorCard />
        </div>
      </div>{" "}
    </>
  );
};

export default AllDoctors;
