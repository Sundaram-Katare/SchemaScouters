import React, { useEffect, useState } from "react";
import API from "../api/axios.js";
import SchemeCard from "../components/SchemeCard";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Info, ArrowLeft, Grid, List, Sparkles, ChevronDown, ArrowBigRight } from "lucide-react";
import { Link } from "react-router-dom";

const Explore = () => {
  const [schemes, setSchemes] = useState([]);
  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const res = await API.get("/schemes");
        setSchemes(res.data);
        setFilteredSchemes(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchSchemes();
  }, []);

  useEffect(() => {
    const filtered = schemes.filter(scheme => {
      const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || scheme.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredSchemes(filtered);
  }, [searchTerm, selectedCategory, schemes]);

  const categories = ["All", ...new Set(schemes.map(s => s.category))];

  return (
    <div className="min-h-screen bg-[#fafbfc] pt-32 pb-20 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/3"
          >
            <Link to="/" className="inline-flex items-center gap-3 text-gray-400 font-semibold uppercase tracking-[0.2em] text-[10px] mb-8 hover:text-blue-600 transition-colors group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
              Back to Home
            </Link>
            <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-8 leading-[0.9] tracking-tighter">
              Catalogue of <br />
              <span className="text-blue-600">Schemes.</span>
            </h1>
            <p className="text-gray-500 text-lg font-semibold leading-relaxed max-w-md">
              Discover verified government initiatives mapped directly to your demographic profile. Verified 24/7.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:w-2/3 w-full flex flex-col sm:flex-row gap-6 lg:mt-16"
          >
            <div className="flex-grow relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={22} />
              <input 
                type="text" 
                placeholder="Search by keywords, benefits, or states..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-8 py-6 bg-white border border-gray-100 rounded-[30px] shadow-xl shadow-gray-100/50 focus:ring-8 focus:ring-blue-50 focus:border-blue-100 outline-none transition-all text-lg font-semibold placeholder:text-gray-300"
              />
            </div>
            <div className="relative min-w-[240px]">
              <Filter className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={22} />
              <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-16 pr-12 py-6 bg-white border border-gray-100 rounded-[30px] shadow-xl shadow-gray-100/50 focus:ring-8 focus:ring-blue-50 focus:border-blue-100 outline-none appearance-none cursor-pointer transition-all text-lg font-semibold text-gray-700"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <Grid size={18} />
            </div>
            <p className="font-semibold text-gray-400 uppercase tracking-widest text-xs">
              Showing {filteredSchemes.length} results
            </p>
          </div>
          <div className="flex bg-gray-100 p-1.5 rounded-2xl gap-2">
            <button className="p-2.5 bg-white shadow-sm rounded-xl text-blue-600 transition-all">
              <Grid size={18} />
            </button>
            <button className="p-2.5 text-gray-400 hover:text-gray-600 transition-all">
              <List size={18} />
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-40 gap-6">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 border-[6px] border-blue-50 border-t-blue-600 rounded-full" 
            />
            <p className="text-gray-400 font-semibold uppercase tracking-[0.3em] text-xs animate-pulse">Scanning DB...</p>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredSchemes.map((scheme, i) => (
                <motion.div
                  key={scheme._id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <SchemeCard scheme={scheme} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {!loading && filteredSchemes.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white border-2 border-dashed border-gray-100 rounded-[60px] py-40 text-center"
          >
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-4xl mx-auto mb-10 border border-white shadow-sm">
              🏜️
            </div>
            <h3 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight">Nothing found.</h3>
            <p className="text-gray-400 font-semibold text-xl max-w-lg mx-auto">
              We couldn't find any schemes matching your criteria. Try widening your search or choosing "All" categories.
            </p>
            <button 
              onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
              className="mt-12 px-10 py-5 bg-blue-600 text-white rounded-full font-semibold text-lg shadow-xl shadow-blue-100 hover:scale-105 transition-all"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 lg:p-20 bg-gray-900 rounded-[60px] flex flex-col lg:flex-row items-center gap-16 justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 opacity-20 blur-[120px] -mr-32 -mt-32" />
          <div className="flex items-center gap-10 relative z-10">
            <div className="w-24 h-24 bg-blue-600 rounded-[32px] flex items-center justify-center text-white shadow-2xl shadow-blue-500/50">
              <Sparkles size={48} />
            </div>
            <div>
              <h3 className="text-4xl font-semibold text-white mb-3 tracking-tight">Personalized Matching?</h3>
              <p className="text-gray-400 text-lg font-semibold leading-relaxed max-w-md">
                Don't want to browse? Our AI can find the perfect scheme for you in 30 seconds.
              </p>
            </div>
          </div>
          <Link to="/dashboard" className="relative z-10">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-white text-gray-900 rounded-full font-semibold text-xl shadow-2xl transition-all flex items-center gap-4"
            >
              Try AI Matcher
              <ArrowBigRight size={24} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Explore;
