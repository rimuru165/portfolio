import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, such as sending data to an API

    // Simulate message sending by setting the state
    setMessageSent(true);

    // Optionally, clear the form fields
    e.target.reset();

    // Reset the messageSent state after a few seconds (e.g., 3 seconds)
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <div className="contact-box">
        <p><strong>Phone:</strong> 0999-905-1550</p>
        <p><strong>Email:</strong> jannointo.com@gmail.com</p>
        {messageSent && <p className="message-sent">Message sent!</p>}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Your Message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
