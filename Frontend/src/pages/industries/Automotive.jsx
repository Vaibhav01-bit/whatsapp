import React from 'react'
import { motion } from 'framer-motion'
import { Car, Key, Settings, MessageSquare, Calendar, Zap, Shield } from 'lucide-react'

function UseCase({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
    >
      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-black text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function Automotive() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-['Outfit'] selection:bg-blue-500/30 pt-32 pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
          >
            <Car size={14} className="text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Automotive Solutions</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            Accelerate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Dealership Sales</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            From test drive bookings to service reminders, automate your entire 
            customer lifecycle on WhatsApp. Drive higher engagement and close deals faster.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <UseCase icon={<Calendar />} title="Test Drive Booking" desc="Let customers schedule test drives instantly with automated availability checks." />
          <UseCase icon={<Key />} title="Instant Quotations" desc="Send personalized price quotes and finance options directly to the customer's chat." />
          <UseCase icon={<Settings />} title="Service Reminders" desc="Automate maintenance alerts and allow one-click service appointment booking." />
          <UseCase icon={<MessageSquare />} title="Lead Qualification" desc="AI agents qualify showroom walk-ins and web leads 24/7 on WhatsApp." />
          <UseCase icon={<Zap />} title="Inventory Updates" desc="Send automated alerts to interested buyers when new models or stock arrive." />
          <UseCase icon={<Shield />} title="Digital Documentation" desc="Securely collect KYC documents and share invoices/receipts within the chat." />
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] -mr-48 -mt-48" />
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-4xl font-black text-white mb-6 leading-tight">Rev Up Your <br />Customer Experience</h2>
              <p className="text-blue-100 text-lg mb-10 opacity-80 leading-relaxed">
                Dealerships using Resobrand see a 40% increase in lead-to-test-drive conversion 
                and a 2x faster response time for service inquiries.
              </p>
              <button className="px-10 py-4 bg-white text-blue-600 rounded-xl font-black text-lg shadow-xl shadow-black/10 hover:scale-105 transition-transform">
                Get Dealer Demo
              </button>
            </div>
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="space-y-6">
                {[
                  { label: "Response Time", val: "< 1 min" },
                  { label: "Booking Increase", val: "+45%" },
                  { label: "Customer Satisfaction", val: "4.9/5" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0">
                    <span className="text-blue-100/60 font-bold uppercase tracking-widest text-xs">{stat.label}</span>
                    <span className="text-white font-black text-2xl">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
