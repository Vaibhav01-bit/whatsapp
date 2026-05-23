import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, User, ArrowRight, Search, Zap } from 'lucide-react'
import { clientServer } from '../../config/api'

function BlogCard({ title, excerpt, date, author, category, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-6 border border-white/10 bg-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-blue-600 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
          {category}
        </div>
      </div>
      <div className="flex items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
        <span className="flex items-center gap-1"><Calendar size={12} /> {date}</span>
        <span className="flex items-center gap-1"><User size={12} /> {author}</span>
      </div>
      <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">{excerpt}</p>
      <div className="flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all">
        Read Article <ArrowRight size={14} />
      </div>
    </motion.div>
  )
}

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const defaultPosts = [
    {
      _id: "default-1",
      title: "The Future of WhatsApp Marketing in 2026",
      excerpt: "Discover how AI-driven agents are transforming customer engagement and driving unprecedented ROI for global brands.",
      createdAt: "2026-05-12T00:00:00.000Z",
      author: "Alex Rivers",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=800"
    },
    {
      _id: "default-2",
      title: "5 Tips to Reduce Abandoned Carts Using Automation",
      excerpt: "Learn the secrets to crafting high-converting recovery messages that win back customers without being intrusive.",
      createdAt: "2026-05-10T00:00:00.000Z",
      author: "Sarah Chen",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800"
    },
    {
      _id: "default-3",
      title: "Setting Up Your First AI Sales Agent",
      excerpt: "A step-by-step guide to configuring your digital employee for maximum performance and brand consistency.",
      createdAt: "2026-05-08T00:00:00.000Z",
      author: "Marcus Thorne",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=800"
    }
  ]

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await clientServer.get('/api/blog/posts')
        if (response.data && response.data.success && response.data.data && response.data.data.length > 0) {
          setPosts(response.data.data)
        } else {
          setPosts(defaultPosts)
        }
      } catch (error) {
        console.log("Error fetching posts:", error)
        setPosts(defaultPosts)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const subscribeNewsletter = async () => {
    if (!email || !email.trim()) {
      alert('Please enter a valid email address')
      return
    }
    setSubmitting(true)
    try {
      await clientServer.post(
        '/api/newsletter/subscribe',
        { email, sourcePage: '/resources/blog' }
      )
      alert('Subscribed successfully')
      setEmail('')
    } catch (error) {
      console.log("Error subscribing to newsletter:", error)
      alert(error.response?.data?.message || 'Failed to subscribe. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.category.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white font-['Outfit']">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Loading Insights...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
            >
              <BookOpen size={14} className="text-blue-400" />
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Resobrand Insights</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight"
            >
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Knowledge Hub</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400 leading-relaxed"
            >
              Stay ahead of the curve with our latest research, tutorials, and success stories.
            </motion.p>
          </div>
          <div className="w-full md:w-auto">
             <div className="relative group">
               <input
                 type="text"
                 placeholder="Search articles..."
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 className="w-full md:w-80 h-14 bg-white/5 border border-white/10 rounded-2xl px-6 pr-12 text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
               />
               <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={20} />
             </div>
          </div>
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden mb-24 aspect-[21/9] min-h-[400px] border border-white/10 group cursor-pointer"
        >
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Featured" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent z-10" />
          <div className="absolute bottom-12 left-12 right-12 z-20">
             <div className="px-4 py-1.5 bg-blue-600 rounded-full text-xs font-black text-white uppercase tracking-widest inline-block mb-6">Trending Topic</div>
             <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight max-w-3xl">How Generative AI is Changing the Face of Conversational Commerce</h2>
             <div className="flex items-center gap-6 text-slate-300 text-sm font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1"><User size={16} /> By Jonathan Field</span>
                <span className="flex items-center gap-1"><Calendar size={16} /> May 15, 2026</span>
             </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post._id}
              title={post.title}
              excerpt={post.excerpt}
              date={new Date(post.createdAt).toLocaleDateString()}
              author={post.author}
              category={post.category}
              image={post.image}
            />
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] -mr-48 -mt-48" />
           <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight relative z-10">Get the Latest Insights</h2>
           <p className="text-blue-100 text-lg mb-10 opacity-80 max-w-xl mx-auto relative z-10">Join 50,000+ marketing professionals and stay updated with our weekly newsletter.</p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-16 px-8 rounded-2xl bg-white/10 border border-white/20 text-white outline-none focus:ring-2 focus:ring-white/50 w-full max-w-md"
              />
              <button
                onClick={subscribeNewsletter}
                disabled={submitting}
                className="h-16 px-10 bg-white hover:bg-white/90 disabled:opacity-50 text-blue-600 rounded-2xl font-black text-lg shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                {submitting ? 'Subscribing...' : 'Subscribe'} <Zap size={20} />
              </button>
           </div>
        </div>
      </div>
    </div>
  )
}

Blog.glowColor1 = "bg-blue-600/10"
Blog.glowColor2 = "bg-indigo-600/10"
