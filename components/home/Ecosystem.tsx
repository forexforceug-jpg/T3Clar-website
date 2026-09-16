'use client'

import Link from 'next/link'
import { ArrowRight, Car, ShoppingBag, TrendingUp, Building2, Zap, School } from 'lucide-react'
import { motion } from 'framer-motion'

const platforms = [
  { name: 'XRide',      nameParts: { colored: 'X',    white: 'Ride'    }, image: '/jinja-cityscape.jpg',    color: '#2563EB', icon: Car,         tag: 'Transport',  angle: -90     },
  { name: 'Munolink',   nameParts: { colored: 'M',    white: 'unolink' }, image: '/muno.png',              color: '#77AFE4', icon: ShoppingBag, tag: 'Commerce',   angle: -38.57  },
  { name: 'GripShule',  nameParts: { colored: 'Grip', white: 'Shule'   }, image: '/gripshule.png',         color: '#10B981', icon: School,      tag: 'Education',  angle: 12.86   },
  { name: 'ShopIt',     nameParts: { colored: 'Shop', white: 'It'      }, image: '/shopit.jpg',                color: '#10B981', icon: ShoppingBag, tag: 'Commerce',   angle: 64.29   },
  { name: 'Clexarly',   nameParts: { colored: 'Clex', white: 'arly'    }, image: '/clxry.png', color: '#8B5CF6', icon: TrendingUp,  tag: 'Business',   angle: 115.71  },
  { name: 'Lotina',     nameParts: { colored: 'Lo',   white: 'tina'    }, image: '/lotina.png',            color: '#7C3AED', icon: Building2,   tag: 'Investment', angle: 167.14  },
  { name: 'Future',     nameParts: { colored: 'Fu',   white: 'ture'    }, image: '/It-soln2.jpeg',         color: '#F59E0B', icon: Zap,         tag: 'Coming Soon', angle: 218.57 },
]

const orbitalNodes = Array.from({ length: 24 }, (_, i) => i * 15)
const ORBIT_RADIUS = 38

