import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Hash, Phone, MessageSquare, Copy, Check, Share2, Code2, Terminal, Zap } from 'lucide-react'

export default function CodeGenerator() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('link')

  const waLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}${message ? `?text=${encodeURIComponent(message)}` : ''}`

  const codeSnippets = {
    link: waLink,
    html: `<a href="${waLink}" target="_blank" rel="noopener noreferrer">\n  Chat on WhatsApp\n</a>`,
    javascript: `window.open("${waLink}", "_blank");`,
    react: `const handleChat = () => {\n  window.open("${waLink}", "_blank");\n};`
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen pt-32 pb-20">

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
          >
            <Hash size={14} className="text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Free Developer Tool</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            WhatsApp <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Link Generator</span>
          </motion.h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Create instant chat links and code snippets to integrate WhatsApp anywhere in your application.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Section */}
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-xl">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Phone Number</label>
                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors">
                    <Phone size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="e.g. 15551234567"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-14 text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-lg"
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500">Include country code without + or spaces.</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Pre-filled Message</label>
                <div className="relative group">
                  <div className="absolute left-5 top-6 text-slate-500 group-focus-within:text-blue-400 transition-colors">
                    <MessageSquare size={20} />
                  </div>
                  <textarea
                    placeholder="Hi, I'm interested in your services..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-40 bg-white/5 border border-white/10 rounded-2xl p-5 pl-14 text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-lg resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-blue-500/5 -rotate-12">
                <Code2 size={120} />
              </div>

              <div className="flex gap-2 mb-8 bg-black/40 p-1.5 rounded-2xl w-fit">
                {['link', 'html', 'javascript', 'react'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${activeTab === tab ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="bg-black/50 rounded-2xl p-6 border border-white/5 relative group/code">
                <pre className="text-blue-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                  {codeSnippets[activeTab]}
                </pre>
                <button
                  onClick={() => handleCopy(codeSnippets[activeTab])}
                  className="absolute right-4 top-4 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => handleCopy(waLink)}
                  className="flex-1 h-14 bg-blue-600 text-white rounded-2xl font-black text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20"
                >
                  <Share2 size={18} /> COPY LINK
                </button>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-14 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Zap size={18} /> TEST LINK
                </a>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-indigo-600/10 border border-indigo-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                  <Terminal size={20} />
                </div>
                <h3 className="text-xl font-black text-white">Why use this?</h3>
              </div>
              <p className="text-indigo-200/70 text-sm leading-relaxed">
                WhatsApp links are the most efficient way to drive traffic from social media, emails, and ads directly into a conversation. Our tool ensures your links are properly encoded and ready for production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CodeGenerator.glowColor1 = "bg-blue-600/10"
CodeGenerator.glowColor2 = "bg-indigo-600/10"
