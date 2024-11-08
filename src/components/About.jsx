import { useEffect, useRef } from "react";
import {
  FaBirthdayCake,
  FaGlobe,
  FaPhone,
  FaLocationArrow,
  FaMailBulk,
} from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import profileImg from "../assets/prof-img-1.png";
import PureCounter from "@srexi/purecounterjs";
import "./about-style.css";

const About = () => {
  const workStartDate = new Date("2022-07-15");
  const currentDate = new Date();
  const timeDifference = currentDate - workStartDate;
  const daysPassedAtWork = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

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
        <strong>
          Currently a Data Engineer with a passion in front-end development, I
          am dedicated to bringing a unique blend of technical expertise and
          creativity to each project.
        </strong>{" "}
        I have worked on various projects across different industries, but I
        have the most experience in healthcare and medical data solutions.
        Outside of that, I enjoy building websites for clients in many fields,
        with a particular focus on helping small businesses establish their
        online presence.
        <br />
        In my free time, I enjoy horse riding, snowboarding, traveling, and
        spending quality time with family, friends, and my four-legged
        companions.
      </p>
      <div className="info-container-large">
        <div className="about-img" data-aos="fade-right">
          <img src={profileImg} alt="Kristine" className="img-fluid" />
        </div>
        <div className="info-container-small">
          <h3 className="section-subtitle">Data Engineer</h3>
          <ul>
            <li>
              <FaBirthdayCake />
              <strong>Birthday :</strong> 30 October 1995
            </li>
            <li>
              <FaGlobe />
              <strong>Website :</strong>{" "}
              <a href="https://kristinegusta.work">kristinegusta.work</a>
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
              <strong>Availability :</strong> On request
            </li>
          </ul>
          <p>
            Experience with the latest frontend technologies:{" "}
            <span>
              React, JS, HTML5, CSS3, styled-components, Decap CMS, 11ty
            </span>
          </p>
          <p>
            Backend technologies:{" "}
            <span>
              Django, Python, Node.js, SQL-databases, MongoDB, FastAPI, Java
              Spring Boot
            </span>
          </p>
          <p>
            Other :{" "}
            <span>
              Docker, Git, Nginx, Figma, UX/UI concepts, Scrum/Agile, Jira,
              openEHR, FHIR/HL7, selenium
            </span>
          </p>
          <p>
            Professional Scrum Master I certification, Google Analytics, Data
            Modeling
          </p>
          <p>
            Languages : <span>Latvian, English, Dutch</span>
          </p>
        </div>
      </div>

      <div className="counter-box-container">
        <div className="counter-box ">
          <p>
            {" "}
            <span
              data-purecounter-start="0"
              data-purecounter-end={daysPassedAtWork}
              className="purecounter"
              ref={counter}
            >
              {" "}
              0{" "}
            </span>{" "}
            <br />
            days of working experience
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
              0
            </span>{" "}
            <br />
            Satisfied clients
          </p>
        </div>

        <div className="counter-box ">
          <p>
            {" "}
            <span
              data-purecounter-start="0"
              data-purecounter-end="22"
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
      </div>
    </>
  );
};

export default About;
