import './LandingPage.css'
import Button from '../Button/Button'
import React, { useRef, useCallback, useState, useEffect } from "react";
import DesktopHero from "../../images/homepage/desktop/image-homepage-hero@2x.jpg";
import NewHero from '../../images/homepage/desktop/hero-new.png'
import TabletHero from "../../images/homepage/tablet/image-homepage-hero.jpg";
import ProfilePic from "../../images/homepage/mobile/me.jpg";
import ButtonIcon from "../../images/icons/down-arrows.svg";
const LandingPage = ({className}) => {


    const aboutRef = useRef(null);
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setLoaded(true);
      }, 25);
    }, []);
  
    const scrollToAbout = useCallback(() => {
      const aboutElement = aboutRef.current;
      aboutElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }, []);

  return (
    <div className={`landingPage ${className} ${loaded ? "loaded" : ""} `}>
        
        <div className="aboutMe">
          <h1>Aspiring Frontend Developer, Based in Edinburgh</h1>

          <button
            className="aboutBtn scrollDownBtn"
            type="button"
            onClick={scrollToAbout}
          >
            {/* <div className="scrollDownWrapper"> */}
              <img className="arrowDown" src={ButtonIcon} alt="Button Icon"></img>
            {/* </div> */}
            <span>about me</span>
          </button>
        </div>
      </div>
  )
}

export default LandingPage
