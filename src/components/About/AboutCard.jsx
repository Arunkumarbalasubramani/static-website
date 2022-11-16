import React from "react";
import "../Home/Home.scss";
import Card from "react-bootstrap/Card";

import Counter1 from "../../assets/counter1.png";
import Counter2 from "../../assets/counter2.png";
import Counter4 from "../../assets/counter4.png";
export const AboutCard = () => {
  return (
    <div className="about">
      <div className="about-card">
        <Card.Body className="card transform transition duration-300 hover:scale-110">
          <img src={Counter1} className="bg-picture" alt="bg-pic" />
          <div className="card-text-div">
            <h1 className="card-text"> 15+ </h1>
          </div>
          <p className="helper">Years of Experience</p>
        </Card.Body>
      </div>

      <div className="about-card">
        <Card.Body className="card transform transition duration-300 hover:scale-110">
          <img src={Counter2} className="bg-picture" alt="bg-pic" />
          <div className="card-text-div">
            {" "}
            <h1 className="card-text">5+</h1>
          </div>
          <p className="helper">Product Range </p>
        </Card.Body>
      </div>
      <div className="about-card">
        <Card.Body className="card transform transition duration-300 hover:scale-110">
          <img src={Counter4} className="bg-picture" alt="bg-pic" />
          <div className="card-text-div">
            {" "}
            <h1 className="card-text">1K+</h1>
          </div>
          <p className="helper">Happy Clients</p>
        </Card.Body>
      </div>
    </div>
  );
};
