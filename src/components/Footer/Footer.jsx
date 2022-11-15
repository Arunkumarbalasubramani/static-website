import React from "react";
import "../Footer/Footer.scss";
import { AiOutlineCopyright } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-container">
      <h6 className="footer-text">
        <span>
          {" "}
          <AiOutlineCopyright />
        </span>{" "}
        2022 Designed and Developed By Arun Kumar Balasubramani
      </h6>
    </div>
  );
};

export default Footer;
