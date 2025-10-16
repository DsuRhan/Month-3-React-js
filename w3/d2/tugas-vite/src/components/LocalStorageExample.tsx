import { useLocalStorage } from "../hooks/useLocalStorage";

export default function LocalStorageExample() {
  const [theme, setTheme] = useLocalStorage<string>("theme", "light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`p-4 text-center ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <h2 className="text-lg font-semibold mb-3">Current Theme: {theme}</h2>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition"
      >
        Toggle Theme
      </button>
      <p className="mt-2 text-sm opacity-70">(data tersimpan di localStorage)</p>
    </div>
  );
}
