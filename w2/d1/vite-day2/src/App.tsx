import React, { useState } from "react";

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState<null | typeof formData>(null);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) =>
    /^(\+62|62|0)8[1-9][0-9]{6,11}$/.test(phone);
  const validatePassword = (password: string) =>
    /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})(?!.*\s).*$/.test(password);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { email: "", phone: "", password: "" };
    let valid = true;

    if (!validateEmail(formData.email)) {
      newErrors.email = "Email tidak valid.";
      valid = false;
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Nomor HP tidak valid (harus format Indonesia +62).";
      valid = false;
    }
    if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password minimal 8 karakter, huruf besar, simbol, dan tanpa spasi.";
      valid = false;
    }

    setErrors(newErrors);
    if (valid) {
      setSubmitted(formData);
      setFormData({ email: "", phone: "", password: "" });
    } else {
      setSubmitted(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      <div className="relative rounded-2xl p-[3px] overflow-clip bg-transparent drop-shadow-[0_0_20px_rgba(20,184,166,0.4)]">
        {/* border gradient berputar */}
        <div className="absolute w-[900%] h-[900%] -inset-[3px] top-[-400%] left-[-400%] rounded-2xl bg-[conic-gradient(from_0deg,#14b8a6,#ec4899,#14b8a6)] animate-rotate-border blur-[2px] opacity-90" />

        {/* isi form */}
        <div className="relative bg-slate-800 rounded-2xl p-8 w-[360px] sm:w-[400px] z-10 shadow-lg shadow-teal-500/10">
          <h2 className="text-2xl font-semibold text-center text-teal-300 mb-6">
            Register Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="contoh: nama@email.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Nomor Handphone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="+6281234567890"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="********"
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-lg font-semibold transition-all active:bg-teal-200"
            >
              Submit
            </button>
          </form>

          {submitted && (
            <div className="mt-6 bg-slate-700 p-4 rounded-xl">
              <h3 className="text-lg font-semibold text-teal-300 mb-2">
                Data yang Dikirim:
              </h3>
              <p className="text-gray-200">
                <strong>Email:</strong> {submitted.email}
              </p>
              <p className="text-gray-200">
                <strong>Phone:</strong> {submitted.phone}
              </p>
              <p className="text-gray-200">
                <strong>Password:</strong> {submitted.password}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
