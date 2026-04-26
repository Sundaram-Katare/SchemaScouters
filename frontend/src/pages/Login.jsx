import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios.js";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, ShieldCheck, Sparkles, ChevronLeft } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await API.post("/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#fafbfc]">
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="lg:w-5/12 bg-gray-900 relative p-12 lg:p-24 flex flex-col justify-between overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] opacity-20" />
        
        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-3 text-blue-500 font-semibold uppercase tracking-[0.3em] text-xs mb-20 hover:text-white transition-colors">
            <ChevronLeft size={16} /> Back to Hub
          </Link>
          <h2 className="text-6xl lg:text-7xl font-semibold text-white leading-[0.9] tracking-tighter mb-12">
            Welcome <br />
            <span className="text-blue-500">Back.</span>
          </h2>
          <p className="text-gray-400 text-xl font-semibold leading-relaxed max-w-sm">
            Access your personalized benefit dashboard and continue your journey.
          </p>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 border border-white/10">
              <ShieldCheck size={24} />
            </div>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest leading-tight">
              Enterprise Grade <br /> Security Protocol
            </p>
          </div>
          <p className="text-gray-600 text-xs font-semibold uppercase tracking-[0.3em]">
            © 2024 SchemaScouters
          </p>
        </div>
      </motion.div>

      <div className="lg:w-7/12 p-12 lg:p-24 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl w-full"
        >
          <div className="bg-white p-12 lg:p-16 rounded-[60px] shadow-2xl shadow-gray-100 border border-gray-50">
            <div className="mb-12">
              <h3 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight">Authentication</h3>
              <p className="text-gray-400 text-lg font-semibold">Enter your digital credentials below.</p>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8 p-6 bg-red-50 border border-red-100 text-red-600 rounded-3xl text-sm font-semibold flex items-center gap-4"
              >
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-xs font-semibold text-gray-400 uppercase tracking-widest ml-4">
                  <Mail size={14} className="text-blue-600" /> Identity / Email
                </label>
                <input 
                  type="email" 
                  required
                  className="w-full px-10 py-6 bg-gray-50 border border-transparent rounded-[32px] focus:ring-8 focus:ring-blue-50 focus:bg-white focus:border-blue-100 outline-none transition-all text-xl font-semibold placeholder:text-gray-300"
                  placeholder="name@example.com"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-xs font-semibold text-gray-400 uppercase tracking-widest ml-4">
                  <Lock size={14} className="text-blue-600" /> Access Key
                </label>
                <input 
                  type="password" 
                  required
                  className="w-full px-10 py-6 bg-gray-50 border border-transparent rounded-[32px] focus:ring-8 focus:ring-blue-50 focus:bg-white focus:border-blue-100 outline-none transition-all text-xl font-semibold placeholder:text-gray-300"
                  placeholder="••••••••"
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="group w-full py-8 bg-blue-600 text-white rounded-[32px] font-semibold text-2xl flex items-center justify-center gap-6 shadow-2xl shadow-blue-200 transition-all disabled:opacity-50"
              >
                {loading ? "Authenticating..." : (
                  <>
                    Sign In
                    <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-16 flex items-center justify-between border-t border-gray-100 pt-12">
              <p className="text-gray-400 font-semibold">
                New citizen? <Link to="/register" className="text-blue-600 hover:underline ml-2">Create Profile</Link>
              </p>
              <Link to="/" className="text-gray-400 hover:text-blue-600 font-semibold transition-colors">
                Lost access?
              </Link>
            </div>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-12 text-gray-400 font-semibold uppercase tracking-[0.3em] text-[10px]">
            <span className="flex items-center gap-3">
              <Sparkles size={14} className="text-amber-500" /> AI Insights
            </span>
            <span className="flex items-center gap-3">
              <ShieldCheck size={14} className="text-emerald-500" /> Encrypted
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
