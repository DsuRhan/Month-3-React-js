import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme harus digunakan dalam ThemeProvider");
  return context;
}

function ThemeProvider({ children }: { children: ReactNode }) {
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

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md text-sm font-medium bg-gray-200 dark:bg-gray-700
                 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

function ThemedCard() {
  const { theme } = useTheme();
  return (
    <div
      className={`p-4 rounded-lg shadow mt-4 ${
        theme === "light"
          ? "bg-gray-100 text-gray-800"
          : "bg-gray-800 text-gray-200"
      }`}
    >
      Tema saat ini: {theme.toUpperCase()}
    </div>
  );
}

export default function ThemeContextExample() {
  return (
    <ThemeProvider>
      <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Context API - Tema
        </h2>
        <ThemeToggleButton />
        <ThemedCard />
      </div>
    </ThemeProvider>
  );
}
