import EventHandlerExample from "./components/EventHandlerExample";
import SyntheticEventExample from "./components/SyntheticEventExample";
import ControlledComponentExample from "./components/ControlledComponentExample";
import UncontrolledComponentExample from "./components/UncontrolledComponentExample";
import MultiInputValidationForm from "./components/MultiInputValidationForm";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 flex flex-col items-center py-10 space-y-10">
      <h1 className="text-3xl font-bold text-teal-400 mb-4 border-b-2 border-teal-500 pb-2">
        Evaluasi Harian - Event & Form Handling
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mx-4">
        {/* Soal 1 */}
        <div className="flex justify-center">
          <EventHandlerExample />
        </div>

        {/* Soal 2 */}
        <div className="flex justify-center">
          <SyntheticEventExample />
        </div>

        {/* Soal 3 */}
        <div className="flex justify-center">
          <ControlledComponentExample />
        </div>

        {/* Soal 4 */}
        <div className="flex justify-center">
          <UncontrolledComponentExample />
        </div>

        {/* Soal 5 */}
        <div className="flex justify-center col-span-full">
          <MultiInputValidationForm />
        </div>
      </div>

      <footer className="text-sm text-gray-500 mt-8 border-t border-slate-700 pt-4">
        © {new Date().getFullYear()} React Practice — Managed by L_00-N47
      </footer>
    </div>
  );
}

export default App;
