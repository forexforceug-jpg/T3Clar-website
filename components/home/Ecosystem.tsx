'use client'

import Link from 'next/link'
import { ArrowRight, Car, ShoppingBag, TrendingUp, Building2, Zap, School } from 'lucide-react'
import { motion } from 'framer-motion'

const platforms = [
  { name: 'XRide',      nameParts: { colored: 'X',    white: 'Ride'    }, image: '/XR.png', color: '#2563EB', icon: Car,         tag: 'Transport',  angle: -90     },
  { name: 'Munolink',   nameParts: { colored: 'M',    white: 'unolink' }, image: '/muno.png',           color: '#77AFE4', icon: ShoppingBag, tag: 'Commerce',   angle: -38.57  },
  { name: 'GripShule',  nameParts: { colored: 'Grip', white: 'Shule'   }, image: '/gripshule.png',      color: '#10B981', icon: School,      tag: 'Education',  angle: 12.86   },
  { name: 'ShopIt',     nameParts: { colored: 'Shop', white: 'It'      }, image: '/shopit.jpg',         color: '#10B981', icon: ShoppingBag, tag: 'Commerce',   angle: 64.29   },
  { name: 'Clexarly',   nameParts: { colored: 'Clex', white: 'arly'    }, image: '/clxry.png',          color: '#8B5CF6', icon: TrendingUp,  tag: 'Business',   angle: 115.71  },
  { name: 'Lotina',     nameParts: { colored: 'Lo',   white: 'tina'    }, image: '/lotina.png',         color: '#7C3AED', icon: Building2,   tag: 'Investment', angle: 167.14  },
  { name: 'Fork & Go',     nameParts: { colored: 'Fork ',   white: '& Go'    }, image: '/Fork and Go.png',      color: '#F59E0B', icon: Zap,         tag: 'Delivery', angle: 218.57 },
]

const orbitalNodes = Array.from({ length: 24 }, (_, i) => i * 15)
const ORBIT_RADIUS = 38

