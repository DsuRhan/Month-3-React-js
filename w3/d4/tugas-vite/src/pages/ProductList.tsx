import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types/Product";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Gagal mengambil data produk:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-600 animate-pulse">Memuat produk...</p>
      </div>
    );
  }

  const handleLoadMore = () => setVisibleCount((prev) => prev + 8);

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        🛒 Daftar Produk
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="h-48 w-full object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold line-clamp-2">
                {product.title}
              </h3>
              <p className="text-indigo-600 font-bold mt-2">
                ${product.price.toFixed(2)}
              </p>
              <Link
                to={`/products/${product.id}`}
                className="block mt-3 bg-indigo-500 text-white text-center py-2 rounded hover:bg-indigo-600 transition"
              >
                Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            Muat Lebih Banyak
          </button>
        </div>
      )}
    </section>
  );
}
