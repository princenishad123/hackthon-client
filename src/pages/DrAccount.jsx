import React, { useState } from "react";
import { FaCamera, FaEdit, FaSave, FaTimes } from "react-icons/fa";

const DrAccount = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Dr. Edward Vincent",
    email: "dr.edward@example.com",
    phone: "+1 987 654 3210",
    address: "57th Cross, Richmond Circle, London",
    specialization: "Cardiologist",
    hospital: "Royal London Hospital",
    experience: "10",
    consultationFee: "100",
    availability: "Monday - Friday (9 AM - 5 PM)",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleEdit = () => {
    setEditedProfile(profile);
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e, field) => {
    setEditedProfile({ ...editedProfile, [field]: e.target.value });
  };

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedProfile({ ...editedProfile, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const InputField = ({ label, type, value, field }) => (
    <div className="mt-3">
      <span className="block text-gray-700 font-semibold">{label}</span>
      {isEditing ? (
        <input
          type={type}
          className="mt-1 w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          value={value}
          onChange={(e) => handleInputChange(e, field)}
        />
      ) : (
        <p className="mt-1 text-gray-600">{value}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 border border-gray-300">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <div className="relative group">
            <img
              src={editedProfile.image}
              alt="Doctor Profile"
              className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-lg transition-transform transform hover:scale-105"
            />
            {isEditing && (
              <label className="absolute bottom-2 right-2 bg-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-600 transition">
                <FaCamera className="text-white" />
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                  accept="image/*"
                />
              </label>
            )}
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            {profile.name}
          </h2>
          <p className="text-gray-500">Doctor ID: #DR12345</p>
        </div>

        {/* Contact Information */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2">
            Contact Information
          </h3>
          <div className="mt-4">
            <InputField
              label="Email"
              type="email"
              value={editedProfile.email}
              field="email"
            />
            <InputField
              label="Phone"
              type="tel"
              value={editedProfile.phone}
              field="phone"
            />
            <InputField
              label="Address"
              type="text"
              value={editedProfile.address}
              field="address"
            />
          </div>
        </div>

        {/* Doctor Information */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2">
            Doctor Information
          </h3>
          <div className="mt-4">
            <InputField
              label="Specialization"
              type="text"
              value={editedProfile.specialization}
              field="specialization"
            />
            <InputField
              label="Hospital Name"
              type="text"
              value={editedProfile.hospital}
              field="hospital"
            />
            <InputField
              label="Years of Experience"
              type="number"
              value={editedProfile.experience}
              field="experience"
            />
            <InputField
              label="Consultation Fee ($)"
              type="number"
              value={editedProfile.consultationFee}
              field="consultationFee"
            />
            <InputField
              label="Availability"
              type="text"
              value={editedProfile.availability}
              field="availability"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={handleEdit}
            className="flex items-center px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
          >
            {isEditing ? (
              <FaTimes className="mr-2" />
            ) : (
              <FaEdit className="mr-2" />
            )}
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
          {isEditing && (
            <button
              onClick={handleSave}
              className="flex items-center px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              <FaSave className="mr-2" />
              Save Changes
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrAccount;
