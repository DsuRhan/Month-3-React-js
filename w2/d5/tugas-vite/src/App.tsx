import LiftingStateUpExample from "./components/LiftingStateUpExample";
import PropDrillingExample from "./components/PropDrillingExample";
import SharedStateExample from "./components/SharedStateExample";
import UseReducerCounter from "./components/UseReducerCounter";
import ThemeContextExample from "./components/ThemeContextExample";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">
        🧠 Evaluasi Harian - State Management & Hooks
      </h1>

      <div className="space-y-12 max-w-3xl mx-auto">
        <section>
          <h2 className="text-xl font-semibold mb-4">
            1️⃣ Lifting State Up
          </h2>
          <LiftingStateUpExample />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            2️⃣ Prop Drilling
          </h2>
          <PropDrillingExample />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            3️⃣ Shared State antar Komponen
          </h2>
          <SharedStateExample />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            4️⃣ useReducer untuk State Kompleks
          </h2>
          <UseReducerCounter />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            5️⃣ Context API Sederhana
          </h2>
          <ThemeContextExample />
        </section>
      </div>
    </div>
  );
}

export default App;