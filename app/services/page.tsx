'use client'

import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import {
  Code, Smartphone, Globe, Layout, ShoppingBag, Cloud, CreditCard,
  Settings, Rocket, Users, Lightbulb, Shield, Lock, UserCheck,
  ArrowUpRight, ArrowRight,
} from 'lucide-react'
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion'

/* ============================================================
   DATA
   ============================================================ */

const services = [
  { number: '01', icon: Code, title: 'Custom Software Development', category: 'Engineering', description: 'Robust, scalable and secure software solutions tailored to your business needs.', image: '/Custom Software Development.jpg', stack: ['TypeScript', 'Go', 'Postgres'] },
  { number: '02', icon: Smartphone, title: 'Mobile App Development', category: 'Product', description: 'High-performance mobile apps for Android and iOS built with modern frameworks.', image: '/Mobile App Development.jpeg', stack: ['React Native', 'Swift', 'Kotlin'] },
  { number: '03', icon: Globe, title: 'Website Design & Development', category: 'Web', description: 'Modern, responsive websites that create lasting impressions and drive results.', image: '/Website Design & Development.jpg', stack: ['Next.js', 'Astro', 'Tailwind'] },
  { number: '04', icon: Layout, title: 'Business Management Systems', category: 'Enterprise', description: 'Smart systems that streamline operations, improve efficiency and drive growth.', image: '/Business Management Systems.jpg', stack: ['ERP', 'CRM', 'Automation'] },
  { number: '05', icon: ShoppingBag, title: 'E-commerce Solutions', category: 'Commerce', description: 'End-to-end e-commerce platforms designed to help you sell more and reach further.', image: '/E-commerce Solutions.webp', stack: ['Shopify', 'Custom', 'Payments'] },
  { number: '06', icon: Cloud, title: 'Cloud Solutions', category: 'Infrastructure', description: 'Secure, reliable and scalable cloud infrastructure to power your business applications.', image: '/Cloud Solutions.jpg', stack: ['AWS', 'GCP', 'Kubernetes'] },
  { number: '07', icon: CreditCard, title: 'Payment Integration Systems', category: 'Fintech', description: 'Safe and seamless payment gateways integrated into your digital platforms.', image: '/Payment Integration Systems.jpg', stack: ['Stripe', 'Flutterwave', 'MTN'] },
  { number: '08', icon: Settings, title: 'Automation Solutions', category: 'Automation', description: 'Smart automation that reduces manual processes and streamlines your workflows.', image: '/Automation Solutions.jpg', stack: ['Zapier', 'n8n', 'Custom'] },
  { number: '09', icon: Rocket, title: 'UI/UX Design', category: 'Design', description: 'User-centered designs that create beautiful experiences and drive engagement.', image: '/UI/UX Design.jpg', stack: ['Figma', 'Framer', 'Research'] },
  { number: '10', icon: Users, title: 'Technology Consulting', category: 'Advisory', description: 'Expert guidance to help you make the right technology decisions for your business.', image: '/Technology Consulting.png', stack: ['Audit', 'Strategy', 'Roadmap'] },
]

const commitments = [
  { icon: Lightbulb, title: 'Innovative', description: 'Fresh thinking on every build' },
  { icon: Shield, title: 'Scalable', description: 'Grows with your business' },
  { icon: Lock, title: 'Secure', description: 'Enterprise-grade protection' },
  { icon: UserCheck, title: 'Customer-First', description: 'You lead every decision' },
]

const processSteps = [
  { number: '01', title: 'Discover', description: 'We learn your business, your users and your goals — then map out a clear path forward.' },
  { number: '02', title: 'Design', description: 'We blueprint the solution end-to-end, from information architecture to interface design.' },
  { number: '03', title: 'Build', description: 'We engineer with precision and care, using modern tools and proven methodologies.' },
  { number: '04', title: 'Launch', description: 'We deploy, monitor and iterate — ensuring your solution grows with your business.' },
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
            className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/80"
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
              className="w-px h-2 bg-[#0A0F1F]/80/50 origin-bottom"
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
        className="w-full h-[calc(100%+80px)] object-cover -mt-[40px]"
      />
    </div>
  )
}

/* ============================================================
   PAGE
   ============================================================ */

