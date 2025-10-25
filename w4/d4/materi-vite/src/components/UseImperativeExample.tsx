import { useRef } from "react";
import ImperativeInput, { type ImperativeInputHandle } from "./ImperativeInput";

const UseImperativeExample = () => {
  const ref = useRef<ImperativeInputHandle | null>(null);

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="font-semibold mb-2">useImperativeHandle</h2>
      <ImperativeInput ref={ref} />
      <div className="flex gap-2 mt-2">
        <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={() => ref.current?.focus()}>
          Fokus
        </button>
        <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => ref.current?.clear()}>
          Hapus
        </button>
      </div>
    </div>
  );
};

export default UseImperativeExample;
