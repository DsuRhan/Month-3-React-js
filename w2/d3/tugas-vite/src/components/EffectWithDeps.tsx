import { useEffect, useState } from "react";

interface UserData {
  id: number;
  name: string;
  email: string;
}

const EffectWithDeps = () => {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    console.log("Fetching user data for ID:", userId);
    const fetchedData: UserData = {
      id: userId,
      name: `User ${userId}`,
      email: `user${userId}@mail.com`,
    };
    setUser(fetchedData);
  }, [userId]);

  return (
    <div className="p-4 bg-slate-800 rounded-xl shadow-md text-slate-100">
      <h2 className="font-bold text-lg mb-2">2️⃣ useEffect dengan Dependency</h2>
      <button
        onClick={() => setUserId((id) => id + 1)}
        className="px-3 py-1 bg-teal-600 hover:bg-teal-500 rounded mb-2"
      >
        Ganti User
      </button>
      {user && (
        <div>
          <p>ID: {user.id}</p>
          <p>Nama: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default EffectWithDeps;
