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

function App() {
  return (
    <div className="App">
      <h1>Shivam Steels and Tubes</h1>
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
