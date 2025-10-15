import { useUser } from "../context/UserContext";

export default function UserInfoDisplay() {
  const { user, login, logout, updateProfile } = useUser();

  return (
    <div className="flex flex-col gap-3">
      <p className="text-lg">
        <span className="font-semibold">User:</span> {user.name || "Guest"}
      </p>
      <p className="text-sm text-gray-500">{user.email || "Belum ada email"}</p>

      {user.isLoggedIn ? (
        <div className="flex gap-2">
          <button
            onClick={() => updateProfile("UpdatedUser", "updated@mail.com")}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            Update Profile
          </button>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => login("Alice", "alice@mail.com")}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
        >
          Login sebagai Alice
        </button>
      )}
    </div>
  );
}
