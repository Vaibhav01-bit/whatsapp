import React from 'react'
import { motion } from 'framer-motion'
import { HeartPulse, Calendar, Shield, MessageSquare, Clock, UserCheck, Activity } from 'lucide-react'

function HealthFeature({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-red-500/30 transition-all group"
    >
      <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-500 group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-black text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function Healthcare() {
  return (
    <div className="min-h-screen pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-8"
          >
            <HeartPulse size={14} className="text-red-400" />
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Patient-First Solutions</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            Connected Care <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">At Every Step</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Automate appointment scheduling, deliver digital lab reports, 
            and provide 24/7 post-care support. Secure, HIPAA-compliant patient communication.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <HealthFeature icon={<Calendar />} title="Smart Scheduling" desc="Let patients book, reschedule, or cancel appointments via WhatsApp with real-time sync." />
          <HealthFeature icon={<Activity />} title="Digital Reports" desc="Securely share lab results and prescriptions directly with patients once they are ready." />
          <HealthFeature icon={<Shield />} title="HIPAA Compliant" desc="Ensuring the highest standards of data privacy and patient confidentiality in every message." />
          <HealthFeature icon={<Clock />} title="Medication Alerts" desc="Send automated reminders to patients for their daily doses and refill notifications." />
          <HealthFeature icon={<UserCheck />} title="Patient Triage" desc="AI agents can assess symptoms and route patients to the correct department instantly." />
          <HealthFeature icon={<MessageSquare />} title="Telehealth Support" desc="Seamlessly transition from chat to video consultation for instant medical advice." />
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10">
            <h2 className="text-4xl font-black text-white mb-8">Better Patient <br />Outcomes</h2>
            <div className="space-y-8">
              {[
                { label: "No-show Reduction", val: "65%" },
                { label: "Patient Satisfaction", val: "94%" },
                { label: "Staff Time Saved", val: "20h/wk" }
              ].map((stat, i) => (
                <div key={i}>
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">{stat.label}</span>
                      <span className="text-white font-black text-2xl">{stat.val}</span>
                   </div>
                   <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: stat.val.includes('%') ? stat.val : '80%' }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="h-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" 
                      />
                   </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square flex items-center justify-center">
             <div className="absolute inset-0 bg-red-500/10 blur-[100px] rounded-full scale-75 animate-pulse" />
             <HeartPulse size={200} className="text-white opacity-20" />
             <motion.div
               animate={{ scale: [1, 1.1, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute w-32 h-32 bg-red-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-500/20"
             >
                <Activity size={60} className="text-white" />
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

Healthcare.glowColor1 = "bg-red-600/10"
Healthcare.glowColor2 = "bg-rose-600/10"
