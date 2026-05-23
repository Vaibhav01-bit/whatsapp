import React from 'react'
import { motion } from 'framer-motion'
import { Landmark, ShieldCheck, PieChart, Bell, Lock, Smartphone, CreditCard } from 'lucide-react'

function SecurityFeature({ icon, title, desc }) {
  return (
    <div className="flex gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all">
      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-black text-white mb-2">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function BankingFintech() {
  return (
    <div className="min-h-screen pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
          >
            <ShieldCheck size={14} className="text-emerald-400" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Secure Financial Solutions</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            WhatsApp Banking <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Simplified & Secure</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Deliver sub-second transaction alerts, automated account statements, 
            and 24/7 financial support on the world's most popular messaging app.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          <SecurityFeature icon={<Bell />} title="Instant Transaction Alerts" desc="Keep customers informed with real-time push notifications for every debit, credit, and login." />
          <SecurityFeature icon={<PieChart />} title="Account Insights" desc="Allow users to query their balance, mini-statements, and spending patterns instantly." />
          <SecurityFeature icon={<Lock />} title="Secure 2FA" desc="Deliver ultra-fast One-Time Passwords (OTPs) via WhatsApp for enhanced security." />
          <SecurityFeature icon={<CreditCard />} title="Card Management" desc="Enable users to block/unblock cards and set transaction limits within the chat interface." />
          <SecurityFeature icon={<Smartphone />} title="Loan Applications" desc="Automate the initial stages of loan applications and document collection." />
          <SecurityFeature icon={<ShieldCheck />} title="Fraud Detection" desc="AI-driven sentiment and pattern analysis to detect and flag suspicious interactions." />
        </div>

        {/* Compliance Section */}
        <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 relative overflow-hidden">
          <div className="grid md:grid-cols-3 gap-12 text-center relative z-10">
            <div>
              <div className="text-4xl font-black text-white mb-2">Bank-Grade</div>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Encryption</p>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">GDPR</div>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Compliant</p>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">99.99%</div>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Uptime SLA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

BankingFintech.glowColor1 = "bg-emerald-600/10"
BankingFintech.glowColor2 = "bg-blue-600/10"
