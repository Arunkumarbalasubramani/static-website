import React from "react";
import "../Home/Home.scss";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../assets/banner1.jpg";
import Banner2 from "../../assets/banner2.jpg";
import Banner3 from "../../assets/banner3.jpg";
import Banner4 from "../../assets/banner4.jpg";
import Banner5 from "../../assets/banner5.jpg";
const CarouselComp = () => {
  return (
    <div>
      <Carousel fade className="carousel-container">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-image"
            src={Banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-title">
              State Of The Art Equipment & Ultra Modern Testing Facilities
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-image"
            src={Banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="carousel-title">
              Leading Export Houses in India Since 1976{" "}
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-image"
            src={Banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="carousel-title">
              Brilliantly Planned Manufacturing Unit
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-image"
            src={Banner4}
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h3 className="carousel-title">
              Indian and International Standards
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-image"
            src={Banner5}
            alt="Fifth slide"
          />

          <Carousel.Caption>
            <h3 className="carousel-title">In-house Testing Facility</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
