import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, ShieldCheck, Rocket, Award, Globe, Zap, Heart } from 'lucide-react'

const StatCard = ({ label, value }) => (
  <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 text-center group hover:bg-white/10 transition-all">
    <div className="text-4xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">{value}</div>
    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{label}</div>
  </div>
)

const FeatureBox = ({ icon: Icon, title, description }) => (
  <div className="p-10 rounded-[3rem] bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all group">
    <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-black text-white mb-4">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
)

export default function AboutUs() {
  return (
    <div className="min-h-screen pt-32 pb-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
          >
            <Users size={14} className="text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Our Story</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            Pioneering the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Conversational AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto text-xl text-slate-400 leading-relaxed mb-12"
          >
            Resobrand was born out of a simple vision: to make business communication as effortless, personal, and efficient as talking to a friend. We're building the infrastructure for the next generation of customer engagement.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-40">
          <StatCard value="10M+" label="Messages Daily" />
          <StatCard value="5K+" label="Global Brands" />
          <StatCard value="99.9%" label="Uptime Sync" />
          <StatCard value="24/7" label="Active Support" />
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-3xl rounded-full opacity-50" />
            <div className="relative bg-white/5 border border-white/10 rounded-[3rem] p-12 overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 text-blue-500/10">
                  <Target size={200} />
               </div>
               <h2 className="text-4xl font-black text-white mb-8">Our Mission</h2>
               <p className="text-lg text-slate-400 leading-relaxed mb-8 relative z-10">
                To empower businesses of all sizes with state-of-the-art AI technology that bridges the gap between brands and their customers on the world's most popular messaging platforms.
               </p>
               <div className="flex gap-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-[#020617] bg-slate-800 overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="Team" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="text-white font-bold">Trusted by experts</div>
                    <div className="text-slate-500">Join our growing team</div>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="inline-block p-3 rounded-2xl bg-indigo-600/10 text-indigo-400 mb-4">
               <Award size={24} />
            </div>
            <h2 className="text-5xl font-black text-white leading-tight">Driven by Innovation, <br />Built for Scale</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We believe that every interaction counts. Our platform is designed to handle millions of conversations simultaneously without losing the human touch. From small startups to Fortune 500 companies, Resobrand is the engine behind modern commerce.
            </p>
            <div className="space-y-4 pt-4">
              {[
                { icon: ShieldCheck, text: "Privacy-first approach to data" },
                { icon: Rocket, text: "Continuous deployment of new AI models" },
                { icon: Globe, text: "Global infrastructure across 20+ regions" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white font-bold">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
                    <item.icon size={14} />
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-6">Our Core Values</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">The principles that guide everything we do, from engineering to customer success.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureBox 
              icon={Zap} 
              title="Relentless Speed" 
              description="In the world of messaging, every second matters. We optimize for sub-second latency in everything we build." 
            />
            <FeatureBox 
              icon={ShieldCheck} 
              title="Privacy by Design" 
              description="Your data security isn't a feature—it's our foundation. We use bank-grade encryption for all communications." 
            />
            <FeatureBox 
              icon={Heart} 
              title="Customer Obsession" 
              description="We don't just build features; we solve problems. Your success is the only metric that truly matters to us." 
            />
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to grow with us?</h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12">
              Join thousands of forward-thinking businesses that use Resobrand to redefine customer engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-white/20 transition-all hover:scale-105 active:scale-95">Get Started Now</button>
              <button className="px-10 py-5 bg-white/10 border border-white/20 text-white rounded-2xl font-black text-lg hover:bg-white/20 transition-all">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
