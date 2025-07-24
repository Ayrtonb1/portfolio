import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Bio(): React.JSX.Element {
  return (
    <div
      className="bio-container"
      style={{
        display: "flex",
        flexDirection: "column",
        // borderStyle: "solid",
        // aspectRatio: "1/1",
        width: "50%",
        minWidth: "342px",
        padding: "40px",
      }}
    >
      <div style={{ fontSize: "3rem", marginBottom: "20px" }}>
        Hello, I'm
        <div className="my-name">Charlie Turner.</div> Welcome to my portfolio
        page
      </div>
      <div style={{ fontSize: "1.4rem", marginBottom: "40px" }}>
        English | Web Developer | London-based | University of Leicester
        graduate
      </div>
      <div
        className="info-buttons"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          href="/CTurnerCV.pdf"
          download={true}
          className="cv-download"
          style={{ marginLeft: "5px", marginRight: "5px" }}
        >
          Download my CV
        </a>
        <FaGithub
          className="FaGithub"
          style={{
            fontSize: "3rem",
            padding: "0 5px",
            marginLeft: "5px",
            marginRight: "5px",
          }}
        />
        <FaLinkedin
          className="FaLinkedin"
          style={{ fontSize: "3rem", marginLeft: "5px", marginRight: "5px" }}
        />
      </div>
    </div>
  );
}

export default Bio;
