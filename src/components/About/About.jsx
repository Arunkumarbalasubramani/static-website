import React from "react";
import "../About/About.scss";
import sampleTeam from "../../assets/sample-team.png";

import PageInfo from "../PageInfo";
import { AboutCard } from "./AboutCard";
import aboutImage from "../../assets/about-image.jpg";
const About = () => {
  return (
    <div className="aboutpage">
      <PageInfo nextpage={"products"} currentPage={"About Us"} />

      <div className="about-content">
        <div className="founder-image ">
          <img className="teamimage" src={sampleTeam} alt="team-image" />
        </div>
        <div className="about-text">
          <p className="text-head">We are Here to </p>
          <p className="text-highlight">
            Help Firms, Innovate, Transform, and Lead.{" "}
          </p>
          <p className="text-normal">
            Shivam Steels and Tubes is a company manufacturing and exporting
            high quality precision ERW steel tubes of round, square,
            rectangular, elliptical and oval shapes. Shivam Steels and Tubes is
            a part of the Vijay Group of Industries, one of the leading export
            houses in India since 1976. Shivam Steels recently added cold
            rolling facility to cater to automotive, furniture and general
            engineering industries, apart from in-house requirements. Located in
            Chakan near Pune, Shivam Steels has a brilliantly planned
            manufacturing unit fully integrated with state-of-the-art equipment
            and ultra modern testing facilities.
          </p>
          <h6 className="text-subHead">Excellence</h6>
          <p className="text-normal">
            Success derives from our unremitting efforts. During the 15 year
            development of our company, we are always focused on professional
            training. By absorbing excellent talent, strengthening system
            building, optimizing human resource structure, Shivam Steels has
            organized a high-quality managing, technical, producing team which
            has becomes the base of Shivam Steels' sustainable development.
          </p>
          <p className="text-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            velit. Tempora voluptates, nemo odit modi cum nulla doloremque et
            maiores recusandae voluptas voluptatibus expedita magni omnis facere
            temporibus consectetur, ab adipisci! Quia magni tempore, perferendis
            aliquam quis adipisci.{" "}
          </p>
        </div>
      </div>
      <AboutCard />
    </div>
  );
};

export default About;
