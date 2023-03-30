import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import Hamburger from "../../images/icons/hamburger.svg";
import CloseBtn from "../../images/icons/close.svg";
import Icon from "../Icons/Icon";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'activeLink' : '';

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
            className='hamburger'
          />
        ) : (
          <img
            src={Hamburger}
            alt="Hamburger"
            onClick={() => setIsMobileMenuOpen(true)}
            className='hamburger'

          />
        )}

        <div
          className={`mobileMenu ${isMobileMenuOpen ? "active" : "inactive"}`}
        >
          <ul className="mobileLinks">
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to='/index'>
            <li>Portfolio</li>
            </Link>
            <Link to='/contact-me'>
            <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="desktopNav">
  <ul className="desktopLinks">
    <li className={isActive('/')} onClick={() => navigate('/')}>
      Home
    </li>
    <li className={isActive('/index')} onClick={() => navigate('/index')}>
      Portfolio
    </li>
    <li className={isActive('/contact-me')} onClick={() => navigate('/contact-me')}>
      Contact
    </li>
  </ul>
</div>
      </nav>
    </header>
  );
};

export default Header;
