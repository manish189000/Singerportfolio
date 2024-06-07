import React from "react";

import Song1 from "../assets/Song1.jpeg";
import Song2 from "../assets/Song2.jpg";
import Song3 from "../assets/Song3.jpeg";
import Song4 from "../assets/Song4.jpeg";
import Song5 from "../assets/Song5.jpg";
import Song6 from "../assets/Song6.jpeg";
import Song7 from "../assets/Song7.jpg";
import Song8 from "../assets/Song8.jpg";
import Song9 from "../assets/Song9.jpg";
import Song10 from "../assets/Song10.jpg";
import Song11 from "../assets/Song11.jpg";
import Song12 from "../assets/Song12.jpg";

import { Fade } from "react-awesome-reveal";

const songsData = [
  {
    id: 1,
    title: "Song 1",
    duration: "3:45",
    releaseDate: "2023-01-01",
    albumCover: Song1,
  },
  {
    id: 2,
    title: "Song 2",
    duration: "4:20",
    releaseDate: "2023-02-01",
    albumCover: Song2,
  },
  {
    id: 3,
    title: "Song 3",
    duration: "3:50",
    releaseDate: "2023-03-01",
    albumCover: Song3,
  },
  {
    id: 4,
    title: "Song 4",
    duration: "4:15",
    releaseDate: "2023-04-01",
    albumCover: Song4,
  },
  {
    id: 5,
    title: "Song 5",
    duration: "5:00",
    releaseDate: "2023-05-01",
    albumCover: Song5,
  },
  {
    id: 6,
    title: "Song 6",
    duration: "3:30",
    releaseDate: "2023-06-01",
    albumCover: Song6,
  },
  {
    id: 7,
    title: "Song 7",
    duration: "4:05",
    releaseDate: "2023-07-01",
    albumCover: Song7,
  },
  {
    id: 8,
    title: "Song 8",
    duration: "3:55",
    releaseDate: "2023-08-01",
    albumCover: Song8,
  },
  {
    id: 9,
    title: "Song 9",
    duration: "4:10",
    releaseDate: "2023-09-01",
    albumCover: Song9,
  },
  {
    id: 10,
    title: "Song 10",
    duration: "4:00",
    releaseDate: "2023-10-01",
    albumCover: Song10,
  },
  {
    id: 11,
    title: "Song 11",
    duration: "3:35",
    releaseDate: "2023-11-01",
    albumCover: Song11,
  },
  {
    id: 12,
    title: "Song 12",
    duration: "4:25",
    releaseDate: "2023-12-01",
    albumCover: Song12,
  },
];

const AlbumSongs = () => {
  return (
    <div className="relative container mx-auto p-4 sm:px-6 md:px-12 lg:px-20 xl:px-36 overflow-x-hidden">
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
      <h1 className="relative text-3xl font-bold mb-6 text-center z-10">
        Album Songs
      </h1>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 z-10 overflow-hidden">
        {songsData.map((song) => (
          <Fade key={song.id} triggerOnce>
            <div className="relative p-4 border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <img
                src={song.albumCover}
                alt={song.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-2xl font-semibold text-white">
                  {song.title}
                </h2>
                <p className="text-white mt-2">Duration: {song.duration}</p>
                <p className="text-white">Release Date: {song.releaseDate}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default AlbumSongs;
