import IfElseExample from "./components/IfElseExample";
import TernaryAndOperatorExample from "./components/TernaryAndOperatorExample";
import SwitchExample from "./components/SwitchExample";
import ListExample from "./components/ListExample";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center gap-6 p-8">
      <IfElseExample />
      <TernaryAndOperatorExample />
      <SwitchExample status="success" />
      <ListExample />
    </div>
  );
}
