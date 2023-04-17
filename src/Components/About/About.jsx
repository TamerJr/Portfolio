import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="AboutMe-section" id="about">
      <h2>About Me</h2>
      <div className="About-SectionDetails">
        <div>
          <h3>Passion</h3>
          <p>
            I'm passionate about front-end development and have experience
            working with HTML, CSS, JavaScript, and React.
          </p>
        </div>
        <div>
          <h3>What i Do</h3>
          <p>
            I'm particularly interested in creating user-friendly interfaces
            that provide a great user experience. I have experience working with
            React libraries like React Router, Redux, and Material UI
          </p>
        </div>

        <div>
          <h3>Let's work togther</h3>
          <p>
            If you're interested in working together or just want to chat about
            React, feel free to get in touch! I'm excited to contribute my
            skills to a team .
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
