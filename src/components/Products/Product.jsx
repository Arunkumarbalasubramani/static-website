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
    details: " ",
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
            <Card style={{ width: "18rem" }} className="card-container  ">
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
