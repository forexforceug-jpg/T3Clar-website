'use client'

import Link from 'next/link'
import { Code, Smartphone, Cloud, ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software built for performance, scalability and real impact.',
    image: '/SoftwareDevelopment.jpg',
    color: '#2563EB',
    orbitDelay: 0,
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web Solutions',
    description: 'Beautiful digital experiences across all platforms and devices.',
    image: '/MS.jpg',
    color: '#7C3AED',
    orbitDelay: 0.15,
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description: 'Secure, reliable and scalable infrastructure for the future.',
    image: '/CloudInfrastructure.webp',
    color: '#2563EB',
    orbitDelay: 0.3,
  },
]

export default function WhatWeDo() {
  return (
    <section className="relative py-24 md:py-32 px-4 bg-white overflow-hidden">
      
      {/* ============ AMBIENT BACKGROUND ============ */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-50/60 to-purple-50/30 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-[120px]" />
      
      {/* Dotted grid */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div className="h-full w-full bg-[radial-gradient(circle,#2563EB_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Geometric decorations */}
      <div className="absolute top-20 right-20 w-20 h-20 border border-blue-100/40 rounded-full" />
      <div className="absolute bottom-32 left-16 w-16 h-16 border border-purple-100/30 rounded-2xl rotate-45" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ============ SECTION HEADER ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-4">
              <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
              <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                WHAT WE DO
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight">
              End-to-end digital solutions for a{' '}
              <span className="relative">
                <span className="text-[#2563EB]">modern</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 80 6" preserveAspectRatio="none">
                  <path d="M0 3 Q20 0 40 3 Q60 6 80 3" stroke="#2563EB" strokeWidth="2" fill="none" opacity="0.3" />
                </svg>
              </span>
              {' '}world
            </h2>
          </div>
          
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-[#2563EB] font-semibold 
                     px-5 py-2.5 rounded-full border-2 border-[#2563EB]/20 
                     hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white 
                     transition-all duration-300 shrink-0"
          >
            View All Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* ============ SERVICE CARDS - GLASSMORPHISM STYLE ============ */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {/* Connecting line between cards */}
          <div className="absolute top-1/2 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[#2563EB]/15 to-transparent hidden md:block" />

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: service.orbitDelay }}
              className="group relative"
            >
              {/* ===== ORBITAL RING ===== */}
              <div className="absolute -inset-4 rounded-[40px] border border-blue-100/30 rotate-6 scale-95 
                           group-hover:rotate-12 group-hover:border-blue-200/50 transition-all duration-500" />
              <div className="absolute -inset-6 rounded-[44px] border border-purple-100/20 -rotate-3 scale-90 
                           group-hover:-rotate-6 transition-all duration-500" />

              {/* ===== MAIN GLASS CARD ===== */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-[32px] overflow-hidden
                           shadow-[0_16px_60px_rgba(0,0,0,0.05),0_0_0_1px_rgba(37,99,235,0.04)]
                           group-hover:shadow-[0_20px_80px_rgba(0,0,0,0.08),0_0_0_1px_rgba(37,99,235,0.1)]
                           transition-all duration-500">
                
                {/* ===== IMAGE SECTION ===== */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  
                  {/* Orbiting dot on image */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-4 right-4 w-8 h-8"
                    style={{ transformOrigin: '-60px -40px' }}
                  >
                    <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  </motion.div>

                  {/* Floating icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl 
                                flex items-center justify-center shadow-lg
                                group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                    <service.icon size={22} className="text-[#2563EB]" />
                  </div>

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/75 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* ===== BOTTOM INFO BAR ===== */}
                <div className="px-6 py-4 flex items-center justify-between bg-white/50 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_6px_rgba(74,222,128,0.4)]" />
                    <span className="text-xs text-gray-500">Available</span>
                  </div>
                  
                  <Link
                    href="/services"
                    className="flex items-center gap-1 text-xs font-semibold text-[#2563EB] 
                             hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* ===== GLOW NODE BELOW ===== */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#2563EB]/40 rounded-full" />
                <div className="w-1 h-1 bg-[#2563EB]/20 rounded-full" />
                <div className="w-0.5 h-0.5 bg-[#2563EB]/10 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== BOTTOM DECORATIVE ELEMENT ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          
        </motion.div>

      </div>
    </section>
  )
}