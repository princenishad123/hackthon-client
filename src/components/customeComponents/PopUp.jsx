import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

const PopUp = () => {
  const [formData, setFormData] = useState({
    name: "Edward",
    email: "richardjameswap@gmail.cm",
    phone: "+1 123 456 7890",
    address: "57th Cross, Richmond Circle, Church Road, London",
    gender: "Male",
    birthday: "2024-07-20",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
    alert("Profile Updated Successfully!");
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="w-full mx-auto   rounded-lg">
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              {/* Email (Read-only) */}

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="2"
                  className="w-full p-2 border h-24 resize-none border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                ></textarea>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Birthday */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Birthday
                </label>
                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 justify-center mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Save Changes
                </button>
                <button
                  type="reset"
                  className="px-4 py-2 border border-gray-400 text-gray-600 rounded-lg hover:bg-gray-200 transition"
                  onClick={() =>
                    setFormData({
                      name: "Edward Vincent",
                      email: "richardjameswap@gmail.com",
                      phone: "+1 123 456 7890",
                      address:
                        "57th Cross, Richmond Circle, Church Road, London",
                      gender: "Male",
                      birthday: "2024-07-20",
                    })
                  }
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PopUp;
