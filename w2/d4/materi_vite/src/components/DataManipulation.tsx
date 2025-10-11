import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  city: string;
}

interface RawUUser {
   id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
  phone: string;
  website: string;
}

function UserListManipulated() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // Manipulasi data: hanya ambil nama dan email, lalu filter
        const processedUsers = response.data
          .map((user: RawUUser) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            city: user.address.city // Mengambil data nested
          }))
          .filter((user: User) => user.city === 'Gwenborough'); // Filter berdasarkan kota

        setUsers(processedUsers);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Memuat daftar pengguna...</p>;
  if (error) return <p>Terjadi kesalahan:</p>;
  if (users.length === 0) return <p>Tidak ada pengguna yang ditemukan di Gwenborough.</p>;

  return (
    <div>
      <h2>Daftar Pengguna (Manipulasi Data)</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email}) - {user.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListManipulated;