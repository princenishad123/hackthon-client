import BookAppointmentDrawer from "@/components/customeComponents/BookAppointmentDrawer";
import DoctorCard from "@/components/customeComponents/DoctorCard";
import { useGetDoctorByIdQuery } from "@/rtkQuery/auth";
import { Loader } from "lucide-react";
import React from "react";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
const ViewDoctor = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetDoctorByIdQuery({ id });
  if (isLoading) {
    return <Loader />;
  }

  const handleBookAppointment = (formData) => {
    console.log(formData);
  };
  return (
    <div className="w-full py-8">
      <div className="flex flex-col h-72 md:flex-row border md:items-center rounded-lg  p-4 bg-white w-full mx-auto gap-4">
        <div className="flex-shrink-0 flex justify-start md:justify-start p-4">
          <img
            src={
              data?.image ||
              "https://purepng.com/public/uploads/thumbnail/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitionermale-doctornotepad-1421526856962nfokf.png"
            }
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

          <BookAppointmentDrawer
            handleBookAppointment={handleBookAppointment}
            doctorId={data?.userId}
          />
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
