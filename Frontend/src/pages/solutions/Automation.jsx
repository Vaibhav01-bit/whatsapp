import React from 'react'
import { motion } from 'framer-motion'
import { Zap, CheckCircle2, MessageSquare, Send, BarChart3, Users } from 'lucide-react'

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group"
    >
      <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-black text-white mb-4">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function Automation() {
  return (
    <div className="min-h-screen pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
          >
            <Zap size={14} className="text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Intelligent Automation</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            Scale Your Workflows with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Smart Triggers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Automate repetitive tasks, lead qualification, and customer follow-ups on WhatsApp. 
            Free up your team for complex work while maintaining a 24/7 presence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-500/25 active:scale-95 flex items-center gap-2">
              Start Automating <Send size={20} className="rotate-[-45deg]" />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all active:scale-95">
              View Documentation
            </button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          <FeatureCard 
            icon={<Zap size={24} />}
            title="Instant Responders"
            desc="Set up automated replies for common queries, ensuring your customers never wait more than a second."
          />
          <FeatureCard 
            icon={<CheckCircle2 size={24} />}
            title="Lead Qualification"
            desc="Let our AI qualify leads through natural conversation before handing them over to your sales team."
          />
          <FeatureCard 
            icon={<MessageSquare size={24} />}
            title="Drip Campaigns"
            desc="Schedule series of messages based on user behavior to keep them engaged and move them through the funnel."
          />
          <FeatureCard 
            icon={<BarChart3 size={24} />}
            title="Workflow Analytics"
            desc="Monitor the performance of your automations with detailed reports on completion rates and ROI."
          />
          <FeatureCard 
            icon={<Users size={24} />}
            title="Team Handoff"
            desc="Seamlessly transition conversations from AI to human agents when complex situations arise."
          />
          <FeatureCard 
            icon={<Send size={24} />}
            title="Bulk Broadcasts"
            desc="Reach thousands of customers instantly with personalized, automated broadcast messages."
          />
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-12 md:p-20 text-center shadow-[0_0_80px_rgba(37,99,235,0.25)] border border-white/10"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to automate your sales?</h2>
            <p className="text-blue-100 text-lg mb-10 opacity-80 max-w-2xl mx-auto">
              Join 500+ businesses using Resobrand to scale their WhatsApp operations.
            </p>
            <button className="px-12 py-4 bg-white text-blue-600 rounded-2xl font-black text-xl shadow-xl hover:scale-105 active:scale-95 transition-all">
              Get Started for Free
            </button>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 blur-[80px] -ml-32 -mb-32" />
        </motion.div>
      </div>
    </div>
  )
}

Automation.glowColor1 = "bg-blue-600/10"
Automation.glowColor2 = "bg-purple-600/10"
