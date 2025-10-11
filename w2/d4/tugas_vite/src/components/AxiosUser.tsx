import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  phone: string;
}

export default function AxiosUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2 text-sky-400">
        2️⃣ Axios - Mengambil Data Pengguna
      </h2>
      {user ? (
        <ul className="space-y-1">
          <li>
            <span className="font-medium">Nama:</span> {user.name}
          </li>
          <li>
            <span className="font-medium">Email:</span> {user.email}
          </li>
          <li>
            <span className="font-medium">Telepon:</span> {user.phone}
          </li>
        </ul>
      ) : (
        <p className="text-slate-400 italic">Mengambil data...</p>
      )}
    </section>
  );
}
