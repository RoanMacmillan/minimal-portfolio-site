import React from "react";
import Button from "../../Components/Button/Button";
import "./PortfolioItem.css";
import { Link } from "react-router-dom";

const PortfolioItem = ({ id, imgSrc, title, description, className }) => {
  return (
    <div className={className} data-id={id}>
      <div className="imageContainer">
        <div className="siteWrapper">
          <img className="indexThumbnail" src={imgSrc} alt={title}></img>
        </div>

      </div>

      <div className="contentContainer">
      <div className="line indexLine"></div>

        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={`/portfolio/${id}`}>
        <Button text="view project" className="navBtn view" type="button"/>
        </Link>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default PortfolioItem;
