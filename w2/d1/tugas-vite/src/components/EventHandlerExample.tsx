import React, { useState } from "react";

const EventHandlerExample: React.FC = () => {
  const [message, setMessage] = useState("Arahkan atau klik tombol di bawah");

  return (
    <div className="bg-slate-800 text-gray-200 p-6 rounded-lg w-80 text-center shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-teal-400">Event Handler</h2>
      <p className="mb-4">{message}</p>
      <button
        onClick={() => setMessage("Tombol diklik!")}
        onMouseEnter={() => setMessage("Mouse di atas tombol")}
        onMouseLeave={() => setMessage("Mouse keluar dari tombol")}
        className="px-4 py-2 bg-teal-500 hover:bg-teal-400 rounded-lg transition-all"
      >
        Tekan Aku
      </button>
    </div>
  );
};

export default EventHandlerExample;
