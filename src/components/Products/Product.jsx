import React from "react";
import PageInfo from "../PageInfo";
import "../Products/Product.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import product2 from "../../assets/product2.jpg";
import product1 from "../../assets/erwtubes.jpg";
import product3 from "../../assets/product3.jpeg";
import product4 from "../../assets/product4.jpg";
import product5 from "../../assets/product5.jpg";

const products = [
  {
    name: "ERW Tubes",
    image: product1,
    details: {
      item1:
        "Outer Diameter range includes 12.70mm, 15.88mm, 19.05mm, 21.43mm, 22.23mm, 25.40mm, 28.58mm, 31.75mm, 38.10mm, 44.45mm, 50.80mm, 63.50mm and 65.00mm.",
      item2:
        "Our thickness range includes 0.5mm, 0.6mm, 0.7mm, 0.8mm, 0.9mm, 1.0mm, 1.2mm, 1.6mm and 2.0mm.",
      item3:
        "We can give in standard tube length of 6.0 meters or in custom lengths as per requirement.",
      item4:
        "Our Square tubes range includes 12.70mm, 16.00mm, 19.00mm, 20.00mm, 25.00mm, 30.00mm, 38.10mm, 40.00mm and 50.00mm.",

      item5:
        "Our Rectangular Section tubes range includes 25.00x12.00mm, 28.00mmx15.00mm, 31.75mmx19.05mm, 38.00x25.00mm, 40.00mm x 20.00mm, 50.00x30.00mm, 50.80mm x 25.40mm, 55.00x35.00mm, 60.00x30.00mm, 60.00x40.00mm.",

      item6:
        "Our Elliptical Section tubes range includes 35.00x15.00mm, 40.00x16.00, 50.00x30.00mm, 75.00x25.00mm in oval and 43.00x22.00mm D shaped section.",
    },
  },
  {
    name: "Cold Rolled Close Annealed Steel Strips",
    image: product2,
    details: " ",
  },
  {
    name: "Pre-Galvanized Tubes",
    image: product3,
    details: " ",
  },
  {
    name: "Hot Rolled Pickled & Oiled (HRPO) Sheets",
    image: product4,
    details: " ",
  },
  {
    name: "Hot Rolled Pickled and Skin Passed (HRSP)",
    image: product5,
    details: " ",
  },
];

const Product = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PageInfo nextpage={"process"} currentPage={"Products"} />

      <div className="page-helper">
        <h1 className="helper-text"> Our Products</h1>
      </div>
      <div className="product-cards">
        {products.map(({ name, image }, index) => (
          <div key={index} className="hover:scale-105 duration-300 ">
            <Card style={{ width: "18rem" }} className="card-container ">
              <Card.Img variant="top" src={image} className="product-image" />
              <Card.Body>
                <Card.Title>{name}</Card.Title>

                <Button
                  className="more-btn"
                  onClick={() => navigate("/product-details")}
                >
                  See More
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
