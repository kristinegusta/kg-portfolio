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
        Web Developer embracing a promising career in the field of IT. After
        exploring an alternative career path, I have discovered that IT is the
        right direction for me to pursue. Possessing a flexible and creative
        mindset, I am fully committed to my work and bring an unwaveringly
        positive attitude to every project!
        <br />I have a profound passion for coding and other than that, I have
        diverse interests such as horse riding, snowboarding, traveling,
        spending time with family and friends, including the four-legged ones.
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
              <a href="https://kristinegusta.com">kristinegusta.com</a>
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
              <strong>Availability :</strong> Currently none
            </li>
          </ul>
          <p>
            Experience with the latest frontend technologies:{" "}
            <span>React, TypeScript, JS, HTML5, CSS3, styled-components</span>
          </p>
          <p>
            Backend technologies:{" "}
            <span>
              Django, Python, Node.js, Express, SQL-databases, MongoDB, FastAPI
            </span>
          </p>
          <p>
            Other :{" "}
            <span>
              Docker, Git, Nginx, Figma, UX/UI concepts, Scrum/Agile, Jira
            </span>
          </p>
          <p>Professional Scrum Master I certification</p>
        </div>
      </div>

      <h2 className="section-title" data-aos="fade-right">
        Facts
      </h2>
      <p>
        A career as a Web developer will give me the opportunity to use my
        creativity and technical skills.
      </p>
      <div className="counter-box-container">
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
      </div>
    </>
  );
};

export default About;
