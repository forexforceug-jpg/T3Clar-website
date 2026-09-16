'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { 
  Car, ShoppingBag, TrendingUp, Layout, Shield, Cloud,
  Box, Users, Code, Smartphone, Globe, Server,
  Grid3X3, ArrowRight, ChevronDown, Lightbulb, Sparkles,
  Rocket, Zap, Award, TrendingUp as TrendingUpIcon, Play, 
  FlaskConical, TestTube, Microscope, Atom, Beaker, 
  Hexagon, Check, ExternalLink
} from 'lucide-react'

/* ============================================================
   DATA
   ============================================================ */

const categories = [
  { label: 'All Projects', icon: Grid3X3, key: 'all' },
  { label: 'Mobile Apps', icon: Smartphone, key: 'MOBILE APP' },
  { label: 'Web Applications', icon: Globe, key: 'WEB APPLICATION' },
  { label: 'E-commerce', icon: ShoppingBag, key: 'E-COMMERCE' },
  { label: 'Systems & Platforms', icon: Server, key: 'SYSTEMS & PLATFORMS' },
  { label: 'Infrastructure', icon: Cloud, key: 'INFRASTRUCTURE' },
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
    image: '/MS.jpg',
    status: 'Live',
    year: '2024',
  },
  {
    title: 'ShopIt',
    coloredPart: 'Shop',
    whitePart: 'It',
    color: '#10B981',
    category: 'E-COMMERCE',
    subtitle: 'Shopping & Delivery Ecosystem',
    description: 'An all-in-one marketplace for restaurants, pharmacies, shops and local businesses offering fast, reliable and secure deliveries.',
    icon: ShoppingBag,
    image: '/shopit.png',
    status: 'Live',
    year: '2024',
  },
  {
    title: 'Clexarly',
    coloredPart: 'Clex',
    whitePart: 'arly',
    color: '#8B5CF6',
    category: 'WEB APPLICATION',
    subtitle: 'Digital Growth & Business Solutions',
    description: 'Helping businesses grow through marketing tools, analytics, automation and customer engagement solutions.',
    icon: TrendingUp,
    image: '/clxry.png',
    status: 'Live',
    year: '2023',
  },
  {
    title: 'Business Management System',
    category: 'WEB APPLICATION',
    subtitle: 'Custom Management Solutions',
    description: 'Custom business management systems designed to streamline operations, improve productivity and drive growth.',
    icon: Layout,
    color: '#0EA5E9',
    image: '/SoftwareDevelopment.jpg',
    status: 'Active',
    year: '2024',
  },
  {
    title: 'Payment Gateway Integration',
    category: 'SYSTEMS & PLATFORMS',
    subtitle: 'Secure Payment Solutions',
    description: 'Secure and seamless payment solutions supporting multiple payment methods and real-time settlement.',
    icon: Shield,
    color: '#EF4444',
    image: '/CloudInfrastructure.webp',
    status: 'Live',
    year: '2023',
  },
  {
    title: 'Cloud Infrastructure',
    category: 'INFRASTRUCTURE',
    subtitle: 'Scalable Cloud Architecture',
    description: 'Scalable, secure and reliable cloud infrastructure designed to support business growth and innovation.',
    icon: Cloud,
    color: '#06B6D4',
    image: '/It-soln2.jpeg',
    status: 'Enterprise',
    year: '2024',
  },
]

/* ============================================================
   INNOVATION LABS DATA
   ============================================================ */

const labsProjects = [
  {
    codename: 'Project Kito',
    category: 'AI · Assistive Tech',
    status: 'In Development',
    progress: 72,
    description: 'A Luganda-first AI assistant designed for local businesses to automate customer support, sales and reporting.',
    color: '#2563EB',
    icon: Atom,
    image: '/SoftwareDevelopment.jpg',
    tags: ['AI', 'NLP', 'Local Language'],
  },
  {
    codename: 'Project Mvua',
    category: 'Fintech · Payments',
    status: 'Prototype',
    progress: 45,
    description: 'A rural-first micro-payments rail that works offline and syncs when connection is restored.',
    color: '#10B981',
    icon: Beaker,
    image: '/CloudInfrastructure.webp',
    tags: ['Offline-First', 'Payments'],
  },
  {
    codename: 'Project Nyota',
    category: 'Health · Diagnostics',
    status: 'Research',
    progress: 28,
    description: 'Low-bandwidth telemedicine platform connecting rural clinics with specialists via offline-capable mobile tools.',
    color: '#8B5CF6',
    icon: Microscope,
    image: '/It-soln2.jpeg',
    tags: ['HealthTech', 'Mobile'],
  },
]

