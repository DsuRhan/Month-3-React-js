import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
}

export default function FilteredUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((user: User) => user.id <= 5)
          .map((user: User) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            company: user.company,
          }));
        setUsers(filtered);
      });
  }, []);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-3 text-sky-400">
        5️⃣ Manipulasi Data JSON (Filter & Map)
      </h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="border border-slate-700 p-3 rounded-lg hover:bg-slate-800 transition"
          >
            <p className="font-medium">{user.name}</p>
            <p className="text-slate-400 text-sm">{user.email}</p>
            <p className="text-slate-500 text-xs">{user.company.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
