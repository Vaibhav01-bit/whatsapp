import React from 'react'
import { motion } from 'framer-motion'
import { Globe, ShoppingBag, Landmark, Users, Cloud, Shield, Zap, Terminal } from 'lucide-react'

function IntegrationCard({ icon, name, desc, status }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-blue-600 transition-all duration-500">
          {icon}
        </div>
        <span className={`text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-widest ${
          status === 'Official' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
        }`}>
          {status}
        </span>
      </div>
      <h3 className="text-xl font-black text-white mb-2">{name}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6">{desc}</p>
      <button className="text-xs font-black text-blue-400 uppercase tracking-widest hover:text-white transition-colors">
        Learn More →
      </button>
    </motion.div>
  )
}

export default function Integrations() {
  return (
    <div className="min-h-screen pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
          >
            <Globe size={14} className="text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Global Ecosystem</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            Connect Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Favorite Tools</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Seamlessly integrate Resobrand with your existing CRM, e-commerce platform, 
            and support stack. Build a unified ecosystem for your business communications.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <IntegrationCard icon={<ShoppingBag />} name="Shopify" desc="Sync orders, inventory and send automated cart recovery messages directly on WhatsApp." status="Official" />
          <IntegrationCard icon={<Landmark />} name="Stripe" desc="Send automated payment links, receipts and subscription updates via WhatsApp chat." status="Official" />
          <IntegrationCard icon={<Users />} name="Salesforce" desc="Automatically log WhatsApp conversations as activities and update lead statuses in real-time." status="Premium" />
          <IntegrationCard icon={<Cloud />} name="HubSpot" desc="Connect your CRM to trigger WhatsApp workflows based on customer lifecycle stages." status="Premium" />
          <IntegrationCard icon={<Shield />} name="Zendesk" desc="Handle WhatsApp tickets directly from your Zendesk dashboard with two-way sync." status="Official" />
          <IntegrationCard icon={<Terminal />} name="Custom API" desc="Build custom integrations with our robust REST API and webhooks support." status="Open" />
        </div>

        {/* Developer Section */}
        <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 overflow-hidden relative mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6">Developer First <br />Infrastructure</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Our platform is designed with developers in mind. Use our rich API documentation 
                and SDKs to build complex integrations and custom workflows in minutes.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20">Read API Docs</button>
                <button className="px-6 py-3 bg-white/5 text-white rounded-xl font-bold text-sm border border-white/10">Request SDK</button>
              </div>
            </div>
            <div className="bg-slate-950 rounded-2xl p-8 border border-white/5 font-mono text-sm">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <p className="text-blue-400"># Send a WhatsApp message</p>
              <p className="text-white mt-2">POST /v1/messages</p>
              <p className="text-slate-500 mt-2">{`{`}</p>
              <p className="text-slate-300 ml-4">{`"to": "+1234567890",`}</p>
              <p className="text-slate-300 ml-4">{`"type": "template",`}</p>
              <p className="text-slate-300 ml-4">{`"template": { "name": "welcome" }`}</p>
              <p className="text-slate-500">{`}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Integrations.glowColor1 = "bg-blue-600/10"
Integrations.glowColor2 = "bg-indigo-600/10"
