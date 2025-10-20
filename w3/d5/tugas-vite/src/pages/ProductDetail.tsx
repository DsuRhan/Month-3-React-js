import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: { name: string };
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Gagal memuat detail produk:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
        <p className="ml-3 text-gray-600">Memuat detail produk...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 mb-4">Produk tidak ditemukan.</p>
        <Link to="/products" className="text-blue-600 underline">Kembali ke daftar produk</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
    });
    navigate('/products');
  };

  return (
    <section className="py-10 text-center">
      <img
        src={product.images[0]}
        alt={product.title}
        className="mx-auto h-64 w-64 object-cover rounded mb-6 shadow"
      />
      <h2 className="text-3xl font-bold text-blue-600 mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-2xl font-bold text-green-600 mb-4">${product.price}</p>
      <p className="text-gray-500 mb-6">Kategori: {product.category.name}</p>
      <div className="space-x-3">
        <button
          onClick={handleAddToCart}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Tambahkan ke Keranjang
        </button>
        <Link to="/products" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Kembali
        </Link>
      </div>
    </section>
  );
}
