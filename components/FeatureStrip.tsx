'use client'

import { motion } from 'framer-motion'
import { Cpu, MapPin, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Innovation First',
    description: 'Cutting-edge solutions built with the latest technology stacks for maximum performance.',
  },
  {
    icon: MapPin,
    title: 'Local Impact',
    description: 'Deeply rooted in Jinja, driving regional digital transformation across Uganda.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols protecting your digital assets 24/7.',
  },
  {
    icon: Zap,
    title: 'Future Ready',
    description: 'Scalable architectures designed for tomorrow\'s challenges and growth.',
  },
]

export default function FeatureStrip() {
  return (
    <section className="feature-strip-section relative pt-16 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] 
                       rounded-2xl p-8 cursor-default overflow-hidden
                       hover:bg-white/[0.04] hover:border-white/[0.1] 
                       transition-all duration-500"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A9EFF]/0 to-[#4A9EFF]/0 
                           group-hover:from-[#4A9EFF]/5 group-hover:to-transparent 
                           transition-all duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 bg-[#4A9EFF]/10 rounded-2xl flex items-center justify-center mb-6
                             group-hover:bg-[#4A9EFF]/20 group-hover:scale-110 
                             transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-[#4A9EFF]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#4A9EFF] 
                             transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 
                            transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Bottom border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent 
                           via-[#4A9EFF]/0 to-transparent group-hover:via-[#4A9EFF]/50 
                           transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}