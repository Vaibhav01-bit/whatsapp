import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, Globe, UserCheck, Bell, Mail } from 'lucide-react'

const PolicySection = ({ icon: Icon, title, content }) => (
  <div className="mb-16 last:mb-0">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400">
        <Icon size={24} />
      </div>
      <h2 className="text-3xl font-black text-white">{title}</h2>
    </div>
    <div className="text-slate-400 leading-relaxed space-y-4 text-lg">
      {content}
    </div>
  </div>
)

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-20">

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
          >
            <Shield size={14} className="text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Legal Center</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8"
          >
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Policy</span>
          </motion.h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Last Updated: May 13, 2026</p>
        </div>

        <div className="bg-white/5 border border-white/5 rounded-[3rem] p-8 md:p-16 mb-20 backdrop-blur-xl">
          <PolicySection 
            icon={FileText}
            title="Introduction"
            content={[
              "At Resobrand, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.",
              "Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site."
            ].map((p, i) => <p key={i}>{p}</p>)}
          />

          <PolicySection 
            icon={Eye}
            title="Information Collection"
            content={[
              "We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.",
              "This may include your name, email address, phone number, billing information, and any other information you choose to provide.",
              "We also automatically collect certain information when you visit our site, including your IP address, browser type, and operating system."
            ].map((p, i) => <p key={i}>{p}</p>)}
          />

          <PolicySection 
            icon={Lock}
            title="How We Use Your Information"
            content={[
              "We use the information we collect to provide, maintain, and improve our services, to process transactions, and to communicate with you.",
              "We may also use your information to personalize your experience, to send you marketing communications, and to protect against fraudulent or illegal activity."
            ].map((p, i) => <p key={i}>{p}</p>)}
          />

          <PolicySection 
            icon={Globe}
            title="Data Sharing & Disclosure"
            content={[
              "We do not sell or rent your personal information to third parties. We may share your information with service providers who perform services on our behalf.",
              "We may also disclose your information if required to do so by law or in response to a valid request from a law enforcement or government agency."
            ].map((p, i) => <p key={i}>{p}</p>)}
          />

          <PolicySection 
            icon={UserCheck}
            title="Your Data Rights"
            content={[
              "You have the right to access, update, or delete your personal information. You can do this by logging into your account settings or contacting us directly.",
              "You also have the right to object to the processing of your data and the right to data portability under certain circumstances."
            ].map((p, i) => <p key={i}>{p}</p>)}
          />

          <PolicySection 
            icon={Bell}
            title="Policy Updates"
            content={[
              "We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website.",
              "Your continued use of our services after the effective date of the updated policy constitutes your acceptance of the changes."
            ].map((p, i) => <p key={i}>{p}</p>)}
          />
        </div>

        <div className="text-center bg-blue-600/10 border border-blue-500/20 rounded-[2.5rem] p-12">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/20">
            <Mail size={32} />
          </div>
          <h3 className="text-3xl font-black text-white mb-4">Questions about our Policy?</h3>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">Our legal team is here to clarify any doubts you might have regarding your data privacy.</p>
          <a href="mailto:privacy@resobrand.com" className="inline-block px-10 py-4 bg-blue-600 text-white rounded-2xl font-black text-sm hover:scale-105 active:scale-95 transition-all">
            Email Legal Team
          </a>
        </div>
      </div>
    </div>
  )
}

PrivacyPolicy.glowColor1 = "bg-blue-600/10"
PrivacyPolicy.glowColor2 = "bg-indigo-600/10"
