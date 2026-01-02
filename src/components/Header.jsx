import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { 
  Menu, X, Newspaper, User, Mail, Lock, 
  Github, Chrome, ArrowRight, Sparkles 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState({ open: false, mode: 'login' });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Blogs", to: "/bloglist" }, // Updated to match your route
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-3 bg-white/70 backdrop-blur-md border-b border-slate-200/50" 
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* --- LOGO --- */}
          <Link to="/" className="flex items-center gap-2.5 group relative z-[60]">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white rotate-3 group-hover:rotate-0 transition-transform shadow-lg shadow-indigo-200">
              <Newspaper size={20} />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${mobileMenuOpen ? 'text-slate-900' : 'text-slate-900'}`}>
              Check<span className="text-indigo-600">News</span>
            </span>
          </Link>

          {/* --- DESKTOP NAV --- */}
          <nav className="hidden md:flex items-center bg-slate-100/50 backdrop-blur-sm rounded-full px-2 py-1 border border-slate-200/50">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => `
                  px-5 py-2 text-sm font-bold transition-all rounded-full
                  ${isActive 
                    ? "bg-white text-indigo-600 shadow-sm" 
                    : "text-slate-500 hover:text-slate-900"}
                `}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* --- DESKTOP AUTH --- */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => setAuthModal({ open: true, mode: 'login' })}
              className="text-sm font-bold text-slate-600 hover:text-indigo-600 px-4 py-2 transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={() => setAuthModal({ open: true, mode: 'signup' })}
              className="bg-slate-900 text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-indigo-600 shadow-lg shadow-indigo-100 transition-all active:scale-95"
            >
              Get Started
            </button>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button 
            className="md:hidden relative z-[60] p-2 text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* --- MOBILE DRAWER --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[55] md:hidden"
            />
            
            {/* Drawer Content */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-[56] md:hidden shadow-2xl flex flex-col"
            >
              <div className="p-8 pt-24 flex-grow">
                <nav className="flex flex-col gap-6">
                  {navItems.map((item, idx) => (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      key={item.label}
                    >
                      <NavLink
                        to={item.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) => `
                          text-3xl font-bold transition-all block
                          ${isActive ? "text-indigo-600" : "text-slate-400 hover:text-slate-900"}
                        `}
                      >
                        {item.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-12 pt-12 border-t border-slate-100 space-y-4">
                   <button 
                    onClick={() => { setMobileMenuOpen(false); setAuthModal({ open: true, mode: 'login' }); }}
                    className="w-full py-4 text-lg font-bold text-slate-900 border border-slate-200 rounded-2xl"
                   >
                     Sign In
                   </button>
                   <button 
                    onClick={() => { setMobileMenuOpen(false); setAuthModal({ open: true, mode: 'signup' }); }}
                    className="w-full py-4 text-lg font-bold text-white bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-100"
                   >
                     Get Started
                   </button>
                </div>
              </div>

              {/* Bottom Footer in Drawer */}
              <div className="p-8 text-center">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                  © 2026 CheckNews Media
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- AUTH MODAL --- */}
      <AnimatePresence>
        {authModal.open && (
          <AuthModal 
            mode={authModal.mode} 
            onClose={() => setAuthModal({ ...authModal, open: false })} 
            setMode={(m) => setAuthModal({ open: true, mode: m })}
          />
        )}
      </AnimatePresence>
    </>
  );
};

/* ================= AUTH MODAL COMPONENT ================= */
const AuthModal = ({ mode, onClose, setMode }) => {
  const isLogin = mode === 'login';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
      />

      {/* Modal Card */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-md bg-white rounded-[32px] shadow-2xl overflow-hidden border border-slate-100"
      >
        <div className="p-8">
          <button onClick={onClose} className="absolute right-6 top-6 text-slate-400 hover:text-slate-600">
            <X size={20} />
          </button>

          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles size={28} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              {isLogin ? "Welcome back" : "Create account"}
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Join our community of 10k+ readers
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
               <InputGroup icon={<User size={18}/>} type="text" placeholder="Full Name" />
            )}
            <InputGroup icon={<Mail size={18}/>} type="email" placeholder="Email Address" />
            <InputGroup icon={<Lock size={18}/>} type="password" placeholder="Password" />
            
            <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-[0.98]">
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
            <span className="relative bg-white px-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Or continue with</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <SocialBtn icon={<Chrome size={18}/>} text="Google" />
            <SocialBtn icon={<Github size={18}/>} text="GitHub" />
          </div>

          <p className="text-center mt-8 text-sm text-slate-500 font-medium">
            {isLogin ? "New here?" : "Already a member?"}
            <button 
              onClick={() => setMode(isLogin ? 'signup' : 'login')}
              className="text-indigo-600 font-bold ml-1 hover:underline"
            >
              {isLogin ? "Create account" : "Sign in"}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const InputGroup = ({ icon, ...props }) => (
  <div className="relative group">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
      {icon}
    </div>
    <input 
      {...props}
      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-medium text-slate-900"
    />
  </div>
);

const SocialBtn = ({ icon, text }) => (
  <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-bold text-sm text-slate-700">
    {icon} {text}
  </button>
);

export default Header;