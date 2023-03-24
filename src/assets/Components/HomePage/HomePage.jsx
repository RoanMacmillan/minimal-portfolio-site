import React from "react";
import "./HomePage.css";
import MobileHero from "../../images/homepage/mobile/image-homepage-hero.jpg";
import ProfilePic from "../../images/homepage/mobile/image-homepage-profile@2x.jpg";
import Button from "../Button/Button";
import {Link} from 'react-router-dom';
const HomePage = () => {
  return (
    <main>
      <div className="topContainer">
        <img className="mobileHero" src={MobileHero} alt="Mobile hero"></img>
        <h1>Hey, I’m Roan Macmillan and I love building beautiful websites</h1>
        <button className="aboutBtn" type="button">
          about me
        </button>
      </div>

      <div className="aboutContainer">
        <img className="profilePic" src={ProfilePic} alt="Profile"></img>
        <div className="line"></div>
        <h2>About Me</h2>
        <p>
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in Edinburgh, Scotland, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
        <Link to='/index'>
        <Button text='go to portfolio' className='navBtn goto'/>
        </Link>
        <div className="line"></div>
      </div>


        

    </main>
  );
};

export default HomePage;
