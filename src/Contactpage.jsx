import React from "react";
import "./App.css";

import {
  BsFacebook,
  BsInstagram,
  BsFillTelephoneFill,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";
const Contactpage = () => {
  return (
    <div className="contact-container">
      <div className="mobile-no">
        <h6>
          <BsFillTelephoneFill />
          +91-12345 67890
        </h6>
      </div>
      <div className="email-id">
        {" "}
        <FiMail /> sales@shivamsteelsandtubes.com
      </div>
      <div className="social-links">
        <BsTwitter />
        <BsInstagram />
        <BsFacebook />
        <BsLinkedin />
      </div>
    </div>
  );
};

export default Contactpage;
