'use client'

import Link from 'next/link'
import { Users, Rocket, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { icon: Users, number: '100+', label: 'Happy Clients', suffix: 'worldwide' },
  { icon: Rocket, number: '50+', label: 'Projects Delivered', suffix: 'and counting' },
  { icon: ShieldCheck, number: '99.9%', label: 'System Reliability', suffix: 'uptime guaranteed' },
]

export default function WhoWeAre() {
  return (
    <section className="py-24 md:py-32 px-4 bg-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          
          {/* Left - Office Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative group"
          >
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/It-soln2.jpeg"
                alt="Modern technology office"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/60 via-[#0F172A]/20 to-transparent" />
              
              {/* Stats badge on image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Sparkles size={18} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Trusted by 100+ clients</div>
                    <div className="text-xs text-gray-500">Across Uganda & beyond</div>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                  ))}
                </div>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -left-3 top-1/3 flex flex-col gap-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i % 2 === 0 ? 'bg-[#2563EB]/60' : 'bg-[#2563EB]/30'
                  }`} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center - Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1.5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full mb-4">
              <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
              <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                WHO WE ARE
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] leading-tight mt-4">
              Technology solutions that{' '}
              <span className="relative">
                <span className="text-[#2563EB]">drive growth</span>
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-blue-100 -z-10 rounded-full" />
              </span>
            </h2>
            
            <p className="text-gray-500 leading-relaxed mt-4">
              T3Clar is a software and technology solutions company based in Jinja, Uganda. 
              We design, develop and implement innovative digital solutions that transform 
              how businesses operate and grow.
            </p>
            
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[#2563EB] font-semibold mt-6 
                       px-5 py-2.5 rounded-full border-2 border-[#2563EB]/20 hover:border-[#2563EB] 
                       hover:bg-[#2563EB] hover:text-white transition-all duration-300"
            >
              More About Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Divider */}
          <motion.div 
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block w-px h-48 bg-gradient-to-b from-transparent via-gray-300 to-transparent" 
          />

          {/* Right - Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-0.5 space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-all duration-300 cursor-default"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center 
                              group-hover:bg-[#2563EB] group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                  <stat.icon size={20} className="text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-[#2563EB]">{stat.number}</span>
                    {stat.number === '99.9%' && <span className="text-xs text-green-500 font-semibold">▲</span>}
                  </div>
                  <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.suffix}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}