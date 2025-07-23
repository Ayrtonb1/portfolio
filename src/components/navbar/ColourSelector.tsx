import { FaPalette } from "react-icons/fa";
import { useState } from "react";
import { useTheme } from "../ThemeContext";

function ColourSelector(): React.JSX.Element {
  const { palette, setPalette } = useTheme();

  const palettes = ["initial", "vibrant", "pastel", "green"];

  return <FaPalette />;
}

export default ColourSelector;
