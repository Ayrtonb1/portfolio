import { MdWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { useState } from "react";

function DarkModeToggle(): React.JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return <>{darkMode ? <IoMoonOutline /> : <MdWbSunny />}</>;
}

export default DarkModeToggle;
