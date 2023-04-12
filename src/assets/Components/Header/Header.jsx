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
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header ref={headerRef}>
      <nav>
        <Link className="textLogo" to="/">
          <Icon name="logo" className="headerLogo" />
        </Link>

        <img
          src={Hamburger}
          alt="Hamburger"
          className="hamburger"
          onClick={toggleMenu}
        />

{menuOpen && (
          <>
            <div
              className="mobileNavOverlay"
              onClick={toggleMenu}
            ></div>
            <div className="mobileNav">
              <ul className="mobileLinks">
                <li
                  className={isActive("/")}
                  onClick={() => {
                    navigate("/");
                    setMenuOpen(false);
                  }}
                >
                  Home
                </li>
                <li
                  className={isActive("/index")}
                  onClick={() => {
                    navigate("/index");
                    setMenuOpen(false);
                  }}
                >
                  Portfolio
                </li>
                <li
                  className={isActive("/contact-me")}
                  onClick={() => {
                    navigate("/contact-me");
                    setMenuOpen(false);
                  }}
                >
                  contact me
                </li>
                
                <div className="separator"></div>
                <li
                  className={isActive("/contact-me")}
                  onClick={() => {
                    navigate("/contact-me");
                    setMenuOpen(false);
                  }}
                >
                  github
                </li>
                <li
                  className={isActive("/contact-me")}
                  onClick={() => {
                    navigate("/contact-me");
                    setMenuOpen(false);
                  }}
                >
                  twitter
                </li>
                <li
                  className={isActive("/contact-me")}
                  onClick={() => {
                    navigate("/contact-me");
                    setMenuOpen(false);
                  }}
                >
                  linkedin
                </li>

              </ul>
              <img
                src={CloseBtn}
                alt="Close"
                className="closeBtn"
                onClick={toggleMenu}
              />
            </div>
          </>
        )}

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
