'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const pillars = [
  { title: 'Innovate', number: 'i', description: 'We embrace creativity and innovation to build smart solutions that solve real-world challenges with fresh thinking and cutting-edge technology.' },
  { title: 'Deliver', number: 'ii', description: 'We are committed to quality, reliability and excellence in every product we build, ensuring our solutions exceed expectations.' },
  { title: 'Empower', number: 'iii', description: 'We empower businesses and communities through technology and knowledge, creating lasting impact that drives growth and transformation.' },
]

export default function Mission() {
  return (
    <section className="py-24 md:py-32 px-4 bg-[#F4F1EA]">
      <div className="max-w-6xl mx-auto">

        {/* Top meta */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-between flex-wrap gap-4 pb-6 mb-20 border-b border-[#1A1F2E]/10"
        >
          <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#1A1F2E]/50">
            § 03 · Mission
          </span>
          <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#1A1F2E]/50">
            Our Charter
          </span>
        </motion.div>

        {/* Centered statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-[#B45309]">
            Why We Exist
          </span>
          <p className="text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-[-0.02em] text-[#0A0F1F]/60 mt-8 max-w-4xl mx-auto"
             style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400 }}>
            Building Jinja&apos;s digital foundation
            <br />
            for a <em className="font-black not-italic text-[#0EA5E9]/60">brighter tomorrow.</em>
          </p>
          <p className="text-lg leading-[1.8] text-[#1A1F2E]/60 mt-10 max-w-2xl mx-auto">
            We&apos;re not just building software — we&apos;re building the digital backbone
            that will power African businesses for the next 20 years.
          </p>
        </motion.div>

        {/* Pillars — big centered numbers, wide spacing */}
        <div className="grid md:grid-cols-3 gap-16 md:gap-12 mb-20">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="text-[10px] font-mono tracking-[0.4em] uppercase text-[#B45309] mb-6">
                {p.number}
              </div>
              <h3 className="text-4xl md:text-5xl leading-none tracking-[-0.03em] text-[#0A0F1F] mb-6 font-black">
                {p.title}
              </h3>
              <div className="w-12 h-px bg-[#0A0F1F] mx-auto mb-6" />
              <p className="text-base leading-[1.8] text-[#1A1F2E]/70"
                 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing line + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-16 border-t border-[#1A1F2E]/10"
        >
          <p className="text-xl md:text-2xl leading-[1.6] text-[#0A0F1F] max-w-2xl mx-auto mb-10"
             style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}>
            &ldquo;Built on trust. Driven by purpose. Delivered with excellence.&rdquo;
          </p>
          <Link href="/about" className="group inline-flex items-center gap-3 text-base font-medium text-[#0A0F1F] border-b-2 border-[#0A0F1F] pb-2 hover:text-[#0EA5E9] hover:border-[#0EA5E9] transition-all">
            Read the full charter
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}