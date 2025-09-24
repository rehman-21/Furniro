import type React from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { BiSolidPhone } from "react-icons/bi";

export const ContactInfo: React.FC = () => {
  const Information = [
    {
      id: 1,
      title: "Address",
      info: "236 5th SE Avenue, New  York NY10000, United States",
      icon: <FaMapMarkerAlt />,
    },
    {
      id: 2,
      title: "Phone",
      mobile: "+1 234 567 890",
      hotline: "+1 234 567 890",
      icon: <BiSolidPhone size={22} />,
    },
    {
      id: 3,
      title: "Working Time",
      start: "Monday-Friday: 9:00 - 22:00",
      end: "Saturday-Sunday: 10:00 - 21:00",
      icon: <FaClock size={20} />,
    },
  ];
  return (
    <>
      <div>
        {Information.map((item) => (
          <div key={item.id} className="flex items-start mb-6">
            <div className="text-2xl text-black mr-6 pt-2 mb-20">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className=" w-50">{item.info}</p>
              <p className=" w-50">{item.start}</p>
              <p className=" w-50">{item.end}</p>
              {item.mobile && <p className="">Mobile: {item.mobile}</p>}
              {item.hotline && <p className="">Hotline: {item.hotline}</p>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
