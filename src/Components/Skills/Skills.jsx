import React from "react";
import "./Skills.css";
import { data } from "../../Utilies";
import "./Skills.css";
import headerImg from "../../assets/headerImg.png"
const Skills = () => {
  return (
    <section className="skills-section">
      <h1>Skills</h1>
      <div className="Section-Data">
        <div className="skill-container">
          {data?.map((ele) => (
            <div key={ele.name}>
              <p className="Icon">{ele.icon}</p>
              <p className="name">{ele.name}</p>
            </div>
          ))}
        </div>
        <div  className="imgContainer">
          
        <img src={headerImg} alt="Img" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
