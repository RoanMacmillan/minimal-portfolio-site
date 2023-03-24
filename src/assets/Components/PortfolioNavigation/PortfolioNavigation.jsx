import React from "react";
import { useNavigate } from "react-router-dom";

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
  return (
    <div className="navigation">
      <button
        className="navBtn previous"
        onClick={handlePreviousClick}
        disabled={previousIndex < 0}
      >
        Previous
      </button>
      <button
        className="navBtn next"
        onClick={handleNextClick}
        disabled={nextIndex >= portfolioItemsData.length}
      >
        Next
      </button>
    </div>
  );
};

export default PortfolioNavigation;
