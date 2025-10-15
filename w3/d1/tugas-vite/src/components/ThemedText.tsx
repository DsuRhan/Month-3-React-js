// src/components/ThemedText.tsx
import { useTheme } from "../context/ThemeContext";

export default function ThemedText() {
  const { theme } = useTheme();

  return (
    <p
      className={`mt-4 text-center transition-colors ${
        theme === "light" ? "text-gray-700" : "text-gray-300"
      }`}
    >
      Ini adalah teks yang warnanya menyesuaikan tema.
    </p>
  );
}
