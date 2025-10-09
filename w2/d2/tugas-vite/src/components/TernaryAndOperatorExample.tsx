import { useState } from "react";

export default function TernaryAndOperatorExample() {
  const [hasMessage, setHasMessage] = useState<boolean>(true);
  const [newMessageCount, setNewMessageCount] = useState<number>(3);

  return (
    <div className="p-4 border rounded-lg bg-slate-800 text-white w-full max-w-md">
      <h2 className="font-bold text-lg mb-2">
        2️⃣ Ternary & && Operator Example
      </h2>

      <p>
        {hasMessage
          ? `You have ${newMessageCount} new message${
              newMessageCount > 1 ? "s" : ""
            }.`
          : "No new messages."}
      </p>

      {hasMessage && (
        <button
          className="mt-2 px-3 py-1 bg-green-600 rounded hover:bg-green-500"
          onClick={() => {
            setHasMessage(false);
            setNewMessageCount(0);
          }}
        >
          Clear Messages
        </button>
      )}
    </div>
  );
}
