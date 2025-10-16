import { useForm } from "../hooks/useForm";

export function FormExample() {
 const { values, handleChange, resetForm } = useForm({
  name: "",
  email: "",
});


  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4 text-gray-100 w-80 text-center">
      <h3 className="text-lg font-semibold mb-2">useForm Example</h3>

      <input
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
        className="w-full p-2 mb-2 bg-gray-700 rounded"
      />
      <input
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        className="w-full p-2 mb-2 bg-gray-700 rounded"
      />

      <button onClick={resetForm} className="px-3 py-1 bg-red-600 rounded">
        Reset
      </button>

      <div className="mt-3 text-sm">
        <p><b>Name:</b> {values.name}</p>
        <p><b>Email:</b> {values.email}</p>
      </div>
    </div>
  );
}
