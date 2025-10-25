import { Toggle } from "./Toggle";

const UseToggle = () => (
  <div className="p-4 border rounded mb-4">
    <h2 className="font-semibold mb-2">Render Props - Toggle</h2>
    <Toggle>
      {(open, toggle) => (
        <div>
          <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={toggle}>
            {open ? "Tutup" : "Buka"}
          </button>
          {open && <div className="mt-2 p-2 border rounded">Konten tampil</div>}
        </div>
      )}
    </Toggle>
  </div>
);

export default UseToggle;
