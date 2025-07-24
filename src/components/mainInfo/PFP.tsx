import pixelImage from "../../assets/pixel.png";

function PFP(): React.JSX.Element {
  return (
    <div className="pfp-wrapper">
      <img
        style={{ borderRadius: "50%", padding: "5px" }}
        src={pixelImage}
        alt="image not found!"
      />
    </div>
  );
}

export default PFP;
