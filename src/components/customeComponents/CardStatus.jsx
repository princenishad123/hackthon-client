import React from "react";
import { ArrowUp } from "lucide-react";
const CardStatus = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-60 flex flex-col relative border border-gray-200">
      {/* Left Border Indicator */}
      <div className="absolute left-0 top-4 bottom-4 w-1 bg-blue-500 rounded-r-lg"></div>

      {/* Content Section */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">Customers</p>
          <h2 className="text-2xl font-semibold">1.456</h2>
        </div>

        {/* Icon */}
        <div className="bg-gray-100 p-2 rounded-xl">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/conference-call.png"
            alt="customers-icon"
            className="w-6 h-6 opacity-60"
          />
        </div>
      </div>

      {/* Growth Section */}
      <div className="flex items-center text-green-500 mt-2 text-sm">
        <ArrowUp size={16} />
        <span className="ml-1 font-medium">+6.5%</span>
        <span className="text-gray-400 ml-1">Since last week</span>
      </div>
    </div>
  );
};

export default CardStatus;
