// src/components/PerformanceTasks/3_UseCallbackExample.tsx
import { useState, useCallback, memo } from "react";

interface ChildProps {
  onClick: () => void;
}

const ButtonChild = memo(({ onClick }: ChildProps) => {
  console.log("Child rendered");
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 bg-indigo-600 rounded text-white"
    >
      Add Count (Child)
    </button>
  );
});

export default function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  console.log("Parent rendered");

  return (
    <div
      className={`p-4 rounded-lg mb-6 transition-all ${
        theme ? "bg-gray-700" : "bg-gray-800"
      }`}
    >
      <h2 className="font-semibold text-xl mb-2 text-white">
        3. useCallback Example
      </h2>
      <p className="text-blue-400 mb-2">Count: {count}</p>
      <ButtonChild onClick={increment} />
      <button
        onClick={() => setTheme((t) => !t)}
        className="px-3 py-1 bg-teal-600 rounded ml-3"
      >
        Toggle Theme
      </button>
    </div>
  );
}
