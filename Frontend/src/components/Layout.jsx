import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, glowColor1 = "bg-blue-600/10", glowColor2 = "bg-purple-600/10" }) {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-['Outfit'] relative overflow-hidden">
      {/* Sleek, professional grid & radial glow background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base dark backdrop (keeps original background color) */}
        <div className="absolute inset-0 bg-[#020617]" />
        
        {/* Fine premium dots pattern fading towards edges */}
        <div className="absolute inset-0 premium-dots opacity-80" />
        
        {/* Fine premium grid lines pattern fading towards edges */}
        <div className="absolute inset-0 premium-grid opacity-40" />

        {/* Ambient mesh glow spots using custom theme colors */}
        <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[130px] animate-pulse-slow ${glowColor1}`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[130px] animate-pulse-slow ${glowColor2}`} style={{ animationDelay: '4s' }} />
      </div>

      {/* Main content container with correct stacking */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

