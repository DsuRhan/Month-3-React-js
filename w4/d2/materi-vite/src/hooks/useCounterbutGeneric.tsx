import { useState } from "react";

/*
 * 🧠 DEVELOPER NOTE:
 * Di sini kita gunakan GENERIC <T> agar hook ini bisa menangani tipe data apa pun.
 * Tapi kita batasi (constraint) bahwa T harus bisa diproses dengan operasi + dan -,
 * maka kita asumsikan T = number untuk kasus counter ini.
 */

export function useGenericCounter<T extends number>(initialValue: T) {
  const [count, setCount] = useState<T>(initialValue);

  const increment = () => setCount((prev) => ((prev + 1) as T)); // cast ke T karena hasil operasi + bisa jadi infer number
  const decrement = () => setCount((prev) => ((prev - 1) as T));
  const reset = () => setCount(initialValue);

  /*
   * ✅ Generic <T> memungkinkan hook ini nanti dipakai untuk tipe lain
   * misal string panjang, step counter, atau data kompleks selama logika cocok.
   */
  return { count, increment, decrement, reset };
}