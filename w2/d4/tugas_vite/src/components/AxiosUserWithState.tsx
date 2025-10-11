import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  phone: string;
}

export default function AxiosUserWithState() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => setUser(res.data))
      .catch(() => setError("Gagal mengambil data pengguna."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2 text-sky-400">
        3️⃣ Axios + Loading & Error Handling
      </h2>
      {loading && <p className="text-slate-400 italic">Memuat...</p>}
      {error && <p className="text-red-400">{error}</p>}
      {user && (
        <div className="mt-2 space-y-1">
          <p>
            <span className="font-medium">Nama:</span> {user.name}
          </p>
          <p>
            <span className="font-medium">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-medium">Telepon:</span> {user.phone}
          </p>
        </div>
      )}
    </section>
  );
}
