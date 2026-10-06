'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import {
  ArrowUpRight, Plus, Minus, ChevronDown,
  Grid3X3, Smartphone, Globe, ShoppingBag, Server, Cloud,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/* ============================================================
   DATA
   ============================================================ */

const categories = [
  { label: 'All Work', key: 'all' },
  { label: 'Mobile Apps', key: 'MOBILE APP' },
  { label: 'Web Platforms', key: 'WEB APPLICATION' },
  { label: 'E-commerce', key: 'E-COMMERCE' },
  { label: 'Systems', key: 'SYSTEMS & PLATFORMS' },
  { label: 'Infrastructure', key: 'INFRASTRUCTURE' },
]

const projects = [
  {
    number: '01',
    title: 'XRide',
    category: 'Mobile Application',
    subtitle: 'Smart Transportation Platform',
    description: 'A smart transport solution connecting passengers with reliable drivers across Jinja through real-time tracking, cashless payments and improved ride experience.',
    image: '/MS.jpg',
    status: 'Live',
    year: '2024',
  },
  {
    number: '02',
    title: 'ShopIt',
    category: 'E-Commerce',
    subtitle: 'Shopping & Delivery Ecosystem',
    description: 'An all-in-one marketplace for restaurants, pharmacies, shops and local businesses offering fast, reliable and secure deliveries.',
    image: '/shopit.png',
    status: 'Live',
    year: '2024',
  },
  {
    number: '03',
    title: 'Clexarly',
    category: 'Web Platform',
    subtitle: 'Digital Growth & Business Solutions',
    description: 'Helping businesses grow through marketing tools, analytics, automation and customer engagement solutions.',
    image: '/clxry.png',
    status: 'Live',
    year: '2023',
  },
  {
    number: '04',
    title: 'Business Management System',
    category: 'Web Application',
    subtitle: 'Custom Management Solutions',
    description: 'Custom business management systems designed to streamline operations, improve productivity and drive growth.',
    image: '/SoftwareDevelopment.jpg',
    status: 'Active',
    year: '2024',
  },
  {
    number: '05',
    title: 'Payment Gateway Integration',
    category: 'Systems & Platforms',
    subtitle: 'Secure Payment Solutions',
    description: 'Secure and seamless payment solutions supporting multiple payment methods and real-time settlement.',
    image: '/CloudInfrastructure.webp',
    status: 'Live',
    year: '2023',
  },
  {
    number: '06',
    title: 'Cloud Infrastructure',
    category: 'Infrastructure',
    subtitle: 'Scalable Cloud Architecture',
    description: 'Scalable, secure and reliable cloud infrastructure designed to support business growth and innovation.',
    image: '/It-soln2.jpeg',
    status: 'Enterprise',
    year: '2024',
  },
]

const labsProjects = [
  {
    codename: 'Project Kito',
    category: 'AI · Assistive Tech',
    status: 'In Development',
    progress: 72,
    description: 'A Luganda-first AI assistant designed for local businesses to automate customer support, sales and reporting.',
    image: '/SoftwareDevelopment.jpg',
    tags: ['AI', 'NLP', 'Local Language'],
  },
  {
    codename: 'Project Mvua',
    category: 'Fintech · Payments',
    status: 'Prototype',
    progress: 45,
    description: 'A rural-first micro-payments rail that works offline and syncs when connection is restored.',
    image: '/CloudInfrastructure.webp',
    tags: ['Offline-First', 'Payments'],
  },
  {
    codename: 'Project Nyota',
    category: 'Health · Diagnostics',
    status: 'Research',
    progress: 28,
    description: 'Low-bandwidth telemedicine platform connecting rural clinics with specialists via offline-capable mobile tools.',
    image: '/It-soln2.jpeg',
    tags: ['HealthTech', 'Mobile'],
  },
]

const labPrinciples = [
  { label: 'Experiment Fast', value: 'Ship prototypes in weeks, not months.' },
  { label: 'Validate Early', value: 'Real users test real builds before scale.' },
  { label: 'Scale What Works', value: 'The best experiments graduate to products.' },
  { label: 'Solve Real Problems', value: 'Every lab project targets a real Jinja pain point.' },
]

const stats = [
  { number: '50+', label: 'Projects delivered' },
  { number: '30+', label: 'Happy clients' },
  { number: '100K+', label: 'Users impacted' },
]

