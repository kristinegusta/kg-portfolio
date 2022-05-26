import { FaSearchLocation } from "react-icons/fa";
import "./resume-style.css";

const Resume = (props) => {
  return (
    <div className="resume-item" data-aos="fade-right">
      <h4>{props.exp.title}</h4>
      <h5>
        <FaSearchLocation /> {props.exp.company} <i>{props.exp.location}</i>
      </h5>
      <h6>{props.exp.time}</h6>
      <ul>
        {props.exp.duties
          ? props.exp.duties.map((dutie) => (
              <li key={dutie.id}>{dutie.dutie}</li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Resume;
