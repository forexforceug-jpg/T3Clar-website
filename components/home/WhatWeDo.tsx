'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  { number: '01', title: 'Software Development', subtitle: 'Engineering', description: 'Custom software built for performance, scalability and real impact.', detail: 'Built with TypeScript, Go, Python and Postgres.', image: '/yy.jpg' },
  { number: '02', title: 'Mobile & Web', subtitle: 'Product', description: 'Beautiful digital experiences across all platforms and devices.', detail: 'iOS, Android, React Native and Next.js.', image: '/tt.jpg' },
  { number: '03', title: 'Cloud & Infrastructure', subtitle: 'Operations', description: 'Secure, reliable and scalable infrastructure for the future.', detail: 'AWS, GCP, Kubernetes and DevOps.', image: '/bb.jpg' },
]

export default function WhatWeDo() {
  return (
    <section className="py-24 md:py-32 px-4 bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto">

        {/* Header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-[#B45309]">
            What We Do
          </span>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.03em] text-[#0A0F1F]/60 mt-6 max-w-3xl mx-auto"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400 }}
          >
            Three things,
            <br />
            done <em className="not-italic font-black">exceptionally well.</em>
          </h2>
          <p className="text-base leading-[1.8] text-[#1A1F2E]/60 mt-8 max-w-lg mx-auto">
            Every solution we ship comes from one of three disciplines — engineering,
            product, or infrastructure.
          </p>
        </motion.div>

        {/* Alternating panels */}
        <div className="space-y-24 md:space-y-32">
          {services.map((service, i) => {
            const isReversed = i % 2 === 1
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-12 gap-6 md:gap-12 items-center"
              >
                {/* Photo — edges faded into background */}
                <div className={`col-span-12 md:col-span-7 ${isReversed ? 'md:order-2' : ''}`}>
                  <div className="relative">
                    {/* Soft glow behind the photo */}
                    <div
                      className="absolute -inset-16 rounded-full blur-[60px] opacity-40 pointer-events-none"
                      style={{ backgroundColor: '#F4F1EA' }}
                    />

                    <div className="relative aspect-[5/4]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        style={{
                          // Feathered edges via radial mask
                          WebkitMaskImage:
                            'radial-gradient(ellipse 85% 85% at center, black 55%, transparent 100%)',
                          maskImage:
                            'radial-gradient(ellipse 85% 85% at center, black 55%, transparent 100%)',
                        }}
                      />

                      {/* Warm scrim on the outer edge for background blend */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse 70% 70% at center, transparent 40%, #F4F1EA 100%)`,
                        }}
                      />

                      {/* Small number badge — soft, not boxed */}
                      <div className="absolute top-6 left-6 flex items-center gap-3">
                        <span
                          className="text-3xl font-black text-[#0A0F1F]/25 tabular-nums"
                          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                        >
                          {service.number}
                        </span>
                        <span className="w-10 h-px bg-[#0A0F1F]/20" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`col-span-12 md:col-span-5 ${isReversed ? 'md:order-1 md:text-right' : ''}`}>
                  <div className={`text-[10px] font-mono tracking-[0.4em] uppercase text-[#B45309] mb-5 ${isReversed ? 'md:text-right' : ''}`}>
                    {service.subtitle}
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-[#0A0F1F] mb-6 font-black">
                    {service.title}
                  </h3>
                  <p
                    className="text-base leading-[1.8] text-[#1A1F2E]/70 mb-4"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    {service.description}
                  </p>
                  <p className="text-sm leading-[1.7] text-[#1A1F2E]/50 mb-6 font-mono">
                    {service.detail}
                  </p>
                  <Link
                    href="/services"
                    className={`group inline-flex items-center gap-2 text-sm font-medium text-[#0A0F1F] border-b-2 border-[#0A0F1F] pb-1 hover:text-[#B45309] hover:border-[#B45309] transition-all ${isReversed ? 'md:flex-row-reverse' : ''}`}
                  >
                    {isReversed ? (
                      <>
                        <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                        Explore this service
                      </>
                    ) : (
                      <>
                        Explore this service
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footer link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 text-base font-medium text-[#0A0F1F] border-b-2 border-[#0A0F1F] pb-2 hover:text-[#0EA5E9] hover:border-[#0EA5E9] transition-all"
          >
            See all services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}