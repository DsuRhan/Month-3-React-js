import { useState } from "react";

export default function IfElseExample() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  let message;
  if (isLoggedIn) {
    message = <p className="text-green-500">Welcome back, Master!</p>;
  } else {
    message = <p className="text-red-500">Please log in first.</p>;
  }

  return (
    <div className="p-4 border rounded-lg bg-slate-800 text-white w-full max-w-md">
      <h2 className="font-bold text-lg mb-2">
        1️⃣ Conditional Rendering (if / else)
      </h2>
      {message}
      <button
        className="mt-3 px-3 py-1 bg-blue-600 rounded hover:bg-blue-500"
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
