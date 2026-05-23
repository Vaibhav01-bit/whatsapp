import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Zap, Users, Rocket, Cloud, Shield, BarChart3 } from 'lucide-react'

function TechStat({ label, val }) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">{label}</p>
      <h4 className="text-3xl font-black text-white">{val}</h4>
    </div>
  )
}

export default function SaaS() {
  return (
    <div className="min-h-screen pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
          >
            <Cpu size={14} className="text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">SaaS Growth Engine</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            Scale Your Product <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">On Autopilot</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Drive product adoption, automate user onboarding, and provide instant 
            technical support. Turn your WhatsApp channel into a retention machine.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          <TechStat label="Conversion Boost" val="+35%" />
          <TechStat label="Onboarding Speed" val="3x Faster" />
          <TechStat label="Churn Reduction" val="-22%" />
          <TechStat label="Support ROI" val="5.4x" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-4xl font-black text-white mb-8">Unified Growth <br />Stack</h2>
            <div className="space-y-10">
              {[
                { icon: <Rocket className="text-orange-400" />, title: "Automated Onboarding", desc: "Guide new users through your product features with interactive WhatsApp tutorials." },
                { icon: <Zap className="text-yellow-400" />, title: "Real-time Alerts", desc: "Notify users about critical account activity, usage limits, and system status." },
                { icon: <Users className="text-blue-400" />, title: "Customer Success", desc: "Proactively reach out to users based on their in-app behavior to prevent churn." },
                { icon: <Shield className="text-green-400" />, title: "Developer Support", desc: "Provide sub-second technical assistance and documentation snippets on the fly." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] bg-[#0b141a] border border-white/10 p-8 flex flex-col relative overflow-hidden">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white"><Cloud /></div>
                  <div><h4 className="text-white font-bold">System Status</h4><span className="text-green-400 text-xs font-black uppercase">All Systems Operational</span></div>
               </div>
               <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5"><div className="h-2 w-3/4 bg-blue-500/20 rounded mb-2" /><div className="h-2 w-1/2 bg-blue-500/10 rounded" /></div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5"><div className="h-2 w-2/3 bg-blue-500/20 rounded mb-2" /><div className="h-2 w-1/3 bg-blue-500/10 rounded" /></div>
                  <div className="mt-8 flex justify-between items-center bg-blue-600/10 p-6 rounded-3xl border border-blue-500/20">
                     <BarChart3 className="text-blue-400" />
                     <div className="text-right"><p className="text-slate-500 text-[10px] font-bold uppercase">Usage This Month</p><h5 className="text-white font-black text-2xl">84%</h5></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SaaS.glowColor1 = "bg-blue-600/10"
SaaS.glowColor2 = "bg-purple-600/10"
