import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import Hamburger from "../../images/icons/hamburger.svg";
import CloseBtn from "../../images/icons/close.svg";
import Icon from "../Icons/Icon";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [headerRef]);

  return (
    <header ref={headerRef}>
      <nav>
        <Link to="/">
          <Icon name="logo" />
        </Link>
        {isMobileMenuOpen ? (
          <img
            src={CloseBtn}
            alt="Close button"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        ) : (
          <img
            src={Hamburger}
            alt="Hamburger"
            onClick={() => setIsMobileMenuOpen(true)}
          />
        )}

        <div
          className={`mobileMenu ${isMobileMenuOpen ? "active" : "inactive"}`}
        >
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to='/index'>
            <li>Portfolio</li>
            </Link>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
