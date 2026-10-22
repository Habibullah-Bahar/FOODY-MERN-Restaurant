import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import About from "./About";
import Qualities from "../components/Qualities/Qualities";
import PopularMenu from "../components/Menu/PopularMenu";
import Details from "../components/Details/Details";
import Team from "../components/Team/Team";
import Reservation from "../components/Reservation/Reservation";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="font-[Oswald] overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <Qualities />
      <PopularMenu />
      <Details />
      <Team />
      <Reservation />
      <Footer />
    </div>
  );
};

export default Home;
