import { useTheme } from "../context/ThemeContext";

export default function ThemedParagraph() {
  const { theme } = useTheme();

  return (
    <p
      className={`mt-4 text-lg transition-colors ${
        theme === "dark" ? "text-slate-300" : "text-slate-700"
      }`}
    >
      Mode saat ini: <span className="font-semibold">{theme.toUpperCase()}</span>
    </p>
  );
}
