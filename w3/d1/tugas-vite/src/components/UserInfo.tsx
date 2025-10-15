// src/components/UserInfo.tsx
import { useUser } from "../context/UserContext";

export default function UserInfo() {
  const { user, logout } = useUser();

  return (
    <div className="p-4 border rounded-md">
      <h2 className="font-bold text-lg">User Info</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {user.isLoggedIn && (
        <button
          onClick={logout}
          className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      )}
    </div>
  );
}
