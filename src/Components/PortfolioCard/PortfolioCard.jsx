import React from "react";
import { BsGithub } from "react-icons/bs";
import "./PortfolioCard.css";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
const PortfolioCard = ({Project}) => {
  return (
    <article className="PortfolioCard">
      <figure>
        <img src={Project?.img} alt={Project.name} title={Project.name}/>
        <figcaption>{Project.name}</figcaption>
      </figure>
      <div className="action-buttons">
        <div>
          <button className="action-btn" title="github_link">
            <a href={Project.github} target="_blank"  >
              <BsGithub size={25} />
            </a>
          </button>
          <button className="action-btn"title="demo">
            <a href={Project.demo} target="_blank" >
              <TbListDetails size={25} />
            </a>
          </button>
        </div>
      </div>
      <div className="description">
        <div className="Desc-text">
          <h4>Description</h4>
          <p>{Project.description?.substring(0,100)} ...</p>
        </div>
        <Link to={`/projectsdetails/${Project.id}`} className="Item-Description">
        <button className="SeeMore">
          More Details
        </button>
        </Link>
      </div>
    </article>
  );
};

export default PortfolioCard;
