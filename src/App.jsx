import React, { useState } from "react";

import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
function App() {
  const [width,setWidth]=useState(window.innerWidth)
  window.addEventListener("resize", () => {
    let newWidth=window.innerWidth;
    setWidth(newWidth)
    console.log(newWidth)
  });
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectsdetails/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
      <WhatsAppWidget phoneNumber="+2001555652214" />
      <div className="Socials">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ahmed-tamer-jr/"
          className="LinkedIn"
        >
          <BsLinkedin
            size={width > 540  ? 30 : 15}
            className="SocialIcons"
          />
        </a>
        <a target="_blank" href="https://github.com/TamerJr" className="Github">
          <BsGithub
            size={width > 540 ? 30 : 15}
            className="SocialIcons"
          />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/Tamer_Jr_"
          className="Twitter"
        >
          <AiFillTwitterCircle
            size={width > 540 ? 35 : 18}
            className="SocialIcons"
          />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100028308230428"
          className="Facebook"
        >
          <BsFacebook
            size={width > 540 ? 30 : 15}
            className="SocialIcons"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
