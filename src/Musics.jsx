import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import ma1 from "../src/assets/ma1.webp";
import ma2 from "../src/assets/ma2.jpeg";
import ma3 from "../src/assets/ma3.jpg";
import ma4 from "../src/assets/ma4.webp";
import ma5 from "../src/assets/Song12.jpg";
import ma6 from "../src/assets/Song8.jpg";

const MusicSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="space-y-12 px-4 sm:px-8 lg:px-20 py-8 dark:bg-gray-100 dark:text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute bg-gradient-to-r from-purple-400 to-pink-600 opacity-50 rounded-full w-60 h-60 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate__animated animate__fadeIn"
          style={{ filter: "blur(80px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-blue-400 to-indigo-600 opacity-50 rounded-full w-60 h-60 bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 animate__animated animate__fadeIn"
          style={{ filter: "blur(80px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-green-400 to-teal-600 opacity-50 rounded-full w-60 h-60 top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 animate__animated animate__fadeIn"
          style={{ filter: "blur(80px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-yellow-400 to-orange-600 opacity-50 rounded-full w-60 h-60 bottom-1/3 left-1/4 transform -translate-x-1/2 translate-y-1/2 animate__animated animate__fadeIn"
          style={{ filter: "blur(80px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-red-400 to-pink-500 opacity-50 rounded-full w-60 h-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate__animated animate__fadeIn"
          style={{ filter: "blur(80px)" }}
        ></div>
      </div>

      <h1
        className="text-4xl font-montserrat  font-bold items-center flex w-full justify-center py-5 relative z-10 animate__animated animate__fadeInDown"
        data-aos="fade-down"
      >
        My Latest Collection
      </h1>

      <h2
        className="text-2xl font-bold font-montserrat items-center flex w-full justify-center relative z-10 animate__animated animate__fadeInDown"
        data-aos="fade-down"
      >
        My Latest Audio
      </h2>

      <section className="relative z-10">
        <div className="container justify-center full p-6 space-y-6 sm:space-y-12">
          <div
            className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 animate__animated animate__fadeInUp"
            data-aos="fade-up"
          >
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 animate__animated animate__zoomIn"
              data-aos="zoom-in"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500 animate__animated animate__fadeInUp"
                src={ma1}
                data-aos="fade-up"
              />
              <div className="p-6 space-y-2">
                <h3
                  className="text-2xl font-montserrat font-semibold group-hover:underline group-focus:underline animate__animated animate__fadeIn"
                  data-aos="fade"
                >
                  New Horizons
                </h3>
                <span
                  className="text-xs dark:text-gray-600 animate__animated animate__fadeIn"
                  data-aos="fade"
                >
                  Released: June 1, 2024
                </span>
                <p
                  className="animate__animated animate__fadeIn font-mukta"
                  data-aos="fade"
                >
                  Explore the sonic landscapes of 'New Horizons,' featuring a
                  blend of electronic beats and acoustic melodies. This track
                  takes you on a journey through futuristic soundscapes, with
                  intricate rhythms and lush harmonies.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 animate__animated animate__zoomIn"
              data-aos="zoom-in"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500 animate__animated animate__fadeInUp"
                src={ma2}
                data-aos="fade-up"
              />
              <div className="p-6 space-y-2">
                <h3
                  className="text-2xl font-semibold font-montserrat group-hover:underline group-focus:underline animate__animated animate__fadeIn"
                  data-aos="fade"
                >
                  Acoustic Vibes
                </h3>
                <span
                  className="text-xs dark:text-gray-600 animate__animated animate__fadeIn"
                  data-aos="fade"
                >
                  Released: May 15, 2024
                </span>
                <p
                  className="animate__animated animate__fadeIn font-mukta"
                  data-aos="fade"
                >
                  Enjoy the soothing sounds of 'Acoustic Vibes,' a collection of
                  unplugged and intimate performances. Each track is crafted
                  with delicate guitar work and heartfelt vocals, perfect for a
                  relaxed evening.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 animate__animated animate__zoomIn"
              data-aos="zoom-in"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500 animate__animated animate__fadeInUp"
                src={ma3}
                data-aos="fade-up"
              />
              <div className="p-6 space-y-2">
                <h3
                  className="text-2xl font-semibold font-montserrat group-hover:underline group-focus:underline animate__animated animate__fadeIn"
                  data-aos="fade"
                >
                  Rhythm & Beats
                </h3>
                <span
                  className="text-xs dark:text-gray-600 animate__animated animate__fadeIn font-mono"
                  data-aos="fade"
                >
                  Released: April 30, 2024
                </span>
                <p
                  className="animate__animated animate__fadeIn font-mukta"
                  data-aos="fade"
                >
                  Dive into 'Rhythm & Beats,' a collection of high-energy tracks
                  perfect for any party or workout session. Pulsating rhythms
                  and catchy hooks ensure an electrifying experience that keeps
                  you moving.
                </p>
              </div>
            </a>

            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block animate__animated animate__zoomIn"
              data-aos="zoom-in"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500 animate__animated animate__fadeInUp"
                src={ma4}
                data-aos="fade-up"
              />
              <div className="p-6 space-y-2">
                <h3
                  className="text-2xl font-semibold font-montserrat group-hover:underline group-focus:underline animate__animated animate__fadeIn"
                  data-aos="fade"
                >
                  Chill Out Sessions
                </h3>
                <span
                  className="text-xs dark:text-gray-600 animate__animated animate__fadeIn font-mono"
                  data-aos="fade"
                >
                  Released: April 10, 2024
                </span>
                <p
                  className="animate__animated animate__fadeIn font-mukta"
                  data-aos="fade"
                >
                  Relax with 'Chill Out Sessions,' a mix of mellow tunes and
                  ambient soundscapes. Perfect for unwinding after a long day,
                  this collection offers serene and tranquil music that soothes
                  the soul it is great.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block animate__animated animate__zoomIn"
              data-aos="zoom-in"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500 animate__animated animate__fadeInUp"
                src={ma5}
                data-aos="fade-up"
              />
              <div className="p-6 space-y-2">
                <h3
                  className="text-2xl font-semibold font-montserrat  group-hover:underline group-focus:underline animate__animated animate__fadeIn"
                  data-aos="fade"
                >
                  Live Performances
                </h3>
                <span
                  className="text-xs dark:text-gray-600 animate__animated animate__fadeIn font-mono"
                  data-aos="fade"
                >
                  Released: March 25, 2024
                </span>
                <p
                  className="animate__animated animate__fadeIn font-mukta"
                  data-aos="fade"
                >
                  Experience the energy of 'Live Performances,' capturing the
                  essence of my most memorable concerts. Each track delivers the
                  raw, unfiltered excitement of live music, bringing the concert
                  atmosphere to your ears.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block animate__animated animate__zoomIn"
              data-aos="zoom-in"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500 animate__animated animate__fadeInUp"
                src={ma6}
                data-aos="fade-up"
              />
              <div className="p-6 space-y-2">
                <h3
                  className="text-2xl font-semibold font-montserrat  group-hover:underline group-focus:underline animate__animated animate__fadeIn"
                  data-aos="fade"
                >
                  Studio Sessions
                </h3>
                <span
                  className="text-xs dark:text-gray-600 animate__animated animate__fadeIn font-mono"
                  data-aos="fade"
                >
                  Released: March 5, 2024
                </span>
                <p
                  className="animate__animated animate__fadeIn font-mukta"
                  data-aos="fade"
                >
                  Get a behind-the-scenes look at 'Studio Sessions,' featuring
                  raw and unfiltered recordings from my latest projects. This
                  collection showcases the creative process, with a focus on
                  experimentation and innovation in sound.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MusicSection;
