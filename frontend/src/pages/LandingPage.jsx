import React, { useState } from 'react';

const LandingPage = ({ user, onLogout }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, category, age });
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
              <p className="text-base font-semibold">Landing Page</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <div className="text-right">
              <p className="text-sm font-semibold text-white">{user?.name}</p>
              <p className="text-xs text-slate-400">{user?.email}</p>
            </div>
            <button
              onClick={onLogout}
              className="rounded-full bg-red-500/20 border border-red-500/40 px-5 py-2 text-sm font-semibold text-red-300 hover:bg-red-500/30 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-6 py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.24),_transparent_40%),radial-gradient(circle_at_30%_70%,_rgba(14,165,233,0.16),_transparent_30%)] pointer-events-none" />
          <div className="relative max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-8">
              <p className="inline-flex items-center gap-3 rounded-full bg-slate-800/70 px-4 py-2 text-sm font-semibold text-cyan-300 ring-1 ring-cyan-400/20">
                Welcome to SchemScout • Simple, fast, and personalized
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Find the right government schemes for you <span className="text-cyan-400">in minutes.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                SchemScout matches your profile to central and state benefits, with direct application guidance, deadline alerts, and a clear next step for every scheme.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#about" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-4 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 hover:-translate-y-0.5 transition">
                  About Us
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-8 py-4 text-sm font-semibold text-slate-100 hover:bg-slate-800 transition">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/50">
              <div className="grid gap-6">
                <div className="rounded-3xl bg-slate-800/70 p-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Your profile</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">Age, state, income, occupation</h2>
                  <p className="mt-3 text-slate-400 leading-7">We use the details you share to surface schemes that are actually available to you.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/90 p-5 border border-slate-800">
                    <p className="text-sm text-slate-400">Fast match</p>
                    <p className="mt-3 text-xl font-semibold">2-minute setup</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/90 p-5 border border-slate-800">
                    <p className="text-sm text-slate-400">Direct links</p>
                    <p className="mt-3 text-xl font-semibold">Apply instantly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-slate-950 px-6 py-24 md:px-12">
          <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">About SchemScout</p>
              <h2 className="text-4xl font-black text-white">A landing page built to show Home, About, and Contacts clearly.</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-400">
                We help citizens discover government programs across health, education, agriculture and more. Each recommendation comes with eligibility insights, deadline reminders, and easy next steps so you can act confidently.
              </p>
            </div>
            <div className="grid gap-6">
              {[
                {
                  title: 'Personalized matching',
                  description: 'We compare your age, category, location and income to the latest scheme rules.',
                },
                {
                  title: 'Clear next steps',
                  description: 'Every scheme includes a simple action plan so you know what to do next.',
                },
                {
                  title: 'Trusted support',
                  description: 'Get the guidance you need to apply with confidence and avoid missed deadlines.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30">
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-slate-400 leading-7">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="bg-slate-900 px-6 py-24 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">What you get</p>
              <h2 className="mt-4 text-4xl font-black text-white">Features designed for faster results</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: 'Smart filtering',
                  description: 'Only see schemes that match your exact eligibility profile.',
                },
                {
                  title: 'Deadline alerts',
                  description: 'Stay on top of application windows so you never miss an opportunity.',
                },
                {
                  title: 'Step-by-step guidance',
                  description: 'Complete application tasks with clear, easy-to-follow instructions.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-slate-800 bg-slate-950 p-8 shadow-2xl shadow-slate-950/40">
                  <div className="text-cyan-400 text-3xl font-black mb-4">•</div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-slate-400 leading-7">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 px-6 py-24 md:px-12">
          <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Contact</p>
              <h2 className="text-4xl font-black text-white">Get in touch with our team</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-400">
                Have questions about your eligibility or need help applying? Send us a message and we’ll respond quickly.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/80 p-6 border border-slate-800">
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="mt-3 text-lg font-semibold text-white">help@schemscout.com</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-6 border border-slate-800">
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="mt-3 text-lg font-semibold text-white">+91 98765 43210</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40">
              <div className="grid gap-5">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 px-5 py-4 rounded-3xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-slate-950 border border-slate-800 px-5 py-4 rounded-3xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full bg-slate-950 border border-slate-800 px-5 py-4 rounded-3xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-cyan-400 px-6 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 hover:bg-cyan-300 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
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

export default LandingPage;
