import React from 'react'
import { motion } from 'framer-motion'
import { Users, Cpu, Shield, Zap, MessageSquare, Globe } from 'lucide-react'

function AgentCard({ icon, name, role, capabilities }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-black text-white">{name}</h3>
          <p className="text-purple-400 text-xs font-bold uppercase tracking-widest">{role}</p>
        </div>
      </div>
      <div className="space-y-3">
        {capabilities.map((cap, i) => (
          <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
            <div className="w-1 h-1 rounded-full bg-purple-500" />
            {cap}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Agents() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-['Outfit'] selection:bg-purple-500/30 pt-32 pb-20">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8"
          >
            <Cpu size={14} className="text-purple-400" />
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Autonomous AI Agents</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            Deploy Autonomous <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Digital Employees</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Beyond simple bots. Our AI agents can interpret complex requests, perform multi-step actions, 
            and learn from every interaction to provide human-like support at scale.
          </motion.p>
        </div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          <AgentCard 
            icon={<Users size={32} />}
            name="Support Sentinel"
            role="Customer Care"
            capabilities={[
              "24/7 Problem Resolution",
              "Multi-language Support",
              "Emotion Detection",
              "Knowledge Base Integration"
            ]}
          />
          <AgentCard 
            icon={<Zap size={32} />}
            name="Sales Spark"
            role="Growth Expert"
            capabilities={[
              "Proactive Lead Outreach",
              "Personalized Upselling",
              "Deal Closing Optimization",
              "CRM Auto-sync"
            ]}
          />
          <AgentCard 
            icon={<Shield size={32} />}
            name="Security Scout"
            role="Compliance Officer"
            capabilities={[
              "Fraud Detection",
              "Data Privacy Guarding",
              "Identity Verification",
              "Policy Enforcement"
            ]}
          />
        </div>

        {/* Technology Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-4xl font-black text-white mb-8">Built on Next-Gen <br />Intelligence</h2>
            <div className="space-y-6">
              {[
                { icon: <Globe className="text-blue-400" />, title: "Global Context Awareness", desc: "Agents understand regional nuances and local preferences." },
                { icon: <MessageSquare className="text-green-400" />, title: "Semantic Memory", desc: "Long-term memory allows agents to remember previous user preferences." },
                { icon: <Cpu className="text-purple-400" />, title: "Neural Reasoning", desc: "Advanced logic processing for solving complex multi-step problems." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 flex items-center justify-center relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 border-2 border-dashed border-purple-500/30 rounded-full flex items-center justify-center"
              >
                <div className="w-48 h-48 border-2 border-dashed border-blue-500/30 rounded-full" />
              </motion.div>
              <Cpu size={80} className="absolute text-white animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
