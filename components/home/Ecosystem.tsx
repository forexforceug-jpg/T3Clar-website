'use client'

import Link from 'next/link'
import { ArrowRight, Hexagon, Car, ShoppingBag, TrendingUp, Building2, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const platforms = [
  {
    name: 'XRide',
    nameParts: { colored: 'X', white: 'Ride' },
    description: 'Smart transportation for a moving city.',
    image: '/jinja-cityscape.jpg',
    color: '#2563EB',
    icon: Car,
    tag: 'Transport',
    angle: -72,
    distance: 42,
  },
  {
    name: 'ShopIt',
    nameParts: { colored: 'Shop', white: 'It' },
    description: 'Shop more. We deliver.',
    image: '/jinja-cityscape.jpg',
    color: '#10B981',
    icon: ShoppingBag,
    tag: 'Commerce',
    angle: -30,
    distance: 44,
  },
  {
    name: 'Clexarly',
    nameParts: { colored: 'Clex', white: 'arly' },
    description: 'Digital growth & business solutions.',
    image: '/clxry.png',
    color: '#8B5CF6',
    icon: TrendingUp,
    tag: 'Business',
    angle: 15,
    distance: 43,
  },
  {
    name: 'Lotina',
    nameParts: { colored: 'Lo', white: 'tina' },
    description: 'Investment & strategic growth partner.',
    image: '/lotina.png',
    color: '#7C3AED',
    icon: Building2,
    tag: 'Investment',
    angle: 55,
    distance: 44,
  },
  {
    name: 'Future',
    nameParts: { colored: 'Fu', white: 'ture' },
    description: 'Next-generation platforms coming soon.',
    image: '/jinja-cityscape.jpg',
    color: '#F59E0B',
    icon: Zap,
    tag: 'Coming Soon',
    angle: 100,
    distance: 42,
  },
]

const orbitalNodes = Array.from({ length: 16 }, (_, i) => ({
  angle: i * 22.5,
  distance: 48,
}))

export default function Ecosystem() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      
      {/* ============ AMBIENT BACKGROUND ============ */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] 
                    bg-gradient-to-br from-blue-50/40 via-purple-50/20 to-transparent rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50/15 rounded-full blur-[100px]" />
      
      {/* Dotted grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[radial-gradient(circle,#2563EB_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Geometric frames */}
      <div className="absolute top-16 left-12 w-20 h-20 border border-blue-100/30 rounded-full" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-purple-100/20 rounded-2xl rotate-12" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* ============ SECTION HEADER ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
              OUR ECOSYSTEM
            </span>
            <div className="w-1.5 h-1.5 bg-[#7C3AED] rounded-full" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight max-w-2xl mx-auto">
            Connected platforms.{' '}
            <span className="relative">
              <span className="text-[#2563EB]">Stronger together.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 6" preserveAspectRatio="none">
                <path d="M0 3 Q25 0 50 3 Q75 6 100 3" stroke="#2563EB" strokeWidth="2" fill="none" opacity="0.3" />
              </svg>
            </span>
          </h2>
        </motion.div>

        {/* ============ PARTNERSHIP BADGE ============ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-4"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/50 backdrop-blur-sm rounded-2xl 
                        border border-gray-100/30 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
            <span className="text-[11px] font-bold text-[#7C3AED]">LOTINA INVESTMENTS</span>
            <span className="text-sm text-gray-300">×</span>
            <span className="text-[11px] font-bold text-[#2563EB]">T3CLAR</span>
          </div>
        </motion.div>

        {/* ============ ORBITAL ECOSYSTEM VISUALIZATION ============ */}
        <div className="relative h-[550px] md:h-[650px]">
          
          {/* ===== CONCENTRIC ORBITAL RINGS ===== */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg width="520" height="520" viewBox="0 0 520 520" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <circle cx="260" cy="260" r="250" fill="none" stroke="#2563EB" strokeWidth="0.5" opacity="0.12" />
              <circle cx="260" cy="260" r="220" fill="none" stroke="#7C3AED" strokeWidth="0.5" opacity="0.08" strokeDasharray="8,12" />
              <circle cx="260" cy="260" r="190" fill="none" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
            </svg>
          </div>

          {/* ===== ORBITAL NODES (glowing dots) ===== */}
          {orbitalNodes.map((node, i) => {
            const angleRad = (node.angle * Math.PI) / 180
            const cx = Math.round(50 + node.distance * Math.sin(angleRad))
            const cy = Math.round(50 - node.distance * Math.cos(angleRad))
            
            return (
              <motion.div
                key={i}
                animate={{ 
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{ 
                  duration: 3 + (i % 4), 
                  repeat: Infinity, 
                  delay: i * 0.4,
                  ease: "easeInOut" 
                }}
                className="absolute w-1.5 h-1.5 bg-[#2563EB]/50 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.3)]"
                style={{ left: `${cx}%`, top: `${cy}%` }}
              />
            )
          })}

          {/* ===== CENTRAL HUB - T3CLAR ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.05, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-10 rounded-full bg-blue-100/40"
              />
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -inset-6 rounded-full bg-blue-100/50"
              />
              <div className="relative w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-white via-white to-blue-50/80 
                           rounded-[28px] shadow-[0_20px_60px_rgba(37,99,235,0.1),0_0_0_1px_rgba(37,99,235,0.06)]
                           flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <Hexagon size={30} className="text-[#2563EB] mx-auto" />
                  <span className="text-[9px] font-black text-[#0F172A] mt-0.5 block tracking-wider">T3CLAR</span>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1 -right-1 w-3 h-3"
                  style={{ transformOrigin: '-16px -16px' }}
                >
                  <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ===== CONNECTION LINES (SVG) ===== */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
            {platforms.map((platform, i) => {
              const angleRad = (platform.angle * Math.PI) / 180
              const x2 = Math.round(400 + (platform.distance / 50) * 380 * Math.sin(angleRad))
              const y2 = Math.round(300 - (platform.distance / 50) * 380 * Math.cos(angleRad))
              
              return (
                <line
                  key={i}
                  x1="400"
                  y1="300"
                  x2={x2}
                  y2={y2}
                  stroke={`${platform.color}30`}
                  strokeWidth="1"
                  strokeDasharray="4,6"
                  opacity="0.4"
                />
              )
            })}
          </svg>

          {/* ===== PLATFORM ORBITING IMAGES ===== */}
          {platforms.map((platform, index) => {
            const angleRad = (platform.angle * Math.PI) / 180
            const x = Math.round(50 + platform.distance * Math.sin(angleRad))
            const y = Math.round(50 - platform.distance * Math.cos(angleRad))
            
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.12, ease: "easeOut" }}
                className="absolute group cursor-pointer z-20"
                style={{ 
                  left: `${x}%`, 
                  top: `${y}%`, 
                  transform: 'translate(-50%, -50%)' 
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20 + index * 5, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 rounded-full border border-blue-100/30"
                />

                <div className="relative w-[140px] h-[90px] md:w-[170px] md:h-[110px] rounded-2xl overflow-hidden
                             shadow-[0_12px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                             transition-all duration-500 group-hover:scale-110">
                  <img
                    src={platform.image}
                    alt={platform.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-2.5">
                    <div className="flex items-center gap-1.5">
                      <platform.icon size={12} style={{ color: platform.color }} />
                      <span className="text-xs font-bold" style={{ color: platform.color }}>
                        {platform.nameParts.colored}
                      </span>
                      <span className="text-xs font-bold text-white">
                        {platform.nameParts.white}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                     style={{ backgroundColor: `${platform.color}40`, boxShadow: `0 0 8px ${platform.color}30` }} />
              </motion.div>
            )
          })}

        </div>

        {/* ============ BOTTOM ============ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-4"
        >
          <Link
            href="/ecosystem"
            className="group inline-flex items-center gap-2 text-[#2563EB] font-semibold 
                     px-6 py-3 rounded-full border-2 border-[#2563EB]/20 
                     hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white 
                     transition-all duration-300"
          >
            Explore The Full Ecosystem
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <p className="text-gray-400 text-xs mt-6">
            Powered by{' '}
            <span className="text-[#7C3AED] font-semibold">Lotina Investments</span>
            {' '}×{' '}
            <span className="text-[#2563EB] font-semibold">T3Clar</span>
            {' '}strategic technology partnership
          </p>
        </motion.div>

      </div>
    </section>
  )
}