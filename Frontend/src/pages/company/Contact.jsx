import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Hash, Link2, MessageCircle } from 'lucide-react'
import { clientServer } from '../../config/api'

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, title: "Email Us", detail: "hello@resobrand.com", desc: "We'll respond within 24 hours." },
    { icon: <Phone className="w-6 h-6" />, title: "Call Us", detail: "+1 (555) 123-4567", desc: "Mon-Fri from 8am to 5pm." },
    { icon: <MapPin className="w-6 h-6" />, title: "Visit Us", detail: "100 Innovation Way", desc: "San Francisco, CA 94105" }
  ]

  const socialLinks = [
    { icon: <MessageCircle className="w-5 h-5" />, href: "#" },
    { icon: <Globe className="w-5 h-5" />, href: "#" },
    { icon: <Hash className="w-5 h-5" />, href: "#" },
    { icon: <Link2 className="w-5 h-5" />, href: "#" }
  ]

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    company:"",
    message:"",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
  e.preventDefault()

  setLoading(true)
  setSuccess('')
  setError('')

  try {
    const response = await clientServer.post(
      '/api/leads/contact',
      formData
    )

    setSuccess(
      response.data.message || 'Message sent successfully'
    )

    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    })
  } catch (err) {
    setError(
      err.response?.data?.message ||
      'Failed to send message'
    )
  } finally {
    setLoading(false)
  }
}

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-6">
            <MessageSquare size={16} />
            <span>Get In Touch</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">extraordinary</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-slate-400 leading-relaxed">
            Have questions about our solutions? Want to explore a partnership? Or just want to say hi? We'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((info, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                <p className="text-blue-400 font-medium mb-2">{info.detail}</p>
                <p className="text-sm text-slate-500">{info.desc}</p>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Follow Us</h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, idx) => (
                  <a key={idx} href={social.href} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-500 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700" />
              
              <h2 className="text-2xl font-bold text-white mb-8">Send us a message</h2>
              
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Full Name</label>
                    <input
  type="text"
  placeholder="John Doe"
  value={formData.name}
  onChange={(e) =>
    setFormData({
      ...formData,
      name: e.target.value,
    })
  }
  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                   <input
  type="email"
  placeholder="john@example.com"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value,
    })
  }
  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
/>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Company (Optional)</label>
                 <input
  type="text"
  placeholder="Your Company Name"
  value={formData.company}
  onChange={(e) =>
    setFormData({
      ...formData,
      company: e.target.value,
    })
  }
  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
/>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                <textarea
  rows="5"
  placeholder="How can we help you?"
  value={formData.message}
  onChange={(e) =>
    setFormData({
      ...formData,
      message: e.target.value,
    })
  }
  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 resize-none"
></textarea>
                </div>
                {success && (
  <div className="text-green-400 font-medium">
    {success}
  </div>
)}

{error && (
  <div className="text-red-400 font-medium">
    {error}
  </div>
)}

             <button
  type="submit"
  disabled={loading}
  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-95 group/btn"
>
  <span>
    {loading ? 'Sending...' : 'Send Message'}
  </span>

  <Send
    size={18}
    className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
  />
</button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
