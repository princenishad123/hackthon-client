import DoctorCard from "@/components/customeComponents/DoctorCard";
import HowItsWorks from "@/components/customeComponents/HowItsWorks";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-full flex min-h-[75vh] items-center justify-evenly flex-wrap">
        <div className="lg:w-2/4  max-lg:flex flex-col max-lg:items-center">
          <h2 className="text-6xl max-md:text-4xl my-4 max-sm:px-4 font-bold max-lg:text-center">
            Find a <span className="text-blue-500">Doctor</span> and book an
            <span className="text-blue-500 mx-auto"> appointment</span>
          </h2>

          <p className="my-8 max-lg:text-center">
            Book Appointment: A seamless and AI-powered appointment booking
            system that allows patients to schedule consultations with doctors
            based on real-time availability. It integrates smart scheduling,
            automated reminders, and AI-based recommendations to optimize doctor
            availability and reduce wait times. 🚀
          </p>

          <Button className="bg-blue-600 px-8 py-2 ">
            Book an Appointment
          </Button>
        </div>
        <div>
          <img
            className="w-96 "
            src="https://www.pngitem.com/pimgs/m/515-5151063_our-story-medical-doctor-hd-png-download.png"
            alt=""
          />
        </div>
      </div>

      {/* how its works */}

      <section className="my-8">
        <div className="w-full h-auto">
          <h2 className="text-2xl font-bold text-center">How its works</h2>
          <p className="text-center md:w-2/4 mx-auto my-4">
            Book Appointment: A seamless and AI-powered <br /> appointment
            booking system that allows patients to schedule.
          </p>

          <div className="flex justify-evenly items-center flex-wrap my-14">
            <HowItsWorks />
          </div>
        </div>
      </section>

      {/* top doctors */}
      <section className="w-full my-16">
        <h1 className="text-center text-2xl font-semibold">
          Top Doctors to book
        </h1>
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

      {/* book appointment with 100% trusted */}

      <div className="w-5/6 my-12 bg-blue-700 rounded-xl h-auto mx-auto flex items-center justify-around ">
        <div className="w-2/4 ">
          <h1 className="text-4xl font-bold text-white">
            Book an appointment <br /> with 100% trusted doctors
          </h1>

          <Button className="bg-white hover:bg-slate-100 text-black rounded-md px-4 py-2 my-4">
            Create an account
          </Button>
        </div>
        <div className="h-full flex items-end pt-4 ">
          <img
            src="https://purepng.com/public/uploads/thumbnail/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitionermale-doctornotepad-1421526856962nfokf.png"
            alt=""
            className="w-full object-cover  relative bottom-0"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
