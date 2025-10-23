// context/CounterContext.tsx
import { type ReactNode } from "react";
import { useCounter } from "../hooks/useCounter";
import { CounterContext } from "./counterShared";

/*
 * 🧠 DEVELOPER NOTE:
 * Kita buat Context agar state counter bisa diakses lintas komponen.
 * TypeScript membantu mendefinisikan bentuk data (interface).
 *
 * NOTE: CounterContextType and useCounterContext have been moved to counterShared.tsx
 */

/*
 * Utility type `ReactNode` digunakan untuk menandai anak komponen (children)
 * Ini bukan generic buatan kita, tapi built-in utility dari React.
 */
export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const counter = useCounter(0); // <== Menggunakan custom hook
  return (
    <CounterContext.Provider value={counter}>
      {children}
    </CounterContext.Provider>
  );
};
