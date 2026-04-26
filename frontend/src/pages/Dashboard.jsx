import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios.js";
import SchemeCard from "../components/SchemeCard";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ClipboardCheck, User, CreditCard, MapPin, Briefcase, Tag, Search, RefreshCw, XCircle, ChevronRight, Zap, Info } from "lucide-react";

const Dashboard = () => {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [schemes, setSchemes] = useState([]);
  const [criteria, setCriteria] = useState(null);
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState("ai");
  
  const [formData, setFormData] = useState({
    age: "",
    income: "",
    state: "Any",
    occupation: "Any",
    category: "General"
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleAiSearch = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setLoading(true);
    setCriteria(null);
    setSchemes([]);

    try {
      const aiRes = await API.post("/ai/extract", { text: userInput });
      const extractedCriteria = aiRes.data;
      setCriteria(extractedCriteria);

      const schemeRes = await API.post("/schemes/filter", extractedCriteria);
      setSchemes(schemeRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCriteria(null);
    setSchemes([]);

    try {
      setCriteria(formData);
      const schemeRes = await API.post("/schemes/filter", formData);
      setSchemes(schemeRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const resetSearch = () => {
    setSchemes([]);
    setCriteria(null);
    setUserInput("");
    setFormData({
      age: "",
      income: "",
      state: "Any",
      occupation: "Any",
      category: "General"
    });
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] pt-32 pb-32 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/3 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] mb-8 border border-blue-100">
              <Zap size={12} fill="currentColor" />
              Member Dashboard
            </div>
            <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-8 leading-[0.9] tracking-tighter">
              Hello, <br />
              <span className="text-blue-600 underline decoration-8 decoration-blue-100 underline-offset-8">
                {user?.name?.split(' ')[0] || 'Citizen'}.
              </span>
            </h1>
            <p className="text-gray-500 text-lg font-semibold leading-relaxed mb-12 max-w-sm">
              Ready to discover your benefits? Choose your preferred method to start the matching engine.
            </p>

            <div className="flex flex-col gap-4">
              <button 
                onClick={() => setMode("ai")}
                className={`flex items-center justify-between p-6 rounded-[32px] transition-all duration-500 border-2 ${mode === "ai" ? "bg-white border-blue-600 shadow-2xl shadow-blue-100 ring-8 ring-blue-50" : "bg-gray-50 border-transparent text-gray-400 hover:bg-white hover:border-gray-100"}`}
              >
                <div className="flex items-center gap-6 text-left">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${mode === "ai" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-400"}`}>
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <p className={`font-semibold uppercase tracking-widest text-[10px] mb-1 ${mode === "ai" ? "text-blue-600" : "text-gray-400"}`}>Preferred</p>
                    <p className={`text-xl font-semibold ${mode === "ai" ? "text-gray-900" : "text-gray-400"}`}>AI Assistant</p>
                  </div>
                </div>
                <ChevronRight size={24} className={mode === "ai" ? "text-blue-600" : "text-gray-300"} />
              </button>

              <button 
                onClick={() => setMode("form")}
                className={`flex items-center justify-between p-6 rounded-[32px] transition-all duration-500 border-2 ${mode === "form" ? "bg-white border-blue-600 shadow-2xl shadow-blue-100 ring-8 ring-blue-50" : "bg-gray-50 border-transparent text-gray-400 hover:bg-white hover:border-gray-100"}`}
              >
                <div className="flex items-center gap-6 text-left">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${mode === "form" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-400"}`}>
                    <ClipboardCheck size={24} />
                  </div>
                  <div>
                    <p className={`font-semibold uppercase tracking-widest text-[10px] mb-1 ${mode === "form" ? "text-blue-600" : "text-gray-400"}`}>Manual</p>
                    <p className={`text-xl font-semibold ${mode === "form" ? "text-gray-900" : "text-gray-400"}`}>Structured Form</p>
                  </div>
                </div>
                <ChevronRight size={24} className={mode === "form" ? "text-blue-600" : "text-gray-300"} />
              </button>
            </div>

            <div className="mt-16 p-8 bg-gray-900 rounded-[40px] text-white">
              <div className="flex items-center gap-4 mb-6">
                <Info size={20} className="text-blue-500" />
                <p className="font-semibold uppercase tracking-widest text-[10px] text-gray-400">Pro Tip</p>
              </div>
              <p className="text-gray-300 font-semibold text-sm leading-relaxed">
                The AI Assistant understands complex scenarios like "I'm a farmer with 2 kids looking for help with irrigation." Try it!
              </p>
            </div>
          </motion.div>

          <div className="lg:w-2/3 w-full">
            <AnimatePresence mode="wait">
              {mode === "ai" ? (
                <motion.div 
                  key="ai-panel"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="relative"
                >
                  <div className="bg-white p-12 lg:p-20 rounded-[60px] shadow-2xl shadow-gray-100 border border-gray-50 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
                    
                    <div className="flex items-center gap-8 mb-16">
                      <div className="w-20 h-20 bg-blue-50 rounded-[30px] flex items-center justify-center text-blue-600 shadow-inner">
                        <Sparkles size={40} />
                      </div>
                      <div>
                        <h2 className="text-4xl font-semibold text-gray-900 tracking-tight mb-2">Gemini Intelligence</h2>
                        <p className="text-gray-400 font-semibold text-lg">Describe your situation in plain English.</p>
                      </div>
                    </div>

                    <form onSubmit={handleAiSearch} className="space-y-12">
                      <div className="relative group">
                        <textarea 
                          value={userInput}
                          onChange={(e) => setUserInput(e.target.value)}
                          placeholder="Example: I am a 32 year old self-employed woman from Delhi. I have an annual income of 4 lakhs and I'm interested in health and business schemes..."
                          className="w-full h-64 px-12 py-10 bg-gray-50 border-2 border-transparent focus:border-blue-100 rounded-[50px] focus:ring-8 focus:ring-blue-50 focus:bg-white outline-none transition-all duration-500 text-2xl font-semibold leading-relaxed placeholder:text-gray-300 shadow-inner resize-none"
                        />
                        <div className="absolute bottom-10 right-12 flex items-center gap-4">
                          <p className="text-gray-300 font-semibold uppercase tracking-widest text-[10px]">Context Aware Engine</p>
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping" />
                        </div>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={loading}
                        className="w-full py-8 bg-blue-600 text-white rounded-[40px] font-semibold text-2xl flex items-center justify-center gap-6 shadow-2xl shadow-blue-200 transition-all disabled:opacity-50"
                      >
                        {loading ? (
                          <>
                            <RefreshCw className="animate-spin" size={32} />
                            Neural Mapping...
                          </>
                        ) : (
                          <>
                            <Search size={32} />
                            Find My Matches
                          </>
                        )}
                      </motion.button>
                    </form>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="form-panel"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="bg-white p-12 lg:p-20 rounded-[60px] shadow-2xl shadow-gray-100 border border-gray-50">
                    <div className="flex items-center gap-8 mb-16 border-b border-gray-100 pb-12">
                      <div className="w-20 h-20 bg-gray-50 rounded-[30px] flex items-center justify-center text-gray-900 border border-white shadow-sm">
                        <ClipboardCheck size={40} />
                      </div>
                      <div>
                        <h2 className="text-4xl font-semibold text-gray-900 tracking-tight mb-2">Detailed Profile</h2>
                        <p className="text-gray-400 font-semibold text-lg">Input precise metrics for exact filtering.</p>
                      </div>
                    </div>
                    <form onSubmit={handleFormSearch} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label className="flex items-center gap-3 text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] ml-2">
                          <User size={14} className="text-blue-600" /> Age
                        </label>
                        <input 
                          type="number" 
                          value={formData.age}
                          onChange={(e) => setFormData({...formData, age: e.target.value})}
                          className="w-full px-10 py-6 bg-gray-50 border border-transparent rounded-[30px] focus:ring-8 focus:ring-blue-50 focus:bg-white focus:border-blue-100 outline-none transition-all text-xl font-semibold" 
                          placeholder="e.g. 25" 
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="flex items-center gap-3 text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] ml-2">
                          <CreditCard size={14} className="text-blue-600" /> Annual Income
                        </label>
                        <input 
                          type="number" 
                          value={formData.income}
                          onChange={(e) => setFormData({...formData, income: e.target.value})}
                          className="w-full px-10 py-6 bg-gray-50 border border-transparent rounded-[30px] focus:ring-8 focus:ring-blue-50 focus:bg-white focus:border-blue-100 outline-none transition-all text-xl font-semibold" 
                          placeholder="₹ 500,000" 
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="flex items-center gap-3 text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] ml-2">
                          <MapPin size={14} className="text-blue-600" /> State
                        </label>
                        <select 
                          value={formData.state}
                          onChange={(e) => setFormData({...formData, state: e.target.value})}
                          className="w-full px-10 py-6 bg-gray-50 border border-transparent rounded-[30px] focus:ring-8 focus:ring-blue-50 focus:bg-white focus:border-blue-100 outline-none appearance-none cursor-pointer transition-all text-xl font-semibold text-gray-700"
                        >
                          <option>Any</option>
                          <option>All India</option>
                          <option>Delhi</option>
                          <option>Maharashtra</option>
                          <option>Uttar Pradesh</option>
                          <option>Gujarat</option>
                        </select>
                      </div>
                      <div className="space-y-4">
                        <label className="flex items-center gap-3 text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] ml-2">
                          <Briefcase size={14} className="text-blue-600" /> Occupation
                        </label>
                        <select 
                          value={formData.occupation}
                          onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                          className="w-full px-10 py-6 bg-gray-50 border border-transparent rounded-[30px] focus:ring-8 focus:ring-blue-50 focus:bg-white focus:border-blue-100 outline-none appearance-none cursor-pointer transition-all text-xl font-semibold text-gray-700"
                        >
                          <option>Any</option>
                          <option>Farmer</option>
                          <option>Student</option>
                          <option>Entrepreneur</option>
                          <option>Laborer</option>
                          <option>Unorganized Worker</option>
                        </select>
                      </div>
                      <div className="md:col-span-2 space-y-8">
                        <label className="flex items-center gap-3 text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] ml-2">
                          <Tag size={14} className="text-blue-600" /> Primary Interest
                        </label>
                        <div className="flex flex-wrap gap-4">
                          {["General", "Housing", "Health", "Agriculture", "Pension", "Business", "Education", "Labor", "Women"].map((cat) => (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => setFormData({...formData, category: cat})}
                              className={`px-8 py-4 rounded-2xl border-2 font-semibold transition-all duration-300 text-lg ${formData.category === cat ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-100" : "bg-white border-gray-100 text-gray-400 hover:bg-gray-50 hover:border-gray-200"}`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={loading}
                        className="md:col-span-2 py-8 bg-blue-600 text-white rounded-[40px] font-semibold text-2xl flex items-center justify-center gap-6 shadow-2xl shadow-blue-200 transition-all mt-6 disabled:opacity-50"
                      >
                        {loading ? "Synchronizing..." : "Query Database"}
                      </motion.button>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {criteria && (
                <motion.div 
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-32"
                >
                  <div className="flex items-center justify-between mb-16 border-b border-gray-100 pb-10">
                    <div className="flex items-center gap-8">
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-[24px] flex items-center justify-center border border-emerald-100">
                        <Sparkles size={32} />
                      </div>
                      <div>
                        <h3 className="text-4xl font-semibold text-gray-900 tracking-tight mb-2">Optimized Results</h3>
                        <p className="text-gray-400 font-semibold text-lg">Cross-referenced against thousands of entries.</p>
                      </div>
                    </div>
                    <button 
                      onClick={resetSearch}
                      className="flex items-center gap-3 px-8 py-4 bg-red-50 text-red-600 rounded-2xl font-semibold uppercase tracking-widest text-[10px] hover:bg-red-600 hover:text-white transition-all shadow-sm"
                    >
                      <XCircle size={16} />
                      Clear Session
                    </button>
                  </div>

                  <div className="bg-gray-900 p-12 rounded-[60px] shadow-2xl mb-24 relative overflow-hidden grid grid-cols-2 md:grid-cols-5 gap-12 items-center text-center">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10" />
                    {[
                      { label: "Age", value: criteria.age, icon: <User size={14} /> },
                      { label: "Income", value: `₹${Number(criteria.income).toLocaleString()}`, icon: <CreditCard size={14} /> },
                      { label: "State", value: criteria.state, icon: <MapPin size={14} /> },
                      { label: "Occupation", value: criteria.occupation, icon: <Briefcase size={14} /> },
                      { label: "Category", value: criteria.category || "General", icon: <Tag size={14} /> }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <span className="flex items-center gap-2 text-[10px] font-semibold text-blue-400 uppercase tracking-[0.3em] mb-4">
                          {item.icon} {item.label}
                        </span>
                        <span className="text-2xl font-semibold text-white">{item.value || "Any"}</span>
                      </div>
                    ))}
                  </div>

                  {schemes.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {schemes.map((scheme, i) => (
                        <motion.div
                          key={scheme._id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <SchemeCard scheme={scheme} />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white border-2 border-dashed border-gray-100 rounded-[60px] py-40 text-center">
                      <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-5xl mx-auto mb-10 border border-white">
                        🏜️
                      </div>
                      <h3 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight">No match detected.</h3>
                      <p className="text-gray-400 text-xl font-semibold max-w-lg mx-auto leading-relaxed">
                        The AI couldn't find a 100% match. Try describing your situation differently or check your form inputs.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
