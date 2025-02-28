import DoctorCard from "@/components/customeComponents/DoctorCard";
import { useGetAllDoctorProfileQuery } from "@/rtkQuery/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

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

  const { data, isLoading } = useGetAllDoctorProfileQuery();

  const navigate = useNavigate();
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

        <div className="flex flex-wrap gap-4">
          {data?.map((doctor) => (
            <div
              onClick={() => navigate(`/doctor/${doctor._id}`)}
              key={doctor._id}
            >
              <DoctorCard
                availability={doctor.availability}
                consultationFee={doctor.consultationFee}
                name={doctor.name}
                specialization={doctor.specialization}
                experience={doctor.experience}
                image={doctor.image}
                id={doctor._id}
              />
            </div>
          ))}
        </div>
      </div>{" "}
    </>
  );
};

export default AllDoctors;
