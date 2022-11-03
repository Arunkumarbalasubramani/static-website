import React from "react";
import "../Home/Home.scss";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import facebookicon from "../../assets/facebook.png";
import gmailicon from "../../assets/gmail.png";
import linkedIcon from "../../assets/linkedin.png";

import Nav from "react-bootstrap/Nav";

import NavDropdown from "react-bootstrap/NavDropdown";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar bg="light" expand="lg">
        <Container className="navbar-container">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="150"
              height="80"
              className=" nav-link"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbarq-nav">
            <Nav className="me-auto nav-links-container">
              <Nav.Link href="#home" className="nav-link">
                About us
              </Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <NavDropdown title="Quality">
                <NavDropdown.Item href="#action/3.1">Process</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Specifications
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Certifications
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#link">Careers</Nav.Link>
              <Nav.Link href="#link">Contact us</Nav.Link>
            </Nav>
            <div className="social-links">
              <Nav.Link href="#link">
                {" "}
                <img
                  src={gmailicon}
                  alt="gmail-link"
                  className="social-icons"
                />
              </Nav.Link>

              <Nav.Link href="#link">
                {" "}
                <img
                  src={linkedIcon}
                  alt="linkedin-link"
                  className="social-icons"
                />
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <img
                  src={facebookicon}
                  alt="facebook-link"
                  className="social-icons"
                />
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Home;