export default function Ecosystem() {
  return (
    <section className="relative py-24 md:py-32 bg-[#080B14] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
          {[...Array(60)].map((_, i) => (
            <circle
              key={i}
              cx={`${(i * 37) % 100}%`}
              cy={`${(i * 53) % 100}%`}
              r={((i * 7) % 13) / 10 + 0.3}
              fill="white"
              opacity={((i * 3) % 6) / 10 + 0.2}
            >
              <animate attributeName="opacity" values={`0.1;${((i * 5) % 7) / 10 + 0.4};0.1`} dur={`${3 + (i % 4)}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </svg>
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-blue-700/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-[160px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/[0.04] border border-white/10 backdrop-blur-sm rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase">Our Ecosystem</span>
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] max-w-3xl mx-auto">
            Connected platforms.{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Stronger together.
            </span>
          </h2>

          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-white/10">
              <img src="/lotina.png" alt="Lotina" className="h-5 w-auto object-contain" />
              <span className="text-xs font-bold text-purple-300">LOTINA</span>
              <span className="text-white/30">×</span>
              <img src="/T3Clarlogo.png" alt="T3Clar" className="h-5 w-5 object-contain" />
              <span className="text-xs font-bold text-blue-300">T3CLAR</span>
            </div>
          </div>
        </motion.div>

        {/* Orbit stage */}
        <div className="relative mx-auto" style={{ maxWidth: '820px' }}>
          <div className="relative w-full" style={{ aspectRatio: '1 / 1', padding: '10px' }}>

            {/* Rings */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <circle cx="50" cy="50" r="46" fill="none" stroke="#2563EB" strokeWidth="0.12" opacity="0.2" />
              <circle cx="50" cy="50" r={ORBIT_RADIUS} fill="none" stroke="#2563EB" strokeWidth="0.15" opacity="0.25" />
              <circle cx="50" cy="50" r="28" fill="none" stroke="#7C3AED" strokeWidth="0.12" opacity="0.18" strokeDasharray="1.2,1.8" />
              <circle cx="50" cy="50" r="18" fill="none" stroke="#A78BFA" strokeWidth="0.1" opacity="0.15" />
              <line x1="50" y1="4" x2="50" y2="96" stroke="#2563EB" strokeWidth="0.05" opacity="0.08" />
              <line x1="4" y1="50" x2="96" y2="50" stroke="#2563EB" strokeWidth="0.05" opacity="0.08" />
            </svg>

            {/* Rotating group */}
            <div
              className="absolute inset-0"
              style={{ animation: 'orbit-spin 60s linear infinite', transformOrigin: 'center center' }}
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
                      backgroundColor: mid ? '#60A5FA' : 'rgba(96,165,250,0.5)',
                      boxShadow: mid ? '0 0 10px rgba(96,165,250,0.8)' : '0 0 6px rgba(96,165,250,0.4)',
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-full bg-blue-400"
                      style={{ animation: `pulse-ring ${3 + (i % 4)}s ease-out infinite`, animationDelay: `${i * 0.15}s` }}
                    />
                  </div>
                )
              })}

              {/* ============ PLATFORM CARDS ============ */}
              {platforms.map((platform, index) => {
                const rad = (platform.angle * Math.PI) / 180
                const x = 50 + ORBIT_RADIUS * Math.sin(rad)
                const y = 50 - ORBIT_RADIUS * Math.cos(rad)
                const Icon = platform.icon

                return (
                  // LAYER 1 — Positioning (translate to orbit point)
                  <div
                    key={platform.name}
                    className="absolute z-20"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* LAYER 2 — Counter-rotation wrapper. MUST be size of content. */}
                    <div
                      style={{
                        animation: 'orbit-spin-reverse 60s linear infinite',
                        transformOrigin: 'center center',
                        width: 'fit-content',
                        height: 'fit-content',
                      }}
                    >
                      {/* LAYER 3 — Framer scale, isolated from rotation */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="group cursor-pointer"
                        style={{ transformOrigin: 'center center' }}
                      >
                        {/* Halo ring */}
                        <div
                          className="absolute -inset-3 rounded-full border border-dashed opacity-40 pointer-events-none"
                          style={{
                            borderColor: `${platform.color}66`,
                            animation: `orbit-spin ${25 + index * 4}s linear infinite`,
                          }}
                        />

                        {/* The card */}
                        <div
                          className="relative w-[100px] h-[68px] md:w-[130px] md:h-[88px] rounded-2xl overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-all duration-500 border group-hover:scale-110"
                          style={{ borderColor: `${platform.color}40` }}
                        >
                          <img src={platform.image} alt={platform.name} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                          <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: platform.color }} />
                          <div
                            className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-full text-[7px] font-bold tracking-wider uppercase backdrop-blur-md border border-white/20 text-white"
                            style={{ backgroundColor: `${platform.color}CC` }}
                          >
                            {platform.tag}
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-2">
                            <div className="text-[11px] md:text-xs font-black leading-tight truncate">
                              <span style={{ color: platform.color }}>{platform.nameParts.colored}</span>
                              <span className="text-white">{platform.nameParts.white}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
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
                  <div className="absolute inset-0 rounded-full bg-blue-500/25" style={{ animation: 'pulse-ring 4s ease-out infinite' }} />
                  <div className="absolute inset-0 rounded-full bg-blue-500/20" style={{ animation: 'pulse-ring 4s ease-out infinite', animationDelay: '2s' }} />
                  <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-[24px] shadow-[0_0_80px_rgba(59,130,246,0.5)] flex items-center justify-center border-4 border-blue-500/20">
                    <img src="/t3logo.png" alt="T3Clar" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                  </div>
                  <div className="absolute inset-0 pointer-events-none" style={{ animation: 'orbit-spin 8s linear infinite' }}>
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" style={{ transform: 'translateY(-52px)' }} />
                  </div>
                  <div className="absolute inset-0 pointer-events-none" style={{ animation: 'orbit-spin-reverse 12s linear infinite' }}>
                    <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 -ml-0.75 -mt-0.75 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(167,139,250,0.9)]" style={{ transform: 'translateY(-40px)' }} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile fallback */}
        <div className="md:hidden mt-10">
          <div className="grid grid-cols-2 gap-3">
            {platforms.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.name} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border"
                    style={{ backgroundColor: `${p.color}20`, borderColor: `${p.color}40` }}
                  >
                    <Icon size={14} style={{ color: p.color }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-black leading-tight truncate">
                      <span style={{ color: p.color }}>{p.nameParts.colored}</span>
                      <span className="text-white">{p.nameParts.white}</span>
                    </div>
                    <div className="text-[9px] text-white/40 uppercase tracking-wider mt-0.5">{p.tag}</div>
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
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <Link
            href="/ecosystem"
            className="group inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full border-2 border-white/15 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300"
          >
            Explore The Full Ecosystem
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-white/30 text-xs mt-6">
            Powered by <span className="text-purple-300 font-semibold">Lotina Investments</span> ×{' '}
            <span className="text-blue-300 font-semibold">T3Clar</span> strategic technology partnership
          </p>
        </motion.div>
      </div>
    </section>
  )
}