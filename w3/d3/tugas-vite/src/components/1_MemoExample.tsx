// src/components/PerformanceTasks/1_MemoExample.tsx
import { useState, memo } from "react";

interface CounterProps {
  value: number;
}

const Child = memo(({ value }: CounterProps) => {
  console.log("Child rendered"); // Untuk melihat render
  return <p className="text-blue-400">Child Count: {value}</p>;
});

export default function MemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("Parent rendered");

  return (
    <div className="p-4 bg-gray-800 rounded-lg mb-6">
      <h2 className="font-semibold text-xl mb-2 text-white">
        1. React.memo Example
      </h2>
      <Child value={count} />
      <button
        className="px-3 py-1 bg-purple-600 rounded mr-2"
        onClick={() => setCount((c) => c + 1)}
      >
        + Count
      </button>
      <input
        className="p-1 rounded text-black"
        placeholder="Ketik sesuatu..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
