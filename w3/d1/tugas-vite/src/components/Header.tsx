// src/components/Header.tsx
import { useLanguage } from "../context/LanguageContext";
import { useNotification } from "../context/NotificationContext";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const { notifications, addNotification, clearNotifications } = useNotification();
  const { theme } = useTheme();

  return (
    <header
      className={`w-full flex justify-between items-center px-6 py-4 shadow-md ${
        theme === "light" ? "bg-gray-100" : "bg-gray-800"
      } transition-colors`}
    >
      <div>
        <span className="font-semibold text-lg">
          {language === "en" ? "Dashboard" : "Dasbor"}
        </span>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="ml-4 px-2 py-1 rounded border bg-transparent"
        >
          <option value="en">English</option>
          <option value="id">Bahasa</option>
        </select>
      </div>

      <div className="flex items-center gap-3">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            theme === "light"
              ? "bg-blue-200 text-blue-800"
              : "bg-blue-900 text-blue-200"
          }`}
        >
          🔔 {notifications.length } Notification{notifications.length !== 1 && "s"}
        </span>
        <button
          onClick={() => addNotification("New notification")}
          className="px-3 py-1 rounded bg-green-500 hover:bg-green-600 text-white"
        >
          +1
        </button>
        <button
          onClick={clearNotifications}
          className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white"
        >
          Clear
        </button>
      </div>
    </header>
  );
}
