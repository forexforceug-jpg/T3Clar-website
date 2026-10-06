'use client'

import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import {
  ArrowUpRight, ArrowRight,
  Car, ShoppingBag, TrendingUp, Building2, Zap, School, Cloud,
} from 'lucide-react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

/* ============================================================
   DATA
   ============================================================ */

const platforms = [
  {
    code: 'PLT-01',
    name: 'XRide',
    nameParts: { colored: 'X', white: 'Ride' },
    category: 'Mobility',
    status: 'Live',
    year: '2024',
    users: '12K+',
    description: 'Smart transportation connecting passengers with reliable drivers across Jinja. Real-time tracking, cashless payments and improved ride experience.',
    image: '/MS.jpg',
    color: '#2563EB',
    icon: Car,
    features: ['Real-time tracking', 'Cashless payments', 'Driver ratings', 'Route optimization'],
  },
  {
    code: 'PLT-02',
    name: 'ShopIt',
    nameParts: { colored: 'Shop', white: 'It' },
    category: 'Commerce',
    status: 'Live',
    year: '2023',
    users: '8K+',
    description: 'An all-in-one marketplace for restaurants, pharmacies, shops and local businesses offering fast, reliable and secure deliveries.',
    image: '/shopit.png',
    color: '#10B981',
    icon: ShoppingBag,
    features: ['Local marketplace', 'Same-day delivery', 'Secure checkout', 'Vendor dashboard'],
  },
  {
    code: 'PLT-03',
    name: 'Clexarly',
    nameParts: { colored: 'Clex', white: 'arly' },
    category: 'Business',
    status: 'Live',
    year: '2022',
    users: '5K+',
    description: 'Helping businesses grow through marketing tools, analytics, automation and customer engagement solutions.',
    image: '/clxry.png',
    color: '#8B5CF6',
    icon: TrendingUp,
    features: ['Analytics dashboard', 'Marketing tools', 'Customer engagement', 'Automation'],
  },
  {
    code: 'PLT-04',
    name: 'GripShule',
    nameParts: { colored: 'Grip', white: 'Shule' },
    category: 'Education',
    status: 'Live',
    year: '2024',
    users: '3K+',
    description: 'School management platform for seamless learning. Attendance, grades, fees and communication in one place.',
    image: '/gripshule.png',
    color: '#10B981',
    icon: School,
    features: ['Attendance tracking', 'Grade management', 'Fee collection', 'Parent portal'],
  },
  {
    code: 'PLT-05',
    name: 'Munolink',
    nameParts: { colored: 'M', white: 'unolink' },
    category: 'Commerce',
    status: 'Live',
    year: '2023',
    users: '4K+',
    description: 'E-commerce platform for seamless shopping. Curated products, trusted sellers and a smooth checkout.',
    image: '/muno.png',
    color: '#77AFE4',
    icon: ShoppingBag,
    features: ['Curated products', 'Trusted sellers', 'Fast checkout', 'Order tracking'],
  },
  {
    code: 'PLT-06',
    name: 'Lotina',
    nameParts: { colored: 'Lo', white: 'tina' },
    category: 'Investment',
    status: 'Live',
    year: '2023',
    users: '—',
    description: 'Strategic investment partner powering the ecosystem. Capital, market access and long-term vision for T3Clar platforms.',
    image: '/lotina.png',
    color: '#7C3AED',
    icon: Building2,
    features: ['Strategic capital', 'Market access', 'Long-term vision', 'Portfolio growth'],
  },
  {
    code: 'PLT-07',
    name: 'Cloud Infrastructure',
    nameParts: { colored: 'Cloud', white: '' },
    category: 'Infrastructure',
    status: 'Live',
    year: '2024',
    users: '—',
    description: 'Secure, scalable cloud infrastructure powering every platform in the ecosystem. 99.9% uptime, monitored 24/7.',
    image: '/CloudInfrastructure.webp',
    color: '#06B6D4',
    icon: Cloud,
    features: ['99.9% uptime', 'Auto-scaling', 'Encrypted data', 'Global CDN'],
  },
]

const stats = [
  { value: 7, suffix: '', label: 'Live platforms' },
  { value: 32, suffix: 'K+', label: 'Active users' },
  { value: 3, suffix: '', label: 'Countries' },
  { value: 99.9, suffix: '%', label: 'Uptime' },
]

const timeline = [
  { year: '2022', title: 'Clexarly launches', description: 'First product in the ecosystem — business growth tools for SMEs.', code: 'PLT-03' },
  { year: '2023', title: 'ShopIt & Munolink', description: 'Commerce expands. Two marketplaces serving customers and vendors.', code: 'PLT-02 · PLT-05' },
  { year: '2023', title: 'Lotina partnership', description: 'Strategic capital partnership accelerates the platform roadmap.', code: 'PLT-06' },
  { year: '2024', title: 'XRide, GripShule & Cloud', description: 'Mobility, education and infrastructure complete the connected stack.', code: 'PLT-01 · PLT-04 · PLT-07' },
]

