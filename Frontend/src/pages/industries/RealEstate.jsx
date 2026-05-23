import React from 'react'
import { motion } from 'framer-motion'
import { Home, Search, Calendar, MessageSquare, MapPin, Key, TrendingUp } from 'lucide-react'

function PropertyCard({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex gap-6 group"
    >
      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-all">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-black text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function RealEstate() {
  return (
    <div className="min-h-screen pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8"
          >
            <Home size={14} className="text-cyan-400" />
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Property Tech Solutions</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            Close Your Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Deal on WhatsApp</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Automate property inquiries, schedule site visits, and share virtual 
            tours instantly. Convert leads faster with the power of direct messaging.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          <PropertyCard icon={<Search />} title="Property Alerts" desc="Send automated WhatsApp notifications to buyers based on their preferred location, budget, and type." />
          <PropertyCard icon={<Calendar />} title="Visit Scheduling" desc="Allow prospective buyers to book site visits directly through a chat-based calendar." />
          <PropertyCard icon={<MessageSquare />} title="Virtual Tours" desc="Instantly share 360° virtual tour links or property videos when a buyer expresses interest." />
          <PropertyCard icon={<MapPin />} title="Location Insights" desc="Provide automated information about neighborhood amenities, schools, and transit links." />
          <PropertyCard icon={<Key />} title="Rental Management" desc="Automate rent reminders, maintenance requests, and digital lease renewals on WhatsApp." />
          <PropertyCard icon={<TrendingUp />} title="Market Updates" desc="Send monthly market trend reports and investment opportunities to your investor database." />
        </div>

        {/* Impact Section */}
        <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 border border-white/5 p-12 md:p-20">
           <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-cyan-600/10 to-transparent" />
           <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
              <div>
                 <h2 className="text-4xl font-black text-white mb-6">Built for Modern <br />Agencies</h2>
                 <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                    Resobrand's real estate module integrates with your CRM to ensure 
                    every lead is followed up within 5 seconds of an inquiry.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-center flex-1 min-w-[150px]">
                       <h5 className="text-3xl font-black text-white">4.2x</h5>
                       <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">Lead Conversion</p>
                    </div>
                    <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-center flex-1 min-w-[150px]">
                       <h5 className="text-3xl font-black text-white">-60%</h5>
                       <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">Response Time</p>
                    </div>
                 </div>
              </div>
              <div className="bg-[#0b141a] rounded-3xl p-8 border border-white/10 shadow-2xl">
                 <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/5">
                    <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold">R</div>
                    <div><h4 className="text-white text-sm font-bold">Resobrand Realty</h4><span className="text-green-400 text-[10px] font-black uppercase">Online</span></div>
                 </div>
                 <div className="space-y-4">
                    <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none max-w-[85%] text-[11px] text-slate-300">Hi! I see you're interested in properties in Brooklyn. Would you like to see a virtual tour of our latest listing?</div>
                    <div className="bg-cyan-600/20 p-3 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-[11px] text-cyan-100">Yes, please! And are there any schools nearby?</div>
                    <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none max-w-[85%] text-[11px] text-slate-300">Absolutely. There are 3 top-rated schools within 1 mile. Here is the virtual tour: [Link]</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

RealEstate.glowColor1 = "bg-cyan-600/10"
RealEstate.glowColor2 = "bg-blue-600/10"
