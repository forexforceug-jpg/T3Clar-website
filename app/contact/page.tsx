'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import {
  ArrowUpRight, ArrowRight, Clock, Lock, Send, ChevronDown,
} from 'lucide-react'
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion'

/* ============================================================
   DATA
   ============================================================ */

const contactMethods = [
  { label: 'Call Us', value: '+256 (0) 7609-68636', detail: 'Mon – Fri · 08:00 – 18:00 EAT', href: 'tel:+256760968636' },
  { label: 'Email Us', value: 'hello@t3clar.com', detail: 'Replies within 24 hours', href: 'mailto:hello@t3clar.com' },
  { label: 'WhatsApp', value: '+256 701 168 867', detail: 'Chat with us directly', href: 'https://wa.me/256701168867' },
  { label: 'Visit Us', value: 'Plot 33 Lubas Road, Jinja', detail: 'Uganda · East Africa', href: '#map' },
]

const enquiryTypes = [
  'Website Development',
  'Mobile App Development',
  'Custom Software',
  'Cloud Solutions',
  'UI/UX Design',
  'Technology Consulting',
  'Partnership',
  'Other',
]

const officeNotes = [
  { label: 'Workspace', value: 'Modern studio designed for engineering and design work.' },
  { label: 'Collaboration', value: 'Open floor plan where ideas get built, not just discussed.' },
  { label: 'Access', value: 'Easy access and parking in the heart of Jinja City.' },
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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

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
                § Contact · T3Clar
              </span>
              <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0A0F1F]/40 hidden md:inline">
                Response within 24 hours
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0A0F1F]/40">
              Jinja · Uganda
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
                Get in Touch
              </motion.span>

              <h1 className="leading-[0.95] tracking-[-0.03em]">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="block text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-light text-[#0A0F1F]/50"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  Let&apos;s build
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="block text-[2.25rem] md:text-[3.5rem] lg:text-[4.25rem] font-black text-[#0A0F1F]/85 mt-1"
                >
                  something <span className="text-[#0EA5E9]">lasting.</span>
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-sm md:text-base leading-[1.7] text-[#1A1F2E]/70 mt-6 max-w-lg"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                We&apos;re here to help you turn ideas into powerful digital
                solutions. Reach out and let&apos;s create impact together.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="flex flex-wrap items-center gap-6 mt-8"
              >
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white bg-[#0A0F1F] px-5 py-3 hover:bg-[#0EA5E9] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Send a message
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="mailto:hello@t3clar.com"
                  className="group inline-flex items-center gap-2 text-xs md:text-sm font-medium text-[#0A0F1F] border-b-2 border-[#0A0F1F] pb-1 hover:text-[#0EA5E9] hover:border-[#0EA5E9] transition-all"
                >
                  Or email us directly
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
                <img src="/33.png" alt="T3Clar studio" className="w-full h-full object-cover" />
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

          {/* Bottom status strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-6 pt-5 border-t border-dashed border-[#0A0F1F]/20 flex items-center justify-between flex-wrap gap-4"
          >
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
              <span>Response · 24h</span>
              <span className="w-px h-3 bg-[#0A0F1F]/30" />
              <span>Est. 2021</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          FORM + CONTACT METHODS
          ============================================================ */}
      <section id="contact-form" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#F4F1EA]" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(10,15,31,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(10,15,31,0.6) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="max-w-7xl mx-auto relative">

          <SpecHeader section="§ 01" title="Correspondence" meta="Two ways to connect" />

          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">

            {/* ───── LEFT: FORM ───── */}
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-[#0A0F1F]/15">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                  Send us a message
                </span>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/30">
                  / 05 fields
                </span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="leading-[0.95] tracking-[-0.03em] mb-6"
              >
                <span
                  className="block text-[1.75rem] md:text-[2.25rem] font-light text-[#0A0F1F]/50"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  Tell us about
                </span>
                <span className="block text-[2.25rem] md:text-[3rem] font-black text-[#0A0F1F]/80 mt-1">
                  your <span className="text-[#0EA5E9]">project.</span>
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-base leading-[1.75] text-[#1A1F2E]/70 mb-10 max-w-xl"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Fill out the form below and we&apos;ll get back to you as soon as possible.
                Every message is read by a real person.
              </motion.p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="py-12 border-y border-dashed border-[#0A0F1F]/20"
                  >
                    <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#65A30D] mb-4 flex items-center gap-2">
                      <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-[#65A30D]"
                      />
                      Message received
                    </div>
                    <p
                      className="text-xl text-[#0A0F1F]/85 max-w-md leading-[1.6]"
                      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    >
                      Thank you. We&apos;ll be in touch within 24 hours — usually sooner.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="group inline-flex items-center gap-2 mt-8 text-xs font-mono tracking-[0.25em] uppercase text-[#0A0F1F] border-b border-[#0A0F1F] pb-1 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all"
                    >
                      Send another message
                      <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                    className="space-y-8 max-w-xl"
                  >
                    {/* Name */}
                    <div>
                      <label className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50 mb-2 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border-0 border-b border-[#0A0F1F]/20 focus:border-[#0EA5E9] focus:outline-none focus:ring-0 pb-3 text-base text-[#0A0F1F]/85 placeholder:text-[#0A0F1F]/30 transition-colors"
                        placeholder="e.g. Jane Mukasa"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50 mb-2 block">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-transparent border-0 border-b border-[#0A0F1F]/20 focus:border-[#0EA5E9] focus:outline-none focus:ring-0 pb-3 text-base text-[#0A0F1F]/85 placeholder:text-[#0A0F1F]/30 transition-colors"
                        placeholder="jane@company.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50 mb-2 block">
                        Phone <span className="text-[#0A0F1F]/30">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-transparent border-0 border-b border-[#0A0F1F]/20 focus:border-[#0EA5E9] focus:outline-none focus:ring-0 pb-3 text-base text-[#0A0F1F]/85 placeholder:text-[#0A0F1F]/30 transition-colors"
                        placeholder="+256 ..."
                      />
                    </div>

                    {/* Interest */}
                    <div>
                      <label className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50 mb-2 block">
                        What are you interested in?
                      </label>
                      <div className="relative">
                        <select
                          required
                          className="w-full bg-transparent border-0 border-b border-[#0A0F1F]/20 focus:border-[#0EA5E9] focus:outline-none focus:ring-0 pb-3 text-base text-[#0A0F1F]/85 appearance-none cursor-pointer transition-colors"
                          defaultValue=""
                        >
                          <option value="" disabled>Select a service...</option>
                          {enquiryTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-[#0A0F1F]/40 pointer-events-none" />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50 mb-2 block">
                        Tell us about your project
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full bg-transparent border-0 border-b border-[#0A0F1F]/20 focus:border-[#0EA5E9] focus:outline-none focus:ring-0 pb-3 text-base text-[#0A0F1F]/85 placeholder:text-[#0A0F1F]/30 resize-none transition-colors"
                        placeholder="What are you building, and what problem are you trying to solve?"
                      />
                    </div>

                    {/* Submit row */}
                    <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white bg-[#0A0F1F] px-5 py-3 hover:bg-[#0EA5E9] transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <Send size={13} />
                        Send message
                        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>

                      <div className="flex items-center gap-2">
                        <Lock size={11} className="text-[#0A0F1F]/40" />
                        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#0A0F1F]/40">
                          Encrypted · Never shared
                        </span>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* ───── RIGHT: CONTACT METHODS ───── */}
            <div className="col-span-12 lg:col-span-5">
              <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-[#0A0F1F]/15">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                  Or reach us directly
                </span>
              </div>

              <div className="divide-y divide-[#0A0F1F]/10">
                {contactMethods.map((method, i) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group flex items-start gap-4 py-6 hover:bg-white/40 -mx-3 px-3 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50 mb-2">
                        {method.label}
                      </div>
                      <div className="text-base font-semibold text-[#0A0F1F] group-hover:text-[#0EA5E9] transition-colors mb-1">
                        {method.value}
                      </div>
                      <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#0A0F1F]/40">
                        {method.detail}
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-[#0A0F1F]/30 group-hover:text-[#0EA5E9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1 shrink-0"
                    />
                  </motion.a>
                ))}
              </div>

              {/* Hours block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 pt-8 border-t border-dashed border-[#0A0F1F]/20"
              >
                <div className="flex items-center gap-3 mb-5">
                  <Clock size={14} className="text-[#0EA5E9]" strokeWidth={2} />
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                    Working hours
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { day: 'Monday — Friday', hours: '08:00 – 18:00' },
                    { day: 'Saturday', hours: 'By appointment' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map((row) => (
                    <div key={row.day} className="flex items-baseline justify-between pb-2 border-b border-[#0A0F1F]/10 last:border-b-0">
                      <span className="text-sm text-[#1A1F2E]/70">{row.day}</span>
                      <span className="text-sm font-semibold text-[#0A0F1F]/85">{row.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MAP + OFFICE
          ============================================================ */}
      <section id="map" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#FBF9F5]" />
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative">

          <SpecHeader section="§ 02" title="Our Studio" meta="Jinja City · Uganda" />

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
                  Visit us in
                </span>
                <span className="block text-[2.25rem] md:text-[3.5rem] font-black text-[#0A0F1F]/80 mt-1">
                  the heart of <span className="text-[#0EA5E9]">Jinja.</span>
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
                Located in Jinja City, our studio is always open to visitors,
                partners and curious minds.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">

            {/* Map with parallax wrapper */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="col-span-12 lg:col-span-7"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15958.819565566479!2d33.202611600000004!3d0.4320401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sug!4v1783693589646!5m2!1sen!2sug"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.4) contrast(1.05)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="T3Clar Office Location"
                />
                <div className="absolute top-4 left-4 text-[9px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F] bg-[#FBF9F5]/90 backdrop-blur-sm px-2 py-1">
                  MAP-01
                </div>
                {/* Corner reveals */}
                <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#0EA5E9]/40 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#0EA5E9]/40 pointer-events-none" />
              </div>
              <div className="mt-3 flex items-start justify-between gap-4">
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                  Fig. 02 · Map
                </span>
                <a
                  href="https://maps.google.com/?q=Plot+33+Lubas+Road+Jinja+Uganda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-[9px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F] hover:text-[#0EA5E9] transition-colors inline-flex items-center gap-1"
                >
                  Open in Maps
                  <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Office notes */}
            <div className="col-span-12 lg:col-span-5">
              <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-[#0A0F1F]/15">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                  The Studio
                </span>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/30">
                  / 03 notes
                </span>
              </div>

              <div className="space-y-6">
                {officeNotes.map((note, i) => (
                  <motion.div
                    key={note.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="pb-5 border-b border-[#0A0F1F]/10 last:border-b-0"
                  >
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-[10px] font-mono tracking-[0.3em] text-[#0EA5E9] shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-base font-bold text-[#0A0F1F]/85">{note.label}</h3>
                    </div>
                    <p
                      className="text-sm leading-[1.75] text-[#1A1F2E]/70 pl-10"
                      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    >
                      {note.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Address block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 pt-8 border-t border-dashed border-[#0A0F1F]/20"
              >
                <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50 mb-3">
                  Address
                </div>
                <p
                  className="text-base text-[#0A0F1F]/85 leading-[1.6]"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  Plot 33 Lubas Road<br />
                  Jinja City<br />
                  Uganda · East Africa
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CLOSING CTA
          ============================================================ */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#F4F1EA]" />
        <div
          className="absolute -bottom-40 -right-40 w-[900px] h-[900px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(101,163,13,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(10,15,31,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(10,15,31,0.6) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="max-w-6xl mx-auto relative">

          <SpecHeader section="§ 03" title="Studio Status" meta="Available for new work" />

          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-end">
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
                  Whether you have a question
                </span>
                <span className="block text-[2.25rem] md:text-[3.5rem] font-black text-[#0A0F1F]/80 mt-1">
                  or a project — <span className="text-[#0EA5E9]">we&apos;re listening.</span>
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
                className="text-base leading-[1.75] text-[#1A1F2E]/70 mb-8"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Whether it&apos;s a rough idea or a detailed brief, our inbox is open.
                We read every message and reply within a business day.
              </p>
              <a
                href="mailto:hello@t3clar.com"
                className="group inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#0A0F1F] border-b border-[#0A0F1F] pb-1 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all"
              >
                hello@t3clar.com
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
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