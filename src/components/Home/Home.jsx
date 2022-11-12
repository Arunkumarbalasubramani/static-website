import React from "react";
import "../Home/Home.scss";
import Card from "react-bootstrap/Card";

import CarouselComp from "./Carousel";
import Counter1 from "../../assets/counter1.png";
import Counter2 from "../../assets/counter2.png";
import Counter4 from "../../assets/counter4.png";

const Home = () => {
  return (
    <div className="home-container">
      <CarouselComp />
      <div className="home-intro">
        <div className="who-we-are">
          <h3 className="expertise">
            We Are Expert In
            <span className="expertise-addon">
              Manufacturing ERW Steel Tubes, Cold Rolled, Close Annealed Steel
              Strips.
            </span>
          </h3>
          <p className="home-text">
            Shivam Steels and Tubes is a company manufacturing and exporting
            high quality precision ERW steel tubes of round, square,
            rectangular, elliptical and oval shapes. Shivam Steels and Tubes is
            a part of the Vijay Group of Industries, one of the leading export
            houses in India since 1976.
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
        <div className="about">
          <Card.Body className="card transform transition duration-300 hover:scale-110">
            <img src={Counter1} className="bg-image" />
            <div className="card-text-div">
              {" "}
              <h1 className="card-text"> 45+ </h1>
            </div>
            <p className="helper">Years of Experience</p>
          </Card.Body>

          <Card.Body className="card transform transition duration-300 hover:scale-110">
            <img src={Counter2} className="bg-image" />
            <div className="card-text-div">
              {" "}
              <h1 className="card-text">5+</h1>
            </div>
            <p className="helper">Product Range </p>
          </Card.Body>

          <Card.Body className="card transform transition duration-300 hover:scale-110">
            <img src={Counter4} className="bg-image" />
            <div className="card-text-div">
              {" "}
              <h1 className="card-text">100+</h1>
            </div>

            <p className="helper">Happy Clients</p>
          </Card.Body>
        </div>
      </div>
    </div>
  );
};

export default Home;
