import { useReducer } from "react";

interface CounterState {
  count: number;
}

type CounterAction = { type: "increment" } | { type: "decrement" } | { type: "reset" };

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

export default function UseReducerCounter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="max-w-sm mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md text-center">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Counter (useReducer)
      </h2>
      <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
        {state.count}
      </p>
      <div className="flex justify-center gap-3">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="px-3 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