export default function Ecosystem() {
  return (
    <section className="relative py-24 md:py-32 px-4 bg-[#FAF8F4] overflow-hidden">
      {/* Soft ambient glow behind orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#0EA5E9]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-between flex-wrap gap-4 pb-6 mb-16 border-b border-[#1A1F2E]/10"
        >
          <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#1A1F2E]/50">
            § 04 · Ecosystem
          </span>
          <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#1A1F2E]/50 hidden md:inline">
            07 platforms · 03 countries
          </span>
          <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#65A30D] flex items-center gap-2">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#65A30D]"
            />
            All live
          </span>
        </motion.div>

        {/* Header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-[#B45309]">
            Our Ecosystem
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.03em] text-[#0A0F1F]/60 mt-6 max-w-3xl mx-auto">
            Connected platforms.
            <br />
            <em className="not-italic font-black text-[#0EA5E9]/60">Stronger together.</em>
          </h2>
          <p className="text-lg leading-[1.8] text-[#1A1F2E]/60 mt-8 max-w-xl mx-auto"
             style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            We build, launch and scale the platforms that power everyday life across East Africa.
          </p>
        </motion.div>

        {/* Orbit stage */}
        <div className="relative mx-auto" style={{ maxWidth: '820px' }}>
          <div className="relative w-full" style={{ aspectRatio: '1 / 1', padding: '10px' }}>

            {/* Rings — ink lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <circle cx="50" cy="50" r="46" fill="none" stroke="#0A0F1F" strokeWidth="0.1" opacity="0.15" />
              <circle cx="50" cy="50" r={ORBIT_RADIUS} fill="none" stroke="#0A0F1F" strokeWidth="0.15" opacity="0.3" />
              <circle cx="50" cy="50" r="28" fill="none" stroke="#B45309" strokeWidth="0.1" opacity="0.15" strokeDasharray="1.2,1.8" />
              <circle cx="50" cy="50" r="18" fill="none" stroke="#0A0F1F" strokeWidth="0.08" opacity="0.1" />
              <line x1="50" y1="4" x2="50" y2="96" stroke="#0A0F1F" strokeWidth="0.05" opacity="0.08" />
              <line x1="4" y1="50" x2="96" y2="50" stroke="#0A0F1F" strokeWidth="0.05" opacity="0.08" />
            </svg>

            {/* Rotating group */}
            <div
              className="absolute inset-0"
              style={{ animation: 'orbit-spin 70s linear infinite', transformOrigin: 'center center' }}
            >
              {/* Orbital dots */}
              {orbitalNodes.map((angle, i) => {
                const rad = (angle * Math.PI) / 180
                const x = 50 + ORBIT_RADIUS * Math.sin(rad)
                const y = 50 - ORBIT_RADIUS * Math.cos(rad)
                const mid = i % 6 === 0
                return (
                  <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      width: mid ? '6px' : '4px',
                      height: mid ? '6px' : '4px',
                      transform: 'translate(-50%, -50%)',
                      backgroundColor: mid ? '#0EA5E9' : 'rgba(14,165,233,0.4)',
                      boxShadow: mid ? '0 0 8px rgba(14,165,233,0.4)' : 'none',
                    }}
                  />
                )
              })}

              {/* Platform circular avatars */}
              {platforms.map((platform, index) => {
                const rad = (platform.angle * Math.PI) / 180
                const x = 50 + ORBIT_RADIUS * Math.sin(rad)
                const y = 50 - ORBIT_RADIUS * Math.cos(rad)
                const Icon = platform.icon

                return (
                  <div
                    key={platform.name}
                    className="absolute z-20"
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    {/* Counter-rotation to keep avatars upright */}
                    <div
                      style={{
                        animation: 'orbit-spin-reverse 70s linear infinite',
                        transformOrigin: 'center center',
                        width: 'fit-content',
                        height: 'fit-content',
                      }}
                    >
                      <div className="group cursor-pointer flex flex-col items-center">
                        {/* Circular image */}
                        <div className="relative">
                          <div
                            className="relative w-[80px] h-[80px] md:w-[105px] md:h-[105px] rounded-full overflow-hidden 
                                     border-2 transition-all duration-500 bg-[#FAF8F4]
                                     shadow-[0_8px_30px_rgba(10,15,31,0.10)] 
                                     group-hover:shadow-[0_16px_50px_rgba(14,165,233,0.28)] 
                                     group-hover:scale-110"
                            style={{ borderColor: `${platform.color}60` }}
                          >
                            <img
                              src={platform.image}
                              alt={platform.name}
                              className="w-full h-full object-cover"
                            />

                            {/* Dark tint for legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F]/60 via-transparent to-transparent" />

                            {/* Tag badge */}
                            <div
                              className="absolute bottom-1 left-1/2 -translate-x-1/2 px-1.5 py-0.5 
                                       text-[6px] md:text-[7px] font-mono tracking-wider uppercase text-white 
                                       border border-white/40 backdrop-blur-sm whitespace-nowrap"
                              style={{ backgroundColor: `${platform.color}DD` }}
                            >
                              {platform.tag}
                            </div>
                          </div>

                          {/* Icon badge — small circle at top-right */}
                          <div
                            className="absolute -top-1 -right-1 w-6 h-6 md:w-7 md:h-7 rounded-full 
                                     border-2 border-[#FAF8F4] flex items-center justify-center
                                     shadow-[0_4px_12px_rgba(10,15,31,0.15)]
                                     group-hover:scale-110 transition-transform duration-500"
                            style={{ backgroundColor: platform.color }}
                          >
                            <Icon size={11} className="text-white" strokeWidth={2.4} />
                          </div>
                        </div>

                        {/* Name beneath circle */}
                        <div
                          className="mt-2 md:mt-2.5 text-[10px] md:text-xs font-black leading-tight 
                                   whitespace-nowrap text-center tracking-tight"
                          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                        >
                          <span style={{ color: platform.color }}>{platform.nameParts.colored}</span>
                          <span className="text-[#0A0F1F]">{platform.nameParts.white}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Center hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full bg-[#0EA5E9]/25 animate-ping"
                    style={{ animationDuration: '4s' }}
                  />
                  <div
                    className="absolute inset-0 rounded-full bg-[#0EA5E9]/15 animate-ping"
                    style={{ animationDuration: '4s', animationDelay: '2s' }}
                  />
                  <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-[0_8px_40px_rgba(14,165,233,0.3)] flex items-center justify-center border-2 border-[#0EA5E9]/30">
                    <img src="/t3logo.png" alt="T3Clar" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile fallback grid */}
        <div className="md:hidden mt-12">
          <div className="grid grid-cols-2 gap-3">
            {platforms.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.name} className="flex items-center gap-3 p-3 bg-white border border-[#1A1F2E]/15">
                  {/* Circular image */}
                  <div
                    className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border-2"
                    style={{ borderColor: `${p.color}60` }}
                  >
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F]/50 to-transparent" />
                    {/* Icon badge */}
                    <div
                      className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full border border-white flex items-center justify-center"
                      style={{ backgroundColor: p.color }}
                    >
                      <Icon size={8} className="text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-black leading-tight truncate text-[#0A0F1F]"
                         style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                      <span style={{ color: p.color }}>{p.nameParts.colored}</span>
                      <span>{p.nameParts.white}</span>
                    </div>
                    <div className="text-[9px] font-mono tracking-[0.25em] uppercase text-[#1A1F2E]/50 mt-1">
                      {p.tag}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <Link
            href="/ecosystem"
            className="group inline-flex items-center gap-3 text-base font-medium text-[#0A0F1F] border-b-2 border-[#0A0F1F] pb-2 hover:text-[#0EA5E9] hover:border-[#0EA5E9] transition-all"
          >
            Explore the full ecosystem
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-[#1A1F2E]/40 mt-8">
            Powered by <span className="text-[#0A0F1F]">Lotina Investments</span> × <span className="text-[#0EA5E9]">T3Clar</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}