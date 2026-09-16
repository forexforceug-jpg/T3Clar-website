'use client'

import Link from 'next/link'
import { Users, Rocket, ShieldCheck, ArrowRight, Hexagon, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { icon: Users, number: '100+', label: 'Happy Clients', suffix: 'worldwide', color: '#2563EB' },
  { icon: Rocket, number: '50+', label: 'Projects Delivered', suffix: 'and counting', color: '#7C3AED' },
  { icon: ShieldCheck, number: '99.9%', label: 'System Reliability', suffix: 'uptime guaranteed', color: '#10B981' },
]

const capabilities = [
  { label: 'Connect', x: '3%', y: '20%' },
  { label: 'Develop', x: '82%', y: '15%' },
  { label: 'Cloud', x: '88%', y: '55%' },
  { label: 'Grow', x: '78%', y: '82%' },
  { label: 'Secure', x: '12%', y: '78%' },
  { label: 'Empower', x: '5%', y: '52%' },
]

export default function WhoWeAre() {
  return (
    <section className="relative py-24 md:py-32 px-4 bg-white overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-50/40 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[120px]" />

      {/* Dotted grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[radial-gradient(circle,#2563EB_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Geometric frames */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-blue-100/60 rounded-3xl rotate-12" />
      <div className="absolute bottom-20 right-16 w-24 h-24 border border-purple-100/60 rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
              Who We Are
            </span>
            <div className="w-8 h-8 rounded-full border-2 border-[#2563EB]/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight max-w-3xl mx-auto">
            Technology solutions that{' '}
            <span className="relative inline-block">
              <span className="text-[#2563EB]">drive growth</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 4 Q25 0 50 4 Q75 8 100 4" stroke="#2563EB" strokeWidth="2" fill="none" opacity="0.3" />
              </svg>
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Main split card */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left — Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative rounded-[36px] overflow-hidden min-h-[500px]"
            >
              <img src="/55.jpg" alt="T3Clar team" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E]/90 via-[#0A0F1E]/70 to-[#2563EB]/40" />

              {/* Content overlay */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/80 text-[10px] font-bold tracking-wider uppercase">Based in Jinja</span>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4">
                    <Hexagon size={26} className="text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-white text-2xl font-black mb-2">Rooted in Uganda</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    From Jinja to the world — engineering solutions that scale.
                  </p>

                  {/* Mini map dot */}
                  <div className="flex items-center gap-2 mt-4">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-3 h-3 rounded-full bg-blue-400 animate-ping" />
                      <span className="relative w-2 h-2 rounded-full bg-blue-400" />
                    </div>
                    <span className="text-white/70 text-xs font-medium">Jinja · Uganda · East Africa</span>
                  </div>
                </div>
              </div>

              {/* Orbiting dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 right-4 w-6 h-6"
                style={{ transformOrigin: '-200px 0' }}
              >
                <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
              </motion.div>
            </motion.div>

            {/* Right — Text + stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 flex flex-col justify-between gap-6"
            >
              {/* Bio card */}
              <div className="relative bg-white rounded-[36px] p-8 md:p-10 border border-gray-100 shadow-[0_16px_60px_rgba(0,0,0,0.05)]">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-2xl" />

                <div className="relative">
                  <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                    Our Story
                  </span>
                  <p className="text-gray-600 text-lg leading-relaxed mt-4">
                    T3Clar is a software and technology solutions company based in Jinja, Uganda.
                    We design, develop and implement innovative digital solutions that transform
                    how businesses operate and grow.
                  </p>

                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 mt-6 text-[#2563EB] font-semibold px-6 py-3 rounded-full border-2 border-[#2563EB]/20 hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all duration-300"
                  >
                    More About Us
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid sm:grid-cols-3 gap-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="group relative bg-white rounded-3xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-[0_16px_40px_rgba(37,99,235,0.08)] transition-all duration-300 overflow-hidden"
                    >
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                           style={{ backgroundColor: `${stat.color}15` }}>
                        <Icon size={20} style={{ color: stat.color }} />
                      </div>
                      <div className="text-3xl font-black" style={{ color: stat.color }}>{stat.number}</div>
                      <div className="text-sm font-bold text-gray-800 mt-1">{stat.label}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{stat.suffix}</div>

                      {/* Bottom color bar */}
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                           style={{ backgroundColor: stat.color }} />
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Floating capability pills (desktop only) */}
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="absolute hidden xl:flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-[#2563EB]/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] transition-all duration-300"
              style={{
                left: cap.x,
                top: cap.y,
                animation: `float-y ${5 + i * 0.7}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              <div className="w-2 h-2 bg-[#2563EB] rounded-full shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
              <span className="text-sm font-semibold text-gray-700">{cap.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}