interface CharacterToggleGroupProps {
  onSelect: (type: "normal" | "elite2" | "skin") => void;
  currentType: string;
}

export function CharacterToggleGroup({ onSelect, currentType }: CharacterToggleGroupProps) {
  const buttonStyle = (active: boolean) =>
    `px-4 py-2 rounded-lg border ${
      active
        ? "bg-blue-600 border-blue-400 text-white"
        : "bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
    }`;

  return (
    <div className="flex gap-3 mt-4">
      <button onClick={() => onSelect("normal")} className={buttonStyle(currentType === "normal")}>
        Normal
      </button>
      <button onClick={() => onSelect("elite2")} className={buttonStyle(currentType === "elite2")}>
        Elite 2
      </button>
      <button onClick={() => onSelect("skin")} className={buttonStyle(currentType === "skin")}>
        Skin
      </button>
    </div>
  );
}
