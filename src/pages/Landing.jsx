import "./landing.css";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import About from "../components/About";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import { workExperience, educationExperience } from "../data/resume";
import Carousel from "../components/Carousel";
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
          A diversity in the fields in ones resume , in my opinion, might be a
          plus. I do believe my previos experiece has thought me a lot and has
          been a good influence. However, I am looking forward to what my career
          change will bring.
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
        <h3 className="section-subtitle">Various solo and group projects</h3>
        <p>
          A Web Developer is in charge of ensuring websites look good and
          function properly. In order to do that, collaboration with the rest of
          your team is very important.
        </p>
        <Carousel />
      </Section>

      <Section id="contact" ref={contactRef}>
        <h2 className="section-title" data-aos="fade-right">
          Contact
        </h2>
        <p>Do not hesitate to contact me for a conversation!</p>
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
