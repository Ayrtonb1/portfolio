import PaletteSelector from "./PaletteSelector";
import DarkModeToggle from "./DarkModeToggle";

function Navbar(): React.JSX.Element {
  return (
    <div className="navbar">
      <div className="navbar-name">Charles Turner</div>
      <PaletteSelector />
      <DarkModeToggle />
    </div>
  );
}

export default Navbar;
