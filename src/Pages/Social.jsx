import React from "react";
import { FaYoutube, FaSpotify, FaInstagram, FaFacebook } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div className="relative w-full min-h-[50vh] sm:min-h-[40vh] md:min-h-[30vh] bg-gradient-to-r from-white via-white to-white flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute bg-gradient-to-r from-purple-400 to-pink-600 opacity-25 rounded-full w-60 h-60 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(80px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-blue-400 to-indigo-600 opacity-25 rounded-full w-60 h-60 bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"
          style={{ filter: "blur(80px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-green-400 to-teal-600 opacity-25 rounded-full w-60 h-60 top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(80px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-yellow-400 to-orange-600 opacity-25 rounded-full w-60 h-60 bottom-1/3 left-1/4 transform -translate-x-1/2 translate-y-1/2"
          style={{ filter: "blur(80px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-red-400 to-pink-500 opacity-25 rounded-full w-60 h-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(80px)" }}
        ></div>
      </div>
      <div className="parent-social w-full relative z-10">
        <h1 className="text-[6vw] sm:text-[2vw] font-montserrat flex font-extrabold justify-center text-center mb-4">
          Follow us on social media
        </h1>

        <div className="flex justify-center space-x-4">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300 ease-in-out"
          >
            <FaYoutube className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
          </a>
          <a
            href="https://open.spotify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition duration-300 ease-in-out"
          >
            <FaSpotify className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300 ease-in-out"
          >
            <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300 ease-in-out"
          >
            <FaFacebook className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
