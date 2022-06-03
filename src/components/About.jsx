import { useEffect, useRef } from "react";
import {
  FaBirthdayCake,
  FaGlobe,
  FaPhone,
  FaLocationArrow,
  FaMailBulk,
} from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import profileImg from "../assets/prof-img-2.png";
import PureCounter from "@srexi/purecounterjs";
import "./about-style.css";

const About = () => {
  //Pure counter span
  const counter = useRef(null);
  //Use Effect for counter
  useEffect(() => {
    new PureCounter();
  }, []);
  return (
    <>
      <h2 className="section-title" data-aos="fade-right">
        About
      </h2>
      <p>
        Web Developer starting her career . After trying myself out in another
        industry, found out that IT is the right choice for me . <br></br>
        Flexible, creative and involved. And positive. Always. Love to code,
        ride horses,have fun and my dog!
      </p>
      <div className="info-container-large">
        <div className="about-img" data-aos="fade-right">
          <img src={profileImg} alt="profile image" className="img-fluid" />
        </div>
        <div className="info-container-small">
          <h3 className="section-subtitle">Junior Full-stack Web Developer</h3>
          <p>Eager to develop the best complex digital solutions.</p>
          <ul>
            <li>
              <FaBirthdayCake />
              <strong>Birthday :</strong> 30 October 1995
            </li>
            <li>
              <FaGlobe />
              <strong>Website :</strong>{" "}
              <a href="https://kristinegusta.github.io/kg-portfolio/">
                kg-portfolio/github.io
              </a>
            </li>
            <li>
              <FaPhone />
              <strong>Phone :</strong> +32 485 50 28 79
            </li>
          </ul>
          <ul>
            <li>
              <FaLocationArrow />
              <strong>City :</strong> Oudsbergen, Belgium
            </li>
            <li>
              <FaMailBulk />
              <strong>Email :</strong> kristinegusta1@gmail.com
            </li>
            <li>
              <MdEventAvailable />
              <strong>Availability :</strong> 1 August 2022
            </li>
          </ul>
          <p>
            Experience with the latest frontend technologies (React, Webpack,
            HTML5, CSS3) and backend technologies (Node.js, Express,
            SQL-databases ,MongoDB).
          </p>
        </div>
      </div>

      <h2 className="section-title" data-aos="fade-right">
        Facts
      </h2>
      <p>
        A career as a Web developer will give me the opportunity to use my
        creativity and technical skills.
      </p>
      <div className="counter-box ">
        <p>
          {" "}
          <span
            data-purecounter-start="0"
            data-purecounter-end="1000"
            className="purecounter"
            ref={counter}
          >
            {" "}
            0{" "}
          </span>{" "}
          <br />
          Hours of intensive training
        </p>
      </div>
      <div className="counter-box ">
        <p>
          {" "}
          <span
            data-purecounter-start="0"
            data-purecounter-end="10"
            className="purecounter"
            ref={counter}
          >
            {" "}
            0{" "}
          </span>{" "}
          <br />
          Technologies picked up
        </p>
      </div>
      <div className="counter-box ">
        <p>
          {" "}
          <span
            data-purecounter-start="0"
            data-purecounter-end="50"
            className="purecounter"
            ref={counter}
          >
            {" "}
            0{" "}
          </span>{" "}
          <br />
          days until ready for new challanges
        </p>
      </div>
    </>
  );
};

export default About;
