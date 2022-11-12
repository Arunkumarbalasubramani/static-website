import React, { useState } from "react";
import "../Home/Home.scss";
import logo from "../../assets/logo.png";

import Nav from "react-bootstrap/Nav";

import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarComp = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              alt="brand-logo-image"
              onClick={() => navigate("/")}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <li className="nav-link">
                <Nav.Link onClick={() => navigate("/")} className="">
                  Home
                </Nav.Link>
              </li>
              <li className="nav-link ">
                {" "}
                <Nav.Link onClick={() => navigate("/about")}>About-us</Nav.Link>
              </li>
              <NavDropdown
                title="Services"
                id="basic-nav-dropdown"
                className="add-ons"
              >
                <NavDropdown.Item>
                  <li className="nav-link">
                    <Nav.Link onClick={() => navigate("/products")}>
                      Products
                    </Nav.Link>
                  </li>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <li className="nav-link">
                    <Nav.Link onClick={() => navigate("/process")}>
                      Process
                    </Nav.Link>
                  </li>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Attributes"
                id="basic-nav-dropdown"
                className="add-ons"
              >
                <NavDropdown.Item>
                  <li className="nav-link">
                    <Nav.Link onClick={() => navigate("/quality")}>
                      {" "}
                      Quality
                    </Nav.Link>
                  </li>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <li className="nav-link">
                    <Nav.Link onClick={() => navigate("/specifications")}>
                      Specifications
                    </Nav.Link>
                  </li>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <li className="nav-link">
                    <Nav.Link onClick={() => navigate("/certifications")}>
                      Certifications
                    </Nav.Link>
                  </li>
                </NavDropdown.Item>
              </NavDropdown>
              <li className="nav-link">
                <Nav.Link onClick={() => navigate("/careers")} className="">
                  Careers
                </Nav.Link>
              </li>
              <li className="nav-link">
                <Nav.Link onClick={() => navigate("/contact-us")} className="">
                  Contact-us
                </Nav.Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
