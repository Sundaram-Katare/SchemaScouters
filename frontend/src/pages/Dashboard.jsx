import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios.js";
import SchemeCard from "../components/SchemeCard";

const Dashboard = () => {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [schemes, setSchemes] = useState([]);
  const [criteria, setCriteria] = useState(null);
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState("ai"); // 'ai' or 'form'
  
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

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

  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-poppins">


      <div className="max-w-4xl mx-auto px-6 pt-12">
        {/* Toggle Mode */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 flex gap-2">
            <button 
              onClick={() => setMode("ai")}
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${mode === "ai" ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-gray-500 hover:bg-gray-50"}`}
            >
              ✨ AI Matcher
            </button>
            <button 
              onClick={() => setMode("form")}
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${mode === "form" ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-gray-500 hover:bg-gray-50"}`}
            >
              📑 Eligibility Form
            </button>
          </div>
        </div>

        {mode === "ai" ? (
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[40px] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 mb-12 animate-fadeIn">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl">🤖</div>
                <h2 className="text-3xl font-bold text-gray-900">Gemini AI Assistant</h2>
              </div>
              <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto font-light">
                Describe your situation naturally. For example: <br />
                <span className="italic">"I'm looking for a home loan in Delhi, I earn 5L a year and I'm 30 years old."</span>
              </p>

              <form onSubmit={handleAiSearch} className="space-y-6">
                <textarea 
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Tell Gemini what you are looking for..."
                  className="w-full h-40 px-8 py-6 bg-gray-50 border border-transparent focus:border-blue-100 rounded-3xl focus:ring-4 focus:ring-blue-50 focus:bg-white outline-none transition-all duration-500 resize-none text-xl font-light placeholder:text-gray-300"
                />
                <button 
                  disabled={loading}
                  className="w-full py-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl font-bold text-2xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 relative overflow-hidden group"
                >
                  <span className="relative z-10">{loading ? "Processing with Gemini..." : "Get AI Insights"}</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 mb-12 animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Eligibility Profile</h2>
            <form onSubmit={handleFormSearch} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-2">Your Age</label>
                <input 
                  type="number" 
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition" 
                  placeholder="e.g. 25" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-2">Annual Income (₹)</label>
                <input 
                  type="number" 
                  value={formData.income}
                  onChange={(e) => setFormData({...formData, income: e.target.value})}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition" 
                  placeholder="e.g. 300000" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-2">State of Residence</label>
                <select 
                  value={formData.state}
                  onChange={(e) => setFormData({...formData, state: e.target.value})}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                >
                  <option>Any</option>
                  <option>All India</option>
                  <option>Delhi</option>
                  <option>Maharashtra</option>
                  <option>Uttar Pradesh</option>
                  <option>Gujarat</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-2">Occupation</label>
                <select 
                  value={formData.occupation}
                  onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                >
                  <option>Any</option>
                  <option>Farmer</option>
                  <option>Student</option>
                  <option>Entrepreneur</option>
                  <option>Laborer</option>
                  <option>Unorganized Worker</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-2">What kind of scheme are you looking for?</label>
                <div className="flex flex-wrap gap-3">
                  {["General", "Housing", "Health", "Agriculture", "Pension", "Business", "Education", "Labor", "Women"].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setFormData({...formData, category: cat})}
                      className={`px-6 py-3 rounded-xl border text-sm font-bold transition-all duration-300 ${formData.category === cat ? "bg-blue-50 border-blue-600 text-blue-600" : "bg-white border-gray-100 text-gray-500 hover:bg-gray-50"}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="md:col-span-2 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Filtering..." : "Find Matching Schemes"}
              </button>
            </form>
          </div>
        )}

        {criteria && (
          <div className="bg-blue-50/50 backdrop-blur-sm p-8 rounded-[32px] mb-12 border border-blue-100/50 animate-fadeIn">
            <div className="text-center mb-6">
              <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-widest">Profile Detected</span>
            </div>
            <div className="flex flex-wrap gap-8 justify-center">
              {[
                { label: "Age", value: criteria.age },
                { label: "Income", value: `₹${Number(criteria.income).toLocaleString()}` },
                { label: "State", value: criteria.state },
                { label: "Occupation", value: criteria.occupation },
                { label: "Category", value: criteria.category || "General" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">{item.label}</span>
                  <span className="text-lg font-bold text-gray-800">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {schemes.length > 0 ? (
            schemes.map((scheme) => (
              <SchemeCard key={scheme._id} scheme={scheme} />
            ))
          ) : (
            !loading && criteria && (
              <div className="col-span-2 text-center py-20 text-gray-400 font-light italic">
                No matching schemes found for this profile. Try adjusting your details!
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
