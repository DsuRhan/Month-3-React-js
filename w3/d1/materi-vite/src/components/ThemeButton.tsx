import { useTheme } from "../context/ThemeContext";

export default function ThemedButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-md font-medium transition-colors ${
        theme === "dark"
          ? "bg-slate-800 hover:bg-slate-700 text-slate-100"
          : "bg-slate-200 hover:bg-slate-300 text-slate-800"
      }`}
    >
      Ganti ke {theme === "dark" ? "Mode Terang ☀️" : "Mode Gelap 🌙"}
    </button>
  );
}
