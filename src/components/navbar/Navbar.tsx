import PaletteSelector from "./PaletteSelector";
import DarkModeToggle from "./DarkModeToggle";

function Navbar(): React.JSX.Element {
  return (
    <div
      className="navbar"
      style={{
        height: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <div className="navbar-name">Charles Turner</div>
      <PaletteSelector />
      <DarkModeToggle />
    </div>
  );
}

export default Navbar;
