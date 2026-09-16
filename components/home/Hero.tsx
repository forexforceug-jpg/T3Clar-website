'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import TypingEffect from '@/components/TypingEffect'
import BrandCarousel from '@/components/BrandCarousel'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      
      {/* ============ FULLSCREEN BACKGROUND ============ */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />
        <img
          src="/nilebridge.png"
          alt="Jinja Nile bridge at sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-50% to-white/10" />
        <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-gradient-to-r from-white/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

        {/* Glowing T behind bridge */}
        <div className="absolute top-1/3 right-1/4 pointer-events-none select-none">
          <span
            className="text-[18rem] font-black text-transparent opacity-10"
            style={{
              WebkitTextStroke: '2px #2563EB',
              textShadow: '0 0 80px rgba(37,99,235,0.3), 0 0 160px rgba(37,99,235,0.15)',
            }}
          >
            T
          </span>
        </div>

        {/* Digital accent lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent"
              style={{ top: `${20 + i * 8}%`, left: '55%', right: '5%' }}
            />
          ))}
        </div>
      </div>

      {/* ============ CONTENT ============ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          
          {/* LEFT — Text */}
          <div className="max-w-xl">
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.3em] uppercase">
              TECHNOLOGY. INNOVATION. IMPACT.
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0F172A] leading-[1.05] mt-6 tracking-tight">
              <span className="block">Building</span>
              <span className="block mt-1">
                <TypingEffect
                  texts={[
                    [
                      { text: 'Nice ', color: '#0F172A', bold: false },
                      { text: 'Softwares', color: '#2563EB', bold: true },
                    ],
                    [
                      { text: 'Best ', color: '#0F172A', bold: false },
                      { text: 'Platforms', color: '#2563EB', bold: true },
                    ],
                    [
                      { text: 'Digital ', color: '#0F172A', bold: false },
                      { text: 'Solutions', color: '#2563EB', bold: true },
                    ],
                  ]}
                  typingSpeed={60}
                  pauseDuration={2500}
                />
              </span>
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mt-6">
              We build powerful software, platforms and digital solutions that connect
              businesses, services and communities through technology.
            </p>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-4 mt-8 bg-[#2563EB] text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              Explore Our Solutions
              <ArrowRight size={16} />
            </Link>

            {/* Trust strip */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <span className="text-[10px] text-gray-400 font-bold tracking-[0.25em] uppercase">
                Trusted by forward-thinking partners
              </span>
              <BrandCarousel />
            </div>
          </div>

          {/* RIGHT — Empty, lets the background image breathe */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-gray-400 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
      </div>
    </section>
  )
}