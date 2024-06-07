import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import Singer from "./assets/Singers.webp";

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
};

const Hero = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const screenWidth = useScreenWidth();

  const handleBrowseMusicClick = () => {
    setTimeout(() => {
      navigate("/music");
    }, 0);
  };

  return (
    <section className="relative overflow-hidden">
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
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 relative z-10">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className=" text-lg text-indigo-600 font-medium">
            Discover Music for Everyone
          </h1>
          <h2 className="text-4xl py-10 text-gray-800 font-extrabold mx-auto md:text-5xl">
            Explore the world's largest music collection{" "}
            {screenWidth > 768 ? ( // Display typing effect only on screens wider than 768px
              <span className="text-transparent  bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                <ReactTypingEffect
                  text={["featuring your favorite singers"]}
                  speed={100}
                  eraseDelay={2000}
                  typingDelay={500}
                />
              </span>
            ) : (
              <span className="text-transparent  bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                featuring your favorite singers
              </span>
            )}
          </h2>
          <p className="max-w-2xl mx-auto">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="javascript:void(0)"
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              onClick={handleBrowseMusicClick} // Add onClick event
            >
              Browse Music
            </a>
          </div>
        </div>
        <div className="mt-14">
          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="false"
            src={Singer}
            className="w-full h-[100vh] shadow-lg rounded-lg border object-cover" // Increased height here
            alt="Singers"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
