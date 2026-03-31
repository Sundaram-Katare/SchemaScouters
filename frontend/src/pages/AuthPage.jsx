import React, { useState } from 'react';

const AuthPage = ({ onAuthenticate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAuthenticate();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="w-full max-w-2xl rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/40">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Secure entry</p>
            <h1 className="mt-4 text-4xl font-black text-white">Please authenticate to continue</h1>
            <p className="mt-4 text-slate-400">This is a placeholder sign-in. Once you authenticate, you can access the landing experience.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-3">
              <label className="text-sm font-semibold text-slate-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-3xl border border-slate-800 bg-slate-950 px-5 py-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="grid gap-3">
              <label className="text-sm font-semibold text-slate-300">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-3xl border border-slate-800 bg-slate-950 px-5 py-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 hover:bg-cyan-300 transition"
            >
              Authenticate
            </button>
          </form>
        </div>
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 px-6 py-8 text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Contact us</p>
            <p className="mt-3 text-base text-slate-300">Need help? Reach out to our support team anytime.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a href="mailto:help@schemscout.com" className="rounded-3xl bg-slate-950/80 px-5 py-4 text-sm text-white border border-slate-800 hover:bg-slate-800 transition">
              help@schemscout.com
            </a>
            <a href="tel:+919876543210" className="rounded-3xl bg-slate-950/80 px-5 py-4 text-sm text-white border border-slate-800 hover:bg-slate-800 transition">
              +91 98765 43210
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuthPage;
