import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="text-5xl font-bold text-red-500 mb-4">404</h2>
      <p className="text-gray-600 mb-6">Halaman yang kamu cari tidak ditemukan.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Kembali ke Beranda
      </Link>
    </section>
  );
}
