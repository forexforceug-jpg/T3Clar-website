'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTAStrip() {
  return (
    <section className="py-32 px-4 bg-[#F4F1EA]">
      <div className="max-w-4xl mx-auto text-center">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-mono tracking-[0.4em] uppercase text-[#B45309] inline-block mb-8"
        >
          § 05 · Correspondence
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.03em] text-[#0A0F1F] mb-10"
        >
          Ready to
          <br />
          <em className="not-italic font-black text-[#0EA5E9]">start?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg leading-[1.8] text-[#1A1F2E]/60 max-w-xl mx-auto mb-12"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          If you have a project in mind — or just want to talk through an idea — write to us.
          Every message is read by a real person, and we reply within a day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-16"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-sm font-medium text-white bg-[#0A0F1F] px-8 py-4 hover:bg-[#0EA5E9] transition-all duration-300"
          >
            Start a project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="mailto:hello@t3clar.com"
            className="text-sm font-medium text-[#0A0F1F] border-b-2 border-[#0A0F1F] pb-1 hover:text-[#B45309] hover:border-[#B45309] transition-all"
          >
            hello@t3clar.com
          </a>
        </motion.div>

        {/* Bottom row of details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-10 border-t border-[#1A1F2E]/10 flex items-center justify-center flex-wrap gap-10 text-[10px] font-mono tracking-[0.3em] uppercase text-[#1A1F2E]/50"
        >
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#65A30D]"
            />
            Available for new work
          </span>
          <span>Jinja · Uganda</span>
          <span>Est. 2021</span>
        </motion.div>
      </div>
    </section>
  )
}