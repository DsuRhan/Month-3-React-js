import { useToggle } from "../hooks/useToggle";

export function ToggleExample() {
  const modal = useToggle(false);
  const switchBtn = useToggle(true);

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4 text-gray-100 w-80 text-center">
      <h3 className="text-lg font-semibold mb-2">useToggle Example</h3>

      <button
        onClick={modal.toggle}
        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
      >
        {modal.value ? "Close Modal" : "Open Modal"}
      </button>

      {modal.value && <p className="mt-2">Modal is open 🟢</p>}

      <div className="mt-4">
        <button
          onClick={switchBtn.toggle}
          className={`px-4 py-2 rounded ${
            switchBtn.value ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {switchBtn.value ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
}
