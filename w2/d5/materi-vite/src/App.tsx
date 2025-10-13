import './App.css'
import Calculator from './components/Conversion'
import CounterWithReducer from './components/CounterWithReducer';
import ToggleThemeExample from './components/PropDrilling';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-10">
        📘 Materi Day 5 - React + TypeScript
      </h1>
      <Calculator />
      <CounterWithReducer />
      <ToggleThemeExample />
    </div>
  );
}

export default App
