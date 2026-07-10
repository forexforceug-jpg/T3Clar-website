'use client'

import Link from 'next/link'
import { Users, Rocket, ShieldCheck, ArrowRight, Sparkles, Hexagon } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { icon: Users, number: '100+', label: 'Happy Clients', suffix: 'worldwide' },
  { icon: Rocket, number: '50+', label: 'Projects Delivered', suffix: 'and counting' },
  { icon: ShieldCheck, number: '99.9%', label: 'System Reliability', suffix: 'uptime guaranteed' },
]

const capabilities = [
  { label: 'Connect', x: '5%', y: '15%' },
  { label: 'Develop', x: '85%', y: '20%' },
  { label: 'Cloud', x: '90%', y: '55%' },
  { label: 'Grow', x: '80%', y: '85%' },
  { label: 'Secure', x: '15%', y: '80%' },
  { label: 'Empower', x: '8%', y: '50%' },
]

export default function WhoWeAre() {
  return (
    <section className="relative py-24 md:py-32 px-4 bg-white overflow-hidden">
      
      {/* ============ AMBIENT BACKGROUND ============ */}
      {/* Soft lavender glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-50/40 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[120px]" />
      
      {/* Dotted grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[radial-gradient(circle,#2563EB_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Subtle geometric frame */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-blue-100/50 rounded-3xl rotate-12" />
      <div className="absolute bottom-20 right-16 w-24 h-24 border border-purple-100/50 rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ============ SECTION HEADER WITH ORBITAL ACCENT ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full border-2 border-[#2563EB]/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
            </div>
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.3em] uppercase">
              WHO WE ARE
            </span>
            <div className="w-8 h-8 rounded-full border-2 border-[#2563EB]/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight max-w-3xl mx-auto">
            Technology solutions that{' '}
            <span className="relative">
              <span className="text-[#2563EB]">drive growth</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 4 Q25 0 50 4 Q75 8 100 4" stroke="#2563EB" strokeWidth="2" fill="none" opacity="0.3" />
              </svg>
            </span>
          </h2>
        </motion.div>

        {/* ============ MAIN SPATIAL COMPOSITION ============ */}
        <div className="relative">
          
          {/* ===== CENTRAL HUB - T3CLAR ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto max-w-2xl mb-16"
          >
            {/* Outer orbital ring */}
            <div className="absolute inset-0 rounded-[40px] border border-blue-100/60 rotate-3 scale-105" />
            <div className="absolute inset-0 rounded-[40px] border border-purple-100/40 -rotate-2 scale-[1.08]" />
            
            {/* Main glass card */}
            <div className="relative bg-white/70 backdrop-blur-xl rounded-[36px] p-8 md:p-12 
                          shadow-[0_20px_80px_rgba(0,0,0,0.06),0_0_0_1px_rgba(37,99,235,0.05)]">
              
              {/* Orbiting dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -top-3 -right-3 w-6 h-6"
                style={{ transformOrigin: '120px 120px' }}
              >
                <div className="w-3 h-3 bg-[#2563EB] rounded-full shadow-[0_0_12px_rgba(37,99,235,0.4)]" />
              </motion.div>

              {/* Content */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 rounded-2xl mb-6">
                  <Hexagon size={28} className="text-[#2563EB]" />
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto">
                  T3Clar is a software and technology solutions company based in Jinja, Uganda. 
                  We design, develop and implement innovative digital solutions that transform 
                  how businesses operate and grow.
                </p>
                
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-[#2563EB] font-semibold mt-6 
                           px-6 py-3 rounded-full border-2 border-[#2563EB]/20 hover:border-[#2563EB] 
                           hover:bg-[#2563EB] hover:text-white transition-all duration-300"
                >
                  More About Us
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ===== FLOATING CAPABILITY NODES ===== */}
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="absolute hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-sm 
                       rounded-2xl px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] 
                       border border-gray-100/50 hover:border-[#2563EB]/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] 
                       transition-all duration-300 cursor-default"
              style={{ left: cap.x, top: cap.y }}
            >
              <div className="w-2 h-2 bg-[#2563EB] rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
              <span className="text-sm font-semibold text-gray-700">{cap.label}</span>
            </motion.div>
          ))}

          {/* ===== CONNECTING LINES (SVG) ===== */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" 
               viewBox="0 0 800 500" preserveAspectRatio="none">
            <line x1="400" y1="200" x2="80" y2="100" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" strokeDasharray="6,6" />
            <line x1="400" y1="200" x2="680" y2="120" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" strokeDasharray="6,6" />
            <line x1="400" y1="200" x2="720" y2="300" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" strokeDasharray="6,6" />
            <line x1="400" y1="200" x2="640" y2="430" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" strokeDasharray="6,6" />
            <line x1="400" y1="200" x2="140" y2="420" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" strokeDasharray="6,6" />
            <line x1="400" y1="200" x2="100" y2="280" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" strokeDasharray="6,6" />
          </svg>

          {/* ===== BOTTOM STATS ROW ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-8"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-5 text-center
                         border border-gray-100/50 hover:border-[#2563EB]/20 
                         shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                         hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)]
                         transition-all duration-300"
              >
                <div className="w-10 h-10 mx-auto bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 
                              rounded-xl flex items-center justify-center mb-3
                              group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={18} className="text-[#2563EB]" />
                </div>
                <div className="text-2xl font-black text-[#2563EB]">{stat.number}</div>
                <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{stat.suffix}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}