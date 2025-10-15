import { useLanguage } from "../context/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-3">
      <p>Bahasa saat ini: <span className="font-semibold">{language}</span></p>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="px-2 py-1 border rounded-md bg-white dark:bg-gray-800"
      >
        <option value="Indonesia">Indonesia</option>
        <option value="English">English</option>
      </select>
    </div>
  );
}
