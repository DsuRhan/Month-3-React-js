// src/components/ThemeButton.tsx
import { useTheme } from "../context/ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-md font-medium transition-colors ${
        theme === "light"
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
      }`}
    >
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
}
