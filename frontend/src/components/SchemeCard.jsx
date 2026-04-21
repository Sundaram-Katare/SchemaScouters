import React, { useState } from "react";

const SchemeCard = ({ scheme }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 animate-fadeIn">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{scheme.name}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{scheme.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Age: {scheme.minAge}-{scheme.maxAge}</span>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Income &lt; ₹{scheme.maxIncome.toLocaleString()}</span>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">{scheme.state}</span>
      </div>

      <button 
        onClick={() => setShowDetails(!showDetails)}
        className="w-full py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition mb-3"
      >
        {showDetails ? "Hide Details" : "See Details"}
      </button>

      {showDetails && (
        <div className="mt-4 pt-4 border-t border-gray-50 flex flex-col gap-3 animate-fadeIn">
          <div className="text-sm font-medium text-gray-500">Eligibility Criteria</div>
          <div className="text-sm text-gray-700 leading-relaxed font-light">
            <strong>Benefits:</strong> {scheme.benefits}
          </div>
          <div className="text-sm text-gray-700 leading-relaxed font-light">
            <strong>Occupation:</strong> {scheme.occupation}
          </div>
          <a 
            href={scheme.applyLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 text-center py-3 bg-blue-600 text-white rounded-xl font-bold"
          >
            Apply Now
          </a>
        </div>
      )}
    </div>
  );
};

export default SchemeCard;
