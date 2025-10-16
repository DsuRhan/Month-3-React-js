import { ToggleExample } from "./components/ToggleExample";
import { FetchExample } from "./components/FetchExample";
import { CounterWithToggleExample } from "./components/CounterWithToggleExample";
import { FormExample } from "./components/FormExample";
import LocalStorageExample from "./components/LocalStorageExample";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6 gap-6">
      <h1 className="text-3xl text-white font-bold mb-6">🧠 Custom Hooks Practice</h1>
      <ToggleExample />
      <FetchExample />
      <CounterWithToggleExample />
      <FormExample />
      <LocalStorageExample />
    </div>
  );
}

export default App;
