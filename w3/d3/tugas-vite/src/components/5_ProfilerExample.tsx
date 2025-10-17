// src/components/PerformanceTasks/5_ProfilerExample.tsx
import { useState } from "react";

export default function ProfilerExample() {
  const [num, setNum] = useState(0);
  const [fast, setFast] = useState(0);

  const slowTask = () => {
    let total = 0;
    for (let i = 0; i < 1e8; i++) total += i;
    return total + num;
  };

  const slowResult = slowTask();

  return (
    <div className="p-4 bg-gray-800 rounded-lg mb-6">
      <h2 className="font-semibold text-xl mb-2 text-white">
        5. Performance Profiling
      </h2>
      <p className="text-red-400">Slow result: {slowResult}</p>
      <p className="text-green-400">Fast value: {fast}</p>

      <div className="space-x-2 mt-3">
        <button
          onClick={() => setNum((n) => n + 1)}
          className="px-3 py-1 bg-red-600 rounded"
        >
          Slow Increment
        </button>
        <button
          onClick={() => setFast((f) => f + 1)}
          className="px-3 py-1 bg-green-600 rounded"
        >
          Fast Increment
        </button>
      </div>
    </div>
  );
}
