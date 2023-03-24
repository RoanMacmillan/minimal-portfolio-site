import React from "react";
import { useParams } from "react-router-dom";
import "./PortfolioDetail.css";
import PortfolioNavigation from "../PortfolioNavigation/PortfolioNavigation";

const PortfolioDetail = ({ portfolioItemsData }) => {
  const { id } = useParams();

  const portfolioItem = portfolioItemsData.find((item) => item.id === id);
  const currentIndex = portfolioItemsData.findIndex((item) => item.id === id);

  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  const { imgSrc, title, description, detailSrc, tools, method } = portfolioItem;

  return (
    <div className="portfolioDetail" data-id={id}>
      <div className="detailImageContainer">
        <div className="siteWrapper detail">
          <img className="detailHero" src={detailSrc} alt={title} />
        </div>
      </div>
      <div className="line detailLine"></div>
      <div className="contentContainer">
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="method">{method}</p>
        <p className="tools">{tools}</p>
        {/* Add more details as needed */}
      </div>
      <PortfolioNavigation currentIndex={currentIndex} portfolioItemsData={portfolioItemsData} />
    </div>
  );
};

export default PortfolioDetail;
