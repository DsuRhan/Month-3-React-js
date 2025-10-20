import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="text-center py-20">
      <h2 className="text-5xl font-bold text-red-500 mb-4">404</h2>
      <p className="text-gray-700 mb-6">Halaman yang Anda cari tidak ditemukan.</p>
      <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Kembali ke Beranda
      </Link>
    </section>
  );
}
