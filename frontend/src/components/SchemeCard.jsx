import React, { useState, useEffect } from "react";

const SchemeCard = ({ scheme }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (scheme.images && scheme.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % scheme.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [scheme.images]);

  return (
    <div className="bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 animate-fadeIn flex flex-col h-full group">
      
      {/* Image Slideshow */}
      <div className="relative h-56 overflow-hidden">
        {scheme.images && scheme.images.length > 0 ? (
          <img 
            src={scheme.images[currentImageIndex]} 
            alt={scheme.name} 
            className="w-full h-full object-cover transition-opacity duration-1000 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-4xl">🏛️</div>
        )}
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-blue-600 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
            {scheme.category}
          </span>
        </div>
        {scheme.images && scheme.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {scheme.images.map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? "bg-white w-4" : "bg-white/50"}`} 
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition tracking-tight">{scheme.name}</h3>
        <p className="text-gray-500 mb-6 line-clamp-2 text-sm leading-relaxed font-light">{scheme.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <div className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-gray-100">
            Age: {scheme.minAge}-{scheme.maxAge}
          </div>
          <div className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-gray-100">
            Income &lt; ₹{Number(scheme.maxIncome).toLocaleString()}
          </div>
          <div className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-gray-100">
            {scheme.state}
          </div>
        </div>

        <div className="mt-auto space-y-3">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${showDetails ? "bg-gray-900 text-white" : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"}`}
          >
            {showDetails ? "Close Details" : "Learn More"}
            <span className={`transition-transform duration-300 ${showDetails ? "rotate-180" : ""}`}>▼</span>
          </button>

          {showDetails && (
            <div className="pt-6 mt-4 border-t border-gray-100 space-y-6 animate-fadeIn">
              <div>
                <h4 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-3">Key Benefits</h4>
                <p className="text-gray-700 text-sm leading-relaxed font-light bg-blue-50/50 p-4 rounded-2xl border border-blue-100/30">
                  {scheme.benefits}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-1">Target Group</h4>
                  <p className="text-sm font-bold text-gray-800">{scheme.occupation}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-1">Eligibility</h4>
                  <p className="text-sm font-bold text-gray-800">Verified ✅</p>
                </div>
              </div>

              <a 
                href={scheme.applyLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-center shadow-lg shadow-blue-200 hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0 transition-all duration-300"
              >
                Apply on Official Portal
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchemeCard;
