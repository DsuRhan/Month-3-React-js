// src/components/PerformanceTasks/2_UseMemoExample.tsx
import { useMemo, useState } from "react";

export default function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);

  const expensiveCalculation = (num: number) => {
    console.log("Expensive calculation running...");
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
      result += num * 2;
    }
    return result;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div
      className={`p-4 rounded-lg mb-6 transition-all ${
        theme ? "bg-gray-700" : "bg-gray-800"
      }`}
    >
      <h2 className="font-semibold text-xl mb-2 text-white">
        2. useMemo Example
      </h2>
      <p className="text-blue-400 mb-2">Result: {memoizedValue}</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="px-3 py-1 bg-purple-600 rounded mr-2"
      >
        Increment
      </button>
      <button
        onClick={() => setTheme((t) => !t)}
        className="px-3 py-1 bg-teal-600 rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
}
