import React from "react";
import S1 from "../assets/S1.jpg";
import S2 from "../assets/pub1.jpg";
import S3 from "../assets/pub2.jpg";
import S4 from "../assets/pub3.webp";

const PressReview = () => {
  const reviews = [
    {
      logo: S2,
      link: "https://example.com/review1",
      text: "Amazing performance and stunning vocals!",
    },
    {
      logo: S3,
      link: "https://example.com/review2",
      text: "A star in the making, captivating audiences worldwide.",
    },
    {
      logo: S4,
      link: "https://example.com/review3",
      text: "An unforgettable experience with a remarkable talent.",
    },
  ];

  return (
    <section className="relative press-review bg-gray-50 py-12 overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute bg-gradient-to-r from-purple-400 to-pink-600 opacity-50 rounded-full w-80 h-80 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-blue-400 to-indigo-600 opacity-50 rounded-full w-80 h-80 bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 animate-pulse"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-green-400 to-teal-600 opacity-50 rounded-full w-80 h-80 top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 animate-pulse"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-yellow-400 to-orange-600 opacity-50 rounded-full w-80 h-80 bottom-1/3 left-1/4 transform -translate-x-1/2 translate-y-1/2 animate-pulse"
          style={{ filter: "blur(100px)" }}
        ></div>
        <div
          className="absolute bg-gradient-to-r from-red-400 to-pink-500 opacity-50 rounded-full w-80 h-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
          style={{ filter: "blur(100px)" }}
        ></div>
      </div>
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12">
          <img
            src={S1}
            alt="Singer's Professional Photo"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h1 className="text-4xl font-bold mb-4 font-montserrat">
            Press & Media
          </h1>
          <p className="text-lg text-gray-700  font-mukta">
            Discover the buzz around our music and the accolades from renowned
            publications.
          </p>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4 font-mukta">
            Featured Reviews
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg transform transition-transform hover:scale-105"
            >
              <img
                src={review.logo}
                alt="Publication Logo"
                className="h-16 mx-auto mb-4"
              />
              <p className="text-gray-700 mb-4">{review.text}</p>
              <a
                href={review.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-mukta"
              >
                Read Full Review
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressReview;
