import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaDev, FaReact } from "react-icons/fa";

import { useState } from "react";
import "./navbar-style.css";
import profileImg from "../assets/profile-img.JPG";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setNavbar(!navbar);
    console.log(navbar);
  };

  return (
    <>
      {navbar ? (
        <AiOutlineClose className="mobile-nav-toggle" onClick={handleClick} />
      ) : (
        <AiOutlineMenu className="mobile-nav-toggle" onClick={handleClick} />
      )}
      ;
      <div className={navbar ? "navbar-left block" : "navbar-left none"}>
        <div>
          <div className="profile">
            <img src={profileImg} alt="profile picture" />

            <a href="#hero">
              <h4>Kristine Gusta</h4>
            </a>
            <div className="socials">
              <a href="https://github.com/kristinegusta">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kristine-gusta/">
                <FaLinkedinIn />
              </a>
              <a href="https://dev.to/kristinegusta">
                <FaDev />
              </a>
            </div>
          </div>
          <div>
            <div className="navbar-cont">
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#resume">Resume</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <footer>
          <div className="navbar-footer center">
            <div>
              <p>
                <strong>Made with React</strong>
              </p>
              <p>2022 &copy; Kristine Gusta</p>
            </div>
            <FaReact />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Navbar;
