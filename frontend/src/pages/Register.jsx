import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";
import { motion } from "framer-motion";
import { User, Mail, Lock, ArrowRight, ShieldCheck, Sparkles, Heart, ChevronLeft } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await API.post("/auth/signup", formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
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
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[150px] opacity-20" />
        
        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-3 text-indigo-500 font-semibold uppercase tracking-[0.3em] text-xs mb-20 hover:text-white transition-colors">
            <ChevronLeft size={16} /> Back to Hub
          </Link>
          <h2 className="text-6xl lg:text-7xl font-semibold text-white leading-[0.9] tracking-tighter mb-12">
            Join the <br />
            <span className="text-indigo-500">Future.</span>
          </h2>
          <p className="text-gray-400 text-xl font-semibold leading-relaxed max-w-sm">
            Create your unique identity and unlock thousands of government initiatives designed for you.
          </p>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-500 border border-white/10">
              <Sparkles size={24} />
            </div>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest leading-tight">
              Instant AI Profile <br /> Synthesis Enabled
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
              <h3 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight">Onboarding</h3>
              <p className="text-gray-400 text-lg font-semibold">Join the hub of citizen benefits.</p>
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
                  <User size={14} className="text-indigo-600" /> Full Legal Name
                </label>
                <input 
                  type="text" 
                  required
                  className="w-full px-10 py-6 bg-gray-50 border border-transparent rounded-[32px] focus:ring-8 focus:ring-indigo-50 focus:bg-white focus:border-indigo-100 outline-none transition-all text-xl font-semibold placeholder:text-gray-300"
                  placeholder="John Doe"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-xs font-semibold text-gray-400 uppercase tracking-widest ml-4">
                  <Mail size={14} className="text-indigo-600" /> Digital Identity / Email
                </label>
                <input 
                  type="email" 
                  required
                  className="w-full px-10 py-6 bg-gray-50 border border-transparent rounded-[32px] focus:ring-8 focus:ring-indigo-50 focus:bg-white focus:border-indigo-100 outline-none transition-all text-xl font-semibold placeholder:text-gray-300"
                  placeholder="name@example.com"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-xs font-semibold text-gray-400 uppercase tracking-widest ml-4">
                  <Lock size={14} className="text-indigo-600" /> Secure Passkey
                </label>
                <input 
                  type="password" 
                  required
                  className="w-full px-10 py-6 bg-gray-50 border border-transparent rounded-[32px] focus:ring-8 focus:ring-indigo-50 focus:bg-white focus:border-indigo-100 outline-none transition-all text-xl font-semibold placeholder:text-gray-300"
                  placeholder="••••••••"
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="group w-full py-8 bg-indigo-600 text-white rounded-[32px] font-semibold text-2xl flex items-center justify-center gap-6 shadow-2xl shadow-indigo-200 transition-all disabled:opacity-50"
              >
                {loading ? "Creating Identity..." : (
                  <>
                    Join the Hub
                    <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-16 flex items-center justify-between border-t border-gray-100 pt-12">
              <p className="text-gray-400 font-semibold">
                Already registered? <Link to="/login" className="text-indigo-600 hover:underline ml-2">Sign In</Link>
              </p>
              <Link to="/" className="text-gray-400 hover:text-indigo-600 font-semibold transition-colors">
                Support
              </Link>
            </div>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-12 text-gray-400 font-semibold uppercase tracking-[0.3em] text-[10px]">
            <span className="flex items-center gap-3">
              <ShieldCheck size={14} className="text-emerald-500" /> Verified Hub
            </span>
            <span className="flex items-center gap-3">
              <Heart size={14} className="text-red-500" /> For Citizens
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
