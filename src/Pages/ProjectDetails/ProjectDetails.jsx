import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { myPorjects } from "../../Data";
import "./ProjectDetails.css";
import { BsGithub } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";

const ProjectDetails = () => {
  const { id } = useParams();
  const Ele = myPorjects.filter((ele) => ele.id == id)[0];
  console.log(Ele);
  return (
    <div className="ProjectDetails">
      <h2 style={{ textAlign: "center", fontSize: "38px" }}>{Ele.name}</h2>
      <div className="ProjectDetails-header">
        <img src={Ele?.img} alt="img" className="ProjectDetailsImg" />
        <div>
          <h3>Description</h3>
          <p>{Ele?.description}</p>
          <div>
            <h3>Details</h3>
            <div className="EleDetails">{Ele?.details}</div>
          </div>
        </div>
      </div>
      <div className="Info">
        <div className="Techs">
          <h3>Technologies</h3>
          <ul className="Tech-List">
            {Ele.technologies?.map((tech, indx) => (
              <li className="tech-color" key={indx}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="Links-Desc">
          <h3>Links</h3>
          <ul className="ProjectLinks">
            <li href={Ele?.github} target="_blank">
              {" "}
              <BsGithub size={35}   className="tech-color"/>

            </li>
            <li href={Ele.demo} target="_blank">
              {" "}
              <TbListDetails size={35}  className="tech-color"/>
         

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
