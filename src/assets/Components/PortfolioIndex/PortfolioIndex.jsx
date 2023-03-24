import React from "react";
import "./PortfolioIndex.css";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import portfolioItemsData from "../../../../portfolioItemsData.json";

const PortfolioIndex = () => {
  return (
    <div className="portfolioIndex">
      {portfolioItemsData.map((item, index) => (
        <PortfolioItem
          key={index}
          id={item.id}
          imgSrc={item.imgSrc}
          title={item.title}
          description={item.description}
          className={item.className}
        />
      ))}
    </div>
  );
};

export default PortfolioIndex;
