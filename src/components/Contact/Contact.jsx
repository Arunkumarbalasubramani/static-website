import React from "react";
import "../Contact/Contact.scss";
import PageInfo from "../PageInfo";
import logo from "../../assets/logo.png";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FaMapSigns } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  return (
    <div>
      <PageInfo currentPage={"Contact-us"} />
      <div className="contact-us-container ">
        <div className="contact-us ">
          <div className="social-contact">
            <BsTwitter className="hover:scale-150 duration-300 " />
            <BsInstagram className="hover:scale-150 duration-300" />
            <BsFacebook className="hover:scale-150 duration-300 " />
            <BsLinkedin className="hover:scale-150 duration-300" />
          </div>
          <div className="comp-logo">
            <img src={logo} alt="company-logo" />
          </div>

          <div className="head-office">
            <h6 className="address-text">
              <span style={{ color: "#ff5e14" }}>
                <FaMapSigns size={30} />
              </span>
              Shivam Steels And Tubes Private Limited A44/4 Chakan, Phase 2
              Taluka Khed, Village Vasuli, Pune - 410501
            </h6>
          </div>
          <div className="head-office">
            <div>
              <BsFillTelephoneFill size={30} style={{ color: "#ff5e14" }} />
            </div>
            <h6 className="address-text">+91- 12345 67890</h6>
          </div>
          <div className="head-office">
            <div>
              <GrMail size={30} style={{ color: "#ff5e14" }} />
            </div>
            <h6 className="address-text">sales@shivamsteelsandtubes.com</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
