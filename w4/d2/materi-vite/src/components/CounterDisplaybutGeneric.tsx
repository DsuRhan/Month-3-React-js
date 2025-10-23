// components/CounterDisplay.tsx
import { useCounterContext } from "../context/counterSharedbutGeneric";

/*
 * 🧠 DEVELOPER NOTE:
 * Tidak ada perbedaan besar di komponen ini.
 * Tapi sekarang semua tipe data (count, increment, dll) dihasilkan oleh generic context.
 */

export default function CounterDisplaybutGeneric() {
  const { count, increment, decrement, reset } = useCounterContext();

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-3xl font-bold">Counter: {count}</h1>
      <div className="flex gap-2">
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
          -1
        </button>
        <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
          Reset
        </button>
        <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
          +1
        </button>
      </div>
    </div>
  );
}
