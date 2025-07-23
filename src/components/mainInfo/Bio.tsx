import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Bio(): React.JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderStyle: "solid",
        aspectRatio: "1/1",
        width: "50%",
        minWidth: "342px",
      }}
    >
      <div style={{ fontSize: "3rem" }}>
        Hi, I'm Charlie. Welcome to my portfolio page
      </div>
      <div style={{ fontSize: "1.4rem" }}>
        Web Developer | London | University of Leicester Graduate
      </div>
      <div
        className="info-buttons"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button className="cv-download">Download my CV</button>
        <FaGithub style={{ fontSize: "2rem", padding: "0 5px" }} />
        <FaLinkedin style={{ fontSize: "2rem" }} />
      </div>
    </div>
  );
}

export default Bio;
