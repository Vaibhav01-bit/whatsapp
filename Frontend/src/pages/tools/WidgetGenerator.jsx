import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Layout, Palette, Type, MessageCircle, Copy, Check, Eye, Settings, Code, Smartphone } from 'lucide-react'

export default function WidgetGenerator() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [welcomeMsg, setWelcomeMsg] = useState('Hi there! How can we help you?')
  const [btnText, setBtnText] = useState('Chat with us')
  const [color, setColor] = useState('#25D366')
  const [position, setPosition] = useState('right')
  const [copied, setCopied] = useState(false)

  const widgetCode = `<!-- WhatsApp Widget by Resobrand -->
<script>
  (function() {
    var options = {
      whatsapp: "${phoneNumber}",
      call_to_action: "${btnText}",
      position: "${position}",
      message: "${welcomeMsg}",
    };
    var proto = document.location.protocol, host = "resobrand.com", url = proto + "//" + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget.js';
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
  })();
</script>`

  const handleCopy = () => {
    navigator.clipboard.writeText(widgetCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-['Outfit'] selection:bg-blue-500/30 pt-32 pb-20 overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-8"
          >
            <Layout size={14} className="text-green-400" />
            <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Free Web Tool</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            WhatsApp <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Widget Builder</span>
          </motion.h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Design a custom floating chat button for your website in seconds. No coding required.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl">
              <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                <Settings size={20} className="text-blue-400" /> Configuration
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">WhatsApp Number</label>
                  <input
                    type="text"
                    placeholder="15551234567"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Button Text</label>
                  <input
                    type="text"
                    value={btnText}
                    onChange={(e) => setBtnText(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Welcome Message</label>
                  <textarea
                    value={welcomeMsg}
                    onChange={(e) => setWelcomeMsg(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all h-24 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Position</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['left', 'right'].map((pos) => (
                      <button
                        key={pos}
                        onClick={() => setPosition(pos)}
                        className={`py-2 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all ${position === pos ? 'bg-blue-600 border-blue-500 text-white' : 'bg-white/5 border-white/10 text-slate-500 hover:text-slate-300'}`}
                      >
                        {pos}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Theme Color</label>
                  <div className="flex gap-3">
                    {['#25D366', '#3b82f6', '#8b5cf6', '#ec4899'].map((c) => (
                      <button
                        key={c}
                        onClick={() => setColor(c)}
                        className={`w-10 h-10 rounded-full transition-all ${color === c ? 'ring-4 ring-white/20 scale-110' : 'hover:scale-105'}`}
                        style={{ backgroundColor: c }}
                      />
                    ))}
                    <input 
                      type="color" 
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="w-10 h-10 rounded-full bg-transparent border-0 p-0 cursor-pointer overflow-hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl relative h-[600px] overflow-hidden group">
              <div className="absolute top-8 left-8 flex items-center gap-2">
                <Eye size={18} className="text-blue-400" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Live Preview</span>
              </div>

              {/* Mock Website Page */}
              <div className="mt-12 space-y-6 opacity-20 pointer-events-none">
                <div className="h-8 w-1/3 bg-white/20 rounded-lg" />
                <div className="h-4 w-full bg-white/10 rounded-lg" />
                <div className="h-4 w-full bg-white/10 rounded-lg" />
                <div className="h-4 w-2/3 bg-white/10 rounded-lg" />
                <div className="grid grid-cols-2 gap-6 mt-12">
                   <div className="h-32 bg-white/5 rounded-[2rem]" />
                   <div className="h-32 bg-white/5 rounded-[2rem]" />
                </div>
              </div>

              {/* The Actual Widget Preview */}
              <div className={`absolute bottom-12 ${position === 'right' ? 'right-12' : 'left-12'} transition-all duration-500`}>
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-end gap-4"
                >
                  <AnimatePresence>
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className={`bg-slate-900 border border-white/10 p-4 rounded-2xl shadow-2xl w-64 ${position === 'right' ? 'mr-2' : 'ml-2'}`}
                    >
                      <div className="flex gap-3 items-center mb-3">
                         <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                           <MessageCircle size={16} />
                         </div>
                         <div className="text-[12px] font-bold text-white">Resobrand Support</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-3 text-[13px] text-slate-300 leading-relaxed">
                        {welcomeMsg}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <button 
                    className="h-14 px-8 rounded-full text-white font-black text-sm shadow-2xl flex items-center gap-3 hover:scale-105 transition-all"
                    style={{ backgroundColor: color }}
                  >
                    <MessageCircle size={20} />
                    {btnText}
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Code Output */}
            <div className="bg-slate-950 border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Code size={18} className="text-blue-400" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Get the Code</span>
                </div>
                <button 
                  onClick={handleCopy}
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-500 transition-all flex items-center gap-2"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? 'COPIED!' : 'COPY CODE'}
                </button>
              </div>
              <div className="bg-black/50 rounded-2xl p-6 border border-white/5">
                <pre className="text-green-400 font-mono text-[13px] overflow-x-auto">
                  {widgetCode}
                </pre>
              </div>
              <p className="mt-6 text-sm text-slate-500 text-center">Paste this code right before the closing <code className="text-blue-400">&lt;/body&gt;</code> tag on your website.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
