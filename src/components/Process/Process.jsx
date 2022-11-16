import React from "react";
import PageInfo from "../PageInfo";
import "../Process/Process.scss";
import process3 from "../../assets/process3.png";
import process1 from "../../assets/process1.png";
import process2 from "../../assets/process2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import icon1 from "../../assets/icon-img-1.png";
import icon2 from "../../assets/icon-img-2.png";
import icon3 from "../../assets/icon-img-3.png";
AOS.init();
const Process = () => {
  return (
    <div>
      <PageInfo nextpage={"Quality"} currentPage={"Process"} />
      <div className="process-container">
        <h1 className="process-heading">Process Heading</h1>
        <p className="process-text">
          The Tube forming and welding mill is the main processing unit for
          precision tubes. The raw material at the tube forming stage is a long
          belt of mild steel strips slit as per required dimension. This strip
          after passing through forming rollers becomes cylindrical and has an
          open seam. The seams are then welded by a high frequency induction
          process after which the tubes are cut as per specifications. The
          entire process is a non stop online process. ERW tubes are
          manufactured to withstand various processing strains such as bending,
          twisting, swagging, total flattening, flaring, bulging and other
          mechanical operations. Excellent surface finish quality aids plating
          or painting with minimum surface preparations.
        </p>
        <p className="process-text">
          The Cold rolling process starts from Hot Rolled coils being pickled in
          the acid tank, cold rolling for getting customer required thickness,
          then annealing for better mechanical properties as per customer's
          requirement, slitting to exact size of customer's width, packing and
          dispatch.
        </p>

        <div
          className="process-img-div"
          data-aos="zoom-out-up"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <img src={process3} alt="first-process-pic" />
        </div>
        <div className="solutions-div">
          <h1 className="process-heading">Our Best Solutions</h1>
          <div className="solutions">
            <div className="solution">
              <img src={icon1} alt="advanced-tech" className="solution-img" />
              <h4 className="solution-text">Advanced technology</h4>
            </div>
            <div className="solution">
              <img src={icon2} alt="expert" className="solution-img" />
              <h4 className="solution-text">Expert Engineers</h4>
            </div>
            <div className="solution">
              <img src={icon3} alt="delivery" className="solution-img" />
              <h4 className="solution-text">Delivery On time</h4>
            </div>
          </div>
        </div>
        <div className="flowchart">
          <img
            src={process1}
            alt="process1Pic"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />

          <div className="text" data-aos="zoom-in">
            <p className="process-text">
              The Cold rolling process starts from Hot Rolled coils being
              pickled in the acid tank, cold rolling for getting customer
              required thickness, then annealing for better mechanical
              properties as per customer's requirement, slitting to exact size
              of customer's width, packing and dispatch.
            </p>
            <p className="process-text">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              cupiditate doloremque earum magnam laborum sit sequi officia!
              Consequuntur ipsum labore aperiam doloremque atque consectetur
              possimus, vero beatae. Molestiae, perferendis odio aperiam
              voluptatibus nostrum ipsa id earum accusamus? Quidem saepe sint
              fuga quaerat culpa, hic consectetur praesentium libero
              voluptatibus adipisci dolorum temporibus enim deleniti consequatur
              est aliquid quae ullam tempore explicabo itaque voluptatem dolor
              tenetur modi! Molestias quia iusto sit possimus ipsum, ad nesciunt
              eius veritatis? Ratione iste neque blanditiis consequuntur itaque
              cumque voluptatum facere numquam sunt ut mollitia eveniet
              deserunt, eligendi fugiat! Voluptatibus eius sunt totam quam et
              culpa quas!
            </p>
            <p className="process-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quisquam, qui necessitatibus. Quisquam quidem id numquam mollitia
              veniam assumenda facere, unde ducimus repellat placeat molestiae,
              architecto consequuntur odio perferendis rerum commodi eius quae
              inventore impedit. Veniam soluta magni nam eum repudiandae aliquam
              doloribus velit iure id optio numquam, autem doloremque assumenda
              nemo expedita sequi est sint quam dolore. Amet modi quidem veniam,
              sequi, hic maiores quibusdam deleniti iusto rem officia laborum
              illum porro in numquam animi perferendis aperiam. Alias, nam
              quaerat?
            </p>
          </div>
          <img
            src={process2}
            alt="process1Pic"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
