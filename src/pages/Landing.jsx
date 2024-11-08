import "./landing.css";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import About from "../components/About";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import { workExperience, educationExperience } from "../data/resume";
// import Carousel from "../components/Carousel";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Landing = () => {
  //use effect for AOS library
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  /* Logic for adding active class to the side navbar */
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case "about":
            setActiveSection("about");
            break;
          case "resume":
            setActiveSection("resume");
            break;
          case "portfolio":
            setActiveSection("portfolio");
            break;
          case "contact":
            setActiveSection("contact");
            break;
          default:
            setActiveSection(null);
            break;
        }
      } else {
        // Cleanup
        if (entry.target.id === "about") {
          setActiveSection(null);
        }
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    [aboutRef, resumeRef, portfolioRef, contactRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  return (
    <div className="App">
      <Hero activeSection={activeSection} />
      <Section id="about" ref={aboutRef}>
        <About />
      </Section>
      <Section id="resume" ref={resumeRef}>
        <h2 className="section-title" data-aos="fade-right">
          Resume
        </h2>
        <p>
          I believe that a diverse background can be a valuable asset. My
          previous experiences have equipped me with a broad set of skills and
          perspectives, which have greatly contributed to my growth. I embrace
          being flexible and agile in my approach, as it allows me to adapt
          quickly, solve problems creatively, and deliver effective solutions in
          ever-changing environments.
        </p>
        <div className="skills-cont-lg">
          <div className="skills-cont-sm">
            <h3 className="resume-title">Professional experience</h3>
            {workExperience.map((exp) => (
              <Resume key={exp.id} exp={exp} />
            ))}
          </div>
          <div className="skills-cont-sm">
            <h3 className="resume-title">Education experience</h3>
            {educationExperience.map((exp) => (
              <Resume key={exp.id} exp={exp} />
            ))}
          </div>
        </div>
      </Section>
      <Section primary id="portfolio" ref={portfolioRef}>
        <h2 className="section-title" data-aos="fade-right">
          Portfolio
        </h2>
        {/* <Carousel /> */}
        <Portfolio />
      </Section>

      <Section id="contact" ref={contactRef}>
        <h2 className="section-title" data-aos="fade-right">
          Contact
        </h2>
        <p>
          Feel free to contact me to discuss how I can help your business grow
          and succeed.
        </p>
        <Contact />
      </Section>
    </div>
  );
};

const Section = styled.section`
  padding: 15px;
  background-color: ${(props) => (props.primary ? "#DAECF6" : "white")};
  overflow-y: hidden;
  overflow-x: hidden;
  margin-top: 2rem;
`;

export default Landing;
