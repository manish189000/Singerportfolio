import React from "react";

import A1 from "../assets/A1.jpg";
import A2 from "../assets/A2.avif";
import A3 from "../assets/A3.avif";
import A4 from "../assets/A4.jpg";
import A5 from "../assets/A5.jpg";
import A6 from "../assets/A6.jpg";

const albums = [
  {
    title: "Album One",
    releaseDate: "2023-01-01",
    cover: A1,
    genre: "Pop",
    description:
      "A captivating collection of pop tracks with infectious melodies.",
  },
  {
    title: "Album Two",
    releaseDate: "2022-06-15",
    cover: A2,
    genre: "Rock",
    description:
      "A powerful rock album with heavy guitar riffs and energetic vocals.",
  },
  {
    title: "Album Three",
    releaseDate: "2021-09-30",
    cover: A3,
    genre: "Jazz",
    description: "Smooth and relaxing jazz tunes to wind down your day.",
  },
  {
    title: "Album Four",
    releaseDate: "2020-04-20",
    cover: A4,
    genre: "Classical",
    description:
      "A timeless classical music collection featuring orchestral masterpieces.",
  },
  {
    title: "Album Five",
    releaseDate: "2019-11-11",
    cover: A5,
    genre: "Hip-Hop",
    description:
      "A groundbreaking hip-hop album with innovative beats and powerful lyrics.",
  },
  {
    title: "Album Six",
    releaseDate: "2018-08-08",
    cover: A6,
    genre: "Electronic",
    description:
      "A vibrant electronic album with cutting-edge soundscapes and rhythms.",
  },
];

const AlbumPortfolio = () => {
  return (
    <div className="relative bg-gradient-to-r from-white to-gray-100 min-h-screen p-8 overflow-x-hidden">
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
      <div className="relative container mx-auto">
        <h2 className="text-4xl font-montserrat font-bold text-black mb-8 text-center">
          Albums & EPs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <div
              key={index}
              className="group relative p-4 bg-white bg-opacity-20 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <img
                src={album.cover}
                alt={album.title}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-md transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-mukta md:text-2xl font-semibold text-black">
                  {album.title}
                </h3>
                <p className="text-gray-800 font-mono">{album.releaseDate}</p>
                <p className="text-gray-700 font-mono italic">{album.genre}</p>
                <p className="text-gray-900  font-mono mt-2">
                  {album.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumPortfolio;
