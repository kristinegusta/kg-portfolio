import Navbar from "../components/Navbar";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "./hero-style.css";

const Hero = ({ activeSection }) => {
  // Create Ref element for Typed span.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full stack developer",
        "Front-end developer",
        "Data Engineer",
        "Photographer",
        "React Developer",
        "Traveler",
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });
    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="hero" className="center">
      <Navbar activeSection={activeSection} />
      <div className="title">
        <h1>Kristīne Gusta</h1>
        <h2>
          I am <span ref={el}></span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
