import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle, Users, Globe, ShieldCheck, Zap, MessageSquare, Play, Sparkles, Layout, Target, User2, RefreshCcw } from "lucide-react";

const LandingPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] font-poppins text-[#1a1a1a] overflow-x-hidden selection:bg-blue-100 selection:text-blue-700">
      <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 -z-10 rounded-bl-[200px]" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-left"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-8 uppercase tracking-widest shadow-sm">
              <Sparkles size={14} className="animate-pulse" />
              Next-Gen AI Matching
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-7xl lg:text-8xl font-semibold mb-8 leading-[0.95] tracking-tight">
              Unlock Your <br />
              <span className="text-blue-600 italic">Rightful</span> <br />
              Benefits.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-500 mb-12 leading-relaxed font-semibold max-w-xl">
              Stop digging through complex government portals. Our intelligent AI scours thousands of schemes to find exactly what you qualify for in under 60 seconds.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
              <Link to="/explore">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 px-8 py-5 bg-blue-600 text-white rounded-full shadow-2xl shadow-blue-200 transition-all text-lg font-semibold"
                >
                  Start Discovery
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/register">
                {/* <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-5 bg-white text-gray-900 rounded-full border border-gray-200 shadow-sm hover:shadow-lg transition-all text-lg font-semibold"
                >
                  Create Profile
                </motion.button> */}
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-16 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-amber-400 gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-500 font-semibold">Trusted by 10,000+ citizens</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-white p-4 rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100">
              <div className="bg-gray-50 rounded-[32px] overflow-hidden aspect-[4/5] relative">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" 
                  alt="Interface preview" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                />
                
                {/* <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-10 left-10 right-10 bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white shadow-xl"
                >
                  {/* <div className="flex items-center gap-4 mb-4">
                    {/* <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <Zap size={20} />
                    </div> */}
                    {/* <div>
                      <p className="text-xs font-semibold uppercase tracking-tighter text-gray-400">Match Accuracy</p>
                      <p className="text-xl font-semibold text-gray-900">99.8%</p>
                    </div> */}
                  {/* <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "99.8%" }}
                      transition={{ duration: 2, delay: 1 }}
                      className="h-full bg-blue-600" 
                    />
                  </div> */}
                {/* </motion.div> */} 
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-100/40 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Central Schemes", value: "850+", icon: <Globe size={24} /> },
              { label: "States Integrated", value: "28+", icon: <Target size={24} /> },
              { label: "Active Users", value: "12K+", icon: <Users size={24} /> },
              { label: "Success Rate", value: "94%", icon: <CheckCircle size={24} /> },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8 leading-tight">
                Designed for <br />
                <span className="text-blue-600">Simplicty.</span>
              </h2>
              <p className="text-gray-500 font-semibold text-lg mb-10">
                We've abstracted the complexity of government bureaucracy into a seamless, conversational experience.
              </p>
              <Link to="/explore" className="text-blue-600 font-semibold flex items-center gap-2 group">
                Learn more about our process
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
              {[
                { title: "Intelligent Profiling", desc: "Our system builds a dynamic eligibility map based on 50+ demographic data points.", icon: <User2 size={24} /> },
                { title: "Real-time Updates", desc: "Never miss a deadline. Our scrapers monitor official portals 24/7 for new schemes.", icon: <RefreshCcw size={24} /> },
                { title: "One-Click Apply", desc: "We direct you to the exact application page, pre-filling data where possible.", icon: <Layout size={24} /> },
                { title: "Data Sovereignty", desc: "Your data is encrypted and stays yours. We never share personal info with third parties.", icon: <ShieldCheck size={24} /> },
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-10 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100/30 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-gray-50 text-gray-900 rounded-2xl flex items-center justify-center mb-8">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-500 font-semibold leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-5xl md:text-7xl font-semibold mb-10 leading-[0.95]">
                Matching <br />
                That <span className="text-blue-500 underline decoration-4 underline-offset-8">Works.</span>
              </h2>
              <div className="space-y-8">
                {[
                  { q: "How long does it take?", a: "Most users find their top matches in less than 45 seconds." },
                  { q: "Is it really free?", a: "Yes. Our platform is a public service tool and will always be free for citizens." },
                  { q: "What about my state?", a: "We have integrated 28 states and 8 union territories." }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-500 pl-8">
                    <h4 className="text-xl font-semibold mb-2">{item.q}</h4>
                    <p className="text-gray-400 font-semibold">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center -z-10"
              >
                <div className="w-[500px] h-[500px] border border-white/5 rounded-full" />
                <div className="w-[700px] h-[700px] border border-white/5 rounded-full absolute" />
              </motion.div>
              
              <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[60px] border border-white/10 shadow-2xl">
                <Star className="text-blue-500 mb-8" size={48} />
                <p className="text-2xl md:text-3xl font-semibold italic leading-relaxed mb-10 text-gray-200">
                  "SchemaScouters transformed how I access my pension. I found three schemes I didn't even know existed. It's a game changer for every Indian citizen."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-600" />
                  <div>
                    <p className="font-semibold text-xl">Arjun Deshmukh</p>
                    <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest">Retired Officer, Pune</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-blue-600 p-16 md:p-24 rounded-[80px] text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(37,99,235,0.5)]"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <h2 className="text-4xl md:text-6xl font-semibold mb-10 leading-tight">
              Ready to find your <br /> benefits?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <Link to="/register">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-white text-blue-600 rounded-full font-semibold text-xl shadow-xl transition-all"
                >
                  Join for Free
                </motion.button>
              </Link>
              <Link to="/explore">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-blue-700 text-white rounded-full font-semibold text-xl border border-blue-500 transition-all"
                >
                  Explore First
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
            <div className="md:col-span-1">
              <div className="text-3xl font-semibold text-gray-900 mb-8 tracking-tighter">
                S<span className="text-blue-600">S.</span>
              </div>
              <p className="text-gray-400 font-semibold leading-relaxed">
                Empowering citizens with technology to navigate the complex world of government welfare.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-8 uppercase tracking-widest text-xs">Resources</h5>
              <ul className="space-y-4 text-gray-500 font-semibold">
                <li><Link to="/explore" className="hover:text-blue-600 transition">Explore All</Link></li>
                <li><Link to="/dashboard" className="hover:text-blue-600 transition">AI Matching</Link></li>
                <li><a href="#" className="hover:text-blue-600 transition">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-8 uppercase tracking-widest text-xs">Support</h5>
              <ul className="space-y-4 text-gray-500 font-semibold">
                <li><a href="#" className="hover:text-blue-600 transition">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-8 uppercase tracking-widest text-xs">Connect</h5>
              <div className="flex gap-4">
                {[MessageSquare, Globe, ArrowRight].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white cursor-pointer transition-all">
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
            <p>© 2024 SchemaScouters. Built with precision.</p>
            <div className="flex gap-8 font-semibold uppercase tracking-widest text-[10px]">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
