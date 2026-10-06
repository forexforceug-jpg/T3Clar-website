'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Plus, Minus, ArrowUpRight, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion'

/* ============================================================
   DATA
   ============================================================ */

const partnerLogos = [
  { name: 'XRide', image: '/ttlogo.png' },
  { name: 'ShopIt', image: '/shopit.jpg' },
  { name: 'Tata Owen', image: '/owen.png' },
  { name: 'Lotina Investments', image: '/lotina.png' },
  { name: 'GoViral', image: '/goviral.ico' },
  { name: 'Fork & Go', image: '/Fork and Go.png' },
  { name: 'LowKey FX', image: '/logoTp.png' },
  { name: 'Meddy Furniture', image: '/meddy.png' },
  { name: 'Munolink', image: '/muno.png' },
  { name: 'GripShule', image: '/gripshule.png' },
]

const services = [
  { code: 'SVC-01', title: 'AI & Automation', description: 'Intelligent systems that learn and adapt to your business.', image: '/SoftwareDevelopment.jpg', stack: ['Python', 'TensorFlow', 'OpenAI'] },
  { code: 'SVC-02', title: 'Cloud Solutions', description: 'Scalable, secure infrastructure built for growth.', image: '/CloudInfrastructure.webp', stack: ['AWS', 'GCP', 'Kubernetes'] },
  { code: 'SVC-03', title: 'Cybersecurity', description: 'Enterprise-grade protection for your digital assets.', image: '/It-soln2.jpeg', stack: ['SOC 2', 'ISO 27001', 'Zero-Trust'] },
  { code: 'SVC-04', title: 'Custom Development', description: 'Tailored software engineered around your workflows.', image: '/44.jpg', stack: ['TypeScript', 'Go', 'Postgres'] },
  { code: 'SVC-05', title: 'Data & Analytics', description: 'Turning raw data into decisions that drive growth.', image: '/jinja-cityscape.jpg', stack: ['dbt', 'Looker', 'BigQuery'] },
  { code: 'SVC-06', title: 'Mobile Experiences', description: 'Beautiful, performant apps for iOS and Android.', image: '/MS.jpg', stack: ['React Native', 'Swift', 'Kotlin'] },
  { code: 'SVC-07', title: 'Architectural Design', description: 'Functional and beautiful architectural design work.', image: '/images.jpg', stack: ['AutoCAD', 'Revit', 'SketchUp'] },
  { code: 'SVC-08', title: 'Graphics Design', description: 'Brand systems and visual identity that endure.', image: '/66.png', stack: ['Figma', 'Illustrator', 'Blender'] },
  { code: 'SVC-09', title: 'Video Editing', description: 'Story-driven video production and post-production.', image: '/77.webp', stack: ['Premiere', 'After Effects', 'DaVinci'] },
]

const industries = [
  { code: 'IND-01', title: 'Technology', headline: 'Where we were born', description: 'Innovating the future with cutting-edge solutions.', image: '/SoftwareDevelopment.jpg', signals: ['SaaS', 'Platforms', 'APIs'] },
  { code: 'IND-02', title: 'Finance', headline: 'Money that moves', description: 'Driving financial inclusion and digital growth.', image: '/99.webp', signals: ['Payments', 'Lending', 'Wallet'] },
  { code: 'IND-03', title: 'Retail', headline: 'Commerce reimagined', description: 'Empowering businesses, enhancing customer experiences.', image: '/10.webp', signals: ['POS', 'Delivery', 'Inventory'] },
  { code: 'IND-04', title: 'Healthcare', headline: 'Care at a distance', description: 'Leveraging technology for better health outcomes.', image: '/Healthcare.jpg', signals: ['Telehealth', 'Records', 'Labs'] },
  { code: 'IND-05', title: 'Education', headline: 'Learning, unbound', description: 'Building smart systems for learning and innovation.', image: '/44.jpg', signals: ['LMS', 'Assessment', 'Content'] },
  { code: 'IND-06', title: 'Transport', headline: 'Cities in motion', description: 'Creating intelligent mobility and connected transport.', image: '/11.jpg', signals: ['Ride-hail', 'Fleet', 'Routing'] },
]

const benefits = [
  { code: 'BEN-01', text: 'Access to innovative solutions and technologies' },
  { code: 'BEN-02', text: 'Collaborate on impactful projects' },
  { code: 'BEN-03', text: 'Expand your market reach' },
  { code: 'BEN-04', text: 'Grow your brand with T3Clar' },
  { code: 'BEN-05', text: 'Dedicated partner support' },
]

