import EffectSimple from "./components/EffectSimple";
import EffectWithDeps from "./components/EffectWithDeps";
import EffectCleanup from "./components/EffectCleanup";
import MultipleEffect from "./components/MultipleEffect";
import EffectFetchSimulation from "./components/EffectFetchSimulation";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        📘 Evaluasi useEffect - React + TypeScript
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        <EffectSimple />
        <EffectWithDeps />
        <EffectCleanup />
        <MultipleEffect />
        <EffectFetchSimulation />
      </div>
    </div>
  );
}

export default App;
