import React, { useRef, useCallback, useState, useEffect } from "react";
import "./HomePage.css";
// import ProfilePic from "../../images/homepage/mobile/me.jpg";
import ButtonIcon from "../../images/icons/down-arrows.svg";
import DesktopLanding from "../../images/homepage/desktop/landing-image.webp";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import useIntersectionObserver from "../useIntersectionObserver/useIntersectionObserver";
import heroMobile from "../../images/homepage/mobile/image-homepage-hero@2x.jpg";
import heroDesktop from "../../images/homepage/desktop/image-homepage-hero@2x.jpg";
import ProfilePic from "../../images/homepage/desktop/image-homepage-profile@2x.jpg";

const HomePage = ({ className }) => {
  const aboutRef = useRef(null);

  const [topContainerRef, topContainerVisible] = useIntersectionObserver();
  const [aboutContainerRef, aboutContainerVisible] = useIntersectionObserver();

  const scrollToAbout = useCallback(() => {
    const aboutElement = aboutRef.current;
    aboutElement.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <main>
      <div
        ref={topContainerRef}
        className={`topContainer ${className} ${
          topContainerVisible ? "fadeInLoad" : "hidden"
        }`}
      >
        <div className="heroImgWrapper">
          <img className="mobileHero" src={heroMobile} alt="Mobile hero"></img>
          <img
            className="desktopHeroHome"
            src={heroDesktop}
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
            <img className="arrowDown" src={ButtonIcon} alt="Button Icon"></img>
            <span>about me</span>
          </button>
        </div>
      </div>

      <div
        ref={aboutContainerRef}
        className={`aboutContainer ${className} ${
          aboutContainerVisible ? "fadeInLoad" : "hidden"
        }`}
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
