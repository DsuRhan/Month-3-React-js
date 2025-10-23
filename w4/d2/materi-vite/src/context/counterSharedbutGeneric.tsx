import { createContext, useContext} from "react";
/*
 * 🧠 DEVELOPER NOTE:
 * Interface di bawah mendefinisikan tipe data dari Context.
 * Kita gunakan tipe generic number karena hook yang dipakai juga <number>.
 */
interface CounterContextType<T> {
  count: T;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

/*
 * Kita buat Context dengan tipe generic <number>.
 * Nilai awalnya undefined agar bisa dicek saat useContext digunakan.
 */
export const CounterContext = createContext<CounterContextType<number> | undefined>(undefined);

export const useCounterContext = (): CounterContextType<number> => {
  const context = useContext(CounterContext);
  if (!context) throw new Error("useCounterContext must be used within a CounterProvider");
  return context;
};