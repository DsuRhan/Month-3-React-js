import {type FC, useRef } from "react";

const FocusInput: FC = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const handleFocus = () => { ref.current?.focus(); ref.current?.select(); };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="font-semibold mb-2">useRef - Fokus Input</h2>
      <input ref={ref} className="border px-3 py-2 rounded w-full mb-2" placeholder="Ketik sesuatu..." />
      <button onClick={handleFocus} className="bg-blue-600 text-white px-3 py-1 rounded">
        Fokus & Pilih
      </button>
    </div>
  );
};

export default FocusInput;
