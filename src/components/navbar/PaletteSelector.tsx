import { FaPalette } from "react-icons/fa";
import { useState } from "react";
import { useTheme } from "../ThemeContext";

function PaletteSelector(): React.JSX.Element {
  const { palette, setPalette } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const palettes = ["initial", "vibrant", "pastel", "green"];

  return (
    <div>
      <FaPalette
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      />
      {isOpen && (
        <div>
          {palettes.map((name) => (
            <button
              onClick={() => {
                setPalette(name as typeof palette);
                setIsOpen(false);
              }}
              style={{}}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
}

export default PaletteSelector;
