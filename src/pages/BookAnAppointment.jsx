import BookAppointmentDrawer from "@/components/customeComponents/BookAppointmentDrawer";
import React, { useState } from "react";

const BookAnAppointment = () => {
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
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
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

          <BookAppointmentDrawer type="button" className="w-full" />
        </form>
      </div>
    </div>
  );
};

export default BookAnAppointment;
