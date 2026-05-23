import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, ChevronDown, Send, Zap, Users, BarChart3, Globe, Car, Landmark, GraduationCap, Calendar, Cpu, HeartPulse, Home, ShoppingBag, BookOpen, HelpCircle, Info, Lock, FileText, Headset, Code, MessageCircle } from 'lucide-react'

function NavLink({ label, hasDropdown, onClick, items }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative py-4"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={onClick}
    >
      <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group text-[13px] font-semibold tracking-wide text-slate-400">
        {label}
        {hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />}
      </span>

      <AnimatePresence>
        {isOpen && hasDropdown && items && items.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className={`absolute top-full left-1/2 -translate-x-1/2 ${label === 'INDUSTRIES' ? 'w-[560px]' : 'w-[280px]'} bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50`}
          >
            <div className={`grid ${label === 'INDUSTRIES' ? 'grid-cols-2' : 'grid-cols-1'} gap-1`}>
              {items.map((item) => (
                <Link 
                  key={item.title} 
                  to={item.href || '#'} 
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group/item"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-white mb-0.5">{item.title}</h4>
                    <p className="text-[10px] text-slate-500 leading-tight group-hover/item:text-slate-400 transition-colors">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const solutions = [
    { title: 'Automation', desc: 'Scale workflows with smart triggers', icon: <Zap size={16} />, href: '/solutions/automation' },
    { title: 'AI Agents', desc: 'Autonomous agents for complex tasks', icon: <Users size={16} />, href: '/solutions/agents' },
    { title: 'AI Chatbot', desc: '24/7 intelligent customer support', icon: <MessageSquare size={16} />, href: '/solutions/chatbot' },
    { title: 'Deep Analytics', desc: 'Real-time insights and reporting', icon: <BarChart3 size={16} />, href: '/solutions/analytics' },
    { title: 'Integrations', desc: 'Connect with your favorite tools', icon: <Globe size={16} />, href: '/solutions/integrations' },
  ]

  const industries = [
    { title: 'Automotive', desc: 'Drive sales & service on WhatsApp', icon: <Car size={16} />, href: '/industries/automotive' },
    { title: 'Banking & Fintech', desc: 'Secure & instant financial updates', icon: <Landmark size={16} />, href: '/industries/banking-fintech' },
    { title: 'Education', desc: 'Engage students & simplify admissions', icon: <GraduationCap size={16} />, href: '/industries/education' },
    { title: 'Events', desc: 'Automate ticketing & attendee support', icon: <Calendar size={16} />, href: '/industries/events' },
    { title: 'SaaS', desc: 'Onboard users & drive product adoption', icon: <Cpu size={16} />, href: '/industries/saas' },
    { title: 'Healthcare', icon: <HeartPulse size={16} />, desc: 'Patient support & appointment reminders', href: '/industries/healthcare' },
    { title: 'Real Estate', icon: <Home size={16} />, desc: 'Property alerts & lead qualification', href: '/industries/real-estate' },
    { title: 'E-Commerce', icon: <ShoppingBag size={16} />, desc: 'Cart recovery & order tracking', href: '/industries/ecommerce' },
  ]

  const resources = [
    { title: 'Blog', desc: 'Latest news, tips & strategy', icon: <BookOpen size={16} />, href: '/resources/blog' },
    { title: 'FAQs', desc: 'Quick answers to common questions', icon: <HelpCircle size={16} />, href: '/resources/faqs' },
    { title: 'Consultant', desc: 'Get expert advice for your project', icon: <Headset size={16} />, href: '/resources/consultant' },
  ]

  const company = [
    { title: 'About Us', desc: 'Our mission, team & values', icon: <Info size={16} />, href: '/company/about' },
    { title: 'Privacy Policy', desc: 'How we handle your data', icon: <Lock size={16} />, href: '/company/privacy' },
    { title: 'Terms of Service', desc: 'Rules & legal agreements', icon: <FileText size={16} />, href: '/company/terms' },
  ]

  const tools = [
    { title: 'Generate Code', desc: 'Create instant chat links & snippets', icon: <Code size={16} />, href: '/tools/code-generator' },
    { title: 'Generate Widget', desc: 'Custom floating chat button for web', icon: <MessageCircle size={16} />, href: '/tools/widget-generator' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Resobrand</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6 text-[13px] font-semibold tracking-wide text-slate-400">
            <NavLink label="SOLUTIONS" hasDropdown items={solutions} />
            <NavLink label="INDUSTRIES" hasDropdown items={industries} />
            <NavLink label="RESOURCES" hasDropdown items={resources} />
            <NavLink label="COMPANY" hasDropdown items={company} />
            <NavLink label="FREE TOOLS 🎁" hasDropdown items={tools} />
            <span 
              onClick={() => {
                if (window.location.pathname === '/') {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.location.href = '/#pricing'
                }
              }}
              className="hover:text-white transition-colors cursor-pointer text-[13px] font-semibold tracking-wide text-slate-400"
            >
              PRICING
            </span>
            <Link to="/company/contact" className="hover:text-white transition-colors cursor-pointer text-[13px] font-semibold tracking-wide text-slate-400">CONTACT US</Link>
          </div>
        </div>

        <Link to="/resources/consultant">
          <button className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-sm transition-all shadow-lg shadow-blue-500/20 active:scale-95">
            FREE CONSULTANT <Send size={14} className="rotate-[-45deg]" />
          </button>
        </Link>
      </div>
    </nav>
  )
}
