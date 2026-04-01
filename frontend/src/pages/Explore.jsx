import React from "react";
import { useNavigate } from "react-router-dom";

const schemes = [
  {
    title: "Pradhan Mantri Awas Yojana (PMAY)",
    desc: "Housing benefits to eligible citizens.",
    tags: ["Housing", "Women", "Central / State"],
    eligible: ["Income below ₹3 lakh", "OBC category qualifies"],
    status: true,
  },
  {
    title: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    desc: "Free skill training to youth.",
    tags: ["Education", "Skills", "Training"],
    eligible: ["Age 18-45", "Open to all categories"],
    status: true,
  },
  {
    title: "PM Vishwakarma Kaushal Samman Yojana",
    desc: "Financial aid to artisans.",
    tags: ["Jobs", "MSME", "Central / State"],
    eligible: ["Income below ₹3 lakh", "OBC category qualifies"],
    status: true,
  },
  {
    title: "Ujjwala Yojana",
    desc: "Provides LPG connections to women.",
    tags: ["Health", "Women", "Central / State"],
    eligible: ["Age above 18 years", "OBC category qualifies"],
    status: true,
  },
  {
    title: "Mukhyamantri Sukanya Scheme (MSS)",
    desc: "Financial aid for girls education.",
    tags: ["Women & Child", "MP"],
    eligible: ["For girls under 21", "Income over ₹3 lakh"],
    status: false,
  },
  {
    title: "Ayushman Bharat Yojana",
    desc: "Free health coverage up to ₹5 lakh.",
    tags: ["Health", "Central / State"],
    eligible: ["Income below ₹3 lakh", "OBC category qualifies"],
    status: true,
  },
];

const Explore = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="sticky top-0 z-30 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-3xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 grid place-items-center text-2xl font-extrabold text-white">
              S
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">SchemScout</p>
              <p className="text-base font-semibold">Explore Schemes</p>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <div className="text-right">
              <p className="text-sm font-semibold text-white">{user?.name}</p>
              <p className="text-xs text-slate-400">{user?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="rounded-full bg-red-500/20 border border-red-500/40 px-5 py-2 text-sm font-semibold text-red-300 hover:bg-red-500/30 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="min-h-[calc(100vh-5rem)]">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-6 py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.24),_transparent_40%),radial-gradient(circle_at_30%_70%,_rgba(14,165,233,0.16),_transparent_30%)] pointer-events-none" />
          <div className="relative max-w-7xl mx-auto">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Browse Schemes</p>
            <h1 className="mt-4 text-4xl font-black text-white">Explore Government Schemes</h1>
            <p className="mt-3 text-slate-300">
              Browse schemes and check your eligibility with our smart matching
            </p>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-12 border-b border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-4 md:grid-cols-4 items-end">
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-300">State</label>
                <select className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  <option>Madhya Pradesh</option>
                  <option>Delhi</option>
                  <option>Maharashtra</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-300">Category</label>
                <select className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  <option>All Categories</option>
                  <option>General</option>
                  <option>OBC</option>
                  <option>SC/ST</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-300">Search</label>
                <input
                  type="text"
                  placeholder="Search schemes..."
                  className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <button className="w-full rounded-2xl bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 hover:bg-cyan-300 transition">
                Search
              </button>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {schemes.map((scheme, index) => (
                <div
                  key={index}
                  className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 hover:border-slate-700 transition"
                >
                  <div className="mb-4">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                        scheme.status
                          ? "bg-green-500/20 text-green-300"
                          : "bg-yellow-500/20 text-yellow-300"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          scheme.status ? "bg-green-400" : "bg-yellow-400"
                        }`}
                      />
                      {scheme.status ? "Eligible" : "Not Eligible"}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-white mb-2">{scheme.title}</h2>
                  <p className="text-slate-400 mb-4">{scheme.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {scheme.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full bg-slate-800/70 px-3 py-1 text-xs font-medium text-cyan-300 ring-1 ring-cyan-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-3">
                      Eligibility
                    </p>
                    <ul className="space-y-2">
                      {scheme.eligible.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full rounded-full bg-cyan-400/20 border border-cyan-400/40 px-4 py-3 text-sm font-semibold text-cyan-300 hover:bg-cyan-400/30 transition">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 px-6 py-10 text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Contact us</p>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">
              Questions? Reach out for help with eligibility, application steps, or scheme details.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:help@schemscout.com"
              className="rounded-3xl bg-slate-950/80 px-5 py-4 text-sm text-white border border-slate-800 hover:bg-slate-800 transition"
            >
              help@schemscout.com
            </a>
            <a
              href="tel:+919876543210"
              className="rounded-3xl bg-slate-950/80 px-5 py-4 text-sm text-white border border-slate-800 hover:bg-slate-800 transition"
            >
              +91 98765 43210
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Explore;