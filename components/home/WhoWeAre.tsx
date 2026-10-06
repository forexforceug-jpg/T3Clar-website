'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const paragraphs = [
  `Too many good businesses get held back by software that wasn't made for them — clunky, expensive, and disconnected from how they actually work. We said no to that.`,
  `So we build software that fits. We sit with our clients, we learn their workflows, and we ship platforms that make their teams faster, their customers happier, and their numbers better.`,
  `From Jinja to Kampala, from small shops to national banks — we've now powered hundreds of projects that live in the real world. Every platform is a small vote of confidence that Africa can build for Africa.`,
  `But our real ambition is bigger than any single product. We're building the digital foundation of East Africa — the layer of tools, platforms and partners that will let the next thousand businesses thrive.`,
  `If you're building something and you're not sure who to trust with it — write back. That's what this is for.`,
]

export default function WhoWeAre() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [expanded, setExpanded] = useState(false)

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 overflow-hidden">

      {/* ═════════ SMOOTH AMBIENT BACKGROUND ═════════ */}

      {/* Base — solid clean tone */}
      <div className="absolute inset-0 bg-[#F7F4EE]" />

      {/* Soft radial glow top-left — cyan tint */}
      <div
        className="absolute -top-40 -left-40 w-[900px] h-[900px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.10) 0%, rgba(14,165,233,0.03) 40%, transparent 70%)',
        }}
      />

      {/* Soft radial glow bottom-right — amber tint */}
      <div
        className="absolute -bottom-40 -right-40 w-[900px] h-[900px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(180,83,9,0.08) 0%, rgba(180,83,9,0.02) 40%, transparent 70%)',
        }}
      />

      {/* Very faint dotted grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #0A0F1F 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Edge fades top and bottom for seamless transitions */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FBF9F5] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FBF9F5] to-transparent pointer-events-none" />

      {/* ═════════ CONTENT ═════════ */}
      <div className="relative max-w-7xl mx-auto">

        {/* ───── Top meta strip ───── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between flex-wrap gap-4 pb-4 mb-16 border-b border-[#0A0F1F]/12"
        >
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#B45309]">
              § 02 · Studio Note
            </span>
            <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0A0F1F]/40 hidden md:inline">
              Filed from Jinja
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0A0F1F]/40">
            Ref · T3C / 2025 / 001
          </span>
        </motion.div>

        {/* ───── Two-column split ───── */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* ═════════ LEFT — LETTER ═════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="col-span-12 lg:col-span-7"
          >
            {/* Eyebrow */}
            <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-[#B45309] mb-6">
              A Note from the Founder
            </p>

            {/* Salutation */}
            <p
              className="text-2xl md:text-3xl text-[#0A0F1F] leading-[1.3] mb-10"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              To every ambitious business in Uganda —
            </p>

            {/* Body */}
            <div
              className="space-y-6 text-base md:text-[17px] leading-[1.85] text-[#1A1F2E]/80"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              <p>
                We started T3Clar because we believe something simple:{' '}
                <em className="text-[#0A0F1F] not-italic font-semibold">
                  African businesses deserve world-class technology built by people who understand them.
                </em>
              </p>
              <p>{paragraphs[0]}</p>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-6 pt-2">
                      {paragraphs.slice(1).map((p, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                        >
                          {p}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Continue reading */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="group inline-flex items-center gap-2 mt-8 text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/60 hover:text-[#B45309] transition-colors"
            >
              <span className="border-b border-[#0A0F1F]/30 group-hover:border-[#B45309] pb-1 transition-all">
                {expanded ? 'Show less' : 'Continue reading'}
              </span>
              <ChevronDown
                size={12}
                className={`transition-transform duration-500 ${expanded ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Signature block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 pt-10 border-t border-[#0A0F1F]/12"
            >
              <p
                className="text-sm text-[#1A1F2E]/60 mb-6"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                With gratitude for every partnership,
              </p>

              <div
                className="text-4xl md:text-5xl text-[#0A0F1F] leading-none mb-6 inline-block select-none"
                style={{
                  fontFamily: '"Brush Script MT", "Lucida Handwriting", "Segoe Script", cursive',
                  transform: 'rotate(-3deg)',
                }}
              >
                Mpala Ronald
              </div>

              <div className="pt-5 border-t border-dashed border-[#0A0F1F]/20 w-fit">
                <div className="text-sm font-bold text-[#0A0F1F] tracking-wide">
                  Mpala Ronald
                </div>
                <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50 mt-1">
                  Founder &amp; Chief Executive
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ═════════ RIGHT — IMAGE ═════════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="lg:sticky lg:top-24">
              {/* Portrait image with soft frame glow */}
              <div className="relative">
                {/* Ambient glow behind image */}
                <div
                  className="absolute -inset-6 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(14,165,233,0.12) 0%, transparent 70%)',
                    filter: 'blur(30px)',
                  }}
                />

                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src="/qq.jpg"
                    alt="T3Clar Studio"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Warm tint */}
                  <div className="absolute inset-0 bg-[#B45309]/8 mix-blend-multiply" />
                  {/* Soft bottom fade */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F7F4EE]/70 to-transparent" />
                  {/* Top label */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-white/90">
                      Fig. 02 · The Studio
                    </span>
                    <div className="flex items-center gap-1.5">
                      <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-[#65A30D]"
                      />
                      <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-white/90">
                        Live
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption below image */}
              <div className="mt-4 flex items-start justify-between gap-4">
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                  Jinja, Uganda
                </span>
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50">
                  Est. 2021
                </span>
              </div>

              {/* Stats */}
              <div className="mt-8 pt-6 border-t border-[#0A0F1F]/12 grid grid-cols-2 gap-6">
                <div>
                  <div
                    className="text-3xl font-black text-[#0A0F1F] tracking-[-0.03em] tabular-nums"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    150+
                  </div>
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50 mt-2">
                    Projects delivered
                  </div>
                </div>
                <div>
                  <div
                    className="text-3xl font-black text-[#0A0F1F] tracking-[-0.03em] tabular-nums"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    07
                  </div>
                  <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50 mt-2">
                    Live platforms
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ───── Bottom CTAs ───── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-between gap-8 mt-20 pt-8 border-t border-[#0A0F1F]/12"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/40">
            Filed · Jinja · 2025
          </span>
          <div className="flex flex-wrap items-center gap-8">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#0A0F1F] border-b border-[#0A0F1F] pb-1 hover:border-[#B45309] hover:text-[#B45309] transition-all"
            >
              Read the full studio story
              <ArrowUpRight size={12} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#0A0F1F]/50 hover:text-[#0A0F1F] transition-colors"
            >
              Or write to us
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}