const labPrinciples = [
  { icon: FlaskConical, title: 'Experiment Fast', desc: 'Ship prototypes in weeks, not months.' },
  { icon: TestTube, title: 'Validate Early', desc: 'Real users test real builds before scale.' },
  { icon: Rocket, title: 'Scale What Works', desc: 'The best experiments graduate to products.' },
  { icon: Sparkles, title: 'Solve Real Problems', desc: 'Every lab project targets a real Jinja pain point.' },
]

const stats = [
  { icon: Box, number: '50+', label: 'Projects Delivered' },
  { icon: Users, number: '30+', label: 'Happy Clients' },
  { icon: Code, number: '100K+', label: 'Users Impacted' },
]

/* ============================================================
   PAGE
   ============================================================ */

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [visibleCount, setVisibleCount] = useState(6)

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects
    return projects.filter(p => p.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img
            src="/44.jpg"
            alt="Jinja"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 via-50% to-white/10" />
          <div className="absolute left-0 top-0 bottom-0 w-[60%] bg-gradient-to-r from-white/95 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

          {/* Digital accent lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-[#2563EB]/25 to-transparent"
                style={{ top: `${25 + i * 9}%`, left: '55%', right: '5%' }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left content */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-[#2563EB] text-xs font-bold tracking-[0.3em] uppercase">
                <div className="w-8 h-px bg-[#2563EB]" />
                Our Projects
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.98] mt-5 tracking-tight">
                <span className="text-[#0F172A] block">Real Projects.</span>
                <span className="text-[#2563EB] block">Real Impact.</span>
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mt-6 max-w-xl">
                We build digital solutions that solve real problems, transform businesses
                and improve everyday life in Jinja and beyond.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-4 bg-[#2563EB] text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20"
                >
                  Start Your Project
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#projects-grid"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-[#0F172A] border-2 border-gray-200 hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-300"
                >
                  Browse Work
                </Link>
              </div>
            </div>

            {/* Right — Stats */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="grid grid-cols-1 gap-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className="group flex items-center gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] hover:border-blue-200 transition-all duration-300"
                      style={{ marginLeft: `${i * 24}px` }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={22} className="text-[#2563EB]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-black text-[#2563EB]">{stat.number}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                      <ArrowRight size={16} className="text-gray-300 group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FILTER BAR
          ============================================================ */}
      <section className="py-6 px-4 bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 -mb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isActive = activeCategory === cat.key
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 shrink-0 ${
                    isActive
                      ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-[#2563EB]/40 hover:text-[#2563EB] hover:bg-blue-50/40'
                  }`}
                >
                  <Icon size={15} />
                  {cat.label}
                  {isActive && (
                    <span className="ml-1 px-1.5 py-0.5 rounded-full bg-white/20 text-[10px] font-black">
                      {filteredProjects.length}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          PROJECTS GRID
          ============================================================ */}
      <section id="projects-grid" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                <Grid3X3 size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">No projects in this category yet</h3>
              <p className="text-gray-500 text-sm">We&apos;re working on new things — check back soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.slice(0, visibleCount).map((project, index) => {
                const Icon = project.icon
                return (
                  <Link
                    key={project.title}
                    href="/contact"
                    className="group relative bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-[0_24px_70px_rgba(37,99,235,0.12)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-500"
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    {/* Image */}
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />

                      {/* Color tint on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 mix-blend-overlay"
                        style={{ background: `linear-gradient(to top, ${project.color}, transparent 70%)` }}
                      />

                      {/* Status badge */}
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                        <span className="relative flex items-center justify-center">
                          <span className="absolute w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                          <span className="relative w-1.5 h-1.5 rounded-full bg-green-400" />
                        </span>
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                          {project.status}
                        </span>
                      </div>

                      {/* Icon badge */}
                      <div
                        className="absolute top-4 left-4 w-11 h-11 rounded-xl backdrop-blur-md flex items-center justify-center border border-white/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                        style={{ backgroundColor: `${project.color}CC` }}
                      >
                        <Icon size={20} className="text-white" />
                      </div>

                      {/* Brand name */}
                      {project.coloredPart && (
                        <div className="absolute bottom-5 left-5">
                          <span className="text-3xl font-black" style={{ color: project.color }}>
                            {project.coloredPart}
                          </span>
                          <span className="text-3xl font-black text-white">{project.whitePart}</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="text-[10px] font-bold tracking-[0.15em] uppercase"
                          style={{ color: project.color }}
                        >
                          {project.category}
                        </span>
                        <span className="text-[10px] font-semibold text-gray-400">{project.year}</span>
                      </div>

                      <h3 className="text-lg font-bold text-[#0F172A] mb-1 leading-snug">
                        {project.coloredPart ? project.subtitle : project.title}
                      </h3>

                      {!project.coloredPart && (
                        <p className="text-xs text-gray-400 mb-3">{project.subtitle}</p>
                      )}

                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div
                        className="flex items-center gap-1.5 mt-4 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                        style={{ color: project.color }}
                      >
                        View Case Study
                        <ArrowRight size={14} />
                      </div>
                    </div>

                    {/* Bottom accent bar */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                      style={{ backgroundColor: project.color }}
                    />
                  </Link>
                )
              })}
            </div>
          )}

          {/* Load more */}
          {filteredProjects.length > visibleCount && (
            <div className="text-center mt-14">
              <button
                onClick={() => setVisibleCount((c) => c + 6)}
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-gray-200 text-gray-600 rounded-full font-semibold hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-blue-50/40 transition-all duration-300"
              >
                Load More Projects
                <ChevronDown size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          INNOVATION LABS — REDESIGNED
          ============================================================ */}
      <section className="relative py-24 md:py-32 px-4 bg-[#080B14] overflow-hidden">
        {/* Deep space background */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <circle
                key={i}
                cx={`${(i * 41) % 100}%`}
                cy={`${(i * 67) % 100}%`}
                r={((i * 5) % 11) / 10 + 0.4}
                fill="white"
                opacity={((i * 3) % 6) / 10 + 0.15}
              >
                <animate
                  attributeName="opacity"
                  values={`0.1;${((i * 7) % 8) / 10 + 0.3};0.1`}
                  dur={`${4 + (i % 5)}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </svg>

          <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-blue-700/10 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-purple-700/10 rounded-full blur-[160px]" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/[0.04] border border-white/10 backdrop-blur-sm rounded-full mb-6">
              <FlaskConical size={12} className="text-cyan-400" />
              <span className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase">
                T3Clar Innovation Labs
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] max-w-3xl mx-auto">
              Where tomorrow&apos;s{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                platforms are born.
              </span>
            </h2>

            <p className="text-white/50 mt-6 max-w-xl mx-auto text-lg">
              Our research arm explores the technologies that will define the next decade
              of Jinja&rsquo;s digital infrastructure — before the market asks for them.
            </p>
          </div>

          {/* Lab principles — horizontal strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {labPrinciples.map((p, i) => {
              const Icon = p.icon
              return (
                <div
                  key={p.title}
                  className="group relative flex items-start gap-3 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all duration-500"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all duration-500">
                    <Icon size={18} className="text-cyan-300" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{p.title}</div>
                    <div className="text-white/40 text-xs mt-1 leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Lab projects — 3 large cards */}
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {labsProjects.map((lab, i) => {
              const Icon = lab.icon
              return (
                <div
                  key={lab.codename}
                  className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/25 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
                >
                  {/* Image top */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={lab.image}
                      alt={lab.codename}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B14] via-[#080B14]/60 to-transparent" />

                    {/* Color glow */}
                    <div
                      className="absolute inset-0 opacity-40 mix-blend-overlay"
                      style={{ background: `linear-gradient(to top, ${lab.color}, transparent 60%)` }}
                    />

                    {/* Status badge */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
                      <div
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: lab.color }}
                      />
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                        {lab.status}
                      </span>
                    </div>

                    {/* Icon badge */}
                    <div
                      className="absolute top-4 right-4 w-10 h-10 rounded-xl backdrop-blur-md flex items-center justify-center border border-white/25 group-hover:rotate-12 transition-transform duration-500"
                      style={{ backgroundColor: `${lab.color}CC` }}
                    >
                      <Icon size={18} className="text-white" />
                    </div>

                    {/* Codename */}
                    <div className="absolute bottom-4 left-5 right-5">
                      <div className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase mb-1">
                        {lab.category}
                      </div>
                      <div className="text-xl font-black text-white">{lab.codename}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-white/60 text-sm leading-relaxed mb-5">
                      {lab.description}
                    </p>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold tracking-wider text-white/40 uppercase">
                          Progress
                        </span>
                        <span className="text-xs font-black" style={{ color: lab.color }}>
                          {lab.progress}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${lab.progress}%`,
                            background: `linear-gradient(to right, ${lab.color}, ${lab.color}80)`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {lab.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full text-[10px] font-semibold border border-white/10 text-white/50 bg-white/[0.03]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom link */}
                    <div
                      className="flex items-center gap-1.5 text-xs font-bold opacity-70 group-hover:opacity-100 transition-opacity"
                      style={{ color: lab.color }}
                    >
                      Follow Progress
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Ambient glow */}
                  <div
                    className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-[80px] pointer-events-none"
                    style={{ backgroundColor: lab.color }}
                  />
                </div>
              )
            })}
          </div>

          {/* Bottom manifesto + CTA */}
          <div className="relative max-w-4xl mx-auto text-center">
            <p className="text-white/50 text-lg leading-relaxed">
              <span className="text-cyan-300 font-semibold">Innovation Labs</span> is our long-term bet on Jinja —{' '}
              we fund the research, build the prototypes, and hand the winners to our product teams.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#080B14] rounded-full font-bold hover:bg-cyan-50 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                <FlaskConical size={16} />
                Partner With The Lab
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border-2 border-white/15 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              >
                Submit An Idea
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E3A5F] to-[#2563EB] p-10 md:p-16">
            {/* Cityscape */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2">
              <img
                src="/SoftwareDevelopment.jpg"
                alt=""
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1E3A5F]" />
            </div>

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />

            {/* Arcs */}
            <svg className="absolute right-0 top-0 w-1/2 h-full opacity-25 pointer-events-none" viewBox="0 0 400 400">
              <path d="M 0 350 Q 200 50 400 150" stroke="#60A5FA" strokeWidth="1" fill="none" />
              <path d="M 0 250 Q 200 100 400 200" stroke="#60A5FA" strokeWidth="0.5" fill="none" strokeDasharray="4,6" />
              <circle cx="300" cy="120" r="3" fill="#60A5FA">
                <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="200" r="2.5" fill="#60A5FA">
                <animate attributeName="r" values="2.5;4.5;2.5" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </svg>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 text-blue-300 text-xs font-bold tracking-[0.25em] uppercase">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
                  Have an idea?
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.05] mt-4">
                  Let&apos;s build something{' '}
                  <span className="text-blue-300">amazing together.</span>
                </h2>
                <p className="text-blue-100/70 mt-4 text-lg">
                  We turn ideas into powerful digital solutions that create impact and drive growth.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2563EB] rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 shrink-0"
              >
                Start Your Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Bottom meta */}
            <div className="relative z-10 flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/10">
              {[
                { icon: Award, label: 'Award-winning delivery' },
                { icon: Zap, label: 'Fast turnaround' },
                { icon: Users, label: 'Dedicated teams' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-2">
                    <Icon size={14} className="text-blue-300" />
                    <span className="text-white/60 text-xs font-medium">{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}