const opportunities = [
  { code: 'PTN-01', title: 'Technology Partnerships', description: 'Co-develop solutions and integrate technologies.', image: '/SoftwareDevelopment.jpg' },
  { code: 'PTN-02', title: 'Strategic Alliances', description: 'Work together on initiatives that drive transformative change.', image: '/88.jpg' },
  { code: 'PTN-03', title: 'Referral Partnerships', description: 'Refer and grow together through mutual opportunities.', image: '/jinja-cityscape.jpg' },
  { code: 'PTN-04', title: 'Investment Partnerships', description: 'Invest in ideas, solutions and the future.', image: '/99.webp' },
]

const missionPillars = [
  { code: 'MSN-01', title: 'Innovate', description: 'We embrace creativity and innovation to build smart solutions that solve real-world challenges with fresh thinking and cutting-edge technology.' },
  { code: 'MSN-02', title: 'Deliver', description: 'We are committed to quality, reliability and excellence in every product we build, ensuring our solutions exceed expectations.' },
  { code: 'MSN-03', title: 'Empower', description: 'We empower businesses and communities through technology and knowledge, creating lasting impact that drives growth and transformation.' },
]

const processSteps = [
  { code: 'PHS-01', title: 'Discovery & Strategy', description: 'We start by understanding your business, your users and your goals — then map out a clear path forward.' },
  { code: 'PHS-02', title: 'Design & Engineering', description: 'Our team designs and builds with precision, using modern tools and proven methodologies.' },
  { code: 'PHS-03', title: 'Launch & Scale', description: 'We deploy, monitor and iterate — ensuring your solution grows with your business.' },
]

const stats = [
  { code: 'ST-01', number: 100, suffix: '+', label: 'Clients served' },
  { code: 'ST-02', number: 150, suffix: '+', label: 'Projects delivered' },
  { code: 'ST-03', number: 7, suffix: '', label: 'Live platforms' },
  { code: 'ST-04', number: 99.9, suffix: '%', label: 'Uptime' },
]

/* ============================================================
   ANIMATED SPEC HEADER
   ============================================================ */

function SpecHeader({
  section,
  title,
  meta,
}: {
  section: string
  title: string
  meta: string
}) {
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
    <div ref={ref} className="border-t-2 border-[#0F1419]/20 mb-16">
      <div className="flex items-center justify-between flex-wrap gap-4 py-3 border-b border-[#0F1419]/15">
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
            className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40 hidden sm:inline"
          >
            {title}
          </motion.span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40"
        >
          {meta}
        </motion.span>
      </div>

      <div className="flex items-center justify-between py-1.5 border-b border-[#0F1419]/15">
        <div className="flex gap-1">
          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="w-px h-2 bg-[#0EA5E9]/40 origin-bottom"
            />
          ))}
        </div>
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40 tabular-nums">
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
   MAGNETIC CARD
   ============================================================ */

function MagneticCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 15
    const y = (e.clientY - rect.top - rect.height / 2) / 15
    setOffset({ x, y })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      className={className}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: offset.x === 0 && offset.y === 0 ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.15s ease-out',
      }}
    >
      {children}
    </div>
  )
}

/* ============================================================
   PARALLAX IMAGE
   ============================================================ */

function ParallaxImage({ src, alt, className = '', range = 60 }: { src: string; alt: string; className?: string; range?: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-range, range])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        className="w-full h-[calc(100%+120px)] object-cover -mt-[60px]"
      />
    </div>
  )
}

/* ============================================================
   ACCORDION
   ============================================================ */

