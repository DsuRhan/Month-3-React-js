// src/components/ThemedCard.tsx
import { useTheme } from "../context/ThemeContext";

export default function ThemedCard() {
  const { theme } = useTheme();

  return (
    <div
      className={`p-6 mt-6 rounded-2xl shadow-md transition-colors ${
        theme === "light"
          ? "bg-white border border-gray-300"
          : "bg-gray-800 border border-gray-700"
      }`}
    >
      <h3 className="text-lg font-semibold mb-2">Themed Card</h3>
      <p>
        Tampilan kartu ini berubah sesuai dengan tema aktif. Coba ganti temanya
        dan lihat bedanya.
      </p>
    </div>
  );
}
