import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ListExample() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Laptop", price: 15000000 },
    { id: 2, name: "Keyboard", price: 500000 },
    { id: 3, name: "Mouse", price: 300000 },
  ]);

  return (
    <div className="p-4 border rounded-lg bg-slate-800 text-white w-full max-w-md">
      <h2 className="font-bold text-lg mb-2">
        4️⃣ Rendering List + Empty State
      </h2>

      {products.length > 0 ? (
        <ul className="list-disc list-inside space-y-1">
          {products.map((p) => (
            <li key={p.id}>
              {p.name} — Rp {p.price.toLocaleString("id-ID")}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 italic">No products available.</p>
      )}

      <button
        className="mt-3 px-3 py-1 bg-red-600 rounded hover:bg-red-500"
        onClick={() => setProducts([])}
      >
        Clear List
      </button>
    </div>
  );
}
