import { useState } from "react";

export default function FunctionalCounter() {
  const [count, setCount] = useState(0);

  const incrementTwice = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1); // functional update
  };

  return (
    <div>
      <h2>Functional Counter</h2>
      <p>Count: {count}</p>
      <button onClick={incrementTwice}>Tambah 2x</button>
    </div>
  );
}
