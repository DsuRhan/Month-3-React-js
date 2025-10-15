import { useTheme } from "../context/ThemeContext";

export default function ThemedParagraph() {
  const { theme } = useTheme();

  return (
    <p
      className={`p-3 mt-2 rounded-xl transition-colors ${
        theme === "light"
          ? "bg-gray-100 text-gray-800"
          : "bg-gray-700 text-gray-200"
      }`}
    >
      {theme === "light"
        ? "Light mode aktif — matahari masih bersinar ☀️"
        : "Dark mode aktif — malam mulai tenang 🌙"}
    </p>
  );
}