function ProcessAccordion() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="border-t border-[#0F1419]/15">
      {processSteps.map((step, i) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="border-b border-[#0F1419]/15"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full py-6 flex items-start gap-6 text-left group"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#0EA5E9] shrink-0 pt-1.5">
              {step.code}
            </span>
            <span className={`flex-1 text-xl md:text-2xl font-semibold tracking-[-0.01em] transition-colors ${open === i ? 'text-[#0F1419]' : 'text-[#0F1419]/50 group-hover:text-[#0F1419]'}`}>
              {step.title}
            </span>
            <span className={`w-8 h-8 border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${open === i ? 'border-[#0EA5E9] bg-[#0EA5E9] text-white rotate-180' : 'border-[#0F1419]/20 text-[#0F1419]/50 group-hover:border-[#0EA5E9] group-hover:text-[#0EA5E9]'}`}>
              {open === i ? <Minus size={13} /> : <Plus size={13} />}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="text-[#0F1419]/70 leading-[1.75] pl-24 pr-14 pb-6 max-w-2xl text-base">
                  {step.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

/* ============================================================
   PAGE
   ============================================================ */

export default function AboutPage() {
  return (
    <div className="bg-[#FBF9F5] text-[#0F1419]">

      {/* ═══════════════════════════════════════════════════
          HERO — fits one screen, compact, softer titles
          ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen pt-14 md:pt-16 px-4 overflow-hidden flex flex-col">

        {/* Faint grid */}
        <div
          className="absolute inset-0 top-14 md:top-16 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(15,20,25,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15,20,25,0.5) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Corner markers */}
        {[
          { pos: 'top-20 left-6', text: '[0,0]' },
          { pos: 'top-20 right-6', text: '[1440,0]' },
          { pos: 'bottom-6 left-6', text: '[0,900]' },
          { pos: 'bottom-6 right-6', text: '[1440,900]' },
        ].map((m) => (
          <motion.div
            key={m.text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`absolute ${m.pos} text-[9px] font-mono tracking-[0.3em] text-[#0EA5E9]/60 hidden md:block`}
          >
            {m.text}
          </motion.div>
        ))}

        <div className="max-w-[1400px] mx-auto relative w-full flex-1 flex flex-col py-6 md:py-8">

          {/* Top status strip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between flex-wrap gap-4 border-b border-[#0F1419]/15 pb-3 mb-6"
          >
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0EA5E9] flex items-center gap-2">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-[#65A30D]"
                />
                T3Clar Systems
              </span>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40 hidden md:inline">
                Profile v4.0
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40">
              Jinja, UG · UTC+3
            </span>
          </motion.div>

          {/* Main grid */}
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center flex-1">

            {/* Left — Heading */}
            <div className="col-span-12 md:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0EA5E9] mb-4"
              >
                // Studio Profile · Index 00
              </motion.p>

              <h1 className="leading-[0.95] tracking-[-0.03em]">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="block text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-light text-[#0F1419]/50"
                >
                  We build
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="block text-[2.25rem] md:text-[3.5rem] lg:text-[4.25rem] font-black text-[#0F1419]/70"
                >
                  the digital backbone
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="block text-[1.5rem] md:text-[2.25rem] lg:text-[2.75rem] font-light italic text-[#0EA5E9]/60"
                >
                  for Africa&apos;s next decade.
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-sm md:text-base leading-[1.7] text-[#0F1419]/70 mt-6 max-w-lg font-mono"
              >
                T3Clar is a software studio based in Jinja, Uganda.
                We design, build, and ship the platforms that African businesses run on.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="flex flex-wrap items-center gap-4 mt-8"
              >
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-3 text-xs md:text-sm font-mono tracking-wider uppercase text-white bg-[#0EA5E9] px-5 py-3 hover:bg-[#0F1419] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="opacity-80"
                  >
                    &gt;
                  </motion.span>
                  Explore Services
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-mono tracking-wider uppercase text-[#0EA5E9] border border-[#0EA5E9]/40 px-5 py-3 hover:bg-[#0EA5E9]/10 hover:-translate-y-0.5 transition-all"
                >
                  Get in touch
                  <ArrowUpRight size={13} />
                </Link>
              </motion.div>
            </div>

            {/* Right — Data readout */}
            <div className="col-span-12 md:col-span-5 md:pl-8 md:border-l border-[#0F1419]/15">
              <div className="space-y-0 border-t border-[#0F1419]/15">
                {[
                  { key: 'Founded', value: '2021' },
                  { key: 'Based', value: 'Jinja, UG' },
                  { key: 'Team', value: '20 — 30' },
                  { key: 'Markets', value: 'UG · KE · RW' },
                  { key: 'Focus', value: 'Software' },
                  { key: 'Status', value: '● Operational', live: true },
                ].map((row, i) => (
                  <motion.div
                    key={row.key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                    className="flex items-center justify-between py-3 border-b border-[#0F1419]/15"
                  >
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40">
                      {row.key}
                    </span>
                    <span className={`text-xs font-mono tracking-wider ${row.live ? 'text-[#65A30D]' : 'text-[#0F1419]'}`}>
                      {row.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="mt-6 aspect-[16/10] overflow-hidden border border-[#0F1419]/15 relative group"
              >
                <img
                  src="/jinja-cityscape.jpg"
                  alt="Jinja"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 text-[9px] font-mono tracking-[0.3em] uppercase text-[#0F1419] bg-[#FBF9F5]/80 backdrop-blur-sm px-2 py-1">
                  IMG-01 · Jinja
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-6 pt-4 border-t border-[#0F1419]/15 flex items-center justify-between flex-wrap gap-4"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40">
              Scroll to explore · 08 sections
            </span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0EA5E9]"
            >
              ↓ 00/08
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PARTNER LOGOS — larger tiles
          ═══════════════════════════════════════════════════ */}
      <section className="bg-[#F4F2ED] border-y border-[#0F1419]/15 py-8 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 mb-5 flex items-center justify-between">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40">
            // Trusted systems · 10 partners
          </span>
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#65A30D] flex items-center gap-2">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#65A30D]"
            />
            All online
          </span>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F4F2ED] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-[#F4F2ED] z-10 pointer-events-none" />
          <div className="flex" style={{ width: 'max-content', animation: 'marquee-scroll 55s linear infinite' }}>
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div key={i} className="flex items-center gap-5 mx-8 group">
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#0F1419]/30">
                  {String((i % partnerLogos.length) + 1).padStart(2, '0')}
                </span>
                <div className="w-16 h-16 border border-[#0F1419]/15 flex items-center justify-center p-2.5 bg-white group-hover:border-[#0EA5E9] transition-colors">
                  <img src={logo.image} alt={logo.name} className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-sm font-mono tracking-wider uppercase text-[#0F1419]/70 group-hover:text-[#0EA5E9] transition-colors whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          § 01 — SERVICES
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#FBF9F5]">
        <div className="max-w-[1400px] mx-auto">

          <SpecHeader section="§ 01" title="Services" meta="09 modules · all online" />

          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-12 md:col-span-7"
            >
              <p className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0EA5E9] mb-5">
                // Nine disciplines, one studio
              </p>
              <h2 className="leading-[0.95] tracking-[-0.03em]">
                <span className="block text-[1.75rem] md:text-[2.5rem] font-light text-[#0F1419]/50">
                  Everything you need
                </span>
                <span className="block text-[2.25rem] md:text-[3.5rem] font-black text-[#0F1419]/75">
                  to ship &amp; scale.
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="col-span-12 md:col-span-5 md:pl-8 md:border-l border-[#0F1419]/15"
            >
              <p className="text-base leading-[1.75] text-[#0F1419]/70">
                From AI to video, from cloud to design — nine technical
                modules that plug into your stack.
              </p>
            </motion.div>
          </div>

          <div className="border-t border-[#0F1419]/20">
            {services.map((service, i) => (
              <motion.article
                key={service.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="group border-b border-[#0F1419]/15 grid grid-cols-12 gap-4 md:gap-6 py-8 md:py-10 items-center hover:bg-[#0EA5E9]/[0.03] transition-colors duration-500"
              >
                <div className="col-span-12 md:col-span-1">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#0EA5E9]">
                    {service.code}
                  </span>
                </div>

                <div className="col-span-12 md:col-span-4">
                  <h3 className="text-xl md:text-2xl font-bold tracking-[-0.01em] text-[#0F1419] mb-3 group-hover:text-[#0EA5E9] transition-colors">
                    {service.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {service.stack.map((s, si) => (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + si * 0.05 }}
                        className="text-[9px] font-mono tracking-wider uppercase text-[#0F1419]/60 border border-[#0F1419]/20 px-1.5 py-0.5 group-hover:border-[#0EA5E9]/40 transition-colors"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="col-span-12 md:col-span-4">
                  <p className="text-base leading-[1.7] text-[#0F1419]/70">
                    {service.description}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-3 flex items-center gap-4">
                  <div className="relative flex-1 aspect-[16/10] overflow-hidden border border-[#0F1419]/15">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale-[55%] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-[800ms]"
                    />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#0EA5E9]/0 group-hover:border-[#0EA5E9]/80 transition-colors duration-500" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#0EA5E9]/0 group-hover:border-[#0EA5E9]/80 transition-colors duration-500" />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-[#0F1419]/30 group-hover:text-[#0EA5E9] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0"
                  />
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40">
              // End of module list
            </span>
            <Link href="/services" className="group text-xs font-mono tracking-[0.25em] uppercase text-[#0F1419] border-b border-[#0F1419] pb-1 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all inline-flex items-center gap-2">
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              See full catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          § 02 — PARTNERSHIP
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#F4F2ED]">
        <div className="max-w-[1400px] mx-auto">

          <SpecHeader section="§ 02" title="Strategic Partnership" meta="Lotina × T3Clar · Since 2023" />

          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-12 md:col-span-7"
            >
              <p className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0EA5E9] mb-5">
                // Two nodes, one network
              </p>
              <h2 className="leading-[0.95] tracking-[-0.03em]">
                <span className="block text-[1.75rem] md:text-[2.5rem] font-light italic text-[#0F1419]/50">
                  Where capital
                </span>
                <span className="block text-[2.25rem] md:text-[3.5rem] font-black text-[#0F1419]/75">
                  meets code.
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="col-span-12 md:col-span-5 md:pl-8 md:border-l border-[#0F1419]/15"
            >
              <p className="text-base leading-[1.75] text-[#0F1419]/70 font-mono">
                An ecosystem built at the intersection of strategic
                capital and engineering. Designed for the long run.
              </p>
            </motion.div>
          </div>

          <div className="relative grid grid-cols-12 border border-[#0F1419]/15 bg-white">
            {/* ... rest unchanged, just the title sizes above are the ones that matter ... */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="col-span-12 md:col-span-6 p-8 md:p-12 md:border-r border-[#0F1419]/15"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 border border-[#65A30D]/40 bg-[#65A30D]/5 flex items-center justify-center p-2">
                  <img src="/lotina.png" alt="Lotina" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#65A30D] mb-1">
                    NODE-A · Capital Engine
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-[-0.02em] text-[#0F1419]">
                    Lotina Investments
                  </h3>
                </div>
              </div>
              <p className="text-base leading-[1.75] text-[#0F1419]/70 mb-10 max-w-md">
                Provides the capital, market access and strategic vision
                that powers the ecosystem.
              </p>
              <div className="space-y-0 mb-10 border-t border-[#0F1419]/15">
                {['Investment Capital', 'Market Access', 'Strategic Vision'].map((text, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-4 py-4 border-b border-[#0F1419]/15"
                  >
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#65A30D]">●</span>
                    <span className="text-sm text-[#0F1419]/80">{text}</span>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <div className="text-5xl font-black tracking-[-0.04em] text-[#0F1419]">
                    <Counter target={2} suffix="+" />
                  </div>
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40 mt-3">
                    Ventures backed
                  </div>
                </div>
                <div>
                  <div className="text-5xl font-black tracking-[-0.04em] text-[#0F1419]">
                    <Counter target={3} />
                  </div>
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40 mt-3">
                    Markets reached
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="col-span-12 md:col-span-6 p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 border border-[#0EA5E9]/40 bg-[#0EA5E9]/5 flex items-center justify-center p-2">
                  <img src="/t3logo.png" alt="T3Clar" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0EA5E9] mb-1">
                    NODE-B · Technology Engine
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-[-0.02em] text-[#0F1419]">
                    T3Clar
                  </h3>
                </div>
              </div>
              <p className="text-base leading-[1.75] text-[#0F1419]/70 mb-10 max-w-md">
                Builds the platforms, infrastructure and software that turn
                vision into working product.
              </p>
              <div className="space-y-0 mb-10 border-t border-[#0F1419]/15">
                {['Software Engineering', 'Cloud & AI Systems', 'Product Design'].map((text, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-4 py-4 border-b border-[#0F1419]/15"
                  >
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#0EA5E9]">●</span>
                    <span className="text-sm text-[#0F1419]/80">{text}</span>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <div className="text-5xl font-black tracking-[-0.04em] text-[#0F1419]">
                    <Counter target={150} suffix="+" />
                  </div>
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40 mt-3">
                    Projects shipped
                  </div>
                </div>
                <div>
                  <div className="text-5xl font-black tracking-[-0.04em] text-[#0F1419]">
                    24/7
                  </div>
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40 mt-3">
                    Support coverage
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 border-2 border-[#0EA5E9]"
                />
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: 'spring' }}
                  className="relative w-16 h-16 bg-white border-2 border-[#0EA5E9] flex items-center justify-center"
                >
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="text-[#0EA5E9] font-mono text-lg"
                  >
                    ×
                  </motion.span>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 pt-10 border-t border-[#0F1419]/15 grid grid-cols-12 gap-6 md:gap-10"
          >
            <div className="col-span-12 md:col-span-3">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40">
                // The conviction
              </span>
            </div>
            <div className="col-span-12 md:col-span-9">
              <p className="text-2xl md:text-4xl leading-[1.25] tracking-[-0.015em] text-[#0F1419]/80">
                Every platform we launch lives at the intersection of{' '}
                <em className="text-[#65A30D] not-italic">patient capital</em> and{' '}
                <em className="text-[#0EA5E9] not-italic">relentless engineering</em>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          § 03 — INDUSTRIES
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#FBF9F5]">
        <div className="max-w-[1400px] mx-auto">

          <SpecHeader section="§ 03" title="Industries" meta="06 sectors · live" />

          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-12 md:col-span-7"
            >
              <p className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0EA5E9] mb-5">
                // Where our work runs
              </p>
              <h2 className="leading-[0.95] tracking-[-0.03em]">
                <span className="block text-[1.75rem] md:text-[2.5rem] font-light text-[#0F1419]/50">
                  Six sectors.
                </span>
                <span className="block text-[2.25rem] md:text-[3.5rem] font-black text-[#0F1419]/75">
                  One continuous thread.
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="col-span-12 md:col-span-5 md:pl-8 md:border-l border-[#0F1419]/15"
            >
              <p className="text-base leading-[1.75] text-[#0F1419]/70">
                Every sector is a system we understand deeply — and can build
                solutions for from scratch.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0F1419]/15">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group bg-[#FBF9F5] p-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0EA5E9]/0 via-[#0EA5E9]/0 to-[#0EA5E9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0EA5E9]">
                      {industry.code}
                    </span>
                    <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#65A30D] flex items-center gap-2">
                      <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="w-1 h-1 rounded-full bg-[#65A30D]"
                      />
                      LIVE
                    </span>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden mb-6 border border-[#0F1419]/15">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover grayscale-[55%] group-hover:grayscale-0 group-hover:scale-[1.06] transition-all duration-[1s]"
                    />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#0EA5E9]/0 group-hover:border-[#0EA5E9] transition-colors duration-500 delay-200" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#0EA5E9]/0 group-hover:border-[#0EA5E9] transition-colors duration-500 delay-200" />
                  </div>

                  <div className="mb-4">
                    <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40 mb-2">
                      {industry.title}
                    </div>
                    <h3 className="text-xl md:text-2xl font-black tracking-[-0.015em] text-[#0F1419]/85">
                      {industry.headline}
                    </h3>
                  </div>

                  <p className="text-sm leading-[1.75] text-[#0F1419]/70 mb-6">
                    {industry.description}
                  </p>

                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-4 border-t border-[#0F1419]/15">
                    {industry.signals.map((s, si) => (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + si * 0.06 }}
                        className="text-[9px] font-mono tracking-wider uppercase text-[#0F1419]/50"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          § 04 — VISION & MISSION
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#F4F2ED] border-t border-[#0F1419]/15">
        <div className="max-w-[1400px] mx-auto">

          <SpecHeader section="§ 04" title="Vision & Mission" meta="Charter · 2021" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-12 gap-6 md:gap-10 mb-20"
          >
            <div className="col-span-12 md:col-span-10">
              <p className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0EA5E9] mb-6">
                // Statement of intent
              </p>
              <p className="text-2xl md:text-4xl lg:text-5xl leading-[1.15] tracking-[-0.02em] text-[#0F1419]/80 font-light">
                <span className="text-[#0EA5E9]">A connected Jinja</span> where transport, shopping, healthcare, payments and community all run on shared digital infrastructure.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t-2 border-b border-[#0F1419]/20">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`py-10 px-4 ${i !== stats.length - 1 ? 'md:border-r border-[#0F1419]/15' : ''}`}
              >
                <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0EA5E9] mb-4">
                  {stat.code}
                </div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.045em] text-[#0F1419]">
                  <Counter target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/50 mt-4">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40">
                // Three commitments
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 h-px bg-[#0F1419]/15 origin-left"
              />
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40">
                MOD 01-03
              </span>
            </div>

            <div className="grid grid-cols-12 gap-6 md:gap-10">
              {missionPillars.map((p, i) => (
                <motion.div
                  key={p.code}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="col-span-12 md:col-span-4"
                >
                  <div className="border-t-2 border-[#0EA5E9] pt-5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0EA5E9]">
                        {p.code}
                      </span>
                      <motion.span
                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        className="w-1.5 h-1.5 bg-[#65A30D]"
                      />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black tracking-[-0.03em] leading-none text-[#0F1419]/85 mb-6">
                      {p.title}
                    </h3>
                    <p className="text-base leading-[1.8] text-[#0F1419]/70">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          § 05 — WORKING TOGETHER
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#FBF9F5]">
        <div className="max-w-[1400px] mx-auto">

          <SpecHeader section="§ 05" title="Working Together" meta="Open · 2025" />

          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-12 md:col-span-8"
            >
              <p className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0EA5E9] mb-5">
                // Built for the long run
              </p>
              <h2 className="leading-[0.95] tracking-[-0.03em]">
                <span className="block text-[1.75rem] md:text-[2.5rem] font-light text-[#0F1419]/50">
                  We build with,
                </span>
                <span className="block text-[2.25rem] md:text-[3.5rem] font-black text-[#0F1419]/75">
                  not just for.
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="col-span-12 md:col-span-4 md:pl-8 md:border-l border-[#0F1419]/15"
            >
              <p className="text-base leading-[1.75] text-[#0F1419]/70 font-mono">
                Long-term relationships. Trust, innovation, shared success.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#0F1419]/15">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40">
                  // What you get
                </span>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0EA5E9]">
                  05 items
                </span>
              </div>
              <ul>
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={benefit.code}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-6 py-5 border-b border-[#0F1419]/15 group"
                  >
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#65A30D] shrink-0 pt-1">
                      {benefit.code}
                    </span>
                    <span className="text-base leading-[1.7] text-[#0F1419]/75 group-hover:text-[#0F1419] group-hover:translate-x-1 transition-all">
                      {benefit.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="col-span-12 md:col-span-7">
              <div className="flex items-center justify-between pb-4 border-b border-[#0F1419]/15 mb-8">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40">
                  // Partnership models
                </span>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0EA5E9]">
                  04 types
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {opportunities.map((opp, i) => (
                  <MagneticCard key={opp.code} className="group">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden mb-4 border border-[#0F1419]/15">
                        <img
                          src={opp.image}
                          alt={opp.title}
                          className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 group-hover:scale-[1.06] transition-all duration-700"
                        />
                        <div className="absolute top-3 left-3 text-[9px] font-mono tracking-[0.3em] text-[#0F1419] bg-[#FBF9F5]/85 backdrop-blur-sm px-2 py-1">
                          {opp.code}
                        </div>
                      </div>
                      <h3 className="text-base font-bold tracking-[-0.01em] text-[#0F1419] mb-2 group-hover:text-[#0EA5E9] transition-colors">
                        {opp.title}
                      </h3>
                      <p className="text-sm leading-[1.65] text-[#0F1419]/60">
                        {opp.description}
                      </p>
                    </motion.div>
                  </MagneticCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          § 06 — APPROACH
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#F4F2ED]">
        <div className="max-w-[1400px] mx-auto">

          <SpecHeader section="§ 06" title="Approach" meta="03 phases · iterative" />

          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="col-span-12 md:col-span-6"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-[#0F1419]/15">
                <ParallaxImage
                  src="/It-soln2.jpeg"
                  alt="T3Clar approach"
                  className="w-full h-full"
                  range={40}
                />
                <div className="absolute top-4 left-4 text-[9px] font-mono tracking-[0.3em] uppercase text-[#0F1419] bg-[#FBF9F5]/85 backdrop-blur-sm px-2 py-1">
                  IMG-06
                </div>
                <div className="absolute bottom-4 right-4 text-[9px] font-mono tracking-[0.3em] uppercase text-[#0F1419] bg-[#FBF9F5]/85 backdrop-blur-sm px-2 py-1">
                  F.06 / STU
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40">
                <span>Method, not magic</span>
                <span>Jinja · UG</span>
              </div>
            </motion.div>

            <div className="col-span-12 md:col-span-6 md:pt-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0EA5E9] mb-5"
              >
                // Sequenced delivery
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="leading-[0.95] tracking-[-0.03em] mb-8"
              >
                <span className="block text-[1.5rem] md:text-[2.25rem] font-light text-[#0F1419]/50">
                  People. Process.
                </span>
                <span className="block text-[2rem] md:text-[3rem] font-black text-[#0F1419]/75">
                  Then technology.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base leading-[1.8] text-[#0F1419]/70 mb-10 max-w-lg"
              >
                We combine the right people, efficient processes and modern
                technology to build solutions that are scalable, secure and future-ready.
              </motion.p>

              <ProcessAccordion />

              <div className="mt-12 pt-8 border-t border-[#0F1419]/15 grid grid-cols-2 gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0EA5E9] mb-3">
                    METRIC-01
                  </div>
                  <div className="text-4xl md:text-5xl font-black tracking-[-0.04em] text-[#0F1419]">
                    <Counter target={98} suffix="%" />
                  </div>
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/50 mt-3">
                    Client satisfaction
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0EA5E9] mb-3">
                    METRIC-02
                  </div>
                  <div className="text-4xl md:text-5xl font-black tracking-[-0.04em] text-[#0F1419]">
                    <Counter target={4.9} />
                  </div>
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/50 mt-3">
                    Average rating
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          § 07 — TESTIMONIAL
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#FBF9F5] border-t border-[#0F1419]/15">
        <div className="max-w-[1200px] mx-auto">

          <SpecHeader section="§ 07" title="In Their Words" meta="Reference · Meddy Furniture" />

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-12 gap-6 md:gap-10"
          >
            <div className="col-span-12 md:col-span-3">
              <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0EA5E9] mb-4">
                TEST-01
              </div>
              <motion.div
                initial={{ scale: 0.8, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="w-16 h-16 overflow-hidden border border-[#0F1419]/15 bg-white p-1.5 mb-4"
              >
                <img src="/meddy.png" alt="Meddy Furniture" className="w-full h-full object-contain" />
              </motion.div>
              <div className="text-xs font-mono tracking-[0.25em] uppercase text-[#0F1419]/50">
                Meddy Furniture<br />Kampala, UG
              </div>
            </div>

            <div className="col-span-12 md:col-span-9">
              <p className="text-2xl md:text-4xl lg:text-5xl leading-[1.15] tracking-[-0.02em] text-[#0F1419]/85 mb-10">
                &ldquo;T3Clar is a valuable technology partner. Their <em className="text-[#0EA5E9] not-italic">innovation</em>, <em className="text-[#0EA5E9] not-italic">reliability</em> and <em className="text-[#0EA5E9] not-italic">commitment to excellence</em> make collaboration easy and impactful.&rdquo;
              </p>

              <footer className="pt-6 border-t border-[#0F1419]/15 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-sm font-bold text-[#0F1419]">Meddy A.</div>
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/50 mt-1">
                    CEO · Meddy Furniture
                  </div>
                </div>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#65A30D] flex items-center gap-2">
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-[#65A30D]"
                  />
                  Verified client
                </span>
              </footer>
            </div>
          </motion.blockquote>
        </div>
      </section>

      {/* ============================================================
          § 08 — CTA
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#F4F2ED] border-t border-[#0F1419]/15 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(15,20,25,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15,20,25,0.5) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="max-w-[1400px] mx-auto relative">

          <SpecHeader section="§ 08" title="Correspondence" meta="Response · 24h" />

          <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-12 md:col-span-7"
            >
              <p className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0EA5E9] mb-5">
                // Initiating contact
              </p>
              <h2 className="leading-[0.95] tracking-[-0.03em]">
                <span className="block text-[1.75rem] md:text-[2.5rem] font-light text-[#0F1419]/50">
                  Let&apos;s build
                </span>
                <span className="block text-[2.25rem] md:text-[3.5rem] font-black text-[#0F1419]/75">
                  something lasting.
                </span>
              </h2>
              <p className="text-base md:text-lg leading-[1.75] text-[#0F1419]/70 mt-8 max-w-lg font-mono">
                If you have a project in mind — or just want to talk through an idea — write to us.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="col-span-12 md:col-span-5 md:pl-8 md:border-l border-[#0F1419]/15"
            >
              <div className="space-y-0 border-t border-[#0F1419]/15">
                {[
                  { key: 'Email', value: 'hello@t3clar.com', href: 'mailto:hello@t3clar.com' },
                  { key: 'Studio', value: 'Jinja · UG · EA' },
                  { key: 'Hours', value: 'Mon — Fri · 09:00–18:00' },
                  { key: 'Response', value: '< 24 hours', live: true },
                ].map((row, i) => (
                  <motion.div
                    key={row.key}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="flex items-center justify-between py-4 border-b border-[#0F1419]/15"
                  >
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40">
                      {row.key}
                    </span>
                    {row.href ? (
                      <a href={row.href} className="text-sm font-mono text-[#0EA5E9] hover:text-[#65A30D] transition-colors">
                        {row.value}
                      </a>
                    ) : (
                      <span className={`text-sm font-mono ${row.live ? 'text-[#65A30D]' : 'text-[#0F1419]'}`}>
                        {row.value}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              <Link href="/contact" className="group inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#0EA5E9] border-b border-[#0EA5E9] pb-1 hover:text-[#65A30D] hover:border-[#65A30D] transition-all mt-8">
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                Open a conversation
              </Link>
            </motion.div>
          </div>

          <div className="mt-20 pt-6 border-t border-[#0F1419]/15 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-[#65A30D]"
              />
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/60">
                Available for new work
              </span>
            </div>
            <div className="flex items-center gap-6 text-[10px] font-mono tracking-[0.3em] uppercase text-[#0F1419]/40">
              <span>Jinja, UG</span>
              <span>·</span>
              <span>Est. 2021</span>
              <span>·</span>
              <span>v4.0</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}