import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, LogOut, ChevronRight, LayoutDashboard, Compass, Sparkles, ShieldCheck } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const navLinks = [
    { name: "Explore", path: "/explore", icon: <Compass size={18} /> },
    { name: "Matches", path: "/dashboard", icon: <Sparkles size={18} /> },
  ];

  const authPages = ["/login", "/register"];
  if (authPages.includes(location.pathname)) return null;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 lg:px-12 py-6 ${scrolled ? "bg-white/80 backdrop-blur-2xl border-b border-gray-100 py-4 shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-semibold shadow-xl shadow-blue-200 transition-transform group-hover:rotate-12">
            S
          </div>
          <span className="text-2xl font-semibold text-gray-900 tracking-tighter">
            Schema<span className="text-blue-600">Scouters.</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center bg-gray-50 p-1.5 rounded-full border border-gray-100 shadow-inner">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`relative px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-widest flex items-center gap-2 transition-all ${location.pathname === link.path ? "text-blue-600" : "text-gray-400 hover:text-gray-600"}`}
            >
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="navPill"
                  className="absolute inset-0 bg-white shadow-md rounded-full border border-gray-100"
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-4">
              <Link 
                to="/dashboard"
                className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-semibold transition-all hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-200"
              >
                <LayoutDashboard size={18} />
                Portal
              </Link>
              <button 
                onClick={handleLogout}
                className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-100 transition-all shadow-sm"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="px-8 py-3 text-sm font-semibold text-gray-400 hover:text-gray-900 transition-all uppercase tracking-widest">
                Login
              </Link>
              <Link to="/register" className="px-8 py-3 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-xl shadow-blue-200 hover:scale-105 transition-all uppercase tracking-widest">
                Get Started
              </Link>
            </div>
          )}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-12 h-12 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-gray-900 shadow-sm"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-50 mt-4 -mx-6 px-6 py-8 overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-6 bg-gray-50 rounded-3xl group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                      {link.icon}
                    </div>
                    <span className="text-xl font-semibold text-gray-900 uppercase tracking-widest">{link.name}</span>
                  </div>
                  <ChevronRight className="text-gray-300 group-hover:text-blue-600 transition-all" />
                </Link>
              ))}
              
              {!user && (
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Link to="/login" className="py-5 bg-gray-50 rounded-3xl text-center font-semibold uppercase tracking-widest text-sm" onClick={() => setIsOpen(false)}>Login</Link>
                  <Link to="/register" className="py-5 bg-blue-600 text-white rounded-3xl text-center font-semibold uppercase tracking-widest text-sm shadow-xl shadow-blue-100" onClick={() => setIsOpen(false)}>Sign Up</Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
