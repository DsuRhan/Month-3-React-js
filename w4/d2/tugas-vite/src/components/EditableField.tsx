import { useState, type ChangeEvent } from "react";

/* 
  🧩 Interface Props untuk EditableField
  - Menggunakan generic agar field bisa menampung berbagai tipe data.
  - Event handler sudah typed (ChangeEvent<HTMLInputElement>).
*/
interface EditableFieldProps<T> {
  label: string;
  value: T;
  onChange: (newValue: T) => void;
}

/* 
  🧠 Developer Note:
  - Ini bagian dari latihan "Type-safe components" dan "Utility Types".
  - Bisa digunakan untuk properti Partial<User> seperti bio, phone, dsb.
*/

export const EditableField = <T extends string | number>({
  label,
  value,
  onChange,
}: EditableFieldProps<T>) => {
  const [editing, setEditing] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value as T);
  };

  return (
    <div className="mb-4">
      <label className="block font-semibold text-gray-600 mb-1">{label}</label>
      {editing ? (
        <input
          value={value}
          onChange={handleChange}
          onBlur={() => setEditing(false)}
          className="border border-gray-300 rounded px-2 py-1 w-full"
        />
      ) : (
        <div
          onClick={() => setEditing(true)}
          className="cursor-pointer text-gray-800 hover:text-blue-600"
        >
          {value || <span className="text-gray-400">Click to edit</span>}
        </div>
      )}
    </div>
  );
};
