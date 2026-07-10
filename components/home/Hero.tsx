'use client'

import Link from 'next/link'
import { Play } from 'lucide-react'
import TypingEffect from '@/components/TypingEffect'
import BrandCarousel from '@/components/BrandCarousel'
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      
      {/* ============ FULLSCREEN BACKGROUND IMAGE ============ */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />
        <img
          src="/nilebridge.png"
          alt="Jinja Nile bridge at sunset"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-50% to-white/10" />
        <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-gradient-to-r from-white/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        
        {/* Glowing T behind bridge */}
        <div className="absolute top-1/3 right-1/4">
          <span className="text-[18rem] font-black text-transparent [-webkit-text-stroke:2px_#2563EB] 
                         opacity-10 select-none"
                style={{ textShadow: '0 0 80px rgba(37,99,235,0.3), 0 0 160px rgba(37,99,235,0.15)' }}>
            T
          </span>
        </div>

        {/* Digital lines overlay */}
        <div className="absolute inset-0 overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Content */}
          <div>
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.3em] uppercase">
              TECHNOLOGY. INNOVATION. IMPACT.
            </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0F172A] leading-[1.05] mt-6 tracking-tight">
              <span className="block">Building</span>
              <span className="text-5xl md:text-6xl lg:text-7xl">
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
            
            <p className="text-gray-500 text-lg leading-relaxed mt-6 max-w-lg">
              We build powerful software, platforms and digital solutions that connect 
              businesses, services and communities through technology.
            </p>
            
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-[#2563EB] font-semibold text-lg mt-6 hover:gap-2 transition-all"
            >
              Explore Our Solutions →
            </Link>
               <div className="mt-12 pt-8 border-t border-gray-200">
              <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase px-4">
                TRUSTED BY FORWARD-THINKING PARTNERS
              </span>
              <BrandCarousel />
            </div>
          </div>

          {/* Right side - Empty to show background */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}