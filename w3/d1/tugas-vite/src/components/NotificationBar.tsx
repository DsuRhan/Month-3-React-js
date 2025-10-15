import { useNotification } from "../context/NotificationContext";

export default function NotificationBar() {
  const { notifications, addNotification, clearNotifications } =
    useNotification();

  return (
    <div className="space-y-3">
      <p className="font-medium">
        Notifikasi: {notifications.length > 0 ? notifications.length : "Tidak ada"}
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => addNotification("Pesan baru diterima!")}
          className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-md"
        >
          Tambah
        </button>
        <button
          onClick={clearNotifications}
          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md"
        >
          Hapus Semua
        </button>
      </div>
    </div>
  );
}
