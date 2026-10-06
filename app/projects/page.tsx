'use client'

import Link from 'next/link'
import { useState, useMemo, useRef, useEffect } from 'react'
import {
  ArrowUpRight, ArrowRight, Plus, Minus,
} from 'lucide-react'
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion'

/* ============================================================
   DATA
   ============================================================ */

const categories = [
  { label: 'All Work', key: 'all' },
  { label: 'Mobile Apps', key: 'MOBILE APP' },
  { label: 'Web Platforms', key: 'WEB APPLICATION' },
  { label: 'E-commerce', key: 'E-COMMERCE' },
  { label: 'Systems', key: 'SYSTEMS & PLATFORMS' },
  { label: 'Infrastructure', key: 'INFRASTRUCTURE' },
]

const projects = [
  { number: '01', title: 'XRide', category: 'Mobile Application', code: 'MOBILE APP', subtitle: 'Smart Transportation Platform', description: 'A smart transport solution connecting passengers with reliable drivers across Jinja through real-time tracking, cashless payments and improved ride experience.', image: '/MS.jpg', status: 'Live', year: '2024' },
  { number: '02', title: 'ShopIt', category: 'E-Commerce', code: 'E-COMMERCE', subtitle: 'Shopping & Delivery Ecosystem', description: 'An all-in-one marketplace for restaurants, pharmacies, shops and local businesses offering fast, reliable and secure deliveries.', image: '/shopit.png', status: 'Live', year: '2024' },
  { number: '03', title: 'Clexarly', category: 'Web Platform', code: 'WEB APPLICATION', subtitle: 'Digital Growth & Business Solutions', description: 'Helping businesses grow through marketing tools, analytics, automation and customer engagement solutions.', image: '/clxry.png', status: 'Live', year: '2023' },
  { number: '04', title: 'Munolink', category: 'E-Commerce', code: 'E-COMMERCE', subtitle: 'E-commerce Platform', description: 'Seamless shopping platform connecting curated products with trusted sellers. Fast checkout, order tracking and a smooth customer experience.', image: '/muno.png', status: 'Live', year: '2023' },
  { number: '05', title: 'GripShule', category: 'Web Platform', code: 'WEB APPLICATION', subtitle: 'School Management Platform', description: 'Complete school management system — attendance tracking, grade management, fee collection and parent communication in one place.', image: '/gripshule.png', status: 'Live', year: '2024' },
  { number: '06', title: 'Business Management System', category: 'Web Application', code: 'WEB APPLICATION', subtitle: 'Custom Management Solutions', description: 'Custom business management systems designed to streamline operations, improve productivity and drive growth.', image: '/SoftwareDevelopment.jpg', status: 'Active', year: '2024' },
  { number: '07', title: 'Payment Gateway Integration', category: 'Systems & Platforms', code: 'SYSTEMS & PLATFORMS', subtitle: 'Secure Payment Solutions', description: 'Secure and seamless payment solutions supporting multiple payment methods and real-time settlement.', image: '/CloudInfrastructure.webp', status: 'Live', year: '2023' },
  { number: '08', title: 'Lotina Investments Platform', category: 'Systems & Platforms', code: 'SYSTEMS & PLATFORMS', subtitle: 'Investment & Portfolio Management', description: 'Digital investment platform supporting portfolio tracking, capital deployment and strategic partnership operations.', image: '/lotina.png', status: 'Live', year: '2023' },
  { number: '09', title: 'Cloud Infrastructure', category: 'Infrastructure', code: 'INFRASTRUCTURE', subtitle: 'Scalable Cloud Architecture', description: 'Scalable, secure and reliable cloud infrastructure designed to support business growth and innovation.', image: '/It-soln2.jpeg', status: 'Enterprise', year: '2024' },
  { number: '11', title: 'GoViral Marketing Suite', category: 'Systems & Platforms', code: 'SYSTEMS & PLATFORMS', subtitle: 'Marketing Automation', description: 'Marketing automation platform helping brands run multi-channel campaigns with analytics, scheduling and audience segmentation.', image: '/goviral.ico', status: 'Live', year: '2023' },
  { number: '12', title: 'Fork & Go Delivery', category: 'Mobile Application', code: 'MOBILE APP', subtitle: 'Food Delivery Platform', description: 'On-demand food delivery app connecting restaurants with hungry customers. Real-time tracking, cashless payments and driver routing.', image: '/Fork and Go.png', status: 'Live', year: '2024' },
]

