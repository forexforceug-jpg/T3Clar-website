'use client'

import Link from 'next/link'
import { Code, Smartphone, Cloud, ArrowRight, Sparkles, Zap, Layers } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software built for performance, scalability and real impact.',
    image: '/SoftwareDevelopment.jpg',
    color: '#2563EB',
    tag: 'Engineering',
    metrics: '150+ builds shipped',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web Solutions',
    description: 'Beautiful digital experiences across all platforms and devices.',
    image: '/MS.jpg',
    color: '#7C3AED',
    tag: 'Product',
    metrics: 'iOS · Android · Web',
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description: 'Secure, reliable and scalable infrastructure for the future.',
    image: '/CloudInfrastructure.webp',
    color: '#06B6D4',
    tag: 'Infrastructure',
    metrics: '99.9% uptime',
  },
]

export default function WhatWeDo() {
  return (
    <section className="relative py-24 md:py-32 px-4 bg-white overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50/30 rounded-full blur-[130px]" />

      {/* Dotted grid */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div className="h-full w-full bg-[radial-gradient(circle,#2563EB_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
                What We Do
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-[1.1]">
              End-to-end digital solutions for a{' '}
              <span className="relative inline-block">
                <span className="text-[#2563EB]">modern</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 80 6" preserveAspectRatio="none">
                  <path d="M0 3 Q20 0 40 3 Q60 6 80 3" stroke="#2563EB" strokeWidth="2" fill="none" opacity="0.3" />
                </svg>
              </span>{' '}
              world
            </h2>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-[#2563EB] font-semibold px-5 py-2.5 rounded-full border-2 border-[#2563EB]/20 hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all duration-300 shrink-0"
          >
            View All Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Orbital rings behind card */}
                <div className="absolute -inset-4 rounded-[40px] border border-blue-100/40 rotate-6 scale-95 group-hover:rotate-12 group-hover:border-blue-200/60 transition-all duration-500" />
                <div className="absolute -inset-6 rounded-[44px] border border-purple-100/30 -rotate-3 scale-90 group-hover:-rotate-6 transition-all duration-500" />

                {/* Card */}
                <div className="relative bg-white rounded-[32px] overflow-hidden shadow-[0_16px_60px_rgba(0,0,0,0.06)] group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* Tag */}
                    <div
                      className="absolute top-5 right-5 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-wider uppercase"
                      style={{ backgroundColor: `${service.color}CC` }}
                    >
                      {service.tag}
                    </div>

                    {/* Icon badge */}
                    <div className="absolute top-5 left-5 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon size={24} className="text-[#2563EB]" />
                    </div>

                    {/* Orbiting dot */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15 + index * 2, repeat: Infinity, ease: 'linear' }}
                      className="absolute top-8 right-8 w-8 h-8"
                      style={{ transformOrigin: '-50px -30px' }}
                    >
                      <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                    </motion.div>

                    {/* Text */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/75 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 flex items-center justify-between bg-white">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                      <span className="text-xs text-gray-500 font-medium">{service.metrics}</span>
                    </div>
                    <Link
                      href="/services"
                      className="flex items-center gap-1 text-xs font-bold text-[#2563EB] group-hover:gap-2 transition-all"
                    >
                      Learn More
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom strip of quick capabilities */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {[
            { icon: Layers, label: 'Full-Stack', desc: 'End-to-end delivery' },
            { icon: Zap, label: 'Rapid Build', desc: 'Ship in weeks' },
            { icon: Sparkles, label: 'AI-Ready', desc: 'Future-proof stack' },
            { icon: Cloud, label: 'Cloud-Native', desc: 'Scale on demand' },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-center gap-3 p-4 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#2563EB]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F172A]">{item.label}</div>
                  <div className="text-[11px] text-gray-500">{item.desc}</div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}