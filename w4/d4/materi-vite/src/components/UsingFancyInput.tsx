import { useRef } from "react";
import FancyInput from "./FancyInput";

const UsingFancyInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="font-semibold mb-2">forwardRef - Input Kustom</h2>
      <FancyInput ref={inputRef} label="Nama Lengkap" />
      <button
        onClick={() => inputRef.current?.focus()}
        className="bg-green-600 text-white px-3 py-1 rounded mt-2"
      >
        Fokus dari Parent
      </button>
    </div>
  );
};

export default UsingFancyInput;