const labsProjects = [
  { codename: 'Project Kito', category: 'AI · Assistive Tech', status: 'In Development', progress: 72, description: 'A Luganda-first AI assistant designed for local businesses to automate customer support, sales and reporting.', image: '/SoftwareDevelopment.jpg', tags: ['AI', 'NLP', 'Local Language'] },
  { codename: 'Project Mvua', category: 'Fintech · Payments', status: 'Prototype', progress: 45, description: 'A rural-first micro-payments rail that works offline and syncs when connection is restored.', image: '/CloudInfrastructure.webp', tags: ['Offline-First', 'Payments'] },
  { codename: 'Project Nyota', category: 'Health · Diagnostics', status: 'Research', progress: 28, description: 'Low-bandwidth telemedicine platform connecting rural clinics with specialists via offline-capable mobile tools.', image: '/It-soln2.jpeg', tags: ['HealthTech', 'Mobile'] },
]

const labPrinciples = [
  { label: 'Experiment Fast', value: 'Ship prototypes in weeks, not months.' },
  { label: 'Validate Early', value: 'Real users test real builds before scale.' },
  { label: 'Scale What Works', value: 'The best experiments graduate to products.' },
  { label: 'Solve Real Problems', value: 'Every lab project targets a real Jinja pain point.' },
]

const stats = [
  { value: 50, suffix: '+', label: 'Projects delivered' },
  { value: 30, suffix: '+', label: 'Happy clients' },
  { value: 100, suffix: 'K+', label: 'Users impacted' },
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
      {Math.floor(count)}
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
    const x = (e.clientX - rect.left - rect.width / 2) / 18
    const y = (e.clientY - rect.top - rect.height / 2) / 18
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

function ParallaxImage({ src, alt, className = '', range = 40 }: { src: string; alt: string; className?: string; range?: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-range, range])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        className="w-full h-[calc(100%+80px)] object-cover -mt-[40px]"
      />
    </div>
  )
}

