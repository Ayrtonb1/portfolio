import Language from "./Language";
import ModeSelect from "./ModeSelect";

function Navbar(): React.JSX.Element {
  return (
    <div className="navbar">
      <div className="navbar-name">Charles Turner</div>
      <Language />
      <ModeSelect />
    </div>
  );
}

export default Navbar;
