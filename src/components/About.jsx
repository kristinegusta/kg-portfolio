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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        perferendis minima quaerat quis cumque eius dolore voluptate qui dicta,
        consectetur consequuntur necessitatibus, modi labore iste a eligendi
        nemo nam? Obcaecati.
      </p>
      <div className="info-container-large">
        <div className="about-img" data-aos="fade-right">
          <img src={profileImg} alt="profile image" className="img-fluid" />
        </div>
        <div className="info-container-small">
          <h3 className="section-subtitle">Junior Full-stack Web Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolore
            explicabo tempore modi aut nesciunt.
          </p>
          <ul>
            <li>
              <FaBirthdayCake />
              <strong>Birthday :</strong> 30 October 1995
            </li>
            <li>
              <FaGlobe />
              <strong>Website :</strong> www.example.com
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            inventore soluta molestias quaerat, sed ex eligendi laboriosam
            possimus repellendus omnis aliquid, cumque necessitatibus sapiente
            exercitationem nobis vitae. Rerum, culpa omnis!
          </p>
        </div>
      </div>

      <h2 className="section-title" data-aos="fade-right">
        Facts
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis ullam
        nesciunt blanditiis omnis alias rem dolores voluptates accusamus neque.
        Dicta neque doloremque tempore aliquid facere obcaecati veniam nobis
        esse.
      </p>
      <div className="counter-box ">
        <p>
          {" "}
          <span
            data-purecounter-start="0"
            data-purecounter-end="28"
            className="purecounter"
            ref={counter}
          >
            {" "}
            0{" "}
          </span>{" "}
          <br />
          Weeks of intensive training
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
            data-purecounter-end="1000"
            className="purecounter"
            ref={counter}
          >
            {" "}
            0{" "}
          </span>{" "}
          <br />
          lines of code written
        </p>
      </div>
    </>
  );
};

export default About;
