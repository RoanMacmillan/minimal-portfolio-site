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
    if (previousIndex >= 0) {
      navigate(`/portfolio/${portfolioItemsData[previousIndex].id}`);
    }
  };

  const handleNextClick = () => {
    if (nextIndex < portfolioItemsData.length) {
      navigate(`/portfolio/${portfolioItemsData[nextIndex].id}`);
    }
  };

  const previousTitle = previousIndex >= 0 ? portfolioItemsData[previousIndex].title : '';
  const nextTitle = nextIndex < portfolioItemsData.length ? portfolioItemsData[nextIndex].title : '';


  return (
    <div className="navigation">
       <button
        className={`detailBtn previous ${previousIndex < 0 ? 'noTitle' : ''}`}
        onClick={handlePreviousClick}
        disabled={previousIndex < 0}
      >
        <img src={ArrowLeft} alt="Previous" className="arrowIcon" />
        <span className="buttonTitle">{previousTitle}</span>
        <span className="buttonText">Previous Project</span>
      </button>
      <button
        className={`detailBtn next ${nextIndex >= portfolioItemsData.length ? 'noTitle' : ''}`}
        onClick={handleNextClick}
        disabled={nextIndex >= portfolioItemsData.length}
      > 
        <img src={ArrowRight} alt="Next" className="arrowIcon" />
        <span className="buttonTitle">{nextTitle}</span>
        <span className="buttonText">Next Project</span>
      </button>
    </div>
  );
};

export default PortfolioNavigation;
