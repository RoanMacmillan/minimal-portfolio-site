import React from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioNavigation.css";
import ArrowLeft from '../../images/icons/arrow-left.svg';
import ArrowRight from '../../images/icons/arrow-right.svg';

const PortfolioNavigation = ({ currentIndex, portfolioItemsData }) => {
  const navigate = useNavigate();
  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;

  const handlePreviousClick = () => {
    const prevIndex = (currentIndex - 1 + portfolioItemsData.length) % portfolioItemsData.length;
    navigate(`/portfolio/${portfolioItemsData[prevIndex].id}`);
  };

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % portfolioItemsData.length;
    navigate(`/portfolio/${portfolioItemsData[nextIndex].id}`);
  };

  const previousTitle =
  portfolioItemsData[
    (currentIndex - 1 + portfolioItemsData.length) % portfolioItemsData.length
  ].title;
const nextTitle = portfolioItemsData[(currentIndex + 1) % portfolioItemsData.length].title;


return (
  <div className="navigation">
    <button className="detailBtn previous" onClick={handlePreviousClick}>
      <img src={ArrowLeft} alt="Previous" className="arrowIcon" />
      <span className="buttonTitle">{previousTitle}</span>
      <span className="buttonText">Previous Project</span>
    </button>
    <button className="detailBtn next" onClick={handleNextClick}>
      <img src={ArrowRight} alt="Next" className="arrowIcon" />
      <span className="buttonTitle">{nextTitle}</span>
      <span className="buttonText">Next Project</span>
    </button>
  </div>
);
};

export default PortfolioNavigation;
