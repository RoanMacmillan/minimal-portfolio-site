import React from "react";
import "./HomePage.css";
import DesktopHero from "../../images/homepage/desktop/image-homepage-hero@2x.jpg";
import TabletHero from "../../images/homepage/tablet/image-homepage-hero.jpg";
import ProfilePic from "../../images/homepage/mobile/image-homepage-profile@2x.jpg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <main>
      <div className="topContainer">
        <div className="heroImgWrapper">
          <img className="mobileHero" src={TabletHero} alt="Mobile hero"></img>
          <img className="desktopHeroHome" src={DesktopHero} alt='Desktop hero'></img>
        </div>
        <div className="aboutMeWrapper">
          <h1>
          Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>
          <button className="aboutBtn" type="button">
            about me
          </button>
        </div>
      </div>

      <div className="aboutContainer">
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
            <Button
              text="go to portfolio"
              className="navBtn goto"
              type="button"
            />
          </Link>
          <div className="line"></div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
