import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import type { User } from "@/types/user";

/*
  🧠 Developer Note:
  - Halaman login sederhana.
  - Saat submit, data user disimpan di AuthContext.
*/
export default function LoginPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    const newUser: User = {
      id: Date.now(),
      name,
      email: `${name.toLowerCase()}@example.com`,
      phone: "08123456789",
      bio: "A curious learner",
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
    };
    login(newUser);
    navigate("/profile");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow w-80">
        <h1 className="text-xl font-bold text-center mb-4">Login</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </section>
  );
}
