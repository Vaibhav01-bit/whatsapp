import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Users, Calendar, Video, FileText, Sparkles } from 'lucide-react'

function FeatureBlock({ icon, title, desc }) {
  return (
    <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
      <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-8">
        {icon}
      </div>
      <h4 className="text-2xl font-black text-white mb-4">{title}</h4>
      <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
    </div>
  )
}

export default function Education() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-['Outfit'] selection:bg-indigo-500/30 pt-32 pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8"
          >
            <GraduationCap size={14} className="text-indigo-400" />
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">EdTech Solutions</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            Engage Students <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Where They Are</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            From admission inquiries to course material delivery, simplify 
            educational workflows and improve student outcomes with WhatsApp.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <FeatureBlock icon={<Sparkles />} title="Admission Bot" desc="Automate FAQ handling for prospective students, handle application tracking, and schedule campus tours." />
          <FeatureBlock icon={<BookOpen />} title="Content Delivery" desc="Send daily study bites, PDFs, and video links directly to student groups for higher engagement." />
          <FeatureBlock icon={<Calendar />} title="Schedule Alerts" desc="Automatically notify students about class changes, exam dates, and upcoming events." />
          <FeatureBlock icon={<Users />} title="Parent Communication" desc="Keep parents updated with attendance reports, progress results, and school announcements." />
        </div>

        {/* Demo Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center bg-white/5 rounded-[3rem] p-12 md:p-20 border border-white/10">
          <div className="flex-1">
            <h2 className="text-4xl font-black text-white mb-6">Learning Never Stops</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Resobrand helps schools and universities achieve a 95% open rate on 
              critical academic announcements compared to email.
            </p>
            <ul className="space-y-4">
              {[
                { icon: <Video />, text: "Class links & recorded sessions" },
                { icon: <FileText />, text: "Automated grading & reports" },
                { icon: <Users />, text: "Group discussion management" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-bold">
                  <div className="text-indigo-400">{item.icon}</div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-[320px] aspect-[9/16] bg-slate-900 rounded-[2.5rem] border-8 border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="p-6 pt-10">
                <div className="bg-indigo-600/20 p-3 rounded-2xl mb-4 text-xs text-indigo-100">Hi Alex! Here is your study schedule for today. 📚</div>
                <div className="bg-white/5 p-3 rounded-2xl mb-4 text-xs text-slate-400">10:00 AM - Physics Lab</div>
                <div className="bg-white/5 p-3 rounded-2xl text-xs text-slate-400">02:00 PM - Math Quiz</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
