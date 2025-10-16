interface CharacterSearchProps {
  value: string;
  onChange: (val: string) => void;
}

export function CharacterSearch({ value, onChange }: CharacterSearchProps) {
  return (
    <div className="flex flex-col items-center gap-2 mb-4">
      <label className="text-gray-300 text-sm">Enter Operator Name:</label>
      <input
        type="text"
        placeholder="Ex: Blaze"
        value={value}
        onChange={(e) => onChange(e.target.value.trim())}
        className="px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
      />
    </div>
  );
}
