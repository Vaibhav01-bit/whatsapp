import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Zap, CreditCard, Package, Users, Star, BarChart3, Heart } from 'lucide-react'

function EcomFeature({ icon, title, desc }) {
  return (
    <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-black text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

export default function Ecommerce() {
  return (
    <div className="min-h-screen pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
          >
            <ShoppingBag size={14} className="text-orange-400" />
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Next-Gen Commerce</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            Shop Smarter <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">On WhatsApp</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            From cart recovery to instant payments, turn your WhatsApp into your 
            highest-converting storefront. Sell directly inside the chat.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <EcomFeature icon={<Zap />} title="Cart Recovery" desc="Recover up to 25% of abandoned carts with automated, personalized WhatsApp reminders." />
          <EcomFeature icon={<CreditCard />} title="Native Payments" desc="Allow customers to pay for their orders directly within WhatsApp using Stripe or UPI." />
          <EcomFeature icon={<Package />} title="Order Tracking" desc="Send automated real-time shipment updates and delivery notifications to your customers." />
          <EcomFeature icon={<Users />} title="Personalized Offers" desc="Send tailored product recommendations based on previous purchase history and interests." />
          <EcomFeature icon={<Star />} title="Review Collection" desc="Automate the collection of customer reviews and ratings after a successful delivery." />
          <EcomFeature icon={<Heart />} title="Loyalty Program" desc="Deliver reward points, exclusive coupons, and loyalty updates directly on WhatsApp." />
        </div>

        {/* Visual Demo Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-4xl font-black text-white mb-8">Higher ROI, <br />Lower Friction</h2>
            <div className="space-y-6">
              {[
                { label: "Revenue Increase", val: "30%", color: "bg-orange-500" },
                { label: "Customer LTV", val: "45%", color: "bg-red-500" },
                { label: "Support Efficiency", val: "70%", color: "bg-orange-600" }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                   <div className="flex justify-between text-xs font-black text-slate-500 uppercase tracking-widest">
                      <span>{item.label}</span>
                      <span className="text-white">{item.val}</span>
                   </div>
                   <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: item.val }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full ${item.color}`}
                      />
                   </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-[4/3] rounded-[3rem] bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-white/10 flex items-center justify-center overflow-hidden">
                <ShoppingBag size={120} className="text-white opacity-10" />
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="absolute inset-x-8 bottom-8 p-6 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl"
                >
                   <div className="flex gap-4 items-center mb-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold"><Package /></div>
                      <div><h5 className="text-white font-bold">Order #1234</h5><p className="text-green-400 text-[10px] font-black uppercase">Out for Delivery</p></div>
                   </div>
                   <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full w-2/3 bg-orange-500" /></div>
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Ecommerce.glowColor1 = "bg-orange-600/10"
Ecommerce.glowColor2 = "bg-red-600/10"
