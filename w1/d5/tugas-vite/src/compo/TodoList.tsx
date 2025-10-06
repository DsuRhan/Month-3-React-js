import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) setTasks([...tasks, input]);
    setInput("");
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Tugas baru..." />
      <button onClick={addTask}>Tambah</button>

      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task}
            <button onClick={() => removeTask(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
