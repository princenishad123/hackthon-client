import BookAppointmentDrawer from "@/components/customeComponents/BookAppointmentDrawer";
import DoctorCard from "@/components/customeComponents/DoctorCard";
import React from "react";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
const ViewDoctor = () => {
  return (
    <div className="w-full py-8">
      <div className="flex flex-col h-72 md:flex-row border md:items-center rounded-lg  p-4 bg-white w-full mx-auto gap-4">
        <div className="flex-shrink-0 flex justify-start md:justify-start p-4">
          <img
            src="https://purepng.com/public/uploads/thumbnail/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitionermale-doctornotepad-1421526856962nfokf.png"
            alt="Dr. Richard James"
            className="w-44 h-44 md:w-40 md:h-40 object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center p-4 w-full">
          <h2 className="text-2xl font-semibold flex items-center gap-1">
            Dr. Richard James <FaCheckCircle className="text-blue-500" />
          </h2>
          <p className="text-gray-600">
            MBBS - General Physician{" "}
            <span className="bg-gray-200 text-sm px-2 py-1 rounded-md">
              2 Years
            </span>
          </p>
          <div className="mt-2">
            <p className="font-medium flex items-center gap-1">
              About <FaInfoCircle className="text-gray-500" />
            </p>
            <p className="text-gray-500 text-sm mt-1 max-w-xl">
              Dr. Richard James has a strong commitment to delivering
              comprehensive medical care, focusing on preventive medicine, early
              diagnosis, and effective treatment strategies.
            </p>
          </div>
          <p className="text-lg font-semibold mt-4">
            Appointment fee: <span className="text-black">$50</span>
          </p>

          <BookAppointmentDrawer />
        </div>
      </div>

      <section className="w-full my-16">
        <h1 className="text-center text-2xl font-semibold">Related Doctors</h1>
        <p className="text-center ">
          simply browse through our extensive list of trusted doctors
        </p>

        <div className="flex items-center justify-center gap-8 flex-wrap my-12">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
      </section>
    </div>
  );
};

export default ViewDoctor;
