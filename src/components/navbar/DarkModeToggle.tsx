import { MdWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { useState } from "react";
import { useTheme } from "../ThemeContext";

function DarkModeToggle(): React.JSX.Element {
  // const [darkMode, setDarkMode] = useState<boolean>(true);
  // const changeMode = () => setDarkMode(!darkMode);

  const { mode, toggleMode } = useTheme();

  return (
    // <>
    //   {darkMode ? (
    //     <IoMoonOutline onClick={toggleMode} />
    //   ) : (
    //     <MdWbSunny onClick={toggleMode} />
    //   )}
    // </>

    <div onClick={toggleMode}>
      {mode === "dark" ? <IoMoonOutline /> : <MdWbSunny />}
    </div>
  );
}

export default DarkModeToggle;
