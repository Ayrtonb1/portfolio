import { MdWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { useState } from "react";
import { useTheme } from "../ThemeContext";

function DarkModeToggle(): React.JSX.Element {
  const { mode, toggleMode } = useTheme();

  return (
    <div onClick={toggleMode} style={{ cursor: "pointer" }}>
      {mode === "dark" ? <IoMoonOutline /> : <MdWbSunny />}
    </div>
  );
}

export default DarkModeToggle;
