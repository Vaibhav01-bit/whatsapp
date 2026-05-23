import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  MessageSquare, CheckCircle2, ChevronDown, Rocket, Send,
  Headset, Calendar, UserCheck, Search, Users, BarChart3,
  Shield, Zap, ShoppingBag, Landmark, Plane, HeartPulse,
  Gamepad2, Globe, Cloud, Car, GraduationCap, Cpu, Home as HomeIcon,
  BookOpen, HelpCircle, Info, Lock, FileText, Star, Quote
} from 'lucide-react'
import Layout from '../components/Layout'

// --- Components ---

function TestimonialCard({ name, role, title, quote, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <Quote size={80} className="text-white" />
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xl font-bold text-white shadow-lg">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-white font-bold text-lg leading-none mb-1">{name}</h4>
          <p className="text-slate-500 text-sm font-medium">{role}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
        ))}
      </div>

      <h5 className="text-white font-black text-xl mb-4 group-hover:text-blue-400 transition-colors">{title}</h5>
      <p className="text-slate-400 text-sm leading-relaxed italic">"{quote}"</p>
    </motion.div>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <span className="text-white font-bold">{question}</span>
        <ChevronDown className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={20} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-6 text-slate-400 text-sm leading-relaxed"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FeaturedCard({ name, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all cursor-pointer group"
    >
      <div className="w-12 h-12 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 scale-110">
        {icon}
      </div>
      <span className="text-xs font-bold text-slate-500 group-hover:text-white uppercase tracking-widest">{name}</span>
    </motion.div>
  )
}

function FeatureItem({ title, desc }) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-3">
      <CheckCircle2 className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
      <div><span className="font-bold text-white mr-2">{title}:</span><span className="text-slate-400">{desc}</span></div>
    </motion.div>
  )
}

function FloatingLabel({ icon, label, top, bottom, left, right }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ top, bottom, left, right }}
      className="absolute z-20 px-4 py-2 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2 shadow-2xl whitespace-nowrap"
    >
      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
      {icon} <span className="text-xs font-bold text-white">{label}</span>
    </motion.div>
  )
}

function StatCard({ icon, value, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col items-start gap-4 hover:bg-white/10 transition-colors"
    >
      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">{icon}</div>
      <div><h3 className="text-3xl font-black text-white mb-1">{value}</h3><p className="text-slate-400 text-sm font-medium">{label}</p></div>
    </motion.div>
  )
}

