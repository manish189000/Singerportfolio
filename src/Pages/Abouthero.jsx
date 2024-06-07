import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import SingerAbout from "../assets/SingerAbout.jpg";

const AboutHero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing for the animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  const handleListenNowClick = () => {
    navigate("/music"); // Adjust the path as needed
  };

  return (
    <div className="relative text-black py-24 px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div
          className="absolute bg-gradient-to-r from-purple-400 to-pink-600 opacity-50 rounded-full w-80 h-80 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-blue-400 to-indigo-600 opacity-50 rounded-full w-80 h-80 bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-green-400 to-teal-600 opacity-50 rounded-full w-80 h-80 top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-yellow-400 to-orange-600 opacity-50 rounded-full w-80 h-80 bottom-1/3 left-1/4 transform -translate-x-1/2 translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-red-400 to-pink-500 opacity-50 rounded-full w-80 h-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
      </div>

      <div className="relative flex flex-col items-center lg:flex-row lg:items-center lg:justify-between max-w-7xl mx-auto">
        <div
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10"
          data-aos="fade-right"
        >
          <h1 className="text-5xl font-montserrat font-extrabold mb-6 leading-tight">
            Meet the Artist{" "}
            <span className="text-[#FAD5A9] font-extrabold">John Doe</span>
          </h1>
          <p className="text-lg mb-6 font-mukta">
            John Doe is a passionate singer and songwriter known for his soulful
            voice and heartfelt lyrics. With a background in classical music and
            a love for contemporary styles, John brings a unique blend of old
            and new to his performances. His journey in music has been driven by
            a deep connection to his craft and a desire to inspire others
            through his art.
          </p>
          <p className="text-lg mb-6 font-mukta">
            John's musical journey began at a young age, influenced by legendary
            artists like Freddie Mercury and Nina Simone. He honed his skills by
            performing in local venues and participating in various music
            competitions. His dedication and talent quickly garnered attention,
            leading to opportunities to collaborate with renowned musicians and
            producers.
          </p>
          <p className="text-lg mb-6 font-mukta">
            Throughout his career, John has always aimed to push the boundaries
            of his creativity. His music is characterized by a fusion of
            different genres, reflecting his diverse influences and innovative
            spirit. Each song he writes is a personal reflection, capturing the
            emotions and experiences that have shaped him as an artist.
          </p>
          <p className="text-lg mb-6 font-mukta">
            Looking to the future, John is excited to continue evolving as an
            artist. He plans to release new music that explores deeper themes
            and showcases his growth. His ultimate goal is to create a lasting
            impact on the music industry and to inspire upcoming generations of
            artists.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button
              className="bg-[#4F46E5] text-white py-3 px-6 rounded-lg font-bold mr-4 transition duration-300"
              onClick={handleListenNowClick}
            >
              Listen Now
            </button>
            <button className="bg-white text-gray-900 py-3 px-6 rounded-lg font-bold border border-transparent hover:bg-gray-200 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center" data-aos="fade-left">
          <img
            src={SingerAbout}
            alt="John Doe"
            className="rounded-lg shadow-2xl max-w-full h-auto transform hover:scale-105 transition duration-500"
            style={{ maxHeight: "600px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