/* ============================================================
   ANIMATED SPEC HEADER
   ============================================================ */

function SpecHeader({ section, title, meta }: { section: string; title: string; meta: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hex, setHex] = useState('00')

  useEffect(() => {
    if (!inView) return
    let frame = 0
    const target = Math.floor(Math.random() * 255)
    const id = setInterval(() => {
      frame += 1
      const current = Math.floor((target / 20) * frame)
      setHex(Math.min(current, target).toString(16).padStart(2, '0').toUpperCase())
      if (frame >= 20) clearInterval(id)
    }, 30)
    return () => clearInterval(id)
  }, [inView])

  return (
    <div ref={ref} className="border-t-2 border-[#0A0F1F]/20 mb-16">
      <div className="flex items-center justify-between flex-wrap gap-4 py-3 border-b border-[#0A0F1F]/15">
        <div className="flex items-center gap-6">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0EA5E9]"
          >
            {section}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/40 hidden sm:inline"
          >
            {title}
          </motion.span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/40"
        >
          {meta}
        </motion.span>
      </div>

      <div className="flex items-center justify-between py-1.5 border-b border-[#0A0F1F]/15">
        <div className="flex gap-1">
          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="w-px h-2 bg-[#0EA5E9]/50 origin-bottom"
            />
          ))}
        </div>
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/40 tabular-nums">
          0x{hex}
        </span>
      </div>
    </div>
  )
}

/* ============================================================
   ANIMATED COUNTER
   ============================================================ */

function Counter({ target, suffix = '', duration = 1800 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)
  const isDecimal = !Number.isInteger(target)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const id = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(id)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(id)
  }, [inView, target, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  )
}

/* ============================================================
   PAGE
   ============================================================ */

