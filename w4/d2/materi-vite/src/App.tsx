// App.tsx
import { CounterProvider } from "./context/CounterContext";
import CounterDisplay from "./components/CounterDisplay";
import CounterDisplaybutGeneric from "./components/CounterDisplaybutGeneric";
import { CounterProviderbutGeneric } from "./context/CounterContextbutGeneric";


/*
 * 🧠 DEVELOPER NOTE:
 * CounterProvider membungkus seluruh komponen yang butuh akses ke counter.
 * Ini membuat data dan fungsi dari useCounter tersedia di mana pun di bawahnya.
 */

export default function App() {
  return (
    <>
    <CounterProvider>
      <main className="min-h-screen flex justify-center items-center bg-gray-100">
        <CounterDisplay />
      </main>
    </CounterProvider>
    <CounterProviderbutGeneric>
      <main className="min-h-screen flex justify-center items-center bg-gray-100">
        <CounterDisplaybutGeneric/>
      </main>
    </CounterProviderbutGeneric>
    </>
  );
}
