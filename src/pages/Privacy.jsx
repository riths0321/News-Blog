import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Cookie, UserCheck, ShieldCheck, Mail, AlertCircle } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: <Eye size={20} />,
      content: [
        "When you visit CheckNews, we may collect certain information automatically, including your IP address, browser type, operating system, referring URLs, and pages viewed.",
        "If you subscribe to our newsletter or contact us, we collect the personal information you provide, such as your name and email address."
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <Lock size={20} />,
      content: [
        "We use the information to operate and maintain our website, send newsletters if you've subscribed, and analyze site usage to improve our content.",
        "We will never sell, rent, or share your personal information with third parties for marketing purposes without your explicit consent."
      ]
    },
    {
      title: "Cookies and Tracking",
      icon: <Cookie size={20} />,
      content: [
        "CheckNews uses cookies to enhance your browsing experience. Cookies help us remember your preferences and understand how you interact with our site.",
        "You can control cookie settings through your browser preferences. However, disabling them may limit certain features."
      ]
    },
    {
      title: "Data Security",
      icon: <ShieldCheck size={20} />,
      content: [
        "We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.",
        "While we strive to protect your data, you acknowledge that you provide your information at your own risk."
      ]
    },
    {
      title: "Your Rights",
      icon: <UserCheck size={20} />,
      content: [
        "You have the right to access, update, or delete the personal information we hold about you.",
        "You may unsubscribe from our newsletter at any time by clicking the unsubscribe link in any email we send."
      ]
    },
    {
      title: "Contact Us",
      icon: <Mail size={20} />,
      content: [
        "If you have questions about this Privacy Policy, please contact us through our Contact page or email us at privacy@checknews.com."
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <header className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-indigo-100 shadow-sm"
          >
            <Shield size={32} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight mb-4"
          >
            Privacy Policy
          </motion.h1>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">
            Effective Date: January 02, 2026
          </p>
        </header>

        {/* --- INTRO CARD --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="p-8 md:p-10 bg-indigo-50/50 rounded-[2.5rem] border border-indigo-100/50 mb-16"
        >
          <div className="flex gap-4 items-start">
            <AlertCircle className="text-indigo-600 mt-1 shrink-0" size={24} />
            <p className="text-slate-700 leading-relaxed font-medium italic">
              At CheckNews, we respect your privacy and are committed to protecting your personal information. 
              This policy explains how we collect, use, and safeguard your data when you visit our platform.
            </p>
          </div>
        </motion.div>

        {/* --- POLICY SECTIONS --- */}
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <motion.section 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12 border-l-2 border-slate-100 hover:border-indigo-200 transition-colors"
            >
              {/* Floating Icon */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors">
                <div className="w-2 h-2 bg-slate-200 rounded-full" />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 bg-slate-50 text-indigo-600 rounded-lg">
                  {section.icon}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {idx + 1}. {section.title}
                </h2>
              </div>
              
              <div className="space-y-4">
                {section.content.map((para, pIdx) => (
                  <p key={pIdx} className="text-slate-500 leading-relaxed font-medium text-lg">
                    {para}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* --- FINAL CONSENT --- */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="mt-20 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-center"
        >
          <p className="text-slate-500 text-sm font-bold uppercase tracking-tighter">
            By using CheckNews, you consent to the terms of this Privacy Policy.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Privacy;