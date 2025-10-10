import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserFetcher() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Gagal memuat data");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // dijalankan hanya sekali saat komponen dimount

  if (loading) return <p className="text-blue-400 text-center">Memuat data...</p>;
  if (error) return <p className="text-red-400 text-center">Error: {error}</p>;

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-3">Daftar User</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="bg-gray-700 p-2 rounded-md">
            <p>{user.name}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
