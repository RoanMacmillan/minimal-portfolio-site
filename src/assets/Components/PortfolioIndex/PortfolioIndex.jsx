import React from "react";
import "./PortfolioIndex.css";
import Gallery from "../../images/portfolio/mobile/gallery.webp";
import Wave from "../../images/portfolio/mobile/wave.png";
import Button from '../../Components/Button/Button';
import PortfolioItem from "../PortfolioItem/PortfolioItem";
const PortfolioIndex = () => {
  return (
    <div className="portfolioIndex">
        
      {/* <div className="siteWrapper">
        <img className="wave" src={Wave} alt="Gallery Site"></img>
      </div>
      <div className="line"></div>

      <h2>Galleria</h2>
      <p>
        This project required me to build a fully responsive landing page to the
        designs provided. I used HTML5, along with CSS Grid and JavaScript for
        the areas that required interactivity, such as the testimonial slider.
      </p>
      <Button text='view project' className='navBtn view' />
      <div className="line"></div> */}

    <PortfolioItem className='itemOne' imgSrc={Wave} title='Galleria' description='This project required me to build a fully responsive landing page to the
        designs provided. I used HTML5, along with CSS Grid and JavaScript for
        the areas that required interactivity, such as the testimonial slider.' />

    </div>
  );
};

export default PortfolioIndex;
