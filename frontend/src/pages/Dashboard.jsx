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

  const handleSearch = async (e) => {
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

  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-poppins">


      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Find Your Matches</h2>
          <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto font-light">
            Describe yourself in plain English (e.g., "I'm a 24-year-old farmer from UP earning 2L/year") and our AI will find the best schemes for you.
          </p>

          <form onSubmit={handleSearch} className="space-y-4">
            <textarea 
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Describe your profile here..."
              className="w-full h-32 px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition resize-none text-lg font-light"
            />
            <button 
              disabled={loading}
              className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:shadow-xl hover:bg-blue-700 transition duration-300 disabled:opacity-50"
            >
              {loading ? "AI is matching..." : "Find Schemes"}
            </button>
          </form>
        </div>

        {criteria && (
          <div className="bg-blue-50 p-6 rounded-2xl mb-10 border border-blue-100 animate-fadeIn flex flex-wrap gap-6 justify-center">
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Age</span>
              <span className="text-lg font-bold text-gray-800">{criteria.age}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Annual Income</span>
              <span className="text-lg font-bold text-gray-800">₹{criteria.income.toLocaleString()}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">State</span>
              <span className="text-lg font-bold text-gray-800">{criteria.state}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Occupation</span>
              <span className="text-lg font-bold text-gray-800">{criteria.occupation}</span>
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
                No matching schemes found for this profile. Try describing differently!
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
