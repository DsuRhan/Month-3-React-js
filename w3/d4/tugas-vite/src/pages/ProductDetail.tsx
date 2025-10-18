import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { Product } from "../types/Product";

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://api.escuelajs.co/api/v1/products/${productId}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Gagal mengambil detail produk:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-600 animate-pulse">Memuat detail produk...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-4">Produk tidak ditemukan.</p>
        <Link
          to="/products"
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
        >
          Kembali ke Daftar Produk
        </Link>
      </div>
    );
  }

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
        {product.title}
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="w-full md:w-1/2 h-80 object-cover rounded-lg"
        />
        <div className="flex-1">
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-indigo-600 mb-2">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mb-4">
            Kategori:{" "}
            <span className="font-medium">{product.category?.name}</span>
          </p>
          <Link
            to="/products"
            className="inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            ← Kembali
          </Link>
        </div>
      </div>
    </section>
  );
}
