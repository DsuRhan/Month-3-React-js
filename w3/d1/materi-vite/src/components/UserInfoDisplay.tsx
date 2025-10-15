import { useState } from "react";
import { useUser } from "../context/UserContext";

export default function UserInfoDisplay() {
  const { user, login, logout } = useUser();
  const [inputName, setInputName] = useState("");

  const handleLogin = () => {
    const username = inputName.trim() || "Guest";
    login(username);
    setInputName("");
  };

  return (
    <div className="mt-6 flex flex-col items-center gap-4">
      <p className="text-lg">
        Selamat datang, <span className="font-semibold">{user.name}</span>!
      </p>

      {user.isLoggedIn ? (
        <button
          onClick={logout}
          className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white font-medium transition"
        >
          Logout
        </button>
      ) : (
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Masukkan nama..."
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleLogin}
            className="px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white font-medium transition"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
