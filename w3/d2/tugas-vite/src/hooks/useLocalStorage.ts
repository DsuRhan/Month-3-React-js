import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key);
      if (!stored) return initialValue;

      // coba parse JSON, kalau gagal, berarti data lama bukan JSON valid
      try {
        return JSON.parse(stored);
      } catch {
        // perbaiki data lama ke format JSON
        const fixedValue = JSON.stringify(stored);
        localStorage.setItem(key, fixedValue);
        return stored as unknown as T;
      }
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
    } catch {
      // abaikan error agar tidak ganggu render
    }
  }, [key, value]);

  return [value, setValue] as const;
}
