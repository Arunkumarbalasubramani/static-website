import React from "react";
import { AboutCard } from "../About/AboutCard";
import "../Home/Home.scss";

import CarouselComp from "./Carousel";

const Home = () => {
  return (
    <div className="home-container">
      <div className="who-we-are">
        <h3 className="expertise">
          We Are Expert In
          <span className="expertise-addon">
            Manufacturing ERW Steel Tubes, Cold Rolled, Close Annealed Steel
            Strips.
          </span>
        </h3>
      </div>
      <CarouselComp />
      <div className="home-intro">
        <p className="home-text">
          Shivam Steels and Tubes is a company manufacturing and exporting high
          quality precision ERW steel tubes of round, square, rectangular,
          elliptical and oval shapes.
        </p>
        <p className="home-text">
          {" "}
          Shivam Steels and Tubes is a part of the Vijay Group of Industries,
          one of the leading export houses in India since 1976. We have aroun
          1K+ Happy customers
        </p>

        <p className="home-text">
          Shivam Steels recently added cold rolling facility to cater to
          automotive, furniture and general engineering industries, apart from
          in-house requirements.
        </p>
        <p className="home-text">
          Located in Chakan near Pune, Shivam Steels has a brilliantly planned
          manufacturing unit fully integrated with state-of-the-art equipment
          and ultra modern testing facilities.
        </p>
      </div>
      <AboutCard />
    </div>
  );
};

export default Home;
