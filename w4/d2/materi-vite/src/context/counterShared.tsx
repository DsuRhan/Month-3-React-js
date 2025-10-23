import { createContext, useContext} from "react";


interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// 🧩 Context dibuat kosong dulu dengan tipe data sesuai interface di atas
export const CounterContext = createContext<CounterContextType | undefined>(undefined);

/*
 * Custom hook untuk mengakses context dengan aman
 */
export const useCounterContext = (): CounterContextType => {
  const context = useContext(CounterContext);
  if (!context) throw new Error("useCounterContext must be used within a CounterProvider");
  return context;
};
