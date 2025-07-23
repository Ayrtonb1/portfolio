import pixelImage from "../../assets/pixel.png";

function PFP(): React.JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderStyle: "solid",
        width: "50%",
        minHeight: "200px",
        aspectRatio: "1/1",
        overflow: "hidden",
      }}
    >
      <img
        style={{ borderRadius: "50%", padding: "5px" }}
        src={pixelImage}
        alt="image not found!"
      />
    </div>
  );
}

export default PFP;
