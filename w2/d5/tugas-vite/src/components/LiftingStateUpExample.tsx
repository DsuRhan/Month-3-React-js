import { useState } from "react";
import type { ChangeEvent } from "react";

function NumberInput({
  value,
  onChange,
  label,
}: {
  value: number;
  onChange: (val: number) => void;
  label: string;
}) {
  return (
    <div className="flex flex-col mb-3">
      <label className="text-gray-700 dark:text-gray-200 mb-1">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(parseFloat(e.target.value))
        }
        className="px-3 py-2 border rounded-md bg-white dark:bg-gray-800"
      />
    </div>
  );
}

export default function LiftingStateUpExample() {
  const [number, setNumber] = useState<number>(0);

  const handleInput1Change = (val: number) => setNumber(val);
  const handleInput2Change = (val: number) => setNumber(val);

  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Lifting State Up
      </h2>
      <NumberInput label="Input 1" value={number} onChange={handleInput1Change} />
      <NumberInput label="Input 2" value={number} onChange={handleInput2Change} />
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Nilai bersama: {number}
      </p>
    </div>
  );
}
