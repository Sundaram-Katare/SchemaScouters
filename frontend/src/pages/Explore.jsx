import React, { useEffect, useState } from "react";
import API from "../api/axios.js";
import SchemeCard from "../components/SchemeCard";
import { Link } from "react-router-dom";

const Explore = () => {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const res = await API.get("/schemes");
        setSchemes(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchSchemes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">


      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore All Schemes</h1>
          <p className="text-gray-600 text-lg max-w-2xl font-light">
            Browse our comprehensive database of government initiatives and find the support you're eligible for.
          </p>
        </header>

        {loading ? (
          <div className="flex justify-center items-center h-64 text-blue-600 text-xl font-medium animate-pulse">Loading Schemes...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schemes.map((scheme) => (
              <SchemeCard key={scheme._id} scheme={scheme} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;