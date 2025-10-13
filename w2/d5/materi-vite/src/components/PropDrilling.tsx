import { UseTheme, ThemeProvider } from "../context/ThemeContext";

function ThemeToggleButton() {
  const { theme, toggleTheme } = UseTheme();
  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md text-sm font-medium
                 bg-gray-200 dark:bg-gray-700
                 text-gray-800 dark:text-gray-100
                 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default function ToggleThemeExample() {
  return (
    <ThemeProvider>
      <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Toggle Theme dengan TypeScript + Context
        </h1>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
}
