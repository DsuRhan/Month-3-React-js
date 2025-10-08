import React, { useState } from "react";

const MultiInputValidationForm: React.FC = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState<typeof form | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.username) newErrors.username = "Username wajib diisi";
    if (!form.email.includes("@")) newErrors.email = "Email harus mengandung '@'";
    if (form.password.length < 6)
      newErrors.password = "Password minimal 6 karakter";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(form);
      setForm({ username: "", email: "", password: "" });
    } else setSubmitted(null);
  };

  return (
    <div className="bg-slate-800 text-gray-200 p-6 rounded-lg w-96 text-center shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-teal-400">Form Validasi</h2>
      <form onSubmit={handleSubmit} className="space-y-3 text-left">
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full p-2 rounded bg-slate-700 text-gray-100 focus:ring-2 focus:ring-teal-400"
          />
          {errors.username && (
            <p className="text-red-400 text-sm">{errors.username}</p>
          )}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-slate-700 text-gray-100 focus:ring-2 focus:ring-teal-400"
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 rounded bg-slate-700 text-gray-100 focus:ring-2 focus:ring-teal-400"
          />
          {errors.password && (
            <p className="text-red-400 text-sm">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-lg font-semibold transition-all"
        >
          Submit
        </button>
      </form>

      {submitted && (
        <div className="mt-4 bg-slate-700 p-3 rounded-lg text-left">
          <h3 className="text-teal-300 font-semibold">Data Dikirim:</h3>
          <p>Username: {submitted.username}</p>
          <p>Email: {submitted.email}</p>
          <p>Password: {submitted.password}</p>
        </div>
      )}
    </div>
  );
};

export default MultiInputValidationForm;
