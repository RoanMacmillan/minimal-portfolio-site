import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ContactPage.css";
import Icon from "../Icons/Icon";
import Button from "../Button/Button.jsx";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    <div className="contactContainer">
      <div className="touchContainer">
        <h1>Get in Touch</h1>
        <p>
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          in London. But I’m also happy to hear about opportunites that don’t
          fit that description. I’m a hard-working and positive person who will
          always approach each task with a sense of purpose and attention to
          detail. Please do feel free to check out my online profiles below and
          get in touch using the form.
        </p>
        <div className="socialContainer">
          <Icon name="github" className="socialIcon" />
          <Link to="https://twitter.com/Petequinnn">
            <Icon name="twitter" className="socialIcon" />
          </Link>
          <Icon name="linkedin" className="socialIcon" />
        </div>
      </div>
      <div className="line"></div>

      <div className="formContainer">
        <h2>Contact Me</h2>
        {!formSubmitted ? (
          <form onSubmit={handleSubmit} noValidate>
            <div className="formGroup">
              <label htmlFor="name">Name</label>
              {errors.name && <div className="error">{errors.name}</div>}

              <input
                // className={`mobileMenu ${isMobileMenuOpen ? "active" : "inactive"}`}
                className={`formInput ${errors.name ? "inputError" : ""}`}
                type="text"
                id="name"
                name="name"
                placeholder="Din Djarin"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email Address</label>
              {errors.email && <div className="error">{errors.email}</div>}

              <input
                className={`formInput ${errors.email ? "inputError" : ""}`}
                type="email"
                id="email"
                name="email"
                placeholder="email@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="message">Message</label>
              {errors.message && <div className="error">{errors.message}</div>}

              <textarea
                className={`formInput ${errors.message ? "inputError" : ""}`}
                id="message"
                name="message"
                rows="4"
                placeholder="How can I help?"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
            </div>
            <Button className="aboutBtn" type="submit" text="Send Message" />
          </form>
        ) : (
          <div className="thankyouMessage">
            <p>
              Thank you for contacting me! I'll get back to you as soon as
              possible.
            </p>
            <Button
              className="aboutBtn formBtn"
              type="button"
              text="Send another message"
              onClick={() => setFormSubmitted(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
