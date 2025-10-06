import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    const tambah = () => {
    setCount(prev => prev + 1);
  };

const tambah10 = () => {
  setCount(prev => prev + 10);
}

  const kurang = () => {
    setCount(prev => prev - 1);
  };

  const kurang10 = () => {
    setCount(prev => prev - 10);
  };
  const [username, setUsername] = useState("Master");

  const [isOnline, setIsOnline] = useState(true);

  const [notifications, setNotifications] = useState(3);

   const [task, setTask] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };
  return (
    <>
    <div className='flex relative flex-col border-2 rounded-md p-10'>
      <h3 className='self-center text-center justify-center items-center'>Count: {count}</h3>
      <div className='flex flex-row gap-3'>
        <button onClick={kurang10}>-10</button>
        <button onClick={kurang}>−1</button>
        <button onClick={tambah}>+1</button>
        <button onClick={tambah10}>+10</button>
      </div>
       <div className='mt-10'>
      <h3 className=' mb-10 '>{username} {isOnline ? "(Online)" : "(Offline)"}</h3>
      <p>Notifikasi: {notifications}</p>
      <button onClick={() => setIsOnline(prev => !prev)}>Ubah Status</button>
      <button onClick={() => setNotifications(prev => prev + 1)}>Tambah Notif</button>
    </div>
    </div>
    <div className='flex mt-10 relative flex-col border-2 rounded-md p-10 items-center justify-center'>
  <div className='flex flex-row gap-3'>
 <input className='bg-red-300 rounded-md text-center justify-center items-center text-black placeholder:text-white placeholder:text-4xl ' 
 placeholder='Input Task' type="text" value={task} onChange={handleChange} />
      <button onClick={handleAdd}>Tambah</button>
        </div>
<div className='mt-10 flex flex-row' >
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      </div>

    </div>
    </>
  );
}

export default App
