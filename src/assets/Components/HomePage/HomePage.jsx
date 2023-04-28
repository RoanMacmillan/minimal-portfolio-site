import React, { useRef, useCallback, useState, useEffect } from "react";
import "./HomePage.css";
import ProfilePic from "../../images/homepage/mobile/me.jpg";
import ButtonIcon from "../../images/icons/down-arrows.svg";
import DesktopLanding from "../../images/homepage/desktop/landing-image.webp";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import useIntersectionObserver from "../useIntersectionObserver/useIntersectionObserver";
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
          <img
            className="mobileHero"
            src={DesktopLanding}
            alt="Mobile hero"
          ></img>
          <img
            className="desktopHeroHome"
            src={DesktopLanding}
            alt="Desktop hero"
          ></img>
        </div>
        <div className="aboutMeWrapper">
          <h1>Aspiring Frontend Developer, Based in Edinburgh</h1>

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
            I'm an aspiring front-end developer looking for a new role. I focus
            on writing accessible HTML, using modern CSS practices and writing
            clean JavaScript. I've recently started learning React which I'm
            really enjoying, I can see why it's so widely used. However I'm
            eager to learn new practices and frameworks so I've just started to
            pick up tailwind and look into Nextjs. I'm based in Edinburgh,
            Scotland, but I'm happy working remotely. I'm currently working on
            adding to my portfolio, you can check out what I have so far below!
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
