import { MdWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

import { useTheme } from "../ThemeContext";

function DarkModeToggle(): React.JSX.Element {
  const { mode, toggleMode } = useTheme();

  return (
    <div
      onClick={toggleMode}
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {mode === "dark" ? (
        <IoMoonOutline style={{ fontSize: "1.5rem" }} />
      ) : (
        <MdWbSunny style={{ fontSize: "1.5rem" }} />
      )}
    </div>
  );
}

export default DarkModeToggle;
