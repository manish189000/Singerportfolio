import React from "react";

const SubscribeSection = () => {
  return (
    <div className="w-full dark:bg-gray-800 bg-gray-200">
      <div className="container flex flex-col items-center justify-center py-20 mx-auto md:py-28">
        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl dark:text-white">
          Get Our Updates
        </h1>
        <p className="pt-2 pb-8 text-xl text-center dark:text-gray-400">
          Find out about events and other news
        </p>
        <div className="flex flex-col sm:flex-row w-full max-w-lg">
          <input
            type="text"
            placeholder="example@email.com"
            className="w-full p-3 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none sm:rounded-tl-lg sm:rounded-bl-lg sm:rounded-br-none dark:bg-gray-700 dark:text-gray-300"
          />
          <button
            type="button"
            className="w-full p-3 font-semibold rounded-b-lg sm:rounded-r-lg sm:rounded-br-lg sm:rounded-bl-none dark:bg-violet-600 dark:text-gray-50 bg-violet-500 text-white"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
