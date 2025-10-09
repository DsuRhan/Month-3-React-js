import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: number;
  status: "available" | "soldout" | "preorder";
}

export default function ProductListForm() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    status: "available" as Product["status"],
  });

  const [errors, setErrors] = useState<{ name?: string; price?: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined })); // hapus error ketika user mengetik ulang
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string; price?: string } = {};

    // === Validasi input ===
    if (!form.name.trim()) {
      newErrors.name = "⚠️ Nama produk wajib diisi.";
    }

    if (!form.price || isNaN(Number(form.price)) || Number(form.price) <= 0) {
      newErrors.price = "⚠️ Harga harus berupa angka positif.";
    }

    // Jika ada error, hentikan di sini
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // === Jika valid, lanjutkan tambah produk ===
    const newProduct: Product = {
      id: Date.now(),
      name: form.name,
      price: Number(form.price),
      status: form.status,
    };

    setProducts((prev) => [...prev, newProduct]);
    setForm({ name: "", price: "", status: "available" });
    setErrors({});
  };

  const removeProduct = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const getStatusText = (status: Product["status"]) => {
    switch (status) {
      case "available":
        return <span className="text-green-400">Tersedia</span>;
      case "soldout":
        return <span className="text-red-400">Habis</span>;
      case "preorder":
        return <span className="text-yellow-400">Pre-Order</span>;
      default:
        return <span className="text-gray-400">Tidak Diketahui</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6 text-white">
      <div className="w-full max-w-md bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-center">
          🛒 Daftar Produk Interaktif
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          {/* Input Nama */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Nama Produk</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full p-2 rounded-md bg-gray-700 border ${
                errors.name ? "border-red-500" : "border-gray-600"
              } focus:border-blue-500 focus:outline-none`}
              placeholder="Masukkan nama produk"
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  key="name-error"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-red-400 text-sm mt-1"
                >
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Input Harga */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Harga (Rp)</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className={`w-full p-2 rounded-md bg-gray-700 border ${
                errors.price ? "border-red-500" : "border-gray-600"
              } focus:border-blue-500 focus:outline-none`}
              placeholder="Masukkan harga"
            />
            <AnimatePresence>
              {errors.price && (
                <motion.p
                  key="price-error"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-red-400 text-sm mt-1"
                >
                  {errors.price}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Select Status */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none"
            >
              <option value="available">Tersedia</option>
              <option value="soldout">Habis</option>
              <option value="preorder">Pre-Order</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md font-medium transition-all"
          >
            Tambahkan Produk
          </button>
        </form>

        {/* List Produk */}
        <AnimatePresence>
          {products.length > 0 ? (
            <ul className="space-y-3">
              {products.map((p) => (
                <motion.li
                  key={p.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-between items-center bg-gray-700 p-3 rounded-lg hover:bg-gray-600"
                >
                  <div>
                    <p className="font-medium">{p.name}</p>
                    <p className="text-sm text-gray-400">
                      Rp {p.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {getStatusText(p.status)}
                    <button
                      onClick={() => removeProduct(p.id)}
                      className="text-red-400 hover:text-red-600 text-sm font-bold"
                    >
                      ✕
                    </button>
                  </div>
                </motion.li>
              ))}
            </ul>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 italic py-4"
            >
              Belum ada produk yang ditambahkan.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
