import { useCallback, useState } from "react";
import { agents,type Agent } from "../data/agents";

export function useGacha() {
  const [selected, setSelected] = useState<Agent | null>(null);
  const [rolling, setRolling] = useState(false);

  const roll = useCallback(() => {
    setRolling(true);
    const random = Math.floor(Math.random() * agents.length);
    setTimeout(() => {
      setSelected(agents[random]);
      setRolling(false);
    }, 2500); // durasi animasi roll
  }, []);

  const reset = useCallback(() => setSelected(null), []);

  return { selected, rolling, roll, reset };
}
