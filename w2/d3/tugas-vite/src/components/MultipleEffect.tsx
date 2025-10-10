import { useEffect, useState } from "react";

const MultipleEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Lune");

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("Document title updated to:", document.title);
  }, [count]);

  useEffect(() => {
    console.log(`Name changed to: ${name}`);
  }, [name]);

  return (
    <div className="p-4 bg-slate-800 rounded-xl shadow-md text-slate-100">
      <h2 className="font-bold text-lg mb-2">4️⃣ Multiple useEffect</h2>
      <div className="flex flex-col gap-2">
        <p>Count: {count}</p>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 rounded"
        >
          Increment
        </button>
        <input
          className="p-1 bg-slate-700 rounded text-slate-100"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MultipleEffect;
