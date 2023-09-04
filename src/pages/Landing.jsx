import "./landing.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import About from "../components/About";
import StatusBar from "../components/StatusBar";
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

  return (
    <div className="App">
      <Hero />
      <Section id="about">
        <About />
      </Section>
      <Section id="resume">
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
      <Section primary id="portfolio">
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

      <Section id="contact">
        <h2 className="section-title" data-aos="fade-right">
          Contact
        </h2>
        <p>Do not hesitate to contact me for a conversation!</p>
        <Contact />
      </Section>
    </div>
  );
};

const Section = styled.div`
  padding: 15px;
  background-color: ${(props) => (props.primary ? "#DAECF6" : "white")};
  overflow-y: hidden;
  overflow-x: hidden;
  margin-top: 2rem;
`;

export default Landing;
