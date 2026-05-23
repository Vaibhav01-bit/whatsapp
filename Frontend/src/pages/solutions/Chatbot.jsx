import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Send, Sparkles, Zap, Shield, HeartPulse } from 'lucide-react'

function Message({ type, content }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: type === 'bot' ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`flex ${type === 'bot' ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`max-w-[85%] p-4 rounded-2xl ${
        type === 'bot' 
          ? 'bg-blue-600/20 border border-blue-500/20 rounded-tl-none text-blue-100' 
          : 'bg-white/10 border border-white/10 rounded-tr-none text-slate-200'
      }`}>
        <p className="text-sm leading-relaxed">{content}</p>
      </div>
    </motion.div>
  )
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { type: 'bot', content: "Hi there! I'm Resobrand AI Assistant. How can I help you today?" }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMsg = inputValue.trim()
    setMessages(prev => [...prev, { type: 'user', content: userMsg }])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      let botResponse = "That sounds interesting! Resobrand's AI solutions can definitely help with that. Would you like us to custom design an automation blueprint for your business?"
      
      const lower = userMsg.toLowerCase()
      if (lower.includes('price') || lower.includes('pricing') || lower.includes('cost') || lower.includes('rate')) {
        botResponse = "We offer a 14-day Free Trial! Our paid Growth plan starts at just ₹999/month (billed yearly) and includes full AI Chatbot integration and priority API approval."
      } else if (lower.includes('sales') || lower.includes('lead') || lower.includes('agent') || lower.includes('sell')) {
        botResponse = "Our autonomous Sales Agents are designed to capture, qualify, and nurture prospects 24/7 on WhatsApp, boosting conversions by over 40%!"
      } else if (lower.includes('demo') || lower.includes('try') || lower.includes('book') || lower.includes('consult')) {
        botResponse = "We'd love to show you a demo! You can book a free one-on-one expert session on our Consultation page (/resources/consultant)."
      } else if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) {
        botResponse = "Hello! I'm the Resobrand AI Assistant. Ask me anything about WhatsApp automation, custom widgets, or features!"
      }

      setMessages(prev => [...prev, { type: 'bot', content: botResponse }])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-['Outfit'] selection:bg-blue-500/30 pt-32 pb-20">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
            >
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Conversational AI</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
            >
              24/7 Intelligent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Customer Support</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 mb-12 leading-relaxed"
            >
              Deliver personalized, human-like conversations that drive engagement and satisfaction. 
              Our chatbots learn from every interaction to provide faster, better answers.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              {[
                { icon: <Zap className="text-yellow-400" />, title: "Instant Response", desc: "Sub-second replies." },
                { icon: <Shield className="text-green-400" />, title: "Brand Safe", desc: "Controlled messaging." },
                { icon: <HeartPulse className="text-red-400" />, title: "High Satisfaction", desc: "98% positive rating." },
                { icon: <MessageSquare className="text-blue-400" />, title: "Multi-channel", desc: "WhatsApp & Web." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Chat Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#0b141a] rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden h-[600px] w-full max-w-[400px] mx-auto"
          >
            <div className="bg-[#202c33] p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">R</div>
              <div>
                <h4 className="text-white font-bold leading-none">Resobrand AI</h4>
                <span className="text-green-400 text-[10px] font-bold">Online</span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col h-[calc(100%-88px)] justify-between">
              {/* Message scroll container */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-1 mb-4 max-h-[400px] scrollbar-thin scrollbar-thumb-white/10">
                {messages.map((msg, idx) => (
                  <Message key={idx} type={msg.type} content={msg.content} />
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-blue-600/20 border border-blue-500/20 rounded-2xl rounded-tl-none p-4 max-w-[80%] text-blue-300 text-xs italic flex items-center gap-2">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-150"></span>
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-300"></span>
                      </div>
                      <span>Resobrand AI is typing...</span>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                  className="flex-1 bg-[#2a3942] rounded-full h-12 px-6 text-white text-sm outline-none border border-white/5 focus:border-blue-500/50 transition-all placeholder-slate-500"
                />
                <button
                  onClick={handleSend}
                  className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg hover:bg-blue-500 active:scale-95 transition-all shrink-0"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
