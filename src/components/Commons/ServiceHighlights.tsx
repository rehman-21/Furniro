import React from "react";
import {  FaShippingFast, FaHeadset } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { GrTrophy } from "react-icons/gr";
import { GoVerified } from "react-icons/go";

export const ServiceHighlights: React.FC = () => {
  const highlights = [
    {
      icon: <GrTrophy className="text-3xl text-gray-700" />,
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      icon: <GoVerified className="text-3xl text-gray-700" />,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: <FaShippingFast className="text-3xl text-gray-700" />,
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      icon: <FaHeadset className="text-3xl text-gray-700" />,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <div className="w-full bg-[#fdfaf6] py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center space-x-3"
          >
            <div>{item.icon}</div>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm font-semibold text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
