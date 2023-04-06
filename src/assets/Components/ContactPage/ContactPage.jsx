import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ContactPage.css";
import Icon from "../Icons/Icon";
import Button from "../Button/Button";

const ContactPage = ({ className }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 30);
  }, []);

  const validateName = (name) => {
    if (name.trim() === "") {
      return "Name is required.";
    }
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email.match(emailRegex)) {
      return "Invalid email address.";
    }
    return "";
  };

  const validateMessage = (message) => {
    if (message.trim() === "") {
      return "Message is required.";
    }
    return "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const messageError = validateMessage(message);

    if (nameError || emailError || messageError) {
      setErrors({
        name: nameError,
        email: emailError,
        message: messageError,
      });
      return;
    }

    const data = {
      name,
      email,
      message,
    };

    console.log(data);
    setErrors({});
    setFormSubmitted(true);
  };

  return (
    <div className={`contactContainer ${className} ${loaded ? "loaded" : ""}`}>
            <div className="line"></div>

      <div className="touchContainer">
        {/* <div className="headingChild">
        </div> */}
        <h1>Contact</h1>

        <div className="contactContentChild">
        {/* <h1>Contact</h1> */}

          <p>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>

          <div className="socialContainer contactSocial">
        <Button text='Email me' className='navBtn contactBtn' />
          <div className="iconContainer">
            <Link to="https://github.com/RoanMacmillan">
              <Icon name="github" className="socialIcon" />
            </Link>
            <Link to="https://twitter.com/Petequinnn">
              <Icon name="twitter" className="socialIcon" />
            </Link>
            <Icon name="linkedin" className="socialIcon" />
            </div>
            <div className="email">Roanmacmillan@hotmail.com</div>
            <div className="line mobileLine"></div>

          </div>
          
        </div>
        
      </div>
      <div className="line"></div>

      
    </div>
  );
};

export default ContactPage;
