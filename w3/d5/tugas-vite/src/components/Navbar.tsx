import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Programmatic navigation setelah logout
  };

  return (
    <nav className=" bg-blue-600 text-white p-4 flex relative justify-between items-center">
      <Link to="/" className="font-semibold text-lg">MyApp</Link>

      <div className="flex relative space-x-4 ml-auto justify-end self-end justify-self-end">
        <NavLink to="/" className={({ isActive }) => isActive ? 'underline text-yellow-300' : 'hover:text-yellow-300'}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'underline text-yellow-300' : 'hover:text-yellow-300'}>About</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'underline text-yellow-300' : 'hover:text-yellow-300'}>Products</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'underline text-yellow-300' : 'hover:text-yellow-300'}>Contact</NavLink>
        <NavLink to="/search" className={({ isActive }) => isActive ? 'underline text-yellow-300' : 'hover:text-yellow-300'}>Search</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'underline text-yellow-300' : 'hover:text-yellow-300'}>Dashboard</NavLink>
        
      </div>
        {user ? (
           <div className="flex relative items-center justify-end space-x-3">
               <img
            src={user.avatar}
            alt="avatar"
            className="w-8 h-8 rounded-full border border-white"
          />
          <span>{user.name}</span>
          <button onClick={handleLogout} className="ml-3 text-sm bg-red-500 px-3 py-1 rounded">Logout</button>
        </div> ): 
        (
          <NavLink to="/login" className="ml-3 text-sm bg-green-500 px-3 py-1 rounded">Login</NavLink>
        )}
    </nav>
  );
}
