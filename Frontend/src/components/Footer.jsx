import React from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Globe, Users } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#010411]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <MessageSquare className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Resobrand</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Empowering businesses to turn WhatsApp into their most profitable sales and support channel.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all cursor-pointer"><Globe size={14} /></div>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all cursor-pointer"><Users size={14} /></div>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all cursor-pointer"><MessageSquare size={14} /></div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link to="/solutions/automation" className="hover:text-blue-400 transition-colors">Automation</Link></li>
              <li><Link to="/solutions/agents" className="hover:text-blue-400 transition-colors">AI Agents</Link></li>
              <li><Link to="/solutions/chatbot" className="hover:text-blue-400 transition-colors">AI Chatbot</Link></li>
              <li><Link to="/solutions/integrations" className="hover:text-blue-400 transition-colors">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Industries</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link to="/industries/automotive" className="hover:text-blue-400 transition-colors">Automotive</Link></li>
              <li><Link to="/industries/ecommerce" className="hover:text-blue-400 transition-colors">E-Commerce</Link></li>
              <li><Link to="/industries/healthcare" className="hover:text-blue-400 transition-colors">Healthcare</Link></li>
              <li><Link to="/industries/saas" className="hover:text-blue-400 transition-colors">SaaS</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link to="/resources/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/resources/faqs" className="hover:text-blue-400 transition-colors">FAQs</Link></li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Case Studies</li>
              <li><Link to="/resources/consultant" className="hover:text-blue-400 transition-colors">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link to="/company/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/company/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/company/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/company/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs font-medium">
          <p>© 2026 Resobrand AI Platforms. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-slate-400 cursor-pointer">Security</span>
            <span className="hover:text-slate-400 cursor-pointer">Cookies</span>
            <span className="hover:text-slate-400 cursor-pointer">Status</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
