import React from "react";
import "../Careers/Careers.scss";
import PageInfo from "../PageInfo";
import openJob from "../../assets/Jobs1.jpg";
import Job1 from "../../assets/Jobs2.jpg";
import Job2 from "../../assets/Jobs3.jpg";
import Job3 from "../../assets/Jobs4.jpg";
import { Nav } from "react-bootstrap";
import { TbBrandTelegram } from "react-icons/tb";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
const Careers = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    "&:hover": {
      backgroundColor: deepOrange[700],
      fontWeight: 800,
    },
  }));
  const jobs = [
    { title: "Machine Operator", exp: "3", vacancy: "6", img: Job1 },
    { title: "Human Resources", exp: "4", vacancy: "2", img: Job2 },
    { title: "Finance-Accounting", exp: "5", vacancy: "8", img: Job3 },
  ];
  return (
    <div>
      <PageInfo nextpage={"Contact-us"} currentPage={"Careers"} />
      <div className="careers-container">
        <h1 className="helper1"> Our Job Requirements</h1>
        <h1 className="helper-text1"> Open Positions</h1>
        <div className="jobs">
          <div className="job1">
            <img src={openJob} alt="current-open-job" />
            <Nav.Link className="current-job">Administration Support </Nav.Link>
            <div className="jobdetails">
              <p className="eligibility">
                Eligibility : <span className="value">3+ Years Experience</span>
              </p>
              <p className="eligibility">
                Vacancies : <span className="value">4 Posts</span>
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              mollitia, culpa veritatis voluptatum repellendus harum Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
            <Stack spacing={2} direction="row" className="">
              <ColorButton variant="contained" className="apply-btn">
                Apply Now
              </ColorButton>
            </Stack>
          </div>
          {jobs.map(({ title, exp, vacancy, img }, index) => (
            <div className="closed-job" key={index}>
              <img src={img} alt="job1" className="jobPic" />
              <div className="closed-job-details">
                <Nav.Link className="jobTitle">{title}</Nav.Link>
                <div className="jobdetails">
                  <p className="eligibility">
                    Eligibility :{" "}
                    <span className="value">{exp} Years Experience</span>
                  </p>
                  <p className="eligibility">
                    Vacancies : <span className="value">{vacancy} Posts</span>
                  </p>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugit eaque, sequi quisquam quidem eum veritatis incidunt
                  dolor autem quibusdam veniam.
                </p>
                <Stack spacing={2} direction="row">
                  <ColorButton variant="text" disabled>
                    Application Closed
                  </ColorButton>
                </Stack>
              </div>
            </div>
          ))}
        </div>
        <div className="newsletter-div">
          <h1 style={{ color: " #242f6e", fontWeight: 600 }}>
            To Get{" "}
            <span style={{ color: " #ff5e14", fontWeight: 600 }}>
              A New Job
            </span>
          </h1>
          <div className="sign-up">
            <p className="process-text">
              Sign up to get latest updates on Open Requirements and news.
            </p>
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="email-input"
            />

            <button
              type="submit"
              className="sign-up-btn hover:scale-105 duration-300 bg-orange-700"
            >
              {" "}
              <h5>Sign Up </h5>
              <span>{<TbBrandTelegram size={25} />}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
