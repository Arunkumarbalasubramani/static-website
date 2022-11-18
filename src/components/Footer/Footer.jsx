import React from "react";
import "../Footer/Footer.scss";
import { AiOutlineCopyright } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <AiOutlineCopyright />
      </div>
      <h5 className="footer-text">
        2022 Designed and Developed By Arun Kumar Balasubramani
      </h5>
    </div>
  );
};

export default Footer;
