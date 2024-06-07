import React from "react";
import { Link } from "react-router-dom";
import Aboutss from "../assets/About.webp";

const About = () => {
  return (
    <section className="relative max-w-screen-xl mx-auto   pb-32 px-4 md:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
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
      <div className="relative z-10 gap-5 items-center lg:flex">
        <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
          <h3 className="text-3xl font-mukta text-gray-800 font-semibold md:text-4xl">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              Sam's Music Portfolio
            </span>
          </h3>
          <p className="text-gray-500  leading-relaxed mt-3 font-Ostwad">
            Hi, I'm Sam, a passionate singer and songwriter with a love for
            crafting melodies and lyrics that resonate with the soul. My journey
            in music started at a young age, and over the years, I have honed my
            craft to bring out the best in my voice and compositions. Explore my
            portfolio to discover my latest tracks, live performances, and
            collaborations. Let the music speak to you.
          </p>
          <Link
            to="/music"
            className="mt-5 px-4 py-2 text-[#6040E5] font-medium bg-indigo-50 rounded-full inline-flex items-center"
          >
            Try it out
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1 duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
        <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
          <img
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-once="false"
            src={Aboutss}
            alt="About Sam"
            className="w-full rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
