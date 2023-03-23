import React from "react";
import "./Footer.css";
import Icon from "../Icons/Icon";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer>
      <div className="interestedContainer">
        <h3>Interested in doing a project together?</h3>
        <Button text='contact me' className='navBtn contact'/>
      </div>

      <div className="bottomFooter">
        <Icon name="logo" className="logo" />
        <div className="linksContainer">
          <a>home</a>
          <a>portfolio</a>
          <a>contact me</a>
        </div>

        <div className="socialContainer">
          <Icon name="github" className="socialIcon" />
          <Icon name="twitter" className="socialIcon" />
          <Icon name="linkedin" className="socialIcon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
