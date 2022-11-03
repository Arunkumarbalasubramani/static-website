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
} from "./components/export.js";
import Contactpage from "./Contactpage";

function App() {
  return (
    <div className="App">
      <h1>Shivam Steels and Tubes</h1>
      <Contactpage />
      <Home />
      <About />
      <Careers />
      <Certifications />
      <Contact />
      <Process />
      <Product />
      <Quality />
      <Specifications />
    </div>
  );
}

export default App;
