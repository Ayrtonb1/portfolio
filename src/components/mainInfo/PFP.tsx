import pixelImage from "../../assets/pfp.jpg";

function PFP(): React.JSX.Element {
  return (
    <div className="pfp-wrapper">
      <div className="ring ring-one"></div>
      <div className="ring ring-two"></div>
      <img
        style={{ borderRadius: "50%", padding: "5px" }}
        src={pixelImage}
        alt="image not found!"
      />
    </div>
  );
}

export default PFP;
