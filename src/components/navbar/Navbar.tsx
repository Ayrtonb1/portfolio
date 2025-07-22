import ColourSelector from "./ColourSelector";
import DarkModeToggle from "./DarkModeToggle";

function Navbar(): React.JSX.Element {
  return (
    <div className="navbar">
      <div className="navbar-name">Charles Turner</div>
      <ColourSelector />
      <DarkModeToggle />
    </div>
  );
}

export default Navbar;