function ModernFeature({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-start gap-4 group"
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

function SolutionCard({ icon, title, desc, active }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`p-6 rounded-2xl border transition-all duration-300 ${active ? 'bg-blue-600/10 border-blue-500/50 shadow-lg shadow-blue-500/10' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">{icon}</div>
        <div>
          <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
          <p className="text-sm text-slate-400">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

function IntegrationLine({ x1, y1, x2, y2 }) {
  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke="rgba(59, 130, 246, 0.5)"
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  )
}

function IntegrationNode({ icon, label, top, bottom, left, right, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring" }}
      style={{ top, bottom, left, right }}
      className="absolute z-20 group"
    >
      <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-blue-500/50 transition-all shadow-xl">
        {icon}
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold text-slate-500 group-hover:text-blue-400 tracking-widest uppercase">
        {label}
      </div>
    </motion.div>
  )
}

function ProductCard({ title, price, active }) {
  return (
    <div className={`w-[200px] flex-shrink-0 bg-[#202c33] rounded-2xl overflow-hidden border ${active ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' : 'border-white/5'}`}>
      <div className="aspect-square bg-slate-800 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-slate-500">
          <ShoppingBag size={40} />
        </div>
      </div>
      <div className="p-3">
        <h5 className="text-[10px] font-bold text-white mb-2 line-clamp-1">{title}</h5>
        <div className="space-y-1.5">
          <button className="w-full py-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-[9px] font-bold border border-blue-500/20">{price}</button>
          <button className="w-full py-1.5 bg-white/5 text-slate-400 rounded-lg text-[9px] font-bold">Show More</button>
        </div>
      </div>
    </div>
  )
}

function PricingCard({ title, description, price, duration, features, buttonText, highlighted, badge, savings }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-8 rounded-[2.5rem] flex flex-col h-full transition-all duration-500 ${
        highlighted 
          ? 'bg-blue-600/10 border-2 border-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.1)]' 
          : 'bg-white/5 border border-white/10 hover:bg-white/10'
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-blue-600 rounded-full text-xs font-black text-white whitespace-nowrap shadow-xl">
          {badge}
        </div>
      )}

      <div className="mb-8">
        <h4 className="text-2xl font-black text-white mb-2">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-white">{price}</span>
          {duration && <span className="text-slate-500 font-bold">/{duration}</span>}
        </div>
        {savings && (
          <div className="mt-2 text-[10px] font-black text-green-400 uppercase tracking-wider">
            {savings}
          </div>
        )}
      </div>

      <div className="flex-1 mb-8">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Includes</p>
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
              <span className="text-slate-300 text-sm font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className={`w-full py-4 rounded-2xl font-black text-sm transition-all active:scale-95 ${
        highlighted 
          ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/25 hover:bg-blue-500' 
          : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
      }`}>
        {buttonText}
      </button>
    </motion.div>
  )
}

function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('Yearly')

  return (
    <section id="pricing" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Official Meta Partner • No Setup Fee</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
        >
          Automate <span className="text-green-500">WhatsApp Sales</span> & Support <br />
          Without Meta Complexity
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }} 
          className="text-lg text-slate-400 mb-12"
        >
          Start free. Upgrade when you're ready. No hidden fees.
        </motion.p>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="p-1.5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-1">
            <button 
              onClick={() => setBillingCycle('Quarterly')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${billingCycle === 'Quarterly' ? 'bg-white text-slate-900 shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Quarterly
            </button>
            <button 
              onClick={() => setBillingCycle('Yearly')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${billingCycle === 'Yearly' ? 'bg-white text-slate-900 shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Yearly
              <span className="px-2 py-0.5 bg-green-500 text-white text-[10px] font-black rounded-full uppercase">10% OFF</span>
            </button>
          </div>
        </div>

        {/* Savings Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 mb-16 inline-flex items-center gap-3"
        >
          <Zap size={18} className="text-green-500" />
          <p className="text-green-400 text-sm font-bold">
            Fast-growing teams save an average of 15 hours/week and increase response speed by 70%
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <PricingCard 
            title="Trial"
            description="Try the platform risk-free for 14 days."
            price="₹0"
            duration="14 days"
            buttonText="Start 14-day Free Trial"
            features={[
              "Official WhatsApp API Access",
              "Unlimited Contacts",
              "Bulk Broadcasts (1,000/day)",
              "Basic Chat Automation",
              "Standard Support"
            ]}
          />
          <PricingCard 
            title="Growth"
            badge="Chosen by 80% of customers"
            description="For scaling teams that need advanced automation."
            price={billingCycle === 'Yearly' ? '₹999' : '₹1427'}
            duration="mo"
            savings={billingCycle === 'Yearly' ? 'SAVE ₹5,136/YEAR' : null}
            highlighted
            buttonText="Get Started"
            features={[
              "All Trial features",
              "Priority API Approval",
              "AI Chatbot Integration",
              "Advanced Analytics Dashboard",
              "Custom Response Templates",
              "Priority Support"
            ]}
          />
          <PricingCard 
            title="Pro / Enterprise"
            description="Custom solutions for high-volume teams."
            price="Custom"
            buttonText="Contact Sales"
            features={[
              "Unlimited Everything",
              "Dedicated Account Manager",
              "Custom Workflow Automation",
              "On-premise Options",
              "SLA Guaranteed Uptime",
              "24/7 Phone Support"
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function PartnerLogo({ name, icon }) {
  return (
    <div className="flex items-center gap-3 group/logo cursor-pointer">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 group-hover/logo:text-blue-400 group-hover/logo:bg-blue-500/10 transition-all duration-300 shadow-lg">
        {icon}
      </div>
      <span className="text-xl font-bold text-slate-500 group-hover/logo:text-white transition-colors duration-300 tracking-tight">
        {name}
      </span>
    </div>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('Travel')
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', content: "Hi! Welcome to Resobrand. How can we help you today?" }
  ])
  const [chatInput, setChatInput] = useState('')
  const [chatTyping, setChatTyping] = useState(false)
  const chatEndRef = useRef(null)

  useEffect(() => {
    if (isChatOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chatMessages, chatTyping, isChatOpen])

  const handleSendFloatingMsg = () => {
    if (!chatInput.trim()) return

    const userText = chatInput.trim()
    setChatMessages(prev => [...prev, { type: 'user', content: userText }])
    setChatInput('')
    setChatTyping(true)

    setTimeout(() => {
      let botText = "Thank you for reaching out! Our team is on standby. To get started with a custom plan, would you like to schedule a free 1-on-1 advisor session?"
      
      const lower = userText.toLowerCase()
      if (lower.includes('price') || lower.includes('pricing') || lower.includes('cost') || lower.includes('plan')) {
        botText = "Our packages are highly flexible! The Growth plan is just ₹999/month (billed yearly). You can view details in our pricing grid right here."
      } else if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) {
        botText = "Hello there! I'm the Resobrand floating assistant. How's your day going?"
      } else if (lower.includes('demo') || lower.includes('trial') || lower.includes('free')) {
        botText = "You can test our API tools or book a free consultation! Visit our Consultant page (/resources/consultant)."
      }

      setChatMessages(prev => [...prev, { type: 'bot', content: botText }])
      setChatTyping(false)
    }, 1000)
  }

  const industries = [
    { name: 'Retail', icon: <ShoppingBag size={18} /> },
    { name: 'Insurance', icon: <Landmark size={18} /> },
    { name: 'Travel', icon: <Plane size={18} /> },
    { name: 'Healthcare', icon: <HeartPulse size={18} /> },
    { name: 'Gaming', icon: <Gamepad2 size={18} /> },
  ]

  return (
    <Layout>

        {/* Hero Section */}
        <main className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Advanced WhatsApp Business API Platform</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 mb-8">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-3 brightness-200" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Meta Business Partner</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-white">
                Turn WhatsApp Into Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">#1 Sales Channel 🚀</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
                Supercharge your business with Resobrand's powered WhatsApp automation.
              </motion.p>
              <div className="space-y-4 mb-12">
                <FeatureItem title="Win More Deals" desc="Turn WhatsApp chats into paying customers" />
                <FeatureItem title="Respond 24/7" desc="Never miss a lead with smart automation" />
                <FeatureItem title="Delight Customers" desc="Support and engage directly on WhatsApp" />
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4">
                <Link to="/resources/consultant">
                  <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-500/25 active:scale-95 flex items-center gap-2">
                    Let's Generate Sales <Send size={20} className="rotate-[-45deg]" />
                  </button>
                </Link>
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all active:scale-95 flex items-center gap-2"
                >
                  View Pricing <Send size={20} className="rotate-[-45deg]" />
                </button>
              </motion.div>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="relative w-full aspect-square max-w-[500px]">
                <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[100px] scale-75 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] h-[80%] border-2 border-dashed border-blue-500/20 rounded-full animate-[spin_60s_linear_infinite]" />
                  <div className="absolute w-[60%] h-[60%] bg-gradient-to-b from-blue-600 to-blue-800 rounded-full shadow-[0_0_100px_rgba(37,99,235,0.4)] flex items-center justify-center overflow-hidden">
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="relative z-10">
                      <Rocket size={160} className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] rotate-[-45deg]" />
                    </motion.div>
                  </div>
                </div>
                <FloatingLabel icon={<Send size={14} className="text-orange-400" />} label="Whatsapp Campaign" top="5%" right="-5%" />
                <FloatingLabel icon={<Users size={14} className="text-purple-400" />} label="Assist & Upsell" top="35%" right="-15%" />
                <FloatingLabel icon={<Calendar size={14} className="text-red-400" />} label="Route & Schedule" bottom="25%" right="-5%" />
                <FloatingLabel icon={<Headset size={14} className="text-blue-400" />} label="24x7 Handoff" bottom="5%" left="30%" />
                <FloatingLabel icon={<Search size={14} className="text-cyan-400" />} label="Engage Prospect" bottom="30%" left="-15%" />
                <FloatingLabel icon={<UserCheck size={14} className="text-green-400" />} label="Qualify Lead" top="30%" left="-10%" />
              </div>
            </div>
          </div>
        </main>

        {/* Unified Inbox Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-white/10 p-12 md:p-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] -mr-48 -mt-48" />
              <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                  <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                    Omni channel <br /><span className="text-blue-400">Unified Inbox</span>
                  </motion.h2>
                  <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
                    Manage all customer conversations from WhatsApp and other supported channels in one place. Streamline interactions, improve response speed, and deliver a consistent customer experience everywhere.
                  </motion.p>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-4 bg-white text-blue-600 rounded-xl font-black text-lg shadow-xl shadow-white/10">
                    Get Demo
                  </motion.button>
                </div>
                <div className="relative">
                  <div className="relative aspect-video bg-slate-900/50 rounded-2xl border border-white/5 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <div className="pt-12 px-6 flex gap-4 h-full">
                      <div className="w-1/3 space-y-3">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="h-12 bg-white/5 rounded-lg flex items-center px-3 gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-800" />
                            <div className="flex-1 space-y-1"><div className="h-2 w-12 bg-white/10 rounded" /><div className="h-1.5 w-8 bg-white/5 rounded" /></div>
                          </div>
                        ))}
                      </div>
                      <div className="flex-1 bg-white/5 rounded-t-xl p-4 border-x border-t border-white/5">
                        <div className="flex justify-start mb-4"><div className="bg-blue-600/20 p-3 rounded-2xl rounded-tl-none max-w-[80%]"><div className="h-2 w-24 bg-blue-400/30 rounded mb-2" /><div className="h-2 w-16 bg-blue-400/20 rounded" /></div></div>
                        <div className="flex justify-end"><div className="bg-white/10 p-3 rounded-2xl rounded-tr-none max-w-[80%]"><div className="h-2 w-32 bg-white/20 rounded mb-2" /><div className="h-2 w-20 bg-white/10 rounded" /></div></div>
                      </div>
                    </div>
                  </div>
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-xl shadow-[#25D366]/20 z-20"><MessageSquare className="text-white fill-white" /></motion.div>
                  <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/20 z-20"><div className="text-white font-bold italic">IG</div></motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Engage Directly Section */}
        <section className="py-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                  Engage Your <span className="text-blue-400">Customers Directly</span>
                </motion.h2>
                <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="text-lg text-slate-400 mb-12 leading-relaxed max-w-lg">
                  Unlock the power of direct messaging. Our platform helps you connect with your audience, promote your products, and drive sales seamlessly.
                </motion.p>
                <div className="space-y-10">
                  <ModernFeature icon={<Send className="text-blue-400" />} title="Instant WhatsApp Media Sharing" desc="Easily send images, videos, and promotional materials right in the chat." />
                  <ModernFeature icon={<ShoppingBag className="text-purple-400" />} title="Rich WhatsApp Shopping Experience" desc="Tailor your communication to create a unique and engaging customer experience." />
                  <ModernFeature icon={<Zap className="text-orange-400" />} title="Custom Call-to-Actions" desc="Add buttons like 'Buy Now' or 'Visit Store' to guide users and boost conversions." />
                  <ModernFeature icon={<Shield className="text-green-400" />} title="Trusted Brand Identity" desc="Display your brand name and business account details to build credibility." />
                </div>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.8, rotate: 5 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} className="relative flex justify-center lg:justify-end">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 blur-[100px] rounded-full" />
                <div className="relative w-[320px] h-[640px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-3xl z-30" />
                  <div className="h-full flex flex-col bg-[#0b141a]">
                    <div className="bg-[#202c33] p-6 pt-10 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">FB</div>
                      <div>
                        <div className="flex items-center gap-1"><h4 className="text-sm font-bold text-white">Fashion Brand</h4><CheckCircle2 size={12} className="text-blue-400 fill-blue-400/20" /></div>
                        <span className="text-[10px] text-slate-400 italic">Business Account</span>
                      </div>
                    </div>
                    <div className="flex-1 p-4 space-y-4">
                      <div className="bg-[#202c33] rounded-2xl overflow-hidden border border-white/5 shadow-lg max-w-[90%]">
                        <div className="aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900 relative flex items-center justify-center overflow-hidden">
                          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=500')] bg-cover bg-center opacity-60" />
                          <div className="relative z-10 text-center p-6"><span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-2 block">New Arrival</span><h5 className="text-2xl font-black text-white leading-none">FASHION<br />SALE</h5></div>
                        </div>
                        <div className="p-4 bg-white/5">
                          <p className="text-[11px] text-slate-300 leading-relaxed mb-4">Get this stunning collection at 30% OFF. Hurry - offer ends soon!</p>
                          <div className="space-y-2"><button className="w-full py-2 bg-blue-600 rounded-lg text-white text-[11px] font-bold">Buy Now</button><button className="w-full py-2 bg-white/5 rounded-lg text-white text-[11px] font-bold border border-white/10">Shop More</button></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WhatsApp Carousels Section */}
        <section className="py-32 px-6 overflow-hidden bg-slate-950/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div initial={{ opacity: 0, scale: 0.8, x: -50 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} className="relative flex justify-center lg:justify-start order-2 lg:order-1">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/10 blur-[100px] rounded-full" />
                <div className="relative w-[320px] h-[640px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-3xl z-30" />
                  <div className="h-full flex flex-col bg-[#0b141a]">
                    <div className="bg-[#202c33] p-6 pt-10 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">PC</div>
                      <div>
                        <div className="flex items-center gap-1"><h4 className="text-sm font-bold text-white">MyPet Care</h4><CheckCircle2 size={12} className="text-blue-400 fill-blue-400/20" /></div>
                        <span className="text-[10px] text-slate-400 italic">Business Account</span>
                      </div>
                    </div>
                    <div className="flex-1 p-4 space-y-6 overflow-hidden">
                      <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none max-w-[85%] text-[11px] text-white leading-relaxed">Enjoy 15% OFF on all personal care products with code CARE15. Limited time offer — want our catalog?</div>
                      <div className="relative -mx-4">
                        <motion.div animate={{ x: [0, -160, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="flex gap-3 px-4">
                          <ProductCard title="Waterproof leash" price="Buy Now" />
                          <ProductCard title="Softening Wax" price="Buy Now" active />
                          <ProductCard title="Proline Food" price="Buy Now" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="order-1 lg:order-2">
                <motion.h2 initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Showcase Products with <br /><span className="text-purple-400">WhatsApp Carousels</span></motion.h2>
                <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-slate-400 mb-12 leading-relaxed max-w-lg">Turn WhatsApp into your storefront. Display multiple products or offers in one interactive message and give your customers a seamless shopping experience.</motion.p>
                <div className="space-y-10">
                  <ModernFeature icon={<BarChart3 className="text-purple-400" />} title="Multiple Product Cards" desc="Showcase up to 10 products in one message to give customers more options at a glance." />
                  <ModernFeature icon={<Zap className="text-blue-400" />} title="Clickable Call-to-Actions" desc="Add buttons like 'Buy Now', 'Visit Store' or 'Learn More' for instant engagement." />
                  <ModernFeature icon={<ShoppingBag className="text-orange-400" />} title="Rich Visual Experience" desc="Use product images, titles, and short descriptions to capture attention instantly." />
                  <ModernFeature icon={<CheckCircle2 className="text-green-400" />} title="Higher Conversions" desc="Give your customers a smooth way to browse, select, and purchase — all inside WhatsApp." />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Integrations Section */}
        <section className="py-32 px-6 bg-slate-950/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Shield size={14} className="text-blue-400" /><span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Ecosystem</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-black text-white mb-6">Solutions That Drive <span className="text-blue-400">Real Impact</span></motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-slate-400 max-w-3xl mx-auto">Harness the power of our global intelligence mesh and autonomous support core to scale your customer experience effortlessly.</motion.p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <SolutionCard icon={<Globe size={20} className="text-purple-400" />} title="Global Intelligence Mesh" desc="Decentralized AI processing for sub-second responses worldwide." />
                <SolutionCard icon={<UserCheck size={20} className="text-blue-400" />} title="Predictive Engagement" desc="Anticipate customer needs before they even type a message." />
                <SolutionCard icon={<Zap size={20} className="text-orange-400" />} title="Hyper-Dynamic Campaigns" desc="Context-aware marketing that converts 3x better than static ads." />
                <SolutionCard icon={<MessageSquare size={20} className="text-green-400" />} title="Autonomous Support Core" desc="Independent agents that handle complex end-to-end workflows." active />
              </div>
              <div className="relative aspect-square flex items-center justify-center">
                <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }} className="w-32 h-32 bg-blue-600 rounded-3xl flex items-center justify-center z-20 shadow-[0_0_80px_rgba(37,99,235,0.4)] border border-white/20">
                  <div className="text-white font-black text-xl tracking-tighter text-center leading-none">Reso<br />brand</div>
                </motion.div>
                <svg className="absolute inset-0 w-full h-full opacity-30">
                  <IntegrationLine x1="50%" y1="50%" x2="20%" y2="20%" />
                  <IntegrationLine x1="50%" y1="50%" x2="80%" y2="20%" />
                  <IntegrationLine x1="50%" y1="50%" x2="15%" y2="50%" />
                  <IntegrationLine x1="50%" y1="50%" x2="85%" y2="55%" />
                  <IntegrationLine x1="50%" y1="50%" x2="30%" y2="85%" />
                  <IntegrationLine x1="50%" y1="50%" x2="70%" y2="80%" />
                </svg>
                <IntegrationNode icon={<Landmark size={20} />} label="Fintech Hub" top="15%" left="15%" delay={0} />
                <IntegrationNode icon={<ShoppingBag size={20} />} label="Shopify" top="15%" right="15%" delay={0.5} />
                <IntegrationNode icon={<Users size={20} />} label="Legacy CRM" left="5%" top="45%" delay={1} />
                <IntegrationNode icon={<Headset size={20} />} label="Social Fabric" right="5%" top="50%" delay={1.5} />
                <IntegrationNode icon={<Cloud size={20} />} label="Cloud Stack" bottom="10%" left="25%" delay={2} />
                <IntegrationNode icon={<Shield size={20} />} label="Marketplace" bottom="15%" right="25%" delay={2.5} />
              </div>
            </div>
          </div>
        </section>

        {/* Clients Marquee Section */}
        <section className="py-24 px-6 bg-slate-950/20 border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Users size={14} className="text-blue-400" /><span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Our Clients</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-black text-white mb-4">Brands Who <span className="text-blue-400">Trust Us</span></motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-sm text-slate-400 max-w-xl mx-auto">Beyond messaging, WhatsApp empowers businesses to connect deeply with customers, build trust, and accelerate growth.</motion.p>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />

              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-24 whitespace-nowrap"
              >
                {[1, 2].map((group) => (
                  <React.Fragment key={group}>
                    <PartnerLogo name="Shopify" icon={<ShoppingBag size={24} />} />
                    <PartnerLogo name="Stripe" icon={<Landmark size={24} />} />
                    <PartnerLogo name="Amazon" icon={<Globe size={24} />} />
                    <PartnerLogo name="Slack" icon={<MessageSquare size={24} />} />
                    <PartnerLogo name="Meta" icon={<Zap size={24} />} />
                    <PartnerLogo name="Google" icon={<Search size={24} />} />
                    <PartnerLogo name="Vite" icon={<Rocket size={24} />} />
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Users size={14} className="text-blue-400" /><span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Customer Reviews</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-black text-white mb-6">Trusted Voices Behind <span className="text-slate-500">Our SaaS Platform</span></motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-slate-400 max-w-2xl mx-auto">Our WhatsApp Business API helps businesses scale with automation, real-time support, and personalized engagement—building trust and driving growth.</motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                name="Sarah L."
                role="CMO — SaaS Startup"
                title="Transforming SaaS Marketing"
                quote="Resobrand completely transformed our SaaS marketing. Within 3 months, our organic traffic doubled, and ad ROI improved by 35%. The AI-driven insights helped us scale content and lower customer acquisition costs dramatically."
                delay={0}
              />
              <TestimonialCard
                name="Dr. James K."
                role="Marketing Director — Healthcare"
                title="Boosting Healthcare ROI"
                quote="As a healthcare provider, standing out online was tough. Resobrand identified hidden keyword opportunities and optimized our campaigns. We saw a 60% boost in ad ROI and higher rankings for competitive telehealth terms."
                delay={0.1}
              />
              <TestimonialCard
                name="Emily R."
                role="Head of Growth — E-commerce"
                title="Cutting E-commerce Ad Costs"
                quote="Running e-commerce ads used to drain our budget. With Resobrand, we cut ad costs by 40% while boosting organic visibility. Our product pages now rank higher, and conversions have never looked better."
                delay={0.2}
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <BarChart3 size={14} className="text-blue-400" /><span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Stats</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-black text-white mb-6">Our Success, <span className="text-slate-500">in Numbers</span></motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-slate-400 max-w-2xl mx-auto">Clear, trustworthy metrics that reflect scale, reliability, and customer love.</motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StatCard icon={<MessageSquare />} value="14.2M+" label="WhatsApp messages sent" />
              <StatCard icon={<Users />} value="5M+" label="Active customers" />
              <StatCard icon={<BarChart3 />} value="1.0M+" label="Qualified leads processed" />
              <StatCard icon={<Shield />} value="99.98%" label="Infrastructure uptime" />
              <StatCard icon={<BarChart3 />} value="68 NPS" label="Net promoter score" />
              <StatCard icon={<Zap />} value="420 ms" label="Avg API response" />
            </div>
          </div>
        </section>

        {/* AI Action Section */}
        <section className="py-32 px-6 bg-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Zap size={14} className="text-blue-400" /><span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Live AI Chat Demonstration</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-black text-white mb-6">See Our AI in Action</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-lg text-slate-400 max-w-3xl mx-auto">Select an industry to see a real-time simulation of how our agents interpret, act, and report on live conversations.</motion.p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {industries.map((industry) => (
                <button key={industry.name} onClick={() => setActiveTab(industry.name)} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === industry.name ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}>
                  {industry.icon}{industry.name}
                </button>
              ))}
            </div>
            <div className="grid lg:grid-cols-3 gap-8 h-[500px]">
              <div className="bg-[#0b141a] rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex flex-col">
                <div className="bg-[#202c33] p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold"><Plane size={20} /></div>
                  <div><h4 className="text-sm font-bold text-white leading-none">Travel AI Assistant</h4><span className="text-[10px] text-green-400">online</span></div>
                </div>
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none max-w-[85%] text-xs text-white leading-relaxed">Certainly. Could you please provide your booking reference and the new desired travel date?</div>
                  <div className="bg-[#005c4b] p-3 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-xs text-white leading-relaxed shadow-lg">The reference is XYZ789 and I'd like to travel on September 15th.</div>
                </div>
                <div className="bg-[#202c33] p-4 flex items-center gap-3">
                  <div className="flex-1 bg-[#2a3942] h-10 rounded-full px-4 text-xs text-slate-400 flex items-center">Type a message...</div>
                  <div className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center text-white"><Send size={18} /></div>
                </div>
              </div>
              <div className="lg:col-span-1 bg-slate-900 rounded-3xl border border-white/5 shadow-2xl flex flex-col">
                <div className="p-4 border-b border-white/5 flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">Live Conversation Panel</h4>
                  <div className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500" /><div className="w-2 h-2 rounded-full bg-yellow-500" /><div className="w-2 h-2 rounded-full bg-green-500" /></div>
                </div>
                <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">U</div>
                    <div className="bg-blue-600/10 border border-blue-600/20 p-4 rounded-2xl flex-1"><p className="text-xs text-slate-300 leading-relaxed">The reference is XYZ789 and I'd like to travel on September 15th.</p></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">A</div>
                    <div className="bg-white/5 p-4 rounded-2xl flex-1"><p className="text-xs text-slate-400 leading-relaxed">Thank you. Checking availability... Please hold.</p></div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-slate-900 p-6 rounded-3xl border border-white/5 shadow-xl flex flex-col justify-center items-center h-1/2"><span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Intent Identified</span><h3 className="text-2xl font-black text-blue-400">Task Complete</h3></div>
                <div className="bg-slate-900 p-6 rounded-3xl border border-white/5 shadow-xl flex flex-col justify-center items-center h-1/2"><span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Entities Detected</span><div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 font-bold text-sm">Booking Ref: XYZ789</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured In Section */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Shield size={14} className="text-blue-400" /><span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Trusted By</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-black text-white mb-4">Featured <span className="text-slate-500">In</span></motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-sm text-slate-400 max-w-xl mx-auto">We have been proudly featured on renowned platforms across the tech ecosystem.</motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <FeaturedCard name="Product Hunt" icon={<Zap className="text-orange-500" />} />
              <FeaturedCard name="G2" icon={<BarChart3 className="text-red-500" />} />
              <FeaturedCard name="Reddit" icon={<MessageSquare className="text-orange-600" />} />
              <FeaturedCard name="Medium" icon={<Globe className="text-white" />} />
              <FeaturedCard name="DEV" icon={<Cpu className="text-white" />} />
            </div>
          </div>
        </section>

        <PricingSection />

        {/* FAQs Section */}
        <section className="py-32 px-6 bg-[#03081a]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <HelpCircle size={14} className="text-blue-400" /><span className="text-xs font-bold text-blue-400 uppercase tracking-widest">FAQs</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-black text-white mb-6">Frequently Asked <span className="text-blue-400">Questions</span></motion.h2>
            </div>

            <div className="space-y-4">
              <FAQItem
                question="What is the Resobrand WhatsApp Business API?"
                answer="It's a powerful tool that allows businesses to automate customer interactions, send bulk notifications, and manage support directly through WhatsApp's official API, ensuring compliance and high deliverability."
              />
              <FAQItem
                question="How do I get started with the free consultant?"
                answer="Simply click the 'FREE CONSULTANT' button in our navigation bar. Our experts will analyze your business needs and design a custom WhatsApp automation strategy for you."
              />
              <FAQItem
                question="Can I integrate Resobrand with my current CRM?"
                answer="Yes! Resobrand supports seamless integration with Shopify, Salesforce, HubSpot, and many other leading CRM platforms through our robust API and native connectors."
              />
              <FAQItem
                question="Is my data secure with Resobrand?"
                answer="Security is our top priority. We use end-to-end encryption for all messages and follow strict GDPR compliance to ensure your customer data remains safe and private."
              />
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-12 md:p-20 shadow-[0_0_80px_rgba(37,99,235,0.25)] border border-white/10"
            >
              {/* Background Accents */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] -mr-48 -mt-48" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 blur-[80px] -ml-32 -mb-32" />

              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative mb-12 lg:mb-0"
                  >
                    <div className="w-48 h-48 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-center relative shadow-2xl">
                      <Send size={80} className="text-white rotate-[-45deg] drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]" />
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-black text-xl border-4 border-blue-600 shadow-xl">1</div>
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10" />
                    <div className="absolute -top-6 -left-6 w-8 h-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10" />
                  </motion.div>
                </div>

                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Join Our <br />Newsletter</h2>
                  <p className="text-blue-100 text-lg mb-10 leading-relaxed opacity-80">
                    Be the first to know about new features, updates, and exclusive offers. Enter your email and subscribe today!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full h-16 bg-white/10 border border-white/20 rounded-2xl px-6 text-white placeholder:text-blue-200 outline-none focus:ring-2 focus:ring-white/30 transition-all font-medium"
                      />
                    </div>
                    <button className="h-16 px-10 bg-white text-blue-700 rounded-2xl font-black text-lg shadow-xl hover:scale-105 active:scale-95 transition-all">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer / Corner Bubble */}
        <div className="fixed bottom-32 left-8 z-40">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-6 rounded-2xl rounded-bl-none shadow-2xl max-w-xs relative border border-slate-200">
            <p className="text-slate-800 text-sm leading-relaxed font-medium">Welcome to our site, if you need help simply reply to this message, we are online and ready to help.</p>
            <div className="absolute -bottom-2 left-0 w-4 h-4 bg-white rotate-45" />
          </motion.div>
        </div>

        {/* Floating Chat Widget Popup */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-28 right-8 w-80 h-96 bg-[#0b141a] rounded-[2rem] border border-white/10 shadow-2xl z-50 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#202c33] p-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">R</div>
                  <div>
                    <h4 className="text-[12px] font-bold text-white leading-none">Resobrand Support</h4>
                    <span className="text-[9px] text-green-400 font-bold">Online</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="text-slate-400 hover:text-white text-xs font-bold px-2 py-1 hover:bg-white/5 rounded-lg transition-all"
                >
                  ✕
                </button>
              </div>

              {/* Message scroll container */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-none">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}>
                    <div className={`p-3 rounded-xl text-xs max-w-[85%] leading-relaxed ${msg.type === 'bot' ? 'bg-blue-600/20 border border-blue-500/20 rounded-tl-none text-blue-100' : 'bg-white/10 border border-white/10 rounded-tr-none text-slate-200'}`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {chatTyping && (
                  <div className="flex justify-start">
                    <div className="p-3 bg-blue-600/20 border border-blue-500/20 rounded-xl rounded-tl-none text-blue-300 text-[10px] italic flex items-center gap-1.5">
                      <div className="flex gap-0.5">
                        <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></span>
                        <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-75"></span>
                        <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-150"></span>
                      </div>
                      typing...
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Input section */}
              <div className="p-3 border-t border-white/5 bg-[#111b21] flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleSendFloatingMsg(); }}
                  className="flex-1 bg-[#2a3942] rounded-full h-9 px-4 text-white text-xs outline-none border border-white/5 focus:border-blue-500/50 transition-all placeholder-slate-500"
                />
                <button
                  onClick={handleSendFloatingMsg}
                  className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white shadow hover:bg-blue-500 active:scale-95 transition-all shrink-0"
                >
                  <Send size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Toggle Button */}
        <div 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 cursor-pointer hover:scale-110 active:scale-95 transition-all z-50 group"
        >
          <MessageSquare className="text-white fill-white" />
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 border-4 border-[#020617] rounded-full flex items-center justify-center text-[10px] font-bold text-white">1</span>
        </div>
    </Layout>
  )
}
