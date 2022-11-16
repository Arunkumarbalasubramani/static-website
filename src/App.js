import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Home,
  About,
  Careers,
  Certifications,
  Contact,
  Process,
  Product,
  Quality,
  Specifications,
  Footer,
  ProductDetails,
} from "./components/export.js";
import Contactpage from "./Contactpage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavbarComp from "./components/Home/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Contactpage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/process" element={<Process />} />
        <Route path="/products" element={<Product />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/specifications" element={<Specifications />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
