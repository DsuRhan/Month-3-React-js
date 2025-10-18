import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold text-blue-600">React Router App</h1>
        <ul className="flex gap-4 text-sm">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold underline" : "hover:text-blue-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold underline" : "hover:text-blue-600"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold underline" : "hover:text-blue-600"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold underline" : "hover:text-blue-600"
              }
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold underline" : "hover:text-blue-600"
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
