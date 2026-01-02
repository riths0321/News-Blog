import React from "react";
import { Link } from "react-router-dom";
import { 
  Newspaper, Verified, Globe, TrendingUp, 
  Mail, ArrowRight, Twitter, Github, Linkedin 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
    
    ],
    Legal: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200/60 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-indigo-600 rounded-2xl flex items-center justify-center text-white rotate-3 group-hover:rotate-0 transition-all duration-300 shadow-lg shadow-indigo-100">
                <Newspaper size={22} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Check<span className="text-indigo-600">News</span>
              </span>
            </Link>
            
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
              The world's most trusted source for verified, real-time news. 
              We bring you the stories that matter with zero bias and maximum impact.
            </p>

            {/* TRUST BADGES */}
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge icon={<Verified size={12}/>} text="Verified" color="text-emerald-600" bg="bg-emerald-50" />
              <Badge icon={<Globe size={12}/>} text="Global" color="text-sky-600" bg="bg-sky-50" />
              <Badge icon={<TrendingUp size={12}/>} text="Trending" color="text-indigo-600" bg="bg-indigo-50" />
            </div>
          </div>

          {/* QUICK LINKS MAPPING */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 italic">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.to} 
                      className="text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-[2px] bg-indigo-600 mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ================= NEWSLETTER SECTION ================= */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-premium flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">Keep up with the world.</h3>
            <p className="text-slate-500 font-medium">Join 50k+ readers getting our daily briefing.</p>
          </div>
          <div className="w-full max-w-md relative">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full pl-12 pr-32 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all font-medium"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <Mail size={18} />
            </div>
            <button className="absolute right-2 top-2 bottom-2 px-6 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-indigo-600 transition-all flex items-center gap-2">
              Join <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © {currentYear} CheckNews Media Group.
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-4">
            <SocialIcon icon={<Twitter size={18}/>} />
            <SocialIcon icon={<Linkedin size={18}/>} />
            <SocialIcon icon={<Github size={18}/>} />
          </div>

          <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <Link to="/privacy" className="hover:text-indigo-600">Privacy</Link>
            <Link to="/terms" className="hover:text-indigo-600">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* --- SUB-COMPONENTS --- */
const Badge = ({ icon, text, color, bg }) => (
  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${bg} ${color} font-black text-[10px] uppercase tracking-tighter`}>
    {icon} {text}
  </div>
);

const SocialIcon = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all shadow-sm">
    {icon}
  </a>
);

export default Footer;