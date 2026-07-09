'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Car, ShoppingBag, TrendingUp, Layout, Shield, Cloud,
  Box, Users, Code, Smartphone, Globe, CreditCard, Server,
  Grid3X3, ArrowRight, ChevronDown
} from 'lucide-react'

const categories = [
  { label: 'All Projects', icon: Grid3X3, active: true },
  { label: 'Mobile Apps', icon: Smartphone, active: false },
  { label: 'Web Applications', icon: Globe, active: false },
  { label: 'E-commerce', icon: ShoppingBag, active: false },
  { label: 'Systems & Platforms', icon: Server, active: false },
  { label: 'Infrastructure', icon: Cloud, active: false },
]

const projects = [
  {
    title: 'XRide',
    coloredPart: 'X',
    whitePart: 'Ride',
    color: '#2563EB',
    category: 'MOBILE APP',
    subtitle: 'Smart Transportation Platform',
    description: 'A smart transport solution connecting passengers with reliable drivers across Jinja through real-time tracking, cashless payments and improved ride experience.',
    icon: Car,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'ShopIt',
    coloredPart: 'Shop',
    whitePart: 'It',
    color: '#10B981',
    category: 'MOBILE APP',
    subtitle: 'Shopping & Delivery Ecosystem',
    description: 'An all-in-one marketplace for restaurants, pharmacies, shops and local businesses offering fast, reliable and secure deliveries.',
    icon: ShoppingBag,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    title: 'Clexarly',
    coloredPart: 'Clex',
    whitePart: 'arly',
    color: '#8B5CF6',
    category: 'WEB PLATFORM',
    subtitle: 'Digital Growth & Business Solutions',
    description: 'Helping businesses grow through marketing tools, analytics, automation and customer engagement solutions.',
    icon: TrendingUp,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Business Management System',
    category: 'WEB APPLICATION',
    subtitle: 'Custom Management Solutions',
    description: 'Custom business management systems designed to streamline operations, improve productivity and drive growth.',
    icon: Layout,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Payment Gateway Integration',
    category: 'SYSTEMS & PLATFORMS',
    subtitle: 'Secure Payment Solutions',
    description: 'Secure and seamless payment solutions supporting multiple payment methods and real-time settlement.',
    icon: Shield,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Cloud Infrastructure',
    category: 'INFRASTRUCTURE',
    subtitle: 'Scalable Cloud Architecture',
    description: 'Scalable, secure and reliable cloud infrastructure designed to support business growth and innovation.',
    icon: Cloud,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
]

const stats = [
  { icon: Box, number: '50+', label: 'Projects Delivered' },
  { icon: Users, number: '30+', label: 'Happy Clients' },
  { icon: Code, number: '100K+', label: 'Users Impacted' },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All Projects')

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
          <img
            src="/jinja-cityscape.jpg"
            alt="Jinja bridge"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-50% to-white/5" />
          <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-gradient-to-r from-white/90 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <span className="text-[#2563EB] text-xs font-bold tracking-[0.3em] uppercase">
                OUR PROJECTS
              </span>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mt-4 tracking-tight">
                <span className="text-[#0F172A] block">Real Projects.</span>
                <span className="text-[#2563EB] block">Real Impact.</span>
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed mt-6 max-w-xl">
                We build digital solutions that solve real problems, transform businesses 
                and improve everyday life in Jinja and beyond.
              </p>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 border-2 border-[#2563EB] text-[#2563EB] 
                         rounded-full font-semibold hover:bg-[#2563EB] hover:text-white transition-all"
              >
                Start Your Project →
              </Link>
            </div>

            {/* Right - Floating Stats */}
            <div className="relative">
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-gray-100 
                             flex items-center gap-4 max-w-xs"
                    style={{ marginLeft: `${index * 2}rem` }}
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <stat.icon size={22} className="text-[#2563EB]" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-[#2563EB]">{stat.number}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FILTER BAR ============ */}
      <section className="py-8 px-4 bg-white border-b border-gray-100 sticky top-16 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.label
                    ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-500/20'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-[#2563EB]/30 hover:text-[#2563EB]'
                }`}
              >
                <cat.icon size={16} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROJECTS GRID ============ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden 
                                                 hover:shadow-xl hover:border-[#2563EB]/20 transition-all duration-300">
                
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="/jinja-cityscape.jpg"
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Brand overlay for named platforms */}
                  {project.coloredPart && (
                    <div className="absolute bottom-4 left-4">
                      <span className="text-3xl font-black" style={{ color: project.color }}>
                        {project.coloredPart}
                      </span>
                      <span className="text-3xl font-black text-white">{project.whitePart}</span>
                    </div>
                  )}

                  {/* Floating Icon */}
                  <div className={`absolute -bottom-4 right-4 w-10 h-10 ${project.iconBg} rounded-xl 
                                flex items-center justify-center shadow-lg border border-white`}>
                    <project.icon size={18} className={project.iconColor} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-5">
                  <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">
                    {project.category}
                  </span>
                  
                  {!project.coloredPart && (
                    <h3 className="text-xl font-bold text-[#0F172A] mt-2 mb-1">
                      {project.title}
                    </h3>
                  )}
                  
                  <p className="text-sm text-gray-500 mt-1 mb-1">{project.subtitle}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mt-2 mb-4">
                    {project.description}
                  </p>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-[#2563EB] text-sm font-semibold hover:gap-2 transition-all"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-200 text-gray-600 
                             rounded-full font-semibold hover:border-[#2563EB] hover:text-[#2563EB] transition-all">
              Load More Projects
              <ChevronDown size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#1E3A5F] to-[#0F172A]" />
            
            {/* Right side cityscape */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2">
              <img
                src="/jinja-cityscape.jpg"
                alt="Jinja night"
                className="w-full h-full object-cover opacity-20"
              />
            </div>

            {/* Digital arcs */}
            <svg className="absolute right-0 top-0 w-1/2 h-full opacity-30" viewBox="0 0 400 300">
              <path d="M 50 200 Q 200 50 350 150" stroke="#60A5FA" strokeWidth="1" fill="none" />
              <path d="M 0 250 Q 150 100 400 180" stroke="#2563EB" strokeWidth="0.8" fill="none" strokeDasharray="6,4" />
              <circle cx="300" cy="100" r="4" fill="#60A5FA" />
              <circle cx="150" cy="180" r="3" fill="#2563EB" />
              <circle cx="350" cy="200" r="5" fill="#60A5FA" />
            </svg>

            {/* Content */}
            <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-lg">
                <span className="text-white/70 text-xs font-bold tracking-[0.25em] uppercase">
                  HAVE AN IDEA?
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mt-4">
                  Let&apos;s build something{' '}
                  <span className="text-[#60A5FA]">amazing together.</span>
                </h2>
                <p className="text-blue-100/80 mt-3">
                  We turn ideas into powerful digital solutions that create impact and drive growth.
                </p>
              </div>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2563EB] rounded-full 
                         font-bold hover:bg-blue-50 transition-colors shadow-lg shrink-0"
              >
                Start Your Project →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}