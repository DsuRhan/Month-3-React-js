import { useReducer } from "react";

// ===== Type definitions =====
interface CounterState {
  count: number;
}

type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

// ===== Reducer function =====
function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

// ===== Main component =====
export default function CounterWithReducer() {
  const [counterState, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Counter dengan useReducer
      </h2>

      <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-6">
        Count: <span className="font-bold text-blue-600 dark:text-blue-400">{counterState.count}</span>
      </p>

      <div className="flex justify-center gap-3">
  

        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
        >
          Kurang
        </button>

        <button
          onClick={() => dispatch({ type: "reset" })}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Reset

        </button>

      <button
          onClick={() => dispatch({ type: "increment" })}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Tambah
        </button>

      </div>
    </div>
  );
}
