import "./statusbar-style.css";

const StatusBar = (props) => {
  return (
    <div className="skill-tab">
      <div className="status-bar-title flex">
        <p>{props.tech}</p>
        <p>{props.level}</p>
      </div>
      <div className="status-bar flex">
        <div className="status-bar-left" style={{ width: props.level }}></div>
      </div>
    </div>
  );
};

export default StatusBar;
