import { type ReactNode } from "react";
import { useGenericCounter } from "../hooks/useCounterbutGeneric";
import { CounterContext } from "./counterSharedbutGeneric";


export const CounterProviderbutGeneric = ({ children }: { children: ReactNode }) => {
  // Menggunakan generic hook dengan nilai awal 0
  const counter = useGenericCounter<number>(0);
  return <CounterContext.Provider value={counter}>{children}</CounterContext.Provider>;
};