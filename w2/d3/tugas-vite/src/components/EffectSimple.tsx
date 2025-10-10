import { useEffect, useState } from "react";

const EffectSimple = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or updated, count:", count);
  });

  return (
    <div className="p-4 bg-slate-800 rounded-xl shadow-md text-slate-100">
      <h2 className="font-bold text-lg mb-2">1️⃣ useEffect Sederhana</h2>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="mt-2 px-3 py-1 bg-indigo-600 hover:bg-indigo-500 rounded"
      >
        Increment
      </button>
    </div>
  );
};

export default EffectSimple;
