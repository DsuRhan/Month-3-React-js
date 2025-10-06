import Counter from "./compo/Counter";
import UserProfile from "./compo/UserProfile";
import ContactForm from "./compo/ContactForm";
import TodoList from "./compo/TodoList";
import FunctionalCounter from "./compo/FunctionalCounter";
import './App.css'

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <div className='mt-10 w-full border-4 border-zinc-50 rounded-2xl'><Counter  /></div>
      <div className='mt-10 w-full border-4 border-zinc-50 rounded-2xl'><UserProfile /></div>
      <div className='mt-10 w-full border-4 border-zinc-50 rounded-2xl'><ContactForm /></div>
      <div className='mt-10 w-full border-4 border-zinc-50 rounded-2xl'><TodoList /></div>
      <div className='mt-10 w-full border-4 border-zinc-50 rounded-2xl'><FunctionalCounter /></div>
    </div>
  );
}
