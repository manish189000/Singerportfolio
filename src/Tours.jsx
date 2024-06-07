import React from "react";
import { motion } from "framer-motion";
import Concert from "./assets/Concert.jpg";
import Concert2 from "./assets/Concert2.jpg";
import Concert3 from "./assets/Concert3.jpg";

const shows = [
  {
    date: "June 15, 2024",
    venue: "Madison Square Garden",
    location: "New York, NY",
    description:
      "Join us for an unforgettable night at the iconic Madison Square Garden.",
    imageUrl: Concert,
    link: "#",
  },
  {
    date: "July 20, 2024",
    venue: "The Hollywood Bowl",
    location: "Los Angeles, CA",
    description:
      "Experience an amazing performance under the stars at The Hollywood Bowl.",
    imageUrl: Concert2,
    link: "#",
  },
  {
    date: "August 5, 2024",
    venue: "The Fillmore",
    location: "San Francisco, CA",
    description:
      "A night of great music at the legendary Fillmore in San Francisco.",
    imageUrl: Concert3,
    link: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const UpcomingShows = () => {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="absolute inset-0">
        <div
          className="absolute bg-gradient-to-r from-purple-400 to-pink-600 opacity-50 rounded-full w-60 h-60 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-blue-400 to-indigo-600 opacity-50 rounded-full w-60 h-60 bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-green-400 to-teal-600 opacity-50 rounded-full w-60 h-60 top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-yellow-400 to-orange-600 opacity-50 rounded-full w-60 h-60 bottom-1/3 left-1/4 transform -translate-x-1/2 translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-red-400 to-pink-500 opacity-50 rounded-full w-60 h-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-montserrat font-bold text-center text-black mb-8">
          Upcoming Shows
        </h2>
        <div className="flex  flex-wrap justify-center">
          {shows.map((show, index) => (
            <motion.div
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-once="false"
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={show.imageUrl}
                alt={show.venue}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold mb-2">
                  {show.venue}
                </h3>
                <p className="text-gray-600 font-mono">{show.date}</p>
                <p className="text-gray-600 mb-4 font-mono">{show.location}</p>
                <p className="text-gray-700 mb-4 font-mukta">
                  {show.description}
                </p>
                <a
                  href={show.link}
                  className="text-indigo-500 font-mono hover:underline"
                >
                  Get Tickets
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingShows;