/* ============================================================
   PAGE
   ============================================================ */

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedLab, setExpandedLab] = useState<number | null>(0)

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">

          <div className="editorial-strip">
            <span className="editorial-mono">§ Work · Portfolio</span>
            <span className="editorial-mono hidden sm:inline">Six live · Three in lab</span>
            <span className="editorial-mono">Updated 2025</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <span className="editorial-mono mb-6 block">
                Selected Work
              </span>
              <h1 className="editorial-title text-5xl md:text-7xl lg:text-[5rem]">
                Real projects.
                <br />
                <span className="editorial-accent">Real impact.</span>
              </h1>

              <p className="editorial-body text-lg md:text-xl mt-10 max-w-lg">
                We build digital solutions that solve real problems, transform
                businesses and improve everyday life in Jinja and beyond.
              </p>

              <div className="flex flex-wrap items-center gap-8 mt-12">
                <Link href="/contact" className="group inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#0B1220] px-6 py-3.5 rounded-full hover:bg-[#1D4ED8] transition-all duration-300">
                  Start a project
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <a href="#projects-grid" className="link-underline group">
                  Browse the work
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img src="/44.jpg" alt="Jinja" className="w-full h-full object-cover" />
              </div>
              <div className="mt-3 flex items-start justify-between gap-4">
                <span className="editorial-mono">Fig. 01 · Studio</span>
                <span className="editorial-mono">Jinja, Uganda</span>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-24 pt-10 border-t border-dashed border-slate-300/70 grid md:grid-cols-3 gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-black text-[#0B1220] tabular-nums leading-none tracking-tight">
                  {stat.number}
                </div>
                <div className="editorial-mono mt-3">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FILTER + PROJECTS
          ============================================================ */}
      <section id="projects-grid" className="py-24 md:py-32 px-4 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto">

          <div className="editorial-strip">
            <span className="editorial-mono">§ 01 · The Register</span>
            <span className="editorial-mono hidden sm:inline">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'entry' : 'entries'}
            </span>
            <span className="editorial-mono">2021 — present</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end mb-16">
            <div className="lg:col-span-8">
              <h2 className="editorial-title text-4xl md:text-6xl lg:text-7xl">
                Live work,
                <br />
                <span className="editorial-accent">shipped and running.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-slate-300/60">
              <p className="editorial-body">
                Every entry is a real deployment — a product people use today,
                not a concept sketch.
              </p>
            </div>
          </div>

          {/* Filter row */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-16 pb-6 border-b border-slate-300/60">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`text-sm font-semibold transition-all duration-300 pb-1 border-b-2 ${
                    isActive
                      ? 'text-[#0B1220] border-[#1D4ED8]'
                      : 'text-slate-400 border-transparent hover:text-[#0B1220]'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Projects — editorial list, not grid of cards */}
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center">
              <p className="editorial-body text-lg">No work in this category yet — check back soon.</p>
            </div>
          ) : (
            <div className="space-y-0">
              {filteredProjects.map((project, i) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5 }}
                  className="border-t border-slate-300/60 py-14 md:py-20"
                >
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                    {/* Meta column */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-[10px] font-mono tracking-[0.25em] text-[#1D4ED8]">
                          {project.number}
                        </span>
                        <span className="editorial-mono">{project.year}</span>
                      </div>
                      <div
                        className={`inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.2em] uppercase ${
                          project.status === 'Live' ? 'text-green-700' : 'text-slate-500'
                        }`}
                      >
                        {project.status === 'Live' && (
                          <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                        )}
                        {project.status}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-6 lg:pr-8">
                      <div className="editorial-mono mb-3">{project.category}</div>

                      <h3 className="editorial-title text-2xl md:text-4xl mb-4">
                        {project.title}
                      </h3>

                      <p className="editorial-mono mb-6">{project.subtitle}</p>

                      <p className="editorial-body text-base max-w-2xl mb-8">
                        {project.description}
                      </p>

                      <Link href="/contact" className="link-underline group">
                        Discuss a similar project
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>

                    {/* Photo */}
                    <div className="lg:col-span-4">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale-[25%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
                        />
                      </div>
                      <div className="mt-3 flex items-start justify-between gap-4">
                        <span className="editorial-mono">Fig. {project.number}</span>
                        <span className="editorial-mono">{project.category}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* Bottom line */}
          <div className="border-t border-slate-300/60 pt-10 mt-16 flex items-center justify-between flex-wrap gap-6">
            <span className="editorial-mono">End of live register</span>
            <Link href="/contact" className="link-underline group">
              Work with us
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          INNOVATION LABS
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">

          <div className="editorial-strip">
            <span className="editorial-mono">§ 02 · Innovation Labs</span>
            <span className="editorial-mono hidden sm:inline">Three projects in development</span>
            <span className="editorial-mono">Ongoing</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end mb-20">
            <div className="lg:col-span-8">
              <h2 className="editorial-title text-4xl md:text-6xl lg:text-7xl">
                Where tomorrow&apos;s
                <br />
                <span className="editorial-accent">platforms are born.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-slate-300/60">
              <p className="editorial-body">
                Our research arm explores the technologies that will define the next
                decade of Jinja&apos;s digital infrastructure — before the market
                asks for them.
              </p>
            </div>
          </div>

          {/* Lab principles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 mb-20">
            {labPrinciples.map((p, i) => (
              <div key={p.label}>
                <div className="rule-h mb-5" />
                <div className="editorial-mono mb-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3
                  className="text-base md:text-lg leading-tight mb-2 text-[#0B1220]"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  {p.label}
                </h3>
                <p className="editorial-body text-sm">{p.value}</p>
              </div>
            ))}
          </div>

          {/* Lab projects — accordion */}
          <div className="mb-16">
            {labsProjects.map((lab, i) => {
              const isOpen = expandedLab === i
              return (
                <div key={lab.codename} className="border-t border-slate-300/60 last:border-b">
                  <button
                    onClick={() => setExpandedLab(isOpen ? null : i)}
                    className="w-full py-8 flex items-start gap-6 lg:gap-10 text-left group"
                  >
                    {/* Number */}
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#1D4ED8] shrink-0 pt-2">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Title block */}
                    <div className="flex-1 min-w-0">
                      <div className="editorial-mono mb-2">{lab.category}</div>
                      <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black leading-tight transition-colors ${
                        isOpen ? 'text-[#0B1220]' : 'text-[#0B1220]/70 group-hover:text-[#0B1220]'
                      }`}>
                        {lab.codename}
                      </h3>
                    </div>

                    {/* Status + toggle */}
                    <div className="flex items-center gap-4 shrink-0 pt-2">
                      <span className="editorial-mono hidden md:inline">{lab.status}</span>
                      <div className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                        isOpen
                          ? 'border-[#1D4ED8] bg-[#1D4ED8] text-white'
                          : 'border-slate-300 text-slate-500 group-hover:border-[#0B1220]'
                      }`}>
                        {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 pb-12">
                          {/* Description */}
                          <div className="lg:col-span-7 pl-8 lg:pl-[calc(2.5rem+0.5rem)]">
                            <p className="editorial-body text-base max-w-2xl mb-8">
                              {lab.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                              {lab.tags.map((tag) => (
                                <div key={tag} className="flex items-center gap-2 text-sm text-slate-600">
                                  <span className="w-3 h-px bg-slate-400" />
                                  {tag}
                                </div>
                              ))}
                            </div>

                            {/* Progress */}
                            <div className="max-w-sm">
                              <div className="flex items-center justify-between mb-3">
                                <span className="editorial-mono">Progress</span>
                                <span className="text-sm font-bold text-[#0B1220] tabular-nums">
                                  {lab.progress}%
                                </span>
                              </div>
                              <div className="h-px bg-slate-300 relative">
                                <div
                                  className="absolute top-0 left-0 h-px bg-[#1D4ED8] transition-all duration-1000"
                                  style={{ width: `${lab.progress}%` }}
                                />
                              </div>
                            </div>
                          </div>

                          {/* Photo */}
                          <div className="lg:col-span-5 pl-8 lg:pl-0">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                              <img
                                src={lab.image}
                                alt={lab.codename}
                                className="w-full h-full object-cover grayscale-[30%]"
                              />
                            </div>
                            <div className="mt-3 flex items-start justify-between gap-4">
                              <span className="editorial-mono">Research · {lab.status}</span>
                              <span className="editorial-mono">Lab 0{i + 1}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Bottom manifesto */}
          <div className="pt-10 border-t border-dashed border-slate-300/70 grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="editorial-mono">Lab Manifesto</span>
            </div>
            <div className="lg:col-span-8">
              <p className="editorial-body text-lg md:text-xl leading-relaxed max-w-2xl text-[#0B1220] mb-8">
                Innovation Labs is our long-term bet on Jinja — we fund the research,
                build the prototypes, and hand the winners to our product teams.
              </p>
              <div className="flex flex-wrap items-center gap-8">
                <Link href="/contact" className="link-underline group">
                  Partner with the lab
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#0B1220] transition-colors">
                  Submit an idea
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#F1F5F9]">
        <div className="max-w-6xl mx-auto">

          <div className="editorial-strip">
            <span className="editorial-mono">§ 03 · Correspondence</span>
            <span className="editorial-mono hidden sm:inline">Response within 24 hours</span>
            <span className="editorial-mono">t3clar.com/contact</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h2 className="editorial-title text-4xl md:text-6xl lg:text-7xl">
                Have an idea
                <br />
                <span className="editorial-accent">of your own?</span>
              </h2>
              <p className="editorial-body text-lg md:text-xl mt-8 max-w-xl">
                We turn ideas into powerful digital solutions that create impact
                and drive growth. Tell us what you&apos;re building.
              </p>
            </div>

            <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-slate-300/60">
              <div className="space-y-5 pb-8 mb-8 border-b border-dashed border-slate-300/70">
                <div>
                  <div className="editorial-mono mb-2">Email</div>
                  <a href="mailto:hello@t3clar.com"
                     className="text-base md:text-lg font-semibold text-[#0B1220] border-b-2 border-transparent hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-all duration-300">
                    hello@t3clar.com
                  </a>
                </div>
                <div>
                  <div className="editorial-mono mb-2">Studio</div>
                  <div className="text-base font-semibold text-[#0B1220]">Jinja · Uganda · East Africa</div>
                </div>
              </div>

              <Link href="/contact" className="link-underline group">
                Start a project
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="mt-20 pt-6 border-t border-dashed border-slate-300/70 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="editorial-mono">Studio status · Available</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="editorial-mono">Jinja, Uganda</span>
              <span className="w-px h-3 bg-slate-300" />
              <span className="editorial-mono">Est. 2021</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}