export default function ServicesPage() {
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
              <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0A0F1F]/80">
                § Services · T3Clar
              </span>
              <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0A0F1F]/40 hidden md:inline">
                Ten disciplines · One studio
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
                className="text-[10px] font-mono tracking-[0.4em] uppercase text-[#0A0F1F]/80 block mb-4"
              >
                What We Build
              </motion.span>

              <h1 className="leading-[0.95] tracking-[-0.03em]">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="block text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-light text-[#0A0F1F]/50"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  Technology solutions
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="block text-[2.25rem] md:text-[3.5rem] lg:text-[4.25rem] font-black text-[#0A0F1F]/85 mt-1"
                >
                  designed for{' '}
                  <span className="text-[#0A0F1F]/80">impact.</span>
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-sm md:text-base leading-[1.7] text-[#1A1F2E]/70 mt-6 max-w-lg"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                We design, develop and deliver powerful digital solutions that help
                businesses automate, scale and stay ahead in a rapidly changing world.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="flex flex-wrap items-center gap-6 mt-8"
              >
                <Link
                  href="#services-grid"
                  className="group inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white bg-[#0A0F1F] px-5 py-3 hover:bg-[#0A0F1F]/80 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore Services
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-xs md:text-sm font-medium text-[#0A0F1F] border-b-2 border-[#0A0F1F] pb-1 hover:text-[#0A0F1F]/80 hover:border-[#0A0F1F]/80 transition-all"
                >
                  Talk to us
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
                <img src="/heroimage.jpg" alt="Modern technology studio" className="w-full h-full object-cover" />
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
            {[
              { value: 150, suffix: '+', label: 'Projects delivered' },
              { value: 10, suffix: '+', label: 'Industries served' },
              { value: 24, suffix: '/7', label: 'Support coverage' },
            ].map((s, i) => (
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
          SERVICES — Numbered catalogue with magnetic cards
          ============================================================ */}
      <section id="services-grid" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#F4F1EA]" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(10,15,31,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(10,15,31,0.6) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="max-w-7xl mx-auto relative">

          <SpecHeader section="§ 01" title="Catalogue" meta="Ten services · All industries" />

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
                  Comprehensive services
                </span>
                <span className="block text-[2.25rem] md:text-[3.5rem] font-black text-[#0A0F1F]/80 mt-1">
                  for <span className="text-[#0A0F1F]/80">modern businesses.</span>
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
                Ten disciplines spanning engineering, product, infrastructure,
                creative and advisory work.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <MagneticCard key={service.number} className="group">
                  <motion.article
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden mb-5">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[900ms]"
                      />
                      <div className="absolute top-4 left-4 w-10 h-10 bg-[#FBF9F5]/95 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#0A0F1F]/80 transition-colors duration-500">
                        <Icon size={16} className="text-[#0A0F1F] group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                      </div>
                      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#0A0F1F]/80/0 group-hover:border-[#0A0F1F]/80 transition-colors duration-500" />
                      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#0A0F1F]/80/0 group-hover:border-[#0A0F1F]/80 transition-colors duration-500 delay-100" />
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono tracking-[0.3em] text-[#0A0F1F]/80">
                        {service.number}
                      </span>
                      <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/40">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0A0F1F]/85 leading-snug mb-2 group-hover:text-[#0A0F1F]/80 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p
                      className="text-sm leading-[1.7] text-[#1A1F2E]/70 mb-4"
                      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    >
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.stack.map((s) => (
                        <span
                          key={s}
                          className="text-[9px] font-mono tracking-wider uppercase text-[#0A0F1F]/50 border border-[#0A0F1F]/15 px-1.5 py-0.5 group-hover:border-[#0A0F1F]/80/40 transition-colors duration-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="group/link inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#0A0F1F] border-b border-[#0A0F1F] pb-1 hover:border-[#0A0F1F]/80 hover:text-[#0A0F1F]/80 transition-all"
                    >
                      Discuss
                      <ArrowUpRight size={11} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </motion.article>
                </MagneticCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          PROCESS
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

          <SpecHeader section="§ 02" title="Process" meta="Four phases · Iterative" />

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
                  A proven process from
                </span>
                <span className="block text-[2.25rem] md:text-[3.5rem] font-black text-[#0A0F1F]/80 mt-1">
                  <span className="text-[#0A0F1F]/80">idea to launch.</span>
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
                Every engagement follows the same four-phase rhythm — from
                discovery to launch and beyond.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block absolute top-[42px] left-[12%] right-[12%] h-px bg-[#0A0F1F]/15 origin-left"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative"
                >
                  <div className="hidden lg:flex absolute top-[26px] left-0 -translate-y-1/2 items-center justify-center">
                    <motion.span
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                      className="absolute w-6 h-6 rounded-full bg-[#0A0F1F]/80/20"
                    />
                    <span className="relative w-3 h-3 rounded-full bg-[#0A0F1F]/80" />
                  </div>

                  <div className="pt-16 lg:pt-0">
                    <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-[#0A0F1F]/12">
                      <span className="text-[10px] font-mono tracking-[0.3em] text-[#0A0F1F]/80">
                        PHASE · {step.number}
                      </span>
                      <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/30">
                        / 04
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black tracking-[-0.02em] text-[#0A0F1F]/85 mb-4 leading-tight">
                      {step.title}
                    </h3>

                    <p
                      className="text-sm leading-[1.8] text-[#1A1F2E]/70"
                      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          COMMITMENT
          ============================================================ */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#F4F1EA]" />
        <div
          className="absolute -bottom-40 -right-40 w-[900px] h-[900px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(101,163,13,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative">

          <SpecHeader section="§ 03" title="Our Standard" meta="Four commitments" />

          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="col-span-12 lg:col-span-5"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <ParallaxImage
                  src="/jinja-cityscape.jpg"
                  alt="Jinja bridge"
                  className="w-full h-full"
                  range={40}
                />
                <div className="absolute top-4 left-4 text-[9px] font-mono tracking-[0.3em] uppercase text-white bg-[#0A0F1F]/60 backdrop-blur-sm px-2 py-1">
                  IMG-03
                </div>
              </div>
              <div className="mt-3 flex items-start justify-between gap-4">
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                  Our Standard
                </span>
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                  Jinja · UG
                </span>
              </div>
            </motion.div>

            <div className="col-span-12 lg:col-span-7">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="leading-[0.95] tracking-[-0.03em] mb-8"
              >
                <span
                  className="block text-[1.75rem] md:text-[2.25rem] font-light text-[#0A0F1F]/50"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  Quality. Innovation.
                </span>
                <span className="block text-[2.25rem] md:text-[3rem] font-black text-[#0A0F1F]/80 mt-1">
                  <span className="text-[#0A0F1F]/80">Reliability.</span>
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-base md:text-lg leading-[1.8] text-[#1A1F2E]/70 mb-12 max-w-xl"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                We are committed to delivering high-quality solutions using modern
                technologies and best practices to ensure your success.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
                {commitments.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group pb-6 border-b border-[#0A0F1F]/15"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full border border-[#0A0F1F]/20 flex items-center justify-center group-hover:border-[#0A0F1F]/80 group-hover:bg-[#0A0F1F]/80/10 transition-all duration-300">
                          <Icon size={16} className="text-[#0A0F1F] group-hover:text-[#0A0F1F]/80 transition-colors duration-300" strokeWidth={2} />
                        </div>
                        <h3 className="text-base font-bold text-[#0A0F1F]/85">{item.title}</h3>
                      </div>
                      <p
                        className="text-sm leading-[1.7] text-[#1A1F2E]/70"
                        style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                      >
                        {item.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-6 border-t border-dashed border-[#0A0F1F]/20"
              >
                <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50 mb-4">
                  Standards
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                  {['ISO-ready practices', 'Modern tech stack', 'Agile delivery', '24/7 support'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#1A1F2E]/70">
                      <span className="w-3 h-px bg-[#0A0F1F]/40" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-[#FBF9F5]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(10,15,31,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(10,15,31,0.6) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="max-w-6xl mx-auto relative">

          <SpecHeader section="§ 04" title="Correspondence" meta="Response · 24h" />

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
                  Have a project
                </span>
                <span className="block text-[2.25rem] md:text-[3.5rem] font-black text-[#0A0F1F]/80 mt-1">
                  in <span className="text-[#0A0F1F]/80">mind?</span>
                </span>
              </h2>
              <p
                className="text-base md:text-lg leading-[1.75] text-[#1A1F2E]/70 mt-8 max-w-xl"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Tell us about what you&apos;re building. We read every message and reply
                within a business day.
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
                    className="text-base md:text-lg font-semibold text-[#0A0F1F] border-b-2 border-transparent hover:border-[#0A0F1F]/80 hover:text-[#0A0F1F]/80 transition-all duration-300"
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
                <div>
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/40 mb-2">
                    Hours
                  </div>
                  <div className="text-base font-semibold text-[#0A0F1F]">
                    Monday — Friday · 09:00–18:00 EAT
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#0A0F1F] border-b border-[#0A0F1F] pb-1 hover:border-[#0A0F1F]/80 hover:text-[#0A0F1F]/80 transition-all"
              >
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                Start your project
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