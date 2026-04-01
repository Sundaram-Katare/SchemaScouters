import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = ({ onAuthenticate }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const payload = isLogin
        ? { email, password }
        : { name, email, password };

      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Authentication failed');
        return;
      }

      // Store the token and user info in localStorage
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Notify parent component and pass user data
      onAuthenticate(data.user);
      
      // Redirect to explore page
      navigate('/explore');
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="w-full max-w-2xl rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/40">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Secure entry</p>
            <h1 className="mt-4 text-4xl font-black text-white">
              {isLogin ? 'Login to continue' : 'Create your account'}
            </h1>
            <p className="mt-4 text-slate-400">
              {isLogin
                ? 'Enter your credentials to access the platform'
                : 'Sign up to get started with SchemScout'}
            </p>
          </div>

          {error && (
            <div className="mb-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid gap-6">
            {!isLogin && (
              <div className="grid gap-3">
                <label className="text-sm font-semibold text-slate-300">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-3xl border border-slate-800 bg-slate-950 px-5 py-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            )}
            <div className="grid gap-3">
              <label className="text-sm font-semibold text-slate-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                required
                className="w-full rounded-3xl border border-slate-800 bg-slate-950 px-5 py-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 hover:bg-cyan-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-400">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                  setName('');
                  setEmail('');
                  setPassword('');
                }}
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition"
              >
                {isLogin ? 'Sign up' : 'Login'}
              </button>
            </p>
          </div>
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
