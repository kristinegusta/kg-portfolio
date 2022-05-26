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
        <Carousel />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
          tenetur dignissimos pariatur deleniti vero adipisci placeat maiores
          aperiam quas, harum ullam ut quos reprehenderit quaerat possimus!
          Libero ipsum blanditiis expedita.
        </p>
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
