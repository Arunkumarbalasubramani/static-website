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
      <div className="mobile-no hover:scale-105 duration-300 ">
        <BsFillTelephoneFill />
        <h5>+91-1234567890</h5>
      </div>
      <div className="email-id">
        <FiMail />
        <h5>sales@shivamsteelsandtubes.com</h5>
      </div>
      <div className="social-links">
        <BsTwitter className="hover:scale-150 duration-300 " />
        <BsInstagram className="hover:scale-150 duration-300" />
        <BsFacebook className="hover:scale-150 duration-300 " />
        <BsLinkedin className="hover:scale-150 duration-300" />
      </div>
    </div>
  );
};

export default Contactpage;
