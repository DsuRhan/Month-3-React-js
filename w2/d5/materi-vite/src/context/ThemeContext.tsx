import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light"
  );

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function UseTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme harus dipakai dalam <ThemeProvider>");
  return context;
}
