import { useCart } from "../context/CartContext";

export default function CartDisplay() {
  const { cart, total, removeItem, clearCart } = useCart();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Keranjang Belanja</h3>
      {cart.length === 0 ? (
        <p className="text-gray-500">Keranjang kosong.</p>
      ) : (
        <>
          <ul className="space-y-2 mb-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg"
              >
                <span>
                  {item.name} — Rp {item.price.toLocaleString()}
                </span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-sm px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md"
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center">
            <span className="font-semibold">
              Total: Rp {total.toLocaleString()}
            </span>
            <button
              onClick={clearCart}
              className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
