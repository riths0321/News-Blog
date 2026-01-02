import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Newspaper, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

const SubscribePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user already saw this in current session
    const isShown = sessionStorage.getItem("newsletterShown");
    
    if (!isShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("newsletterShown", "true");
      }, 15000); // 15 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    
    // Success Logic
    setIsSubscribed(true);
    setError("");
    
    // Auto close after 3 seconds
    setTimeout(() => setIsOpen(false), 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100"
          >
            {/* Background Pattern Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -translate-y-12 translate-x-12 blur-3xl opacity-50" />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-12">
              {!isSubscribed ? (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto shadow-lg shadow-indigo-100 rotate-3">
                      <Newspaper size={32} />
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                      Stay Ahead of the <span className="text-indigo-600">Curve</span>
                    </h2>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      Join 50,000+ subscribers and get the most important news 
                      delivered to your inbox every morning.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                        <Mail size={20} />
                      </div>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all font-medium"
                      />
                    </div>
                    
                    {error && <p className="text-xs font-bold text-red-500 ml-2">{error}</p>}

                    <button className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-100 active:scale-95 flex items-center justify-center gap-2">
                      Subscribe Now <Sparkles size={18} />
                    </button>
                  </form>

                  {/* Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                    <Benefit icon={<ShieldCheck size={14}/>} text="No Spam, Guaranteed" />
                    <Benefit icon={<CheckCircle2 size={14}/>} text="Cancel Anytime" />
                  </div>
                </div>
              ) : (
                /* Success State */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900">You're on the list!</h3>
                  <p className="text-slate-500 font-medium">
                    Welcome to CheckNews. Look out for our welcome email shortly.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Benefit = ({ icon, text }) => (
  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
    <span className="text-indigo-600">{icon}</span>
    {text}
  </div>
);

export default SubscribePopup;