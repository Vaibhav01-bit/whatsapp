import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Ticket, MapPin, Users, Zap, Bell, QrCode } from 'lucide-react'

function EventCard({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-pink-500/30 transition-all text-center group"
    >
      <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-8 mx-auto group-hover:bg-pink-500 group-hover:text-white transition-all">
        {icon}
      </div>
      <h4 className="text-2xl font-black text-white mb-4">{title}</h4>
      <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
    </motion.div>
  )
}

export default function Events() {
  return (
    <div className="min-h-screen pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 mb-8"
          >
            <Calendar size={14} className="text-pink-400" />
            <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">Event Management</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            Sell Out Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Next Big Event</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            From ticket delivery to live session updates, automate your entire 
            event communication on WhatsApp. Boost attendance and engagement effortlessly.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <EventCard icon={<Ticket />} title="E-Ticketing" desc="Send automated QR code tickets and confirmation receipts directly to the attendee's WhatsApp." />
          <EventCard icon={<Bell />} title="Live Notifications" desc="Keep your audience updated with live schedule changes, speaker alerts, and venue maps." />
          <EventCard icon={<QrCode />} title="Fast Check-in" desc="Simplify on-site entry with instant QR code scanning and identity verification." />
          <EventCard icon={<Users />} title="Networking" desc="Create automated attendee groups and facilitate networking based on shared interests." />
          <EventCard icon={<MapPin />} title="Venue Navigation" desc="Provide real-time location pins and interactive maps for large event venues." />
          <EventCard icon={<Zap />} title="Post-Event ROI" desc="Automate feedback collection, share session recordings, and drive early-bird sales." />
        </div>

        {/* Feature Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-[3rem] bg-gradient-to-br from-pink-600/20 to-orange-600/20 border border-white/10 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
             <Ticket size={120} className="text-white opacity-20 rotate-[-15deg]" />
             <div className="absolute flex flex-col items-center gap-4">
                <div className="px-6 py-3 bg-white text-pink-600 rounded-full font-black text-sm shadow-xl">YOUR TICKET IS READY</div>
                <div className="w-32 h-32 bg-white rounded-2xl p-2"><QrCode size="100%" className="text-black" /></div>
             </div>
          </div>
          <div>
            <h2 className="text-4xl font-black text-white mb-8">Maximize Your <br />Attendance Rate</h2>
            <div className="space-y-6">
              {[
                { title: "Broadcast Announcements", desc: "Reach thousands of registrants instantly with segmented broadcasts." },
                { title: "Automated Reminders", desc: "Reduce no-shows with timed reminders before the event starts." },
                { title: "Instant Support", desc: "Solve attendee queries about parking, food, and timings in seconds." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0" />
                  <div>
                    <h5 className="text-white font-bold mb-1">{item.title}</h5>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Events.glowColor1 = "bg-pink-600/10"
Events.glowColor2 = "bg-orange-600/10"
