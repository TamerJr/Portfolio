import React from "react";
import {myPorjects} from '../../Data'
import "./Portfolio.css"
import PortfolioCard from "../PortfolioCard/PortfolioCard";
const Portfolio = () => {
  console.log(myPorjects)
  return (
    <section className="Portfolio_section" id="portfolio">
      <h2>Works</h2>
      <div className="article_Portfolio">

      {
        myPorjects?.map(Project=>(
          <PortfolioCard Project={Project} key={Project.name}/>
          )
          )
        }
        </div>
    </section>
  );
};

export default Portfolio;
