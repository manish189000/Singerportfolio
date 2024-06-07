import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import L1 from "../assets/l1.jpg";
import L2 from "../assets/l2.jpg";

const Aboutss = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing for the animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="relative dark:bg-gray-100 dark:text-gray-800 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute bg-gradient-to-r from-purple-400 to-pink-600 opacity-50 rounded-full w-80 h-80 lg:w-96 lg:h-96 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-blue-400 to-indigo-600 opacity-50 rounded-full w-80 h-80 lg:w-96 lg:h-96 bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-green-400 to-teal-600 opacity-50 rounded-full w-80 h-80 lg:w-96 lg:h-96 top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-yellow-400 to-orange-600 opacity-50 rounded-full w-80 h-80 lg:w-96 lg:h-96 bottom-1/3 left-1/4 transform -translate-x-1/2 translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-red-400 to-pink-500 opacity-50 rounded-full w-80 h-80 lg:w-96 lg:h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(100px)" }}
        ></div>
      </div>
      <div className="relative container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div data-aos="fade-up">
          <h2 className="text-3xl font-montserrat font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">
            My Musical Journey
          </h2>
          <p className="max-w-3xl font-mukta mx-auto mt-4 text-xl text-center dark:text-gray-600">
            From classical beginnings to contemporary explorations, my musical
            journey has been marked by continuous learning and experimentation.
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-montserrat font-bold tracking-tight sm:text-3xl dark:text-gray-900">
              Versatility and Dynamic Sound
            </h3>
            <p className="mt-3 text-lg font-mukta dark:text-gray-600">
              I specialize in composing, performing, and producing, and my work
              encompasses a wide range of projects, including original
              compositions, live performances, collaborations, and high-quality
              productions.
            </p>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-[black] dark:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium font-montserrat leading-6 dark:text-gray-900">
                    Original Compositions
                  </h4>
                  <p className="mt-2  font-mukta dark:text-gray-600">
                    Explore my original works that span different styles and
                    moods, showcasing my versatility and creativity.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-[black] dark:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium font-montserrat leading-6 dark:text-gray-900">
                    Live Performances
                  </h4>
                  <p className="mt-2 font-mukta dark:text-gray-600">
                    Experience my live shows and recordings that capture the
                    essence of my musical expression and connection with the
                    audience.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-[black] dark:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium font-montserrat leading-6 dark:text-gray-900">
                    Collaborations
                  </h4>
                  <p className="mt-2 font-mukta dark:text-gray-600">
                    Working with other talented artists to create unique and
                    compelling music that blends different styles and
                    influences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="mt-10 lg:mt-0"
            data-aos="fade-left"
          >
            <img
              src={L1}
              alt="Random"
              className="mx-auto dark:bg-gray-500 rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2" data-aos="fade-left">
              <h3 className="text-2xl  font-montserrat font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                Achievements and Highlights
              </h3>
              <p className="mt-3 text-lg font-mukta dark:text-gray-600">
                I have been recognized for my contributions to music with
                several notable achievements, awards, and milestones.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-[black] dark:text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-montserrat font-medium leading-6 dark:text-gray-900">
                      Award 1
                    </h4>
                    <p className="mt-2 font-mukta dark:text-gray-600">
                      Brief description of a notable achievement, award, or
                      milestone.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-[black] dark:text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-montserrat  font-medium leading-6 dark:text-gray-900">
                      Award 2
                    </h4>
                    <p className="mt-2 font-mukta dark:text-gray-600">
                      Another highlight that showcases my skills and
                      accomplishments.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-[black] dark:text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-montserrat font-medium leading-6 dark:text-gray-900">
                      Award 3
                    </h4>
                    <p className="mt-2 font-montserrat dark:text-gray-600">
                      Additional significant recognition or project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1"
              data-aos="fade-right"
            >
              <img
                src={L2}
                alt="Random"
                className="mx-auto dark:bg-gray-500 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutss;
