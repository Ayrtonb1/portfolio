import { FaPalette } from "react-icons/fa";
import { useState } from "react";
import { useTheme } from "../ThemeContext";

function PaletteSelector(): React.JSX.Element {
  const { palette, setPalette } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const palettes = ["default", "vibrant", "pastel", "green", "bios"];

  return (
    <div style={{ position: "relative", display: "flex", padding: "0 10px" }}>
      <FaPalette
        style={{ fontSize: "1.5rem", cursor: "pointer" }}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      />
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "2rem",
            backgroundColor: "var(--background)",
            border: "var(--accentTwo)",
            zIndex: 1000,
            right: 0,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            width: "100%",
            minWidth: "100px",
          }}
        >
          {palettes.map((name) => (
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
              key={name}
              onClick={() => {
                setPalette(name as typeof palette);
                setIsOpen(false);
              }}
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
