import { useCart } from "../context/CartContext";

const sampleProducts = [
  { id: 1, name: "Keyboard", price: 250000 },
  { id: 2, name: "Mouse", price: 150000 },
  { id: 3, name: "Monitor", price: 1500000 },
];

export default function ProductList() {
  const { addItem } = useCart();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Daftar Produk</h3>
      <ul className="space-y-3">
        {sampleProducts.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg"
          >
            <span>
              {item.name} —{" "}
              <span className="font-medium">
                Rp {item.price.toLocaleString()}
              </span>
            </span>
            <button
              onClick={() => addItem(item)}
              className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
