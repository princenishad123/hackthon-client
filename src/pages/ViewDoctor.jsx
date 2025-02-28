import BookAppointmentDrawer from "@/components/customeComponents/BookAppointmentDrawer";
import DoctorCard from "@/components/customeComponents/DoctorCard";
import { useGetDoctorByIdQuery } from "@/rtkQuery/auth";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
const ViewDoctor = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetDoctorByIdQuery({ id });

  const handleBookAppointment = (formData) => {
    console.log(formData);
  };

  const [formData, setFormData] = useState({
    name: "",
    problem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    alert("Your problem has been submitted!");
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="w-full py-8">
      <div className="flex flex-col h-auto md:flex-row border md:items-center rounded-lg  p-4 bg-white w-full mx-auto gap-4">
        <div className="flex-shrink-0 flex justify-start md:justify-start p-4">
          <img
            src={data?.image || "https://i.postimg.cc/tJXSxHbp/d5.webp"}
            alt={data?.name}
            className="w-44 h-44 md:w-40 md:h-40 object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center p-4 w-full">
          <h2 className="text-2xl font-semibold flex items-center gap-1">
            {data?.name} <FaCheckCircle className="text-blue-500" />
          </h2>
          <p className="text-gray-600">
            {data?.specialization} | {data?.qualification?.map((q) => q)}
            <span className="bg-gray-200 text-sm px-2 py-1 rounded-md">
              {data?.experience} years of experience
            </span>
          </p>
          <div className="mt-2">
            <p className="font-medium flex items-center gap-1">
              About <FaInfoCircle className="text-gray-500" />
            </p>
            <p className="text-gray-500 text-sm mt-1 max-w-xl">
              {data?.description}
            </p>
          </div>
          <p className="text-lg font-semibold mt-4">
            Appointment fee:{" "}
            <span className="text-black">₹ {data?.consultationFee}</span>
          </p>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg border my-4 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Describe Your Problem
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium text-gray-700">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                  required
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Body Problem:
                </label>
                <textarea
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                  required
                ></textarea>
              </div>

              <BookAppointmentDrawer
                handleBookAppointment={handleBookAppointment}
                doctorId={data?.userId}
              />
            </form>
          </div>
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
