import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>Nilai saat ini: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Tambah</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Kurang</button>
    </div>
  );
}
