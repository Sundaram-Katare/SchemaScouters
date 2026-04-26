import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Calendar, Wallet, MapPin, Briefcase, Sparkles, Target, Zap } from "lucide-react";

const SchemeCard = ({ scheme }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (scheme.images && scheme.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % scheme.images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [scheme.images]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white border border-gray-100 rounded-[50px] overflow-hidden hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col h-full"
    >
      <div className="relative h-[320px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            src={scheme.images && scheme.images.length > 0 ? scheme.images[currentImageIndex] : "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000"} 
            alt={scheme.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-60" />
        
        <div className="absolute top-8 left-8 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-xl text-blue-700 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] shadow-2xl border border-white/50">
            <Target size={12} fill="currentColor" />
            {scheme.category}
          </div>
        </div>

        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="text-3xl font-semibold text-white leading-[0.9] tracking-tighter mb-4">
            {scheme.name}
          </h3>
          <div className="flex items-center gap-4 text-white/60 text-xs font-semibold uppercase tracking-widest">
            <span className="flex items-center gap-2"><MapPin size={12} /> {scheme.state}</span>
            <span className="w-1 h-1 bg-white/40 rounded-full" />
            <span className="flex items-center gap-2"><Zap size={12} /> {scheme.occupation}</span>
          </div>
        </div>
        
        {scheme.images && scheme.images.length > 1 && (
          <div className="absolute bottom-8 right-8 flex gap-2">
            {scheme.images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-700 ${i === currentImageIndex ? "bg-white w-6" : "bg-white/30 w-1"}`} 
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-10 flex flex-col flex-grow">
        <p className="text-gray-500 mb-10 line-clamp-3 text-lg font-semibold leading-relaxed italic">
          "{scheme.description}"
        </p>
        
        <div className="grid grid-cols-2 gap-8 mb-10 border-t border-gray-50 pt-10">
          <div className="space-y-1">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <Calendar size={12} className="text-blue-600" /> Target Age
            </p>
            <p className="text-xl font-semibold text-gray-900">{scheme.minAge}-{scheme.maxAge} Yrs</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <Wallet size={12} className="text-emerald-600" /> Income Limit
            </p>
            <p className="text-xl font-semibold text-gray-900">₹{Number(scheme.maxIncome).toLocaleString()}</p>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-4">
          <motion.button 
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowDetails(!showDetails)}
            className={`w-full py-6 rounded-[30px] font-semibold uppercase tracking-widest text-xs transition-all duration-500 flex items-center justify-center gap-4 ${showDetails ? "bg-gray-900 text-white shadow-2xl" : "bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white"}`}
          >
            {showDetails ? "Abstract Details" : "Inspect Benefits"}
            <motion.div animate={{ rotate: showDetails ? 180 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <ChevronDown size={18} />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {showDetails && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-8 space-y-8">
                  <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-100">
                    <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                      <Sparkles size={14} className="text-blue-600" /> Core Incentives
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                      {scheme.benefits}
                    </p>
                  </div>
                  
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={scheme.applyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-4 w-full py-6 bg-blue-600 text-white rounded-[30px] font-semibold text-lg shadow-2xl shadow-blue-100 transition-all duration-300"
                  >
                    Initiate Application
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default SchemeCard;
