'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.05] 
                   bg-gradient-to-br from-[#0F1525] via-[#151B2E] to-[#0F1525] p-10 md:p-16"
        >
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#4A9EFF]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[linear-gradient(rgba(74,158,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(74,158,255,0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex items-center gap-6">
              {/* Animated Icon */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="w-16 h-16 md:w-20 md:h-20 bg-[#4A9EFF]/20 rounded-2xl flex items-center 
                         justify-center flex-shrink-0 border border-[#4A9EFF]/30"
              >
                <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-[#4A9EFF]" />
              </motion.div>

              {/* Text */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                  Ready to Build Something{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    Amazing
                  </span>
                  ?
                </h2>
                <p className="text-gray-400 text-base md:text-lg max-w-xl">
                  Let&apos;s discuss your project and create a digital solution that transforms your business.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-[#4A9EFF] text-white rounded-full 
                       font-semibold text-base shadow-[0_0_30px_rgba(74,158,255,0.3)] 
                       hover:shadow-[0_0_40px_rgba(74,158,255,0.5)] transition-all duration-300 
                       whitespace-nowrap flex-shrink-0"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent 
                       via-[#4A9EFF]/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}