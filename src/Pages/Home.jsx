import React from "react";
import Nav from "../Navfooter/Nav";
import Hero from "../Hero";
import Abouts from "../Components/About";
import StatsCard from "../Strem";
import Upcoming from "../Tours";
import Testmonial from "../Testimonial";

import Musics from "../Musics";

import Footer from "../Navfooter/Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Abouts />
      <Musics />
      <StatsCard />
      <Upcoming />
      <Testmonial />
      <Footer />
    </>
  );
};

export default Home;
