import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Dashboard() {
  const { logout } = useAuth();
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <section className="py-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">📊 Dashboard</h2>

      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-lg mb-2">Informasi Akun</h3>
        <p className="text-gray-600 mb-2">Status: <span className="font-semibold text-green-600">Login</span></p>
        <button
          onClick={logout}
          className="mt-3 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="font-semibold text-lg mb-4">🛒 Keranjang Belanja</h3>
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Keranjang kosong.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 mb-4">
              {cart.map((item) => (
                <li key={item.id} className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Hapus
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center">
              <p className="font-bold text-gray-700">
                Total: ${cart.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2)}
              </p>
              <button
                onClick={clearCart}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 text-sm"
              >
                Hapus Semua
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
