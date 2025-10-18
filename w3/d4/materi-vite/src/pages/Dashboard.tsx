import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <section className="p-6 text-center">
      <h2 className="text-3xl font-bold text-indigo-600 mb-4">📊 Dashboard</h2>
      <nav className="flex justify-center gap-6 mb-6">
        <Link to="profile" className="text-indigo-600 hover:underline">
          Profil
        </Link>
        <Link to="settings" className="text-indigo-600 hover:underline">
          Pengaturan
        </Link>
      </nav>
      <div className="border-t pt-4">
        <Outlet />
      </div>
    </section>
  );
}
