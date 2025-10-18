import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();

  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-bold text-orange-600 mb-4">🛍️ Detail Produk</h2>
      <div className="bg-white border rounded-lg shadow-sm p-6 max-w-sm mx-auto">
        <p className="text-gray-700 mb-2">ID Produk: <span className="font-mono">{productId}</span></p>
        <p className="text-gray-500">Ini adalah halaman detail untuk produk dengan ID <strong>{productId}</strong>.</p>
      </div>
    </section>
  );
}
