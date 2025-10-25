import FocusInput from "./components/FocusInput";
import RefCounter from "./components/RefCounter";
import UsingFancyInput from "./components/UsingFancyInput";
import UseImperativeExample from "./components/UseImperativeExample";
import ModalExample from "./components/ModalExample";
import { withAuth } from "./components/withAuth";
import Secret from "./components/Secret";
import UseToggle from "./components/UseToggle";

const ProtectedSecret = withAuth(Secret);

export default function App() {
  return (
    <div className="max-w-2xl mx-auto my-10 space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">Advanced Hooks & Patterns</h1>
      <FocusInput />
      <RefCounter />
      <UsingFancyInput />
      <UseImperativeExample />
      <ModalExample />
      <ProtectedSecret />
      <UseToggle />
    </div>
  );
}
