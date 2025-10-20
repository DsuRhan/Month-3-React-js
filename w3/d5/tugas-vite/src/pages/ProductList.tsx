import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: { name: string };
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { addToCart } = useCart();

  useEffect(() => {
    if (!user) return; // jangan fetch kalau belum login
    setLoading(true);
    async function fetchProducts() {
      try {
        const res = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await res.json();
        setProducts(data.slice(0, 12));
      } catch (err) {
        console.error('Gagal memuat produk:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [user]);

  if (!user) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600">Silakan login untuk melihat daftar produk.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
        <p className="ml-3 text-gray-600">Memuat produk...</p>
      </div>
    );
  }

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        🛒 Daftar Produk
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 shadow hover:shadow-lg transition rounded-lg flex flex-col items-center"
          >
            <Link to={`/products/${product.id}`}>
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-40 w-40 object-cover rounded mb-4"
              />
            </Link>
            <h3 className="font-semibold text-gray-800 text-center">{product.title}</h3>
            <p className="text-blue-600 font-bold mt-2">${product.price}</p>
            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.images[0],
                })
              }
              className="mt-3 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
            >
              Tambah ke Keranjang
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
