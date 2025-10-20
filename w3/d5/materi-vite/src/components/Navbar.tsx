import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow">
      <Link to="/" className="font-semibold text-lg">MyApp</Link>

      <div className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'underline text-yellow-300' : 'hover:text-yellow-300'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'underline text-yellow-300' : 'hover:text-yellow-300'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'underline text-yellow-300' : 'hover:text-yellow-300'
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
