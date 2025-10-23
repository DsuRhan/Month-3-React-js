// hooks/useCounter.ts
import { useState } from "react";

/*
 * 🧠 DEVELOPER NOTE:
 * Ini adalah custom hook — reusable logic tanpa UI.
 * Generic belum digunakan di sini, tapi hook bisa dibuat generic juga.
 */

export function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState<number>(initialValue); // <== TypeScript mendeteksi state bertipe number

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  /*
   * Return berupa object agar mudah di-destructure oleh komponen lain
   */
  return { count, increment, decrement, reset };
}
