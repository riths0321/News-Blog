import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: "Email Us",
    details: "support@checknews.com",
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    icon: <Phone size={24} />,
    title: "Call Us",
    details: "+91 (555) 123-4567",
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    icon: <MapPin size={24} />,
    title: "Visit Us",
    details: "Bhopal, MP, India",
    color: "text-sky-600",
    bg: "bg-sky-50"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-indigo-50/40 blur-[100px] rounded-full -z-10" />
        
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-black uppercase tracking-[0.2em] mb-6"
          >
            <MessageSquare size={14} /> Contact Us
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-slate-950 leading-tight mb-6"
          >
            Let's start a <br />
            <span className="text-indigo-600 italic font-light">conversation.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 font-medium max-w-2xl mx-auto"
          >
            Have a story tip, feedback, or a partnership inquiry? 
            Our editorial team is ready to listen.
          </motion.p>
        </div>
      </section>

      {/* --- INFO CARDS --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-glass hover:-translate-y-2 transition-all duration-500 text-center"
            >
              <div className={`w-14 h-14 ${info.bg} ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3`}>
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{info.title}</h3>
              <p className="text-slate-500 font-medium">{info.details}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONTACT FORM --- */}
      <section className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-premium relative overflow-hidden"
        >
          {/* Success Overlay */}
          {submitted && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="absolute inset-0 z-20 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-6"
            >
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Message Sent!</h2>
              <p className="text-slate-500 font-medium">We'll get back to you within 24 hours.</p>
            </motion.div>
          )}

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Send a Message</h2>
            <p className="text-slate-500 font-medium">Fields marked with an asterisk (*) are required.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name *</label>
                <input 
                  type="text" required
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-600 focus:outline-none transition-all font-medium"
                  placeholder="John Doe"
                  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address *</label>
                <input 
                  type="email" required
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-600 focus:outline-none transition-all font-medium"
                  placeholder="john@example.com"
                  value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Subject</label>
              <input 
                type="text" required
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-600 focus:outline-none transition-all font-medium"
                placeholder="How can we help?"
                value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Message *</label>
              <textarea 
                rows="5" required
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-600 focus:outline-none transition-all font-medium resize-none"
                placeholder="Tell us more about your inquiry..."
                value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full md:w-auto px-12 py-5 bg-slate-950 text-white rounded-2xl font-black text-lg hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-100 active:scale-95 flex items-center justify-center gap-3"
            >
              Send Message <Send size={20} />
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;