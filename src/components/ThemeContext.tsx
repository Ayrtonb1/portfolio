import { createContext, useContext, useEffect, useState } from "react";
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
  const [mode, setMode] = useState<Mode>(() => {
    return (localStorage.getItem("mode") as Mode) || "light";
  });
  const [palette, setPalette] = useState<Palette>(() => {
    return (localStorage.getItem("palette") as Palette) || "initial";
  });

  const toggleMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    const currentTheme = themes[palette][mode];

    for (const [key, value] of Object.entries(currentTheme)) {
      document.documentElement.style.setProperty(`--${key}`, value);
    }

    localStorage.setItem("mode", mode);
    localStorage.setItem("palette", palette);
  }, [mode, palette]);

  return (
    <ThemeContext.Provider value={{ mode, palette, toggleMode, setPalette }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
