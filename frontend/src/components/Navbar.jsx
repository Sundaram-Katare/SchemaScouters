import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  
  const authPages = ["/login", "/register"];
  if (authPages.includes(location.pathname)) return null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between p-6 bg-white border-b border-gray-100 font-poppins sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tight">
        Schema<span className="text-blue-600">Scouters</span>
      </Link>
      
      <div className="flex items-center gap-8">
        <Link 
          to="/" 
          className={`text-gray-600 hover:text-blue-600 transition font-medium ${location.pathname === '/' ? 'text-blue-600' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/explore" 
          className={`text-gray-600 hover:text-blue-600 transition font-medium ${location.pathname === '/explore' ? 'text-blue-600' : ''}`}
        >
          Explore Policies
        </Link>
        
        {token ? (
          <>
            <Link 
              to="/dashboard" 
              className={`text-gray-600 hover:text-blue-600 transition font-medium ${location.pathname === '/dashboard' ? 'text-blue-600' : ''}`}
            >
              Dashboard
            </Link>
            <button 
              onClick={handleLogout}
              className="px-5 py-2 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition font-medium"
            >
              Logout
            </button>
          </>
        ) : (
          <Link 
            to="/login" 
            className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:shadow-xl transition font-medium"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
