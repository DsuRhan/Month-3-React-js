import { useCounterWithToggle } from "../hooks/useCounterWithToggle";

export function CounterWithToggleExample() {
  const { count, increment, decrement, toggle, value } = useCounterWithToggle();

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4 text-gray-100 w-80 text-center">
      <h3 className="text-lg font-semibold mb-2">useCounterWithToggle Example</h3>

      <p className="text-2xl mb-2">{count}</p>
      <div className="flex justify-center gap-2">
        <button onClick={decrement} className="px-3 py-1 bg-red-600 rounded">
          -
        </button>
        <button onClick={increment} className="px-3 py-1 bg-green-600 rounded">
          +
        </button>
      </div>

      <div className="mt-4">
        <button onClick={toggle} className="px-4 py-2 bg-blue-600 rounded">
          Toggle Counter
        </button>
        {!value && <p className="mt-2 text-gray-400">Counter hidden</p>}
      </div>
    </div>
  );
}
