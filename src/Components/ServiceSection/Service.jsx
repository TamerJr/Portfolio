 import React from "react";
import "./Services.css";
const Service = () => {
  const services = [
    {
      name: "Responsive Design",
      Description:
        "I can offer responsive design services to ensure that websites look great on all devices, including desktops, tablets, and smartphones",
    },
    {
      name: "Front-End Development",
      Description:
        "I can offer front-end development services to build interactive and dynamic user interfaces using React and other front-end frameworks",
    },
    {
      name: "Web Performance Optimization",
      Description:
        "I can offer web performance optimization services to improve website speed and performance, which can improve user experience and search engine rankings",
    },
    {
      name: "Cross-borwser Compatipility",
      Description:
        "I can offer cross-browser compatibility services to ensure that websites work well on all major web browsers, including Chrome, Firefox, Safari, and Edge",
    },
    {
      name: "Accessability",
      Description:
        "I can offer accessibility services to ensure that websites are accessible to all users, including those with disabilities",
    },
  ];
  return (
    <section className="ServiceSection" id="services">
      <h2>Services</h2>
      <div className="servicesContainer">
        {services.map((service, indx) => (
          <div className="ServiceContainer" key={indx}>
            <h4>{service.name}</h4>
            <p>{service.Description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
