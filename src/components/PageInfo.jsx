import React from "react";
import "../components/About/About.scss";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const PageInfo = ({ nextpage, currentPage }) => {
  const navigate = useNavigate();
  return (
    <div className="page-info">
      <h5 className="page-info-text">{currentPage}</h5>
      <div className="pagination">
        <Nav.Link
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Nav.Link>
        <Nav.Link>|</Nav.Link>
        <Nav.Link
          onClick={() => {
            navigate(`/${nextpage}`);
          }}
          className="next-page"
        >
          {nextpage}
        </Nav.Link>
      </div>
    </div>
  );
};

export default PageInfo;
