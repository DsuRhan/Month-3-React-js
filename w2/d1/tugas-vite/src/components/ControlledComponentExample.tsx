import React, { useState } from "react";

const ControlledComponentExample: React.FC = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(name);
    setName("");
  };

  return (
    <div className="bg-slate-800 text-gray-200 p-6 rounded-lg w-80 text-center shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-teal-400">Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Masukkan nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded bg-slate-700 text-gray-100 w-full mb-3 focus:ring-2 focus:ring-teal-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-teal-500 hover:bg-teal-400 rounded-lg transition-all"
        >
          Submit
        </button>
      </form>
      {submitted && <p className="mt-4">Nama yang dikirim: {submitted}</p>}
    </div>
  );
};

export default ControlledComponentExample;
