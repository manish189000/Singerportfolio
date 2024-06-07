import React, { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  { id: 1, icon: "🎵", value: 10000, label: "Songs Played" },
  { id: 2, icon: "🎤", value: 500, label: "Artists Featured" },
  { id: 3, icon: "🎧", value: 750, label: "Playlists Created" },
  { id: 4, icon: "⭐", value: 4.8, label: "Average Rating" },
];

const StatsCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative overflow-hidden  py-11 p-4 bg-gray-100 text-gray-900">
      <div className="absolute inset-0">
        <div
          className="absolute bg-gradient-to-r from-purple-400 to-pink-600 opacity-50 rounded-full w-60 h-60 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(80px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-blue-400 to-indigo-600 opacity-50 rounded-full w-60 h-60 bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"
          style={{ filter: "blur(80px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-green-400 to-teal-600 opacity-50 rounded-full w-60 h-60 top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(80px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-yellow-400 to-orange-600 opacity-50 rounded-full w-60 h-60 bottom-1/3 left-1/4 transform -translate-x-1/2 translate-y-1/2"
          style={{ filter: "blur(80px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-red-400 to-pink-500 opacity-50 rounded-full w-60 h-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(80px)" }}
        ></div>
      </div>
      <h2 className="text-3xl font-bold font-montserrat text-center mb-6 relative z-10">
        Our Statistics
      </h2>
      <div className="flex flex-col font-Ostwad  md:flex-row md:space-x-4 space-y-4 md:space-y-0 relative z-10">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex-1 p-4 bg-white rounded-lg text-center shadow-md"
            data-aos="fade-up"
          >
            <div className="text-4xl">{stat.icon}</div>
            <div className="text-2xl font-mukta font-bold mt-2">
              <CountUp
                end={stat.value}
                duration={2}
                decimals={stat.id === 4 ? 1 : 0}
              />
            </div>
            <div className="mt-1 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;
