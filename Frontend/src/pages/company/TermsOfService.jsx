import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Scale, CheckCircle, AlertCircle, Ban, HelpCircle, Mail, Terminal } from 'lucide-react'

const TermsSection = ({ icon: Icon, title, children }) => (
  <div className="mb-16 last:mb-0">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-xl bg-indigo-600/10 flex items-center justify-center text-indigo-400">
        <Icon size={24} />
      </div>
      <h2 className="text-3xl font-black text-white">{title}</h2>
    </div>
    <div className="text-slate-400 leading-relaxed space-y-6 text-lg">
      {children}
    </div>
  </div>
)

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-32 pb-20">

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8"
          >
            <Scale size={14} className="text-indigo-400" />
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Legal Agreement</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8"
          >
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Service</span>
          </motion.h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Last Updated: May 13, 2026</p>
        </div>

        <div className="bg-white/5 border border-white/5 rounded-[3rem] p-8 md:p-16 mb-20 backdrop-blur-xl">
          <TermsSection icon={CheckCircle} title="1. Acceptance of Terms">
            <p>By accessing or using Resobrand's website and services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.</p>
            <p>These terms apply to all visitors, users, and others who access or use the Service.</p>
          </TermsSection>

          <TermsSection icon={Terminal} title="2. Description of Service">
            <p>Resobrand provides an AI-powered conversational platform integrated with WhatsApp Business API and other messaging services. We provide tools for automation, analytics, and customer engagement.</p>
            <p>We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice.</p>
          </TermsSection>

          <TermsSection icon={AlertCircle} title="3. User Responsibilities">
            <p>You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device.</p>
            <p>You agree to accept responsibility for all activities that occur under your account or password. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
          </TermsSection>

          <TermsSection icon={Ban} title="4. Prohibited Uses">
            <p>You may use our service only for lawful purposes and in accordance with these Terms. You agree not to use the service:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including "junk mail", "spam", or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate Resobrand, a Resobrand employee, or any other person or entity.</li>
              <li>In any way that infringes upon the rights of others, or in any way is threatening, fraudulent, or harmful.</li>
            </ul>
          </TermsSection>

          <TermsSection icon={FileText} title="5. Intellectual Property">
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Resobrand and its licensors.</p>
            <p>The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Resobrand.</p>
          </TermsSection>

          <TermsSection icon={HelpCircle} title="6. Limitation of Liability">
            <p>In no event shall Resobrand, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
          </TermsSection>
        </div>

        <div className="text-center bg-indigo-600/10 border border-indigo-500/20 rounded-[2.5rem] p-12">
          <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-500/20">
            <Mail size={32} />
          </div>
          <h3 className="text-3xl font-black text-white mb-4">Contact Legal</h3>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">For any questions regarding these terms, please contact our legal department.</p>
          <a href="mailto:legal@resobrand.com" className="inline-block px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm hover:scale-105 active:scale-95 transition-all">
            legal@resobrand.com
          </a>
        </div>
      </div>
    </div>
  )
}

TermsOfService.glowColor1 = "bg-indigo-600/10"
TermsOfService.glowColor2 = "bg-blue-600/10"
