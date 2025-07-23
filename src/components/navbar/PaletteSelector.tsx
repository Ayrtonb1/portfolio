import { FaPalette } from "react-icons/fa";
import { useState } from "react";
import { useTheme } from "../ThemeContext";

function PaletteSelector(): React.JSX.Element {
  const { palette, setPalette } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const palettes = ["initial", "vibrant", "pastel", "green"];

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <FaPalette
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      />
      {isOpen && (
        <div style={{ position: "absolute", top: "2rem" }}>
          {palettes.map((name) => (
            <button
              key={name}
              onClick={() => {
                setPalette(name as typeof palette);
                setIsOpen(false);
              }}
              style={{}}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default PaletteSelector;