/* ============================================================
   PAGE
   ============================================================ */

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedLab, setExpandedLab] = useState<number | null>(0)

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects
    return projects.filter((p) => p.code === activeCategory)
  }, [activeCategory])

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
                § Work · Portfolio
              </span>
              <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0A0F1F]/40 hidden md:inline">
                Twelve live · Three in lab
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0A0F1F]/40">
              Updated · 2025
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
                Selected Work
              </motion.span>

              <h1 className="leading-[0.95] tracking-[-0.03em]">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="block text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-light text-[#0A0F1F]/50"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  Real projects.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="block text-[2.25rem] md:text-[3.5rem] lg:text-[4.25rem] font-black text-[#0A0F1F]/85 mt-1"
                >
                  Real <span className="text-[#0EA5E9]">impact.</span>
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-sm md:text-base leading-[1.7] text-[#1A1F2E]/70 mt-6 max-w-lg"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                We build digital solutions that solve real problems, transform
                businesses and improve everyday life in Jinja and beyond.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="flex flex-wrap items-center gap-6 mt-8"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white bg-[#0A0F1F] px-5 py-3 hover:bg-[#0EA5E9] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Start a project
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#projects-grid"
                  className="group inline-flex items-center gap-2 text-xs md:text-sm font-medium text-[#0A0F1F] border-b-2 border-[#0A0F1F] pb-1 hover:text-[#0EA5E9] hover:border-[#0EA5E9] transition-all"
                >
                  Browse the work
                  <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative aspect-[16/10] overflow-hidden"
              >
                <img src="/44.jpg" alt="Jinja" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 text-[9px] font-mono tracking-[0.3em] uppercase text-white bg-[#0A0F1F]/60 backdrop-blur-sm px-2 py-1">
                  Fig. 01
                </div>
              </motion.div>
              <div className="mt-3 flex items-start justify-between gap-4">
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                  Studio · 2025
                </span>
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                  Jinja, Uganda
                </span>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-6 pt-5 border-t border-dashed border-[#0A0F1F]/20 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
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
          FILTER + PROJECTS — Editorial register with sticky filter
          ============================================================ */}
      <section id="projects-grid" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#F4F1EA]" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(10,15,31,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(10,15,31,0.6) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="max-w-7xl mx-auto relative">

          <SpecHeader
            section="§ 01"
            title="The Register"
            meta={`${filteredProjects.length} ${filteredProjects.length === 1 ? 'entry' : 'entries'}`}
          />

          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-end mb-16">
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
                  Live work,
                </span>
                <span className="block text-[2.25rem] md:text-[3.5rem] font-black text-[#0A0F1F]/80 mt-1">
                  shipped and <span className="text-[#0EA5E9]">running.</span>
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
                Every entry is a real deployment — a product people use today,
                not a concept sketch.
              </p>
            </motion.div>
          </div>

          {/* ───── STICKY FILTER BAR ───── */}
          <div className="sticky top-14 md:top-16 z-30 -mx-4 px-4 py-4 bg-[#F4F1EA]/95 backdrop-blur-md border-b border-[#0A0F1F]/15 mb-16">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {categories.map((cat, i) => {
                const isActive = activeCategory === cat.key
                const count = cat.key === 'all'
                  ? projects.length
                  : projects.filter((p) => p.code === cat.key).length
                return (
                  <motion.button
                    key={cat.key}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`group inline-flex items-baseline gap-2 text-xs font-mono tracking-[0.25em] uppercase transition-all duration-300 pb-1 border-b-2 ${
                      isActive
                        ? 'text-[#0A0F1F] border-[#0EA5E9]'
                        : 'text-[#0A0F1F]/40 border-transparent hover:text-[#0A0F1F]'
                    }`}
                  >
                    {cat.label}
                    <span className={`text-[9px] tabular-nums transition-colors ${
                      isActive ? 'text-[#0EA5E9]' : 'text-[#0A0F1F]/30'
                    }`}>
                      {String(count).padStart(2, '0')}
                    </span>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Projects — editorial rows */}
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-20 text-center"
              >
                <p className="text-base leading-[1.75] text-[#1A1F2E]/60"
                   style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  No work in this category yet — check back soon.
                </p>
              </motion.div>
            ) : (
              <motion.div key={activeCategory} className="space-y-0">
                {filteredProjects.map((project, i) => (
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: i * 0.04 }}
                    className="group border-t border-[#0A0F1F]/15 py-14 md:py-20"
                  >
                    <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">

                      {/* Meta column */}
                      <div className="col-span-12 lg:col-span-2">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-[10px] font-mono tracking-[0.3em] text-[#0EA5E9]">
                            {project.number}
                          </span>
                          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/40">
                            {project.year}
                          </span>
                        </div>
                        <div className={`inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.25em] uppercase ${
                          project.status === 'Live' ? 'text-[#65A30D]' : 'text-[#0A0F1F]/50'
                        }`}>
                          {project.status === 'Live' && (
                            <motion.span
                              animate={{ opacity: [1, 0.3, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-1.5 h-1.5 rounded-full bg-[#65A30D]"
                            />
                          )}
                          {project.status}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="col-span-12 lg:col-span-6 lg:pr-8">
                        <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50 mb-3">
                          {project.category}
                        </div>

                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-[-0.02em] leading-tight text-[#0A0F1F]/85 mb-4 group-hover:text-[#0EA5E9] transition-colors duration-300">
                          {project.title}
                        </h3>

                        <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50 mb-6">
                          {project.subtitle}
                        </p>

                        <p
                          className="text-base leading-[1.8] text-[#1A1F2E]/75 max-w-2xl mb-8"
                          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                        >
                          {project.description}
                        </p>

                        <Link
                          href="/contact"
                          className="group/link inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#0A0F1F] border-b border-[#0A0F1F] pb-1 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all"
                        >
                          Discuss a similar project
                          <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </Link>
                      </div>

                      {/* Photo */}
                      <div className="col-span-12 lg:col-span-4">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[900ms]"
                          />
                          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#0EA5E9]/0 group-hover:border-[#0EA5E9] transition-colors duration-500" />
                          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#0EA5E9]/0 group-hover:border-[#0EA5E9] transition-colors duration-500 delay-100" />
                        </div>
                        <div className="mt-3 flex items-start justify-between gap-4">
                          <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                            Fig. {project.number}
                          </span>
                          <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom line */}
          <div className="border-t border-[#0A0F1F]/15 pt-10 mt-16 flex items-center justify-between flex-wrap gap-6">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/40">
              // End of live register
            </span>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#0A0F1F] border-b border-[#0A0F1F] pb-1 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all"
            >
              Work with us
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          INNOVATION LABS
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

          <SpecHeader section="§ 02" title="Innovation Labs" meta="Three projects in development" />

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
                  Where tomorrow&apos;s
                </span>
                <span className="block text-[2.25rem] md:text-[3.5rem] font-black text-[#0A0F1F]/80 mt-1">
                  platforms are <span className="text-[#0EA5E9]">born.</span>
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
                Our research arm explores the technologies that will define the next
                decade of Jinja&apos;s digital infrastructure — before the market
                asks for them.
              </p>
            </motion.div>
          </div>

          {/* Lab principles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 mb-20">
            {labPrinciples.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="rule-h mb-5" />
                <div className="text-[10px] font-mono tracking-[0.3em] text-[#0EA5E9] mb-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3
                  className="text-base md:text-lg leading-tight mb-2 text-[#0A0F1F]/85"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  {p.label}
                </h3>
                <p
                  className="text-sm leading-[1.7] text-[#1A1F2E]/70"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  {p.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Lab projects — accordion */}
          <div className="mb-16">
            {labsProjects.map((lab, i) => {
              const isOpen = expandedLab === i
              return (
                <motion.div
                  key={lab.codename}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border-t border-[#0A0F1F]/15 last:border-b"
                >
                  <button
                    onClick={() => setExpandedLab(isOpen ? null : i)}
                    className="w-full py-8 flex items-start gap-6 lg:gap-10 text-left group"
                  >
                    <span className="text-[10px] font-mono tracking-[0.3em] text-[#0EA5E9] shrink-0 pt-2">
                      LAB · {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50 mb-2">
                        {lab.category}
                      </div>
                      <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black tracking-[-0.02em] leading-tight transition-colors ${
                        isOpen ? 'text-[#0A0F1F]/85' : 'text-[#0A0F1F]/60 group-hover:text-[#0A0F1F]/85'
                      }`}>
                        {lab.codename}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 pt-2">
                      <span className={`text-[10px] font-mono tracking-[0.25em] uppercase hidden md:inline ${
                        lab.status === 'In Development' ? 'text-[#65A30D]' : 'text-[#0A0F1F]/50'
                      }`}>
                        {lab.status}
                      </span>
                      <div className={`w-8 h-8 border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'border-[#0EA5E9] bg-[#0EA5E9] text-white rotate-180'
                          : 'border-[#0A0F1F]/20 text-[#0A0F1F]/50 group-hover:border-[#0EA5E9] group-hover:text-[#0EA5E9]'
                      }`}>
                        {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-12 gap-8 lg:gap-16 pb-12">
                          <div className="col-span-12 lg:col-span-7 pl-8 lg:pl-[calc(2.5rem+0.75rem)]">
                            <p
                              className="text-base leading-[1.8] text-[#1A1F2E]/75 max-w-2xl mb-8"
                              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                            >
                              {lab.description}
                            </p>

                            <div className="flex flex-wrap gap-x-8 gap-y-2 mb-8">
                              {lab.tags.map((tag) => (
                                <div key={tag} className="flex items-center gap-2 text-sm text-[#1A1F2E]/70">
                                  <span className="w-3 h-px bg-[#0A0F1F]/40" />
                                  {tag}
                                </div>
                              ))}
                            </div>

                            <div className="max-w-sm">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                                  Progress
                                </span>
                                <span className="text-sm font-bold text-[#0A0F1F] tabular-nums">
                                  {lab.progress}%
                                </span>
                              </div>
                              <div className="h-px bg-[#0A0F1F]/15 relative">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${lab.progress}%` }}
                                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                  className="absolute top-0 left-0 h-px bg-[#0EA5E9]"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-span-12 lg:col-span-5 pl-8 lg:pl-0">
                            <div className="relative aspect-[4/3] overflow-hidden">
                              <img
                                src={lab.image}
                                alt={lab.codename}
                                className="w-full h-full object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-700"
                              />
                              <div className="absolute top-3 left-3 text-[9px] font-mono tracking-[0.3em] uppercase text-white bg-[#0A0F1F]/60 backdrop-blur-sm px-2 py-1">
                                LAB 0{i + 1}
                              </div>
                            </div>
                            <div className="mt-3 flex items-start justify-between gap-4">
                              <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                                Research
                              </span>
                              <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                                {lab.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-10 border-t border-dashed border-[#0A0F1F]/20 grid grid-cols-12 gap-8 lg:gap-16 items-start"
          >
            <div className="col-span-12 lg:col-span-4">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                Lab Manifesto
              </span>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <p
                className="text-lg md:text-xl leading-[1.6] max-w-2xl text-[#0A0F1F]/85 mb-8"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Innovation Labs is our long-term bet on Jinja — we fund the research,
                build the prototypes, and hand the winners to our product teams.
              </p>
              <div className="flex flex-wrap items-center gap-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#0A0F1F] border-b border-[#0A0F1F] pb-1 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all"
                >
                  Partner with the lab
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#0A0F1F]/50 hover:text-[#0A0F1F] transition-colors"
                >
                  Submit an idea
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          CTA
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

          <SpecHeader section="§ 03" title="Correspondence" meta="Response within 24 hours" />

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
                  Have an idea
                </span>
                <span className="block text-[2.25rem] md:text-[3.5rem] font-black text-[#0A0F1F]/80 mt-1">
                  of your <span className="text-[#0EA5E9]">own?</span>
                </span>
              </h2>
              <p
                className="text-base md:text-lg leading-[1.75] text-[#1A1F2E]/70 mt-8 max-w-xl"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                We turn ideas into powerful digital solutions that create impact
                and drive growth. Tell us what you&apos;re building.
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
                Start a project
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