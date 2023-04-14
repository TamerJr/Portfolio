import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillCloseCircle } from "react-icons/ai";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  console.log(toggle)
  return (
    <nav>
      <img src={Logo} alt="logo" title="TamerJr" className="Logo" />
      <div className="Navigation-Desktop">
        <ul className="Navigation-list">
          <li>Home</li>
          <li>Skills</li>
          <li>Service</li>
          <li>Portfolio</li>
        </ul>
      </div>
      <a href="./" download className="download-Button-Desktop">
        Download
      </a>
      <div className="Toggle-mobile-menu">
        <RxHamburgerMenu size={25} onClick={handleToggle}/>
      </div>

      {/* Mobile Menu */}

        {toggle && 
      <div className="Mobile-menu">
        
        <AiFillCloseCircle onClick={handleToggle} size={25} color="white"/>
          <ul className="Mobile-list" >
            <li>Home</li>
            <li>Skills</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>
              <a href="" download className="downloadButton">
                Download
              </a>
            </li>
          </ul>
        
      </div>
        }
    </nav>
  );
};

export default Navbar;
