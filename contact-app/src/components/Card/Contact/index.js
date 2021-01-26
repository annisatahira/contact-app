import React from 'react';
import "./style.css";

const Contact = (props) => {
  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={props.image} alt={props.firstName} />
      </div>
      <div className="contact-name">
        <span className="contact-name__first">{props.firstName}</span>
        <span className="contact-name__last">{props.lastName}</span>
        </div>
    </div>
  )
};

export default Contact;