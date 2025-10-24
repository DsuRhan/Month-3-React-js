import { useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "./app/store"
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./features/counter/counterSlice"
import UserList from "./components/UserList"
import EgoGallery from "./components/EgoGallery"

export default function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-center bg-gray-50 overflow-x-hidden">
      {/* 🧠 EGO GALLERY */}
      <div className="w-full mb-12">
        <EgoGallery />
      </div>

      {/* 🔢 COUNTER SECTION */}
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">
          Counter: {count}
        </h1>

        <div className="space-x-2">
          <button
            onClick={() => dispatch(decrementByAmount(5))}
            className="px-3 py-2 bg-red-700 text-white rounded hover:bg-red-900 transition-colors"
          >
            -5
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            -1
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-400 transition-colors"
          >
            +1
          </button>

          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition-colors"
          >
            +5
          </button>
        </div>

        {/* Komponen AsyncThunk */}
        <div className="mt-8">
          <UserList />
        </div>
      </div>
    </div>
  )
}
