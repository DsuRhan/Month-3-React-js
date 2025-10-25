import  {type FC, useRef, useState } from "react";

const RefCounter: FC = () => {
  const countRef = useRef(0);
  const [, force] = useState(0);

  const increment = () => {
    countRef.current += 1;
    console.log("Count (ref):", countRef.current);
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="font-semibold mb-2">useRef - Nilai Persisten</h2>
      <p>Nilai ref saat ini (hanya update di console): {countRef.current}</p>
      <div className="flex gap-2 mt-2">
        <button className="bg-gray-700 text-white px-3 py-1 rounded" onClick={increment}>
          Tambah
        </button>
        <button className="bg-gray-400 text-white px-3 py-1 rounded" onClick={() => force(n => n + 1)}>
          Paksa Rerender
        </button>
      </div>
    </div>
  );
};

export default RefCounter;
