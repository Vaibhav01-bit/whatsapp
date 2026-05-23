import React, { useState, useEffect } from 'react'
import { clientServer } from '../../config/api'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronDown, Search, MessageSquare, Zap, Shield, CreditCard, Globe } from 'lucide-react'

function FAQAccordion({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/5 last:border-0 py-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-400' : 'text-white group-hover:text-blue-300'}`}>
          {question}
        </span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 text-base leading-relaxed pt-6 pb-2">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function CategoryBtn({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm border transition-all ${active
          ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20'
          : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'
        }`}
    >
      {icon}
      {label}
    </button>
  )
}

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState('General')
  const [openIndex, setOpenIndex] = useState(0)

  const defaultFaqs = {
    'General': [
      { q: "What is Resobrand and how can it help my business?", a: "Resobrand is an advanced AI-powered WhatsApp Business API platform. We help businesses automate sales, provide 24/7 customer support, and scale engagement through intelligent agents and seamless integrations." },
      { q: "Do I need an official WhatsApp Business account?", a: "Yes, our platform works with official WhatsApp Business API accounts. We provide a streamlined approval process through our partnership with Meta to get you up and running quickly." },
      { q: "Can I use Resobrand with my current phone number?", a: "Yes, you can register your existing business number for the API, but please note that the number must be able to receive an SMS or a voice call for verification." }
    ],
    'Security': [
      { q: "Is my customer data secure?", a: "Absolutely. All messages sent through Resobrand are end-to-end encrypted. We follow bank-grade security protocols and are fully HIPAA and GDPR compliant." },
      { q: "Who owns the data stored on the platform?", a: "You own 100% of your data. We only process it to provide our services and do not share it with third parties." }
    ],
    'Pricing': [
      { q: "Are there any setup fees?", a: "No, we do not charge any setup fees. You only pay for your subscription and any additional Meta conversation charges based on your usage." },
      { q: "Can I cancel my subscription at any time?", a: "Yes, you can cancel your monthly or yearly plan at any time through your dashboard. Your service will remain active until the end of your current billing cycle." }
    ],
    'Technical': [
      { q: "Do you offer API documentation for custom integrations?", a: "Yes, we have robust REST API documentation and SDKs for developers to build custom workflows and integrate with their existing tech stack." },
      { q: "Does Resobrand support multi-agent collaboration?", a: "Yes, our unified inbox allows multiple team members to handle the same WhatsApp channel simultaneously with assignment features and internal notes." }
    ]
  }

  const [faqs, setFaqs] = useState(defaultFaqs)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await clientServer.get('/api/faqs')
        if (response.data && response.data.success && response.data.data && response.data.data.length > 0) {
          const grouped = response.data.data.reduce((acc, faq) => {
            const cat = faq.category || 'General'
            if (!acc[cat]) {
              acc[cat] = []
            }
            acc[cat].push({ q: faq.question, a: faq.answer })
            return acc
          }, {})

          // Ensure standard categories exist
          const categories = ['General', 'Security', 'Pricing', 'Technical']
          categories.forEach(cat => {
            if (!grouped[cat]) {
              grouped[cat] = defaultFaqs[cat] || []
            }
          })

          setFaqs(grouped)
        }
      } catch (error) {
        console.log("Error fetching FAQs:", error)
        setFaqs(defaultFaqs)
      } finally {
        setLoading(false)
      }
    }

    fetchFaqs()
  }, [])

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-['Outfit'] selection:bg-blue-500/30 pt-32 pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
          >
            <HelpCircle size={14} className="text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Support Center</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Help You?</span>
          </motion.h1>
          <div className="relative max-w-2xl mx-auto group">
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-8 pr-14 text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-lg"
            />
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={24} />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <CategoryBtn icon={<MessageSquare size={18} />} label="General" active={activeCategory === 'General'} onClick={() => { setActiveCategory('General'); setOpenIndex(0); }} />
          <CategoryBtn icon={<Shield size={18} />} label="Security" active={activeCategory === 'Security'} onClick={() => { setActiveCategory('Security'); setOpenIndex(0); }} />
          <CategoryBtn icon={<CreditCard size={18} />} label="Pricing" active={activeCategory === 'Pricing'} onClick={() => { setActiveCategory('Pricing'); setOpenIndex(0); }} />
          <CategoryBtn icon={<Zap size={18} />} label="Technical" active={activeCategory === 'Technical'} onClick={() => { setActiveCategory('Technical'); setOpenIndex(0); }} />
        </div>

        {/* FAQ List */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/5 rounded-[3rem] p-8 md:p-12 mb-32"
        >
          {faqs[activeCategory].map((faq, index) => (
            <FAQAccordion
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>

        {/* Still have questions? */}
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-blue-500/20">
            <Globe size={40} />
          </div>
          <h3 className="text-3xl font-black text-white mb-4">Still have questions?</h3>
          <p className="text-slate-400 mb-10">Our team is ready to help you with any custom queries.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all">Chat with Us</button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-sm hover:bg-white/10 transition-all">Visit Help Docs</button>
          </div>
        </div>
      </div>
    </div>
  )
}
