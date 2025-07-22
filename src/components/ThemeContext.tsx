import { createContext, useState } from "react";
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


export const ThemeProvider = ({children}: {children: React.ReactNode}) => {

    const [mode, setMode] = useState<Mode>("light");
    const [palette, setPalette] = useState<Palette>("initial")


    const toggleMode = () => setMode((prev) => (prev === "light" ? "dark" : "light"))
    return ()
}


