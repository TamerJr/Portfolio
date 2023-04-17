import React from "react";
import About from '../Components/About/About'
import Portfolio from '../Components/Portfolio/Portfolio'
import Skills from '../Components/Skills/Skills'
import Navbar from '../Components/Navbar/Navbar'
import Header from '../Components/Header/Header'
import Service from "../Components/ServiceSection/Service";
const Home = () => {
  return (
    <div className="Home" >
      <Header />
      <Skills />
      <About />
      <Portfolio />
      <Service/>
    </div >
  );
};

export default Home;
