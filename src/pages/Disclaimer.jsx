import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Scale, ShieldAlert, Info, ArrowRight } from "lucide-react";

const Disclaimer = () => {
  const sections = [
    { title: "General Information", icon: <Info size={18} /> },
    { title: "No Professional Advice", icon: <Scale size={18} /> },
    { title: "Accuracy and Completeness", icon: <ShieldAlert size={18} /> },
    { title: "External Links Disclaimer", icon: <ArrowRight size={18} /> },
    { title: "Editorial Content", icon: <Info size={18} /> },
    { title: "Fact-Checking and Verification", icon: <Info size={18} /> },
    { title: "No Endorsement", icon: <Info size={18} /> },
    { title: "Changes and Updates", icon: <Info size={18} /> },
    { title: "Limitation of Liability", icon: <AlertTriangle size={18} /> },
    { title: "Fair Use and Copyright", icon: <Scale size={18} /> },
    { title: "Contact Us", icon: <Info size={18} /> },
  ];

  // We'll keep the text content in a simplified array for the UI
  const contentMap = {
    "General Information": [
      "The information provided by CheckNews is for general informational and educational purposes only. All content on this website is provided in good faith; however, we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the site.",
      "Under no circumstance shall we have any liability to you for any loss or damage incurred as a result of the use of the website or reliance on any information provided on the site."
    ],
    // ... (rest of your text content remains the same, just mapped to titles)
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <header className="text-center mb-20">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-amber-100"
          >
            <AlertTriangle size={32} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight mb-4"
          >
            Disclaimer
          </motion.h1>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">
            Last Updated: January 02, 2026
          </p>
        </header>

        {/* --- INTRO BOX --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="p-8 md:p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 mb-16 text-slate-600 leading-relaxed font-medium italic"
        >
          "This Disclaimer governs your use of CheckNews. By using our website, you accept this disclaimer in full. If you disagree with any part, you must not use our website."
        </motion.div>

        {/* --- CONTENT SECTIONS --- */}
        <div className="space-y-16">
          {sections.map((section, idx) => (
            <motion.section 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 font-black text-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  {idx + 1}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {section.title}
                </h2>
              </div>
              
              <div className="space-y-4 pl-14">
                {/* Yahan aapka original text map hoga */}
                <p className="text-slate-500 leading-relaxed font-medium text-lg">
                   {/* Placeholder for content logic */}
                   Information on CheckNews is provided for transparency and accuracy. However, news is fast-moving and we recommend verifying critical facts from multiple sources.
                </p>
                <p className="text-slate-500 leading-relaxed font-medium text-lg">
                   Users assume full responsibility for any actions taken based on the information provided on this platform.
                </p>
              </div>

              {idx !== sections.length - 1 && (
                <div className="mt-16 h-px bg-slate-100 w-full" />
              )}
            </motion.section>
          ))}
        </div>

        {/* --- FOOTER NOTE --- */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="mt-24 p-8 bg-slate-900 rounded-[2.5rem] text-center"
        >
          <p className="text-slate-400 text-sm font-medium">
            By continuing to browse CheckNews, you acknowledge that you have read and understood our legal disclaimers.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Disclaimer;