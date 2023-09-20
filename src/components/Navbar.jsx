import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaDev, FaReact } from "react-icons/fa";
import { useState } from "react";
import "./navbar-style.css";
import profileImg from "../assets/dark_logo_kg.png";

const Navbar = ({ activeSection }) => {
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
            <img src={profileImg} alt="Profile logo" />

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
                  <a
                    href="#about"
                    className={activeSection === "about" ? "active" : ""}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#resume"
                    className={activeSection === "resume" ? "active" : ""}
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className={activeSection === "portfolio" ? "active" : ""}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={activeSection === "contact" ? "active" : ""}
                  >
                    Contact
                  </a>
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
              <p>2023 &copy; Kristine Gusta</p>
            </div>
            <FaReact />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Navbar;
