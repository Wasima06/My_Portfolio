import React from 'react';
import './Contact.css';

const ContactForm = () => {
  return (
    <div id="root">
      
      <h3 className='h3'>Contact me</h3>
      <div className="form" id="form">
        <form action="https://formspree.io/f/mgvonndw" method="POST" target="_self">
          <label>
            Your name:
            <div className="name">
            <input type="text" name="Name" /></div>
          </label>
          <label>
            Your email:
            <input type="email" name="email" />
          </label>
          <label>
            Your message:
            <textarea id="message" name="message"></textarea>
          </label>
          {/* Your other form fields go here */}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
