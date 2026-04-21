import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      
      {/* Hero Section */}
      <section className="relative py-28 px-6 text-center animate-fadeIn overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/30 rounded-full blur-3xl -z-10 animate-pulse" />
        
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-6 tracking-wide">
            POWERED BY GOOGLE GEMINI AI
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-[1.1]">
            Simplifying Government <br />
            <span className="text-blue-600">Schemes for You</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            Stop searching blindly. Our AI-driven platform matches you with personalized government benefits in seconds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/register" className="px-10 py-5 bg-blue-600 text-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-xl font-bold">
              Start Matching Now
            </Link>
            <Link to="/explore" className="px-10 py-5 bg-gray-50 text-gray-900 rounded-2xl border border-gray-100 hover:bg-gray-100 transition-all duration-300 text-xl font-bold">
              View All Schemes
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-gray-50 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-gray-900 mb-2">500+</div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-widest">Active Schemes</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-600 mb-2">1M+</div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-widest">Success Stories</div>
            </div>
            <div>
              <div className="text-4xl font-black text-gray-900 mb-2">28+</div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-widest">States Covered</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-600 mb-2">99%</div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-widest">Match Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Schemes by Categories</h2>
            <p className="text-gray-500 font-light max-w-lg mx-auto">Explore targeted benefits across various sectors tailored for your growth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Agriculture", count: "120+", icon: "🌾" },
              { title: "Health", count: "80+", icon: "🏥" },
              { title: "Education", count: "150+", icon: "🎓" },
              { title: "Business", count: "60+", icon: "💼" },
            ].map((cat, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500 group cursor-pointer">
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition duration-300">{cat.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition">{cat.title}</h3>
                <p className="text-gray-400 text-sm font-medium">{cat.count} Schemes</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Get Your Benefits in <br />
                <span className="text-blue-600 font-black">3 Easy Steps</span>
              </h2>
              <div className="space-y-10">
                {[
                  { step: "01", title: "Create Profile", desc: "Sign up and provide basic details to build your eligibility profile." },
                  { step: "02", title: "Describe in AI", desc: "Tell our AI about yourself in natural language. It understands context flawlessly." },
                  { step: "03", title: "Apply Directly", desc: "Get matched with verified schemes and click to apply on official portals." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-black text-gray-100">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full h-[500px] bg-gray-50 rounded-[40px] border border-dashed border-gray-200 flex items-center justify-center overflow-hidden">
               {/* Mock UI Element */}
               <div className="w-80 p-6 bg-white rounded-3xl shadow-2xl border border-gray-100 rotate-3 transform transition hover:rotate-0 duration-700">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl mb-4 shadow-lg flex items-center justify-center text-white text-xl font-bold">AI</div>
                  <div className="h-4 w-32 bg-gray-100 rounded-full mb-3" />
                  <div className="h-3 w-56 bg-gray-50 rounded-full mb-6" />
                  <div className="space-y-3">
                    <div className="h-10 w-full bg-blue-50 border border-blue-100 rounded-xl" />
                    <div className="h-10 w-full bg-blue-50 border border-blue-100 rounded-xl" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
              <p className="text-gray-500 font-light">See what our users have to say about their experience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Rajesh Kumar", role: "Farmer, UP", text: "SchemaScouters helped me find the PM-Kisan scheme in minutes. The AI understood exactly what I needed." },
                { name: "Anita Sharma", role: "Entrepreneur, Delhi", text: "I was looking for a business loan for months. SchemaScouters matched me with the Mudra scheme instantly." },
                { name: "Suresh Pillai", role: "Worker, Kerala", text: "Simple, easy, and very accurate. The transparency about eligibility is what I liked the most." }
              ].map((t, i) => (
                <div key={i} className="p-10 bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex gap-1 text-yellow-400 mb-6 text-xl">★★★★★</div>
                  <p className="text-gray-600 mb-8 italic leading-relaxed text-lg font-light underline decoration-blue-100 underline-offset-8">"{t.text}"</p>
                  <div>
                    <h5 className="font-bold text-gray-900">{t.name}</h5>
                    <p className="text-gray-400 text-sm font-medium">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center text-balance">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is SchemaScouters free to use?", a: "Yes, our primary goal is to help citizens access government benefits without any financial barrier." },
              { q: "How accurate is the AI matching?", a: "We use state-of-the-art Gemini AI which provides 99% accuracy based on the details you provide." },
              { q: "Is my personal data safe?", a: "We do not store your sensitive financial information. Your profile details are encrypted and handled with care." }
            ].map((faq, i) => (
              <details key={i} className="group border border-gray-100 rounded-3xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 bg-white cursor-pointer group-open:bg-blue-50 transition duration-300">
                  <h4 className="text-lg font-bold text-gray-900">{faq.q}</h4>
                  <span className="p-2 bg-gray-50 rounded-xl group-open:rotate-180 transition duration-500">▼</span>
                </summary>
                <div className="p-6 pt-0 bg-white group-open:bg-blue-50/50">
                  <p className="text-gray-500 leading-relaxed font-light">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto p-12 md:p-20 bg-gray-900 rounded-[50px] text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-600/10 -z-10" />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Your Welfare Starts <br /> With a <span className="text-blue-500 underline underline-offset-8 decoration-white/20">Click</span></h2>
          <p className="text-xl text-gray-400 mb-12 max-w-lg mx-auto font-light leading-relaxed">
            Join 1M+ citizens who secured their future using our platform.
          </p>
          <Link to="/register" className="px-12 py-5 bg-white text-gray-900 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block">
            Get Registered Today
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[50px] shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 md:p-20 bg-blue-600 text-white">
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <p className="text-blue-100 mb-12 text-lg font-light leading-relaxed">
                Have questions about specific schemes? Our support team is here to help you navigate the complexities of government benefits.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">📧</div>
                  <div>
                    <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">Email Us</div>
                    <div className="text-xl font-bold">support@schemascouters.gov</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">📞</div>
                  <div>
                    <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">Call Center</div>
                    <div className="text-xl font-bold">1800-456-7890</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">📍</div>
                  <div>
                    <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">Headquarters</div>
                    <div className="text-xl font-bold">New Delhi, India</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-12 md:p-20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea className="w-full h-32 px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition resize-none" placeholder="Write your message here..."></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:shadow-xl hover:bg-blue-700 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                Schema<span className="text-blue-600 font-black">Scouters.</span>
              </div>
              <p className="text-gray-400 font-light leading-relaxed">
                Empowering every citizen with the knowledge of their rightful benefits.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-gray-900 mb-6">Platform</h5>
              <ul className="space-y-4 text-gray-500 font-light">
                <li><Link to="/explore" className="hover:text-blue-600 transition">Explore Schemes</Link></li>
                <li><Link to="/dashboard" className="hover:text-blue-600 transition">AI Matcher</Link></li>
                <li><Link to="/login" className="hover:text-blue-600 transition">Portal Access</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-gray-900 mb-6">Support</h5>
              <ul className="space-y-4 text-gray-500 font-light">
                <li><a href="#" className="hover:text-blue-600 transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Terms of Use</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-gray-900 mb-6">Connect</h5>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-50 rounded-xl hover:bg-blue-600 transition group cursor-pointer flex items-center justify-center">
                  <span className="group-hover:text-white text-gray-400">𝕏</span>
                </div>
                <div className="w-10 h-10 bg-gray-50 rounded-xl hover:bg-blue-600 transition group cursor-pointer flex items-center justify-center">
                  <span className="group-hover:text-white text-gray-400">f</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-50 text-center text-gray-400 text-sm font-light">
            © 2024 SchemaScouters. Building a better future for every citizen.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
