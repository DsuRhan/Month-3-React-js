import { useState } from "react";

function InputBox({
  text,
  onChange,
}: {
  text: string;
  onChange: (val: string) => void;
}) {
  return (
    <input
      type="text"
      value={text}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Ketik sesuatu..."
      className="px-3 py-2 border rounded-md w-full bg-white dark:bg-gray-800"
    />
  );
}

function DisplayBox({ text }: { text: string }) {
  return (
    <div className="mt-3 text-gray-800 dark:text-gray-200">
      <strong>Output:</strong> {text || "Belum ada teks"}
    </div>
  );
}

export default function SharedStateExample() {
  const [sharedText, setSharedText] = useState("");

  return (
    <div className="max-w-sm mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Berbagi State antar Komponen
      </h2>
      <InputBox text={sharedText} onChange={setSharedText} />
      <DisplayBox text={sharedText} />
    </div>
  );
}
