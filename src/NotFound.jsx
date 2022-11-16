import React from "react";
import errorgif from "./assets/404error.PNG";
import "./components/Products/Product.scss";
const NotFound = () => {
  return (
    <div class="box1">
      <img src={errorgif} alt="404-error" className="not-found" />
    </div>
  );
};

export default NotFound;
