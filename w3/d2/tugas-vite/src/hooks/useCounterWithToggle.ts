import { useCounter } from "./useCounter";
import { useToggle } from "./useToggle";

export function useCounterWithToggle() {
  const counter = useCounter();
  const toggle = useToggle(true);
  return { ...counter, ...toggle };
}
