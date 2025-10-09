type StatusType = "loading" | "success" | "error" | "unknown";

interface SwitchExampleProps {
  status: StatusType;
}

export default function SwitchExample({ status }: SwitchExampleProps) {
  let content;

  switch (status) {
    case "loading":
      content = <p className="text-yellow-400">Loading...</p>;
      break;
    case "success":
      content = <p className="text-green-400">Operation Successful ✅</p>;
      break;
    case "error":
      content = <p className="text-red-400">Error Occurred ❌</p>;
      break;
    default:
      content = <p className="text-gray-400">Unknown Status 🤔</p>;
  }

  return (
    <div className="p-4 border rounded-lg bg-slate-800 text-white w-full max-w-md">
      <h2 className="font-bold text-lg mb-2">3️⃣ Switch Statement</h2>
      {content}
    </div>
  );
}
