import React from "react";
import "./Footer.css";
import Icon from "../Icons/Icon";
import Button from "../Button/Button";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      {location.pathname !== "/contact-me" && (
        <div className="interestedContainer">
          <h3>Interested in doing a project together?</h3>
          <div className="line interestedLine"></div>
          <Link to="/contact-me">
            <Button
              text="contact me"
              className="navBtn contact"
              
            />
          </Link>
        </div>
      )}

      <div className="bottomFooter">
        <div className="footerWrapper">
          <Icon name="logo" className="logo" />
          <div className="linksContainer">
            <Link to="/">home</Link>
            <Link to="/index">portfolio</Link>
            <Link to="/contact-me">contact me</Link>
          </div>

          <div className="socialContainer">
            <Link to="https://github.com/RoanMacmillan">
              <Icon name="github" className="socialIcon" />
            </Link>
            <Link to="https://twitter.com/Petequinnn">
              <Icon name="twitter" className="socialIcon" />
            </Link>
            <Icon name="linkedin" className="socialIcon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
