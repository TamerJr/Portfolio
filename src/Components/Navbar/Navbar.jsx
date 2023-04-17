import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillCloseCircle } from "react-icons/ai";
import CV from "../../assets/CV.pdf";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  window.addEventListener("scroll", () => {
    let navbar = document.getElementById("Navbar");

    navbar.classList.toggle("StickyBoy", window.scrollY > 0);
  });
  return (
    <nav id="Navbar">
      <Link to="/">
        <img src={Logo} alt="logo" title="TamerJr" className="Logo" />
      </Link>
      <div className="Navigation-Desktop">
        <ul className="Navigation-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a
              href="../#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a href="../#services" >
              Service
            </a>
          </li>
          <li>
            <a href="../#portfolio">Portfolio</a>
          </li>
        </ul>
      </div>
      <a
        href={CV}
        download="TamerCV"
        className="downloadButton download-Button-Desktop "
      >
        Download
      </a>
      <div className="Toggle-mobile-menu">
        <RxHamburgerMenu size={25} onClick={handleToggle} />
      </div>

      {/* Mobile Menu */}

      {toggle && (
        <div className="Mobile-menu">
          <AiFillCloseCircle onClick={handleToggle} size={25} color="white" />
          <ul className="Mobile-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="../#skills">Skills</a>
            </li>
            <li>
              <a href="../#servics">Service</a>
            </li>
            <li>
              <a href="../#portfolio">Portfolio</a>
            </li>
            <li className="DownloadCVList">
              <a href={CV} download="TamerCV" className="downloadButton">
                Download
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