export default function EcosystemPage() {
  return (
    <div className="bg-[#FBF9F5] text-[#0A0F1F]">

      {/* ============================================================
          HERO — fits one screen
          ============================================================ */}
      <section className="relative min-h-screen pt-14 md:pt-16 px-4 overflow-hidden flex flex-col">
        {/* Ambient glows */}
        <div
          className="absolute -top-40 -left-40 w-[900px] h-[900px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(14,165,233,0.10) 0%, rgba(14,165,233,0.03) 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[900px] h-[900px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(101,163,13,0.08) 0%, rgba(101,163,13,0.02) 40%, transparent 70%)',
          }}
        />

        {/* Faint dotted grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #0A0F1F 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-7xl mx-auto relative w-full flex-1 flex flex-col py-6 md:py-8">

          {/* Top meta strip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between flex-wrap gap-4 border-b border-[#0A0F1F]/15 pb-3 mb-6"
          >
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0EA5E9]">
                § Ecosystem · T3Clar
              </span>
              <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0A0F1F]/40 hidden md:inline">
                Seven platforms · One foundation
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#65A30D] flex items-center gap-2">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-[#65A30D]"
              />
              All live
            </span>
          </motion.div>

          {/* Main grid */}
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center flex-1">
            <div className="col-span-12 lg:col-span-7">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[10px] font-mono tracking-[0.4em] uppercase text-[#0EA5E9] block mb-4"
              >
                Our Ecosystem
              </motion.span>

              <h1 className="leading-[0.95] tracking-[-0.03em]">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="block text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-light text-[#0A0F1F]/50"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  Connected platforms.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="block text-[2.25rem] md:text-[3.5rem] lg:text-[4.25rem] font-black text-[#0A0F1F]/85 mt-1"
                >
                  Stronger <span className="text-[#0EA5E9]">together.</span>
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-sm md:text-base leading-[1.7] text-[#1A1F2E]/70 mt-6 max-w-lg"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Seven platforms. One ecosystem. Every product we build shares
                the same engineering foundation, the same team, and the same
                standards — designed to work together.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="flex flex-wrap items-center gap-6 mt-8"
              >
                <a
                  href="#register"
                  className="group inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white bg-[#0A0F1F] px-5 py-3 hover:bg-[#0EA5E9] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore the ecosystem
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-xs md:text-sm font-medium text-[#0A0F1F] border-b-2 border-[#0A0F1F] pb-1 hover:text-[#0EA5E9] hover:border-[#0EA5E9] transition-all"
                >
                  Build with us
                  <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative aspect-[16/10] overflow-hidden"
              >
                <img src="/jinja-cityscape.jpg" alt="Jinja" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 text-[9px] font-mono tracking-[0.3em] uppercase text-white bg-[#0A0F1F]/60 backdrop-blur-sm px-2 py-1">
                  Fig. 01
                </div>
              </motion.div>
              <div className="mt-3 flex items-start justify-between gap-4">
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                  Jinja · 2025
                </span>
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                  Home of the ecosystem
                </span>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-6 pt-5 border-t border-dashed border-[#0A0F1F]/20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.08 }}
              >
                <div className="text-3xl md:text-4xl font-black text-[#0A0F1F] tracking-[-0.03em] leading-none">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50 mt-2">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          THE REGISTER — every platform in detail
          ============================================================ */}
      <section id="register" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#F4F1EA]" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(10,15,31,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(10,15,31,0.6) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="max-w-7xl mx-auto relative">

          <SpecHeader section="§ 01" title="Platform Register" meta="07 platforms · All live" />

          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-end mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-12 lg:col-span-8"
            >
              <h2 className="leading-[0.95] tracking-[-0.03em]">
                <span
                  className="block text-[1.75rem] md:text-[2.5rem] font-light text-[#0A0F1F]/50"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  Seven platforms.
                </span>
                <span className="block text-[2.25rem] md:text-[3.5rem] font-black text-[#0A0F1F]/80 mt-1">
                  One <span className="text-[#0EA5E9]">engineered stack.</span>
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="col-span-12 lg:col-span-4 lg:pl-8 lg:border-l border-[#0A0F1F]/15"
            >
              <p
                className="text-base leading-[1.75] text-[#1A1F2E]/70"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Every platform in the ecosystem — what it does, who it serves,
                and how it fits into the whole.
              </p>
            </motion.div>
          </div>

          {/* Platform rows — full detail */}
          <div className="space-y-0">
            {platforms.map((platform, i) => {
              const Icon = platform.icon
              return (
                <motion.article
                  key={platform.code}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group border-t border-[#0A0F1F]/15 py-12 md:py-16"
                >
                  <div className="grid grid-cols-12 gap-6 md:gap-12 items-start">

                    {/* Meta column */}
                    <div className="col-span-12 md:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-mono tracking-[0.3em] text-[#0EA5E9]">
                          {platform.code}
                        </span>
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/40">
                          {platform.year}
                        </span>
                      </div>
                      <div className={`inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.25em] uppercase ${
                        platform.status === 'Live' ? 'text-[#65A30D]' : 'text-[#0A0F1F]/50'
                      }`}>
                        {platform.status === 'Live' && (
                          <motion.span
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            className="w-1.5 h-1.5 rounded-full bg-[#65A30D]"
                          />
                        )}
                        {platform.status}
                      </div>
                    </div>

                    {/* Content column */}
                    <div className="col-span-12 md:col-span-6 md:pr-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-9 h-9 flex items-center justify-center shrink-0 border"
                          style={{
                            backgroundColor: `${platform.color}15`,
                            borderColor: `${platform.color}40`,
                          }}
                        >
                          <Icon size={15} style={{ color: platform.color }} strokeWidth={2} />
                        </div>
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                          {platform.category}
                        </span>
                      </div>

                      <h3
                        className="text-2xl md:text-3xl lg:text-4xl font-black tracking-[-0.02em] leading-tight mb-3 group-hover:opacity-100 transition-opacity"
                        style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                      >
                        <span style={{ color: platform.color }}>{platform.nameParts.colored}</span>
                        <span className="text-[#0A0F1F]/85">{platform.nameParts.white}</span>
                      </h3>

                      <p
                        className="text-base leading-[1.8] text-[#1A1F2E]/75 max-w-2xl mb-5"
                        style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                      >
                        {platform.description}
                      </p>

                      {/* Feature tags */}
                      <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
                        {platform.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-xs text-[#1A1F2E]/60">
                            <span className="w-3 h-px bg-[#0A0F1F]/30" />
                            {f}
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="group/link inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#0A0F1F] border-b border-[#0A0F1F] pb-1 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all"
                      >
                        Explore {platform.name}
                        <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>

                    {/* Photo + users column */}
                    <div className="col-span-12 md:col-span-4">
                      <div className="relative aspect-[4/3] overflow-hidden mb-4">
                        <img
                          src={platform.image}
                          alt={platform.name}
                          className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[900ms]"
                        />
                        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#0EA5E9]/0 group-hover:border-[#0EA5E9] transition-colors duration-500" />
                        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#0EA5E9]/0 group-hover:border-[#0EA5E9] transition-colors duration-500 delay-100" />
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                          {platform.code} · {platform.category}
                        </span>
                        {platform.users !== '—' && (
                          <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0EA5E9]">
                            {platform.users} users
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>

          {/* Bottom line */}
          <div className="border-t border-[#0A0F1F]/15 pt-10 mt-4 flex items-center justify-between flex-wrap gap-6">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/40">
              // End of register
            </span>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#0A0F1F] border-b border-[#0A0F1F] pb-1 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all"
            >
              Build on the ecosystem
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          TIMELINE — how the ecosystem grew
          ============================================================ */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#FBF9F5]" />
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative">

          <SpecHeader section="§ 02" title="Timeline" meta="2022 → Present" />

          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-end mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-12 lg:col-span-8"
            >
              <h2 className="leading-[0.95] tracking-[-0.03em]">
                <span
                  className="block text-[1.75rem] md:text-[2.5rem] font-light text-[#0A0F1F]/50"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  How the ecosystem
                </span>
                <span className="block text-[2.25rem] md:text-[3.5rem] font-black text-[#0A0F1F]/80 mt-1">
                  came <span className="text-[#0EA5E9]">together.</span>
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="col-span-12 lg:col-span-4 lg:pl-8 lg:border-l border-[#0A0F1F]/15"
            >
              <p
                className="text-base leading-[1.75] text-[#1A1F2E]/70"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Three years of shipping — each platform connected to the one
                before it, and to the ones that follow.
              </p>
            </motion.div>
          </div>

          {/* Timeline entries */}
          <div className="relative">
            {/* Vertical rail */}
            <div className="hidden md:block absolute top-4 bottom-4 left-[8%] w-px bg-[#0A0F1F]/15" />

            <div className="space-y-12">
              {timeline.map((entry, i) => (
                <motion.div
                  key={`${entry.year}-${entry.title}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="grid grid-cols-12 gap-6 md:gap-12 items-start relative"
                >
                  {/* Node */}
                  <div className="hidden md:flex absolute left-[8%] top-6 -translate-x-1/2 items-center justify-center">
                    <motion.span
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                      className="absolute w-5 h-5 rounded-full bg-[#0EA5E9]/20"
                    />
                    <span className="relative w-2.5 h-2.5 rounded-full bg-[#0EA5E9]" />
                  </div>

                  {/* Year */}
                  <div className="col-span-12 md:col-span-2 md:pl-0">
                    <div className="text-[10px] font-mono tracking-[0.3em] text-[#0EA5E9] mb-2">
                      {entry.code}
                    </div>
                    <div
                      className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-[#0A0F1F]/85"
                      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    >
                      {entry.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="col-span-12 md:col-span-10 md:pl-8">
                    <h3 className="text-xl md:text-2xl font-bold text-[#0A0F1F]/85 leading-tight mb-3">
                      {entry.title}
                    </h3>
                    <p
                      className="text-base leading-[1.75] text-[#1A1F2E]/70 max-w-2xl"
                      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    >
                      {entry.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA — quiet close
          ============================================================ */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#F4F1EA]" />
        <div
          className="absolute -bottom-40 -right-40 w-[900px] h-[900px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(101,163,13,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-6xl mx-auto relative">

          <SpecHeader section="§ 03" title="Correspondence" meta="Build on the ecosystem" />

          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-12 lg:col-span-7"
            >
              <h2 className="leading-[0.95] tracking-[-0.03em]">
                <span
                  className="block text-[1.75rem] md:text-[2.5rem] font-light text-[#0A0F1F]/50"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  Want to build
                </span>
                <span className="block text-[2.25rem] md:text-[3.5rem] font-black text-[#0A0F1F]/80 mt-1">
                  on the <span className="text-[#0EA5E9]">ecosystem?</span>
                </span>
              </h2>
              <p
                className="text-base md:text-lg leading-[1.75] text-[#1A1F2E]/70 mt-8 max-w-xl"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Whether you want to integrate with our platforms, co-develop a
                new product, or invest in what comes next — write to us.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="col-span-12 lg:col-span-5 lg:pl-8 lg:border-l border-[#0A0F1F]/15"
            >
              <div className="space-y-5 pb-8 mb-8 border-b border-dashed border-[#0A0F1F]/20">
                <div>
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/40 mb-2">
                    Email
                  </div>
                  <a
                    href="mailto:hello@t3clar.com"
                    className="text-base md:text-lg font-semibold text-[#0A0F1F] border-b-2 border-transparent hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all duration-300"
                  >
                    hello@t3clar.com
                  </a>
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/40 mb-2">
                    Studio
                  </div>
                  <div className="text-base font-semibold text-[#0A0F1F]">
                    Jinja · Uganda · East Africa
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#0A0F1F] border-b border-[#0A0F1F] pb-1 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all"
              >
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                Start a conversation
              </Link>
            </motion.div>
          </div>

          <div className="mt-20 pt-6 border-t border-dashed border-[#0A0F1F]/20 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-[#65A30D]"
              />
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                Studio status · Available
              </span>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/40">
              <span>Jinja, Uganda</span>
              <span className="w-px h-3 bg-[#0A0F1F]/30" />
              <span>Est. 2021</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}