import { createContext, useEffect, useState } from "react";
import themes from "../themes";

type Mode = "light" | "dark";
type Palette = keyof typeof themes;

interface ThemeContextType {
  mode: Mode;
  palette: Palette;
  toggleMode: () => void;
  setPalette: (palette: Palette) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<Mode>("light");
  const [palette, setPalette] = useState<Palette>("initial");

  const toggleMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  //re-render the page on mode or palette change
  //find current theme from the themes object
  //change style based on current value

  useEffect(() => {
    const currentTheme = themes[palette][mode];

    for (const [key, value] of Object.entries(currentTheme)) {
      document.documentElement.style.setProperty(`--${key}`, value);
    }
  }, [mode, palette]);

  return (
    <ThemeContext.Provider value={{ mode, palette, toggleMode, setPalette }}>
      {children}
    </ThemeContext.Provider>
  );
};
