import Bio from "./Bio";
import PFP from "./PFP";

function MainInfo(): React.JSX.Element {
  return (
    <div
      className="mainInfo"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // flexWrap: "wrap",
      }}
    >
      <Bio />
      <PFP />
    </div>
  );
}

export default MainInfo;
