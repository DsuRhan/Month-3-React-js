import React, { useState } from "react";

const SyntheticEventExample: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log("Link diklik tapi tidak diarahkan ke halaman lain");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="bg-slate-800 text-gray-200 p-6 rounded-lg w-80 text-center shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-teal-400">SyntheticEvent</h2>
      <a
        href="https://example.com"
        onClick={handleLinkClick}
        className="text-teal-400 underline hover:text-teal-300"
      >
        Klik Link Ini
      </a>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Ketik sesuatu..."
          value={inputValue}
          onChange={handleInputChange}
          className="p-2 rounded bg-slate-700 text-gray-100 w-full focus:ring-2 focus:ring-teal-400"
        />
        <p className="mt-2">Input: {inputValue}</p>
      </div>
    </div>
  );
};

export default SyntheticEventExample;
