import React, { useRef, useCallback, useState, useEffect } from "react";
import "./HomePage.css";
import DesktopHero from "../../images/homepage/desktop/image-homepage-hero@2x.jpg";
import TabletHero from "../../images/homepage/tablet/image-homepage-hero.jpg";
import ProfilePic from "../../images/homepage/mobile/image-homepage-profile@2x.jpg";
import ButtonIcon from "../../images/icons/down-arrows.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const HomePage = ({ className }) => {
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
    <main>
      <div className={`topContainer ${className} ${loaded ? "loaded" : ""} `}>
        <div className="heroImgWrapper">
          <img className="mobileHero" src={TabletHero} alt="Mobile hero"></img>
          <img
            className="desktopHeroHome"
            src={DesktopHero}
            alt="Desktop hero"
          ></img>
        </div>
        <div className="aboutMeWrapper">
          <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>

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

      <div
        ref={aboutRef}
        className={`aboutContainer ${className} ${loaded ? "loaded" : ""} `}
      >
        <div className="aboutChild profileWrapper">
          <img className="profilePic" src={ProfilePic} alt="Profile"></img>
        </div>
        <div className="aboutChild">
          <div className="line imgLine"></div>
          <h2>About Me</h2>
          <p>
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll
            find me outdoors. I love being out in nature whether that’s going
            for a walk, run or cycling. I’d love you to check out my work.
          </p>
          <Link to="/index">
            <Button text="go to portfolio" className="navBtn goto" />
          </Link>
          <div className="line"></div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
