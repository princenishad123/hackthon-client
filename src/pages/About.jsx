import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 ">
      {/* About Us Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          ABOUT <span className="text-blue-600">US</span>
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://www.pngarts.com/files/3/Female-Doctor-Transparent-Background-PNG.png"
            alt="Doctors"
            className="rounded-lg shadow-2xl w-96 ml-52 h-auto"
          />
        </div>
        <div className="md:w-1/2 text-gray-700 space-y-6">
          <p className="text-lg leading-relaxed">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p className="text-lg leading-relaxed">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              Our Vision
            </h3>
            <p className="text-lg">
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center mt-20 mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          WHY <span className="text-blue-600">CHOOSE US</span>
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "EFFICIENCY",
            description:
              "Streamlined appointment scheduling that fits into your busy lifestyle.",
            icon: "⚡",
          },
          {
            title: "CONVENIENCE",
            description:
              "Access to a network of trusted healthcare professionals in your area.",
            icon: "🏥",
          },
          {
            title: "PERSONALIZATION",
            description:
              "Tailored recommendations and reminders to help you stay on top of your health.",
            icon: "👤",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="border p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
