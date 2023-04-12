import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import Hamburger from "../../images/icons/hamburger.svg";
import CloseBtn from "../../images/icons/close.svg";
import Icon from "../Icons/Icon";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "activeLink" : "");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  return (
    <header ref={headerRef}>
      <div
        className={`overlay ${isMobileMenuOpen ? "active" : "inactive"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      <nav>
        <Link className="textLogo" to="/">
          <Icon name="logo" className="headerLogo" />
        </Link>
        
          
        
          <img
            src={Hamburger}
            alt="Hamburger"
            onClick={() => setIsMobileMenuOpen(true)}
            className="hamburger"
          />
        

        <div
          className={`mobileMenu ${isMobileMenuOpen ? "active" : "inactive"}`}
        >
          <img
            src={CloseBtn}
            alt="Close button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hamburger closeHam"
          />
          <div className="mobileLinks">
            <Link to="/">Home</Link>

            <Link to="/index">Portfolio</Link>
            <Link to="/contact-me">Contact</Link>
            <div className="line mobileLine"></div>

            <Link className="linkedIn" to="/">Linkedin</Link>
            <Link to="/index">Github</Link>
            <Link to="/contact-me">Twitter</Link>
            {/* <Icon name="logo" className="headerLogo mobileLogo" /> */}
          </div>
          
        </div>
        <div className="desktopNav">
          <ul className="desktopLinks">
            <li className={isActive("/")} onClick={() => navigate("/")}>
              Home
            </li>
            <li
              className={isActive("/index")}
              onClick={() => navigate("/index")}
            >
              Portfolio
            </li>
            <li
              className={isActive("/contact-me")}
              onClick={() => navigate("/contact-me")}
            >
              Contact me
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
