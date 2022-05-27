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
  console.log(workExperience);
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
      <Section primary id="skills">
        <h2 className="section-title" data-aos="fade-right">
          Skills
        </h2>
        <p>
          The number of coding languages has grown but tend to share underlying
          principles. As a full stack developer, I understand the need to learn
          the languages required for possible projects according to their needs.
        </p>
        <div className="skills-cont-lg">
          <div className="skills-cont-sm">
            <StatusBar tech={"HTML"} level={"100%"} />
            <StatusBar tech={"CSS"} level={"85%"} />
            <StatusBar tech={"JS"} level={"75%"} />
          </div>
          <div className="skills-cont-sm">
            <StatusBar tech={"React"} level={"65%"} />
            <StatusBar tech={"GitHub"} level={"80%"} />
            <StatusBar tech={"Node.js"} level={"70%"} />
          </div>
        </div>
        <h3 className="section-subtitle">Languages</h3>
        <div className="skills-cont-sm">
          <StatusBar tech={"Latvian"} level={"100%"} />
          <StatusBar tech={"English"} level={"80%"} />
          <StatusBar tech={"Dutch"} level={"50%"} />
        </div>
      </Section>
      <Section id="resume">
        <h2 className="section-title" data-aos="fade-right">
          Resume
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ut,
          ipsa nobis reprehenderit enim fugiat corporis voluptatem quis quasi
          sequi officia hic doloremque atque quisquam? Alias atque accusamus
          cupiditate velit.
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
      <Section primary id="resume">
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
