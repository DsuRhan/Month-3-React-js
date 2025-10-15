import ThemeProvider from "./context/ThemeProvider";
import UserProvider from "./context/UserProvider";
import ThemedButton from "./components/ThemeButton";
import ThemedParagraph from "./components/ThemedParagraph";
import UserInfoDisplay from "./components/UserInfoDisplay";
import { useUser } from "./context/UserContext";
import { useTheme } from "./context/ThemeContext";

// ===== Navbar =====
function Navbar() {
  const { user } = useUser();
  const { theme } = useTheme();

  return (
    <nav
      className={`w-full flex items-center justify-between px-6 py-4 ${
        theme === "light" ? "bg-gray-100" : "bg-gray-800"
      } shadow-sm transition-colors`}
    >
      <div className="flex items-center gap-3">
        <img
          src={`https://api.dicebear.com/9.x/identicon/svg?seed=${
            user.name || "Guest"
          }`}
          alt="User avatar"
          className="w-10 h-10 rounded-full border border-gray-400"
        />
        <span
          className={`font-medium ${
            theme === "light" ? "text-gray-800" : "text-gray-200"
          }`}
        >
          {user.name || "Guest"}
        </span>
      </div>

      <ThemedButton />
    </nav>
  );
}

// ===== Konten utama =====
function AppContent() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === "light"
          ? "bg-white text-gray-900"
          : "bg-gray-900 text-gray-100"
      } transition-colors`}
    >
      <Navbar />

      <main className="p-6 flex flex-col items-center">
        <ThemedParagraph />
        <hr
          className={`my-6 w-2/3 ${
            theme === "light" ? "border-gray-400" : "border-gray-700"
          }`}
        />
        <UserInfoDisplay />
      </main>
    </div>
  );
}

// ===== Root App =====
export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  );
}
