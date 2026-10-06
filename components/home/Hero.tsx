'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import TypingEffect from '@/components/TypingEffect'
import BrandCarousel from '@/components/BrandCarousel'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#F7F3EB] pt-14 md:pt-16">

      {/* ═══════════════════════════════════════════════
          ALL VISUAL LAYERS — wrapped in a self-contained
          overflow-hidden container so nothing extends
          past the section boundary.
          ═══════════════════════════════════════════════ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Background image */}
        <div className="absolute inset-0 top-14 md:top-16">
          <img
            src="/nilebridge.png"
            alt="Jinja Nile bridge"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#B45309]/12 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3EB] via-[#F7F3EB]/70 via-45% to-[#F7F3EB]/15" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F7F3EB] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F7F3EB] to-transparent" />
        </div>

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(10,15,31,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(10,15,31,0.6) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14,165,233,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14,165,233,0.7) 1px, transparent 1px)
            `,
            backgroundSize: '240px 240px',
          }}
        />

        {/* Ambient glows — clipped by parent overflow-hidden */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#0EA5E9]/8 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#B45309]/6 rounded-full blur-[140px]" />

        {/* Cross-hairs */}
        {[
          { pos: 'top-20 left-4', type: 'tl' },
          { pos: 'top-20 right-4', type: 'tr' },
          { pos: 'bottom-4 left-4', type: 'bl' },
          { pos: 'bottom-4 right-4', type: 'br' },
        ].map((c) => (
          <div
            key={c.type}
            className={`absolute ${c.pos} hidden md:block`}
          >
            <div className="relative w-5 h-5">
              <span className="absolute top-1/2 left-0 w-full h-px bg-[#0A0F1F]/25" />
              <span className="absolute top-0 left-1/2 w-px h-full bg-[#0A0F1F]/25" />
              <span className="absolute top-1/2 left-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 bg-[#0EA5E9]" />
            </div>
          </div>
        ))}

        {/* Scan line */}
        <motion.div
          initial={{ y: '0%' }}
          animate={{ y: '100%' }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-x-0 top-14 md:top-16 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(14,165,233,0.35), transparent)',
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════
          CONTENT
          ═══════════════════════════════════════════════ */}
      <div className="relative min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-64px)] max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 py-5 md:py-7 flex flex-col">

        {/* TOP STRIP */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-[#0A0F1F]/15"
        >
          <span className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/60">
            T3Clar · Studio Monograph
          </span>
          <div className="flex items-center gap-4 md:gap-6">
            <span className="hidden md:inline text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/60">
              Vol. IV · 2025
            </span>
            <span className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/60">
              0.4320°N · 33.2041°E
            </span>
          </div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="flex-1 grid grid-cols-12 gap-4 lg:gap-8 py-6 md:py-8 items-center">
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-4 md:mb-6"
            >
              <span className="w-8 md:w-10 h-px bg-[#B45309]" />
              <span className="text-[9px] md:text-[10px] font-mono tracking-[0.35em] uppercase text-[#B45309]">
                Technology · Innovation · Impact
              </span>
            </motion.div>

            <h1 className="leading-[0.9] tracking-[-0.03em] text-[#0A0F1F]">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="block text-[1.5rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3rem] font-light italic"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                We build
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="block text-[2.25rem] md:text-[3.25rem] lg:text-[4rem] xl:text-[4.75rem] font-black my-1"
              >
                <TypingEffect
                  texts={[
                    [
                      { text: 'Nice ', color: 'rgba(10, 15, 31, 0.6)', bold: false },
                      { text: 'Softwares', color: '#0EA5E9', bold: true },
                    ],
                    [
                      { text: 'Best ', color: 'rgba(10, 15, 31, 0.6)', bold: false },
                      { text: 'Platforms', color: '#0EA5E9', bold: true },
                    ],
                    [
                      { text: 'Digital ', color: 'rgba(10, 15, 31, 0.6)', bold: false },
                      { text: 'Solutions', color: '#0EA5E9', bold: true },
                    ],
                  ]}
                  typingSpeed={65}
                  pauseDuration={2400}
                />
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="block text-[1rem] md:text-[1.375rem] lg:text-[1.5rem] font-light text-[#0A0F1F]/70"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                for a connected world.
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid md:grid-cols-2 gap-3 md:gap-6 mt-5 md:mt-7 max-w-2xl"
            >
              <p
                className="text-sm md:text-base leading-[1.65] text-[#1A1F2E]/80"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                From Jinja to the world — we partner with ambitious businesses to
                build software, platforms and systems that{' '}
                <em className="text-[#0A0F1F] not-italic font-semibold">
                  scale, sell and succeed
                </em>
                .
              </p>
              <p className="text-xs md:text-sm leading-[1.7] text-[#1A1F2E]/60 font-mono hidden md:block">
                Design, engineering and infrastructure — the three layers every
                modern business needs to run on.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-6 md:mt-8 flex flex-wrap items-center gap-4 md:gap-6"
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-wide text-[#F7F3EB] bg-[#0A0F1F] px-5 py-3 hover:bg-[#0EA5E9] transition-all duration-300"
              >
                Start Your Project
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-wide text-[#0A0F1F] border-b-2 border-[#0A0F1F] pb-1 hover:text-[#B45309] hover:border-[#B45309] transition-all"
              >
                See Our Work
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>

          <div className="hidden lg:block lg:col-span-5" />
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="pt-3 border-t border-[#0A0F1F]/15"
        >
          <div className="flex items-center justify-between mb-2 md:mb-3 flex-wrap gap-2">
            <span className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/60">
              Trusted by forward-thinking partners
            </span>
            <span className="hidden md:inline text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0F1F]/50 flex items-center gap-2">
              <span className="w-4 h-px bg-[#0A0F1F]/30" />
              Fig. 01 · Nile Bridge · Jinja, UG
            </span>
          </div>
          <BrandCarousel />
        </motion.div>
      </div>
    </section>
  )
}