import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, PieChart, Target, Zap, Clock } from 'lucide-react'

function StatItem({ icon, label, value, color }) {
  return (
    <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${color}`}>
        {icon}
      </div>
      <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">{label}</p>
      <h3 className="text-3xl font-black text-white">{value}</h3>
    </div>
  )
}

export default function Analytics() {
  return (
    <div className="min-h-screen pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
          >
            <BarChart3 size={14} className="text-emerald-400" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Real-time Insights</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            Data-Driven <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Decision Making</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Unlock deep insights from every WhatsApp conversation. Track performance, 
            understand customer sentiment, and optimize your conversion funnel with real-time analytics.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <StatItem icon={<TrendingUp />} label="ROI Increase" value="+45%" color="bg-emerald-500/10 text-emerald-400" />
          <StatItem icon={<Clock />} label="Response Time" value="420ms" color="bg-blue-500/10 text-blue-400" />
          <StatItem icon={<Target />} label="Lead Quality" value="8.4/10" color="bg-purple-500/10 text-purple-400" />
          <StatItem icon={<Zap />} label="Automation Rate" value="92%" color="bg-yellow-500/10 text-yellow-400" />
          <StatItem icon={<PieChart />} label="Conversion" value="24.8%" color="bg-pink-500/10 text-pink-400" />
          <StatItem icon={<BarChart3 />} label="Messages Daily" value="1.2M" color="bg-cyan-500/10 text-cyan-400" />
        </div>

        {/* Visual Analytics Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 rounded-[3rem] bg-white/5 border border-white/10 overflow-hidden relative"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-black text-white mb-2">Engagement Performance</h2>
              <p className="text-slate-500">Live data from last 30 days</p>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-white">Export CSV</div>
              <div className="px-4 py-2 rounded-lg bg-emerald-600 text-xs font-bold text-white shadow-lg">Refresh Data</div>
            </div>
          </div>
          
          <div className="h-[300px] w-full flex items-end gap-2 px-4 border-b border-white/10 pb-4">
            {[40, 70, 45, 90, 65, 80, 50, 95, 75, 85, 60, 40].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                transition={{ delay: i * 0.05, duration: 1 }}
                className="flex-1 bg-gradient-to-t from-emerald-500 to-cyan-400 rounded-t-lg relative group"
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {h * 10}k msgs
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-6 px-4 text-[10px] font-bold text-slate-600 tracking-widest uppercase">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

Analytics.glowColor1 = "bg-emerald-600/10"
Analytics.glowColor2 = "bg-blue-600/10"
