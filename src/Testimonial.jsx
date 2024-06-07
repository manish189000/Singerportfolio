const Testmonial = () => {
  return (
    <section className="relative overflow-hidden">
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
      <div className="container px-6 py-12 mx-auto relative z-10">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold font-montserrat">
              Inspiring Musical Journeys
            </h2>
            <p className="dark:text-gray-600 font-mukta">
              Discover how our music portfolio has transformed the careers of
              talented artists around the world.
            </p>
          </div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md dark:bg-gray-50 font-mukta">
                  <p>
                    "Working with this portfolio has been a game-changer for my
                    music career. The exposure and opportunities I've received
                    have surpassed all my expectations."
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/51x51/?portrait,music"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold font-montserrat">
                        Alex Johnson
                      </p>
                      <p className="text-sm dark:text-gray-600 font-mono">
                        Independent Artist
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md dark:bg-gray-50 font-mukta">
                  <p>
                    "The portfolio provided me with a platform to showcase my
                    work to a broader audience. The support and feedback have
                    been invaluable."
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/52x52/?portrait,music"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold font-montserrat">
                        Taylor Smith
                      </p>
                      <p className="text-sm dark:text-gray-600 font-mono">
                        Music Producer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md dark:bg-gray-50 font-mukta">
                  <p>
                    "This portfolio has connected me with industry professionals
                    who have helped me grow as an artist. The resources
                    available are top-notch."
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/53x53/?portrait,music"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold font-montserrat">
                        Jordan Lee
                      </p>
                      <p className="text-sm dark:text-gray-600 font-mono">
                        Singer-Songwriter
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md dark:bg-gray-50 font-mukta">
                  <p>
                    "Being part of this portfolio has allowed me to collaborate
                    with other talented musicians and producers. It's been an
                    incredible journey."
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/54x54/?portrait,music"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold font-montserrat">
                        Chris Martinez
                      </p>
                      <p className="text-sm dark:text-gray-600 font-mono">
                        Instrumentalist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testmonial;
