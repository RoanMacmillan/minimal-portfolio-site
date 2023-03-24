import React from "react";
import "./ContactPage.css";
import Icon from "../Icons/Icon";
import Button from "../Button/Button.jsx"

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log(data);
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
          <Icon name="twitter" className="socialIcon" />
          <Icon name="linkedin" className="socialIcon" />
        </div>
      </div>
      <div className="line"></div>

      <div className="formContainer">
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Din Djarin" required />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="email@example.com" required />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="How can I help?" required></textarea>
          </div>
          <Button className='aboutBtn' type='submit' text='Send Message'  />
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
