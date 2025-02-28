import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto p-8 min-h-screen">
      <div className="text-center mt-16 mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          CONTACT <span className="text-blue-600">US</span>
        </h2>
        <p className="text-gray-600">
          We're here to help and answer any questions you might have
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 transition-transform duration-300 hover:scale-105">
          <img
            src="https://www.pngarts.com/files/3/Female-Doctor-Transparent-Background-PNG.png"
            alt="Contact Us"
            className="w-[600px] h-[600px] object-contain rounded-lg "
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 text-gray-700 p-6 bg-white rounded-lg ">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            OUR OFFICE
          </h3>
          <div className="space-y-3">
            <p className="flex items-center">
              <span className="font-semibold mr-2">Address:</span> 54709 Willms
              Station, Suite 350, Washington, USA
            </p>
            <p className="flex items-center">
              <span className="font-semibold mr-2">Tel:</span>
              <a
                href="tel:+14155550132"
                className="text-blue-600 hover:text-blue-800"
              >
                (415) 555-0132
              </a>
            </p>
            <p className="flex items-center">
              <span className="font-semibold mr-2">Email:</span>
              <a
                href="mailto:greatstackdev@gmail.com"
                className="text-blue-600 hover:text-blue-800"
              >
                greatstackdev@gmail.com
              </a>
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              CAREERS AT PRESCRIPTO
            </h3>
            <p className="mb-6">
              Join our innovative team and make a difference in healthcare.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 flex items-center">
              <span>Explore Jobs</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
