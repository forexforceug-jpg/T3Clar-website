'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import {
  Building2, Handshake, Globe, Code, TrendingUp, ShoppingCart,
  Heart, GraduationCap, Car, Check, Quote, ArrowRight, Users,
  Sparkles, Lightbulb, Shield, UserCheck, Play, CreditCard,
  ShoppingBag, Rocket, Layers, Cpu, Cloud, BarChart3, Lock,
  Smartphone, ChevronRight, Plus, Minus, MapPin, Award,
  Video,
  Edit
} from 'lucide-react'

/* ============================================================
   DATA
   ============================================================ */

const stats = [
  { icon: Building2, number: '25+', label: 'Partners' },
  { icon: Handshake, number: '10+', label: 'Industries' },
  { icon: Globe, number: '3', label: 'Countries' },
  { icon: Rocket, number: '150+', label: 'Projects' },
]

const partnerLogos = [
  { name: 'XRide', image: '/ttlogo.png' },
  { name: 'ShopIt', image: '/shopit.jpg' },
  { name: 'Tata Owen', image: '/owen.png' },
  { name: 'Lotina Investments', image: '/lotina.png' },
  { name: 'GoViral', image: '/goviral.ico' },
  { name: 'Fork & Go', image: '/Fork and Go.png' },
    { name: 'LowKey FX', image: '/logoTp.png' },
  { name: 'Meddy Furniture', image: '/meddy.png' },
  { name: 'Munolink', image: '/muno.png' },
  { name: 'GripShule', image: '/gripshule.png' },
]

const industries = [
  { icon: Code, title: 'Technology', description: 'Innovating the future with cutting-edge solutions.', color: '#2563EB', image: '/SoftwareDevelopment.jpg' },
  { icon: TrendingUp, title: 'Finance', description: 'Driving financial inclusion and digital growth.', color: '#10B981', image: '/99.webp' },
  { icon: ShoppingCart, title: 'Retail & E-commerce', description: 'Empowering businesses, enhancing customer experiences.', color: '#F59E0B', image: '/10.webp' },
  { icon: Heart, title: 'Healthcare', description: 'Leveraging technology for better health outcomes.', color: '#EF4444', image: '/Healthcare.jpg' },
  { icon: GraduationCap, title: 'Education', description: 'Building smart systems for learning and innovation.', color: '#8B5CF6', image: '/44.jpg' },
  { icon: Car, title: 'Transportation', description: 'Creating intelligent mobility and connected transport.', color: '#06B6D4', image: '/11.jpg' },
]

const benefits = [
  'Access to innovative solutions and technologies',
  'Collaborate on impactful projects',
  'Expand your market reach',
  'Grow your brand with T3Clar',
  'Dedicated partner support',
]

const opportunities = [
  { icon: Code, title: 'Technology Partnerships', description: 'Co-develop solutions and integrate technologies.', image: '/SoftwareDevelopment.jpg' },
  { icon: Handshake, title: 'Strategic Alliances', description: 'Work together on initiatives that drive transformative change.', image: '/88.jpg' },
  { icon: Users, title: 'Referral Partnerships', description: 'Refer and grow together through mutual opportunities.', image: '/jinja-cityscape.jpg' },
  { icon: TrendingUp, title: 'Investment Partnerships', description: 'Invest in ideas, solutions and the future.', image: '/99.webp' },
]

const services = [
  { icon: Cpu, title: 'AI & Automation', description: 'Intelligent systems that learn and adapt to your business.', color: '#2563EB', image: '/SoftwareDevelopment.jpg' },
  { icon: Cloud, title: 'Cloud Solutions', description: 'Scalable, secure infrastructure built for growth.', color: '#06B6D4', image: '/CloudInfrastructure.webp' },
  { icon: Lock, title: 'Cybersecurity', description: 'Enterprise-grade protection for your digital assets.', color: '#EF4444', image: '/It-soln2.jpeg' },
  { icon: Code, title: 'Custom Development', description: 'Tailored software engineered around your workflows.', color: '#8B5CF6', image: '/44.jpg' },
  { icon: BarChart3, title: 'Data & Analytics', description: 'Turning raw data into decisions that drive growth.', color: '#10B981', image: '/jinja-cityscape.jpg' },
  { icon: Smartphone, title: 'Mobile Experiences', description: 'Beautiful, performant apps for iOS, Android.', color: '#F59E0B', image: '/MS.jpg' },
  { icon: Edit, title: 'Architectural Design', description: 'Beautiful, performant architectural designs.', color: '#56a2d4', image: '/images.jpg' },
  { icon: Edit, title: 'Graphics Design', description: 'Beautiful, performant Graphics designs.', color: '#38b91e', image: '/66.png' },
  { icon: Video, title: 'Video Editing', description: 'Beautiful, performant video editing services.', color: '#d4b756', image: '/77.webp' },

]

const ecosystemPlatforms = [
  { name: 'XRide', desc: 'Smart transportation for a moving world.', img: '/jinja-cityscape.jpg', color: '#2563EB', tag: 'Mobility', logo: '/T3Clarlogo.png' },
  { name: 'ShopIt', desc: 'A local marketplace at your fingertips.', img: '/MS.jpg', color: '#10B981', tag: 'Commerce', logo: '/T3Clarlogo.png' },
  { name: 'Clexarly', desc: 'Data and insights that drive growth.', img: '/SoftwareDevelopment.jpg', color: '#8B5CF6', tag: 'Analytics', logo: '/T3Clarlogo.png' },
  { name: 'Lotina Investments', desc: 'Investing in innovation and the future.', img: '/lotina.png', color: '#F59E0B', tag: 'Capital', logo: '/lotina.png' },
  { name: 'Cloud Infrastructure', desc: 'Secure, scalable and always available.', img: '/CloudInfrastructure.webp', color: '#06B6D4', tag: 'Infrastructure', logo: '/T3Clarlogo.png' },
]

const missionPillars = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Innovate',
    description: 'We embrace creativity and innovation to build smart solutions that solve real-world challenges with fresh thinking and cutting-edge technology.',
    color: '#2563EB',
    gradient: 'from-blue-500 to-indigo-600',
    image: '/SoftwareDevelopment.jpg',
  },
  {
    number: '02',
    icon: Shield,
    title: 'Deliver',
    description: 'We are committed to quality, reliability and excellence in every product we build, ensuring our solutions exceed expectations.',
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-600',
    image: '/It-soln2.jpeg',
  },
  {
    number: '03',
    icon: UserCheck,
    title: 'Empower',
    description: 'We empower businesses and communities through technology and knowledge, creating lasting impact that drives growth and transformation.',
    color: '#8B5CF6',
    gradient: 'from-violet-500 to-purple-600',
    image: '/44.jpg',
  },
]

const ecosystemNodes = [
  { icon: Car, label: 'Transport', color: '#06B6D4', image: '/jinja-cityscape.jpg' },
  { icon: ShoppingBag, label: 'Shopping', color: '#10B981', image: '/MS.jpg' },
  { icon: Building2, label: 'Business', color: '#8B5CF6', image: '/It-soln2.jpeg' },
  { icon: Heart, label: 'Healthcare', color: '#EF4444', image: '/team.jpg' },
  { icon: CreditCard, label: 'Payments', color: '#F59E0B', image: '/SoftwareDevelopment.jpg' },
  { icon: Users, label: 'Community', color: '#2563EB', image: '/jinja-cityscape.jpg' },
  
]

/* ============================================================
   HOOKS
   ============================================================ */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function useCountUp(target: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return count
}

/* ============================================================
   COMPONENTS
   ============================================================ */

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, inView } = useInView()
  const numeric = parseInt(stat.number.replace(/\D/g, ''))
  const count = useCountUp(numeric, inView)
  const Icon = stat.icon
  return (
    <div
      ref={ref}
      className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-5 
                 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s`,
      }}
    >
      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mb-3">
        <Icon size={18} className="text-blue-400" />
      </div>
      <div className="text-3xl font-black text-white tabular-nums">
        {count}{stat.number.replace(/[0-9]/g, '')}
      </div>
      <div className="text-sm text-white/50 mt-1">{stat.label}</div>
    </div>
  )
}

function Accordion({ items }: { items: { title: string; description: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={item.title} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors bg-white">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-blue-50/50 transition-colors"
          >
            <span className="font-bold text-[#0F172A] text-sm">{item.title}</span>
            <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              {open === i ? <Minus size={14} className="text-[#2563EB]" /> : <Plus size={14} className="text-[#2563EB]" />}
            </div>
          </button>
          <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: open === i ? '140px' : '0px' }}>
            <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

/* Animated wave SVG divider — pure SVG, no CSS needed */
function WaveDivider({ flip = false, color = '#F8FAFC' }: { flip?: boolean; color?: string }) {
  return (
    <div className={`relative w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`} style={{ height: '80px' }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path fill={color}>
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z;M0,50 C240,10 480,70 720,30 C960,-10 1200,60 1440,30 L1440,80 L0,80 Z;M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          />
        </path>
      </svg>
    </div>
  )
}

/* Orbiting ecosystem visualization with images */
function OrbitalEcosystem() {
  return (
    <div className="relative aspect-square w-full max-w-[600px] mx-auto">
      {/* Orbit rings */}
      <div className="absolute inset-[10%] rounded-full border border-blue-500/10" />
      <div className="absolute inset-[22%] rounded-full border border-blue-500/15 border-dashed" />
      <div className="absolute inset-[34%] rounded-full border border-blue-500/20" />

      {/* Rotating orbit container — inline style for animation */}
      <div
        className="absolute inset-0"
        style={{ animation: 'orbit-spin 40s linear infinite' }}
      >
        {ecosystemNodes.map((node, i) => {
          const angle = (i * 360) / ecosystemNodes.length
          const rad = (angle * Math.PI) / 180
          const x = 50 + 42 * Math.cos(rad)
          const y = 50 + 42 * Math.sin(rad)
          const Icon = node.icon
          return (
            <div
              key={node.label}
              className="absolute"
              style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
            >
              <div style={{ animation: 'orbit-spin-reverse 40s linear infinite' }}>
                <div className="group flex flex-col items-center gap-2">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl hover:scale-110 transition-transform duration-300">
                    <img src={node.image} alt={node.label} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: `${node.color}CC` }}>
                      <Icon size={22} className="text-white" />
                    </div>
                  </div>
                  <span className="text-[10px] text-white/70 font-semibold whitespace-nowrap px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm">
                    {node.label}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Inner rotating orbit */}
      <div
        className="absolute inset-[22%]"
        style={{ animation: 'orbit-spin-reverse 25s linear infinite' }}
      >
        {[0, 120, 240].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x = 50 + 50 * Math.cos(rad)
          const y = 50 + 50 * Math.sin(rad)
          return (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]"
              style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
            />
          )
        })}
      </div>

      {/* Center hub with T3Clar logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />

          <div className="relative w-24 h-24 rounded-full bg-white shadow-[0_0_60px_rgba(59,130,246,0.5)] flex items-center justify-center border-4 border-blue-500/20">
            <img src="/T3Clarlogo.png" alt="T3Clar" className="w-14 h-14 object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   PAGE
   ============================================================ */

export default function AboutPage() {
  const [activeEcosystem, setActiveEcosystem] = useState(0)
  const [activeIndustry, setActiveIndustry] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveEcosystem((p) => (p + 1) % ecosystemPlatforms.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      {/* Keyframes injected via plain <style> — Turbopack-safe */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes orbit-spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes orbit-spin-reverse {
              from { transform: rotate(360deg); }
              to { transform: rotate(0deg); }
            }
            @keyframes marquee-scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-33.333%); }
            }
          `,
        }}
      />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0F1E]">
        <div className="absolute inset-0">
          <img src="/jinja-cityscape.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#0A0F1E]/95 to-[#1E3A5F]/70" />
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/15 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        </div>

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <svg className="absolute bottom-0 left-0 w-full h-32 pointer-events-none" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="white" fillOpacity="0.03">
            <animate attributeName="d" dur="12s" repeatCount="indefinite" values="M0,60 C360,20 720,100 1080,60 C1260,40 1380,80 1440,60 L1440,120 L0,120 Z;M0,80 C360,40 720,120 1080,80 C1260,60 1380,100 1440,80 L1440,120 L0,120 Z;M0,60 C360,20 720,100 1080,60 C1260,40 1380,80 1440,60 L1440,120 L0,120 Z" />
          </path>
          <path fill="white" fillOpacity="0.05">
            <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M0,80 C300,40 600,120 900,80 C1200,40 1380,100 1440,80 L1440,120 L0,120 Z;M0,100 C300,60 600,140 900,100 C1200,60 1380,120 1440,100 L1440,120 L0,120 Z;M0,80 C300,40 600,120 900,80 C1200,40 1380,100 1440,80 L1440,120 L0,120 Z" />
          </path>
        </svg>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-sm mb-8">
                  <MapPin size={12} className="text-blue-400" />
                  <span className="text-white/70 text-xs font-medium tracking-wide">Based in Jinja, Uganda · Serving the world</span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tight text-white">
                  We build the
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    digital backbone
                  </span>
                  <br />
                  of tomorrow.
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-white/60 text-lg leading-relaxed mt-8 max-w-xl">
                  T3Clar is a software and technology solutions company based in Jinja, Uganda.
                  We design, develop and implement innovative digital solutions that transform
                  how businesses operate and grow.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-4 mt-10">
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-2 px-7 py-4 bg-white text-[#0A0F1E] rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                  >
                    Explore Services
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all duration-300"
                  >
                    <span className="relative flex items-center justify-center">
                      <span className="absolute w-8 h-8 rounded-full bg-white/20 animate-ping" style={{ animationDuration: '2s' }} />
                      <span className="relative w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <Play size={11} className="fill-white" />
                      </span>
                    </span>
                    Watch Our Story
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <StatCard key={stat.label} stat={stat} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PARTNER LOGOS MARQUEE
          ============================================================ */}
      <section className="py-10 bg-white border-b border-gray-100 overflow-hidden">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-white z-10" />
          <div
            className="flex"
            style={{ width: 'max-content', animation: 'marquee-scroll 40s linear infinite' }}
          >
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div key={i} className="flex items-center gap-4 mx-10 opacity-50 hover:opacity-100 transition-opacity">
                <img src={logo.image} alt={logo.name} className="h-10 w-auto object-contain" />
                <span className="text-sm font-bold text-gray-400 whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES — IMAGE CARDS
          ============================================================ */}
      <section className="relative py-24 md:py-32 px-4 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[140px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="inline-flex items-center gap-2 text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                  <Layers size={14} />
                  What We Do
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-[1.05] mt-4 max-w-2xl">
                  Digital solutions for{' '}
                  <span className="text-[#2563EB]">every need.</span>
                </h2>
              </div>
              <Link href="/services" className="group inline-flex items-center gap-2 text-[#2563EB] font-semibold shrink-0">
                View all services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <Reveal key={service.title} delay={i * 0.08}>
                  <div className="group relative h-80 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-500">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/60 to-transparent" />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(to top, ${service.color}E6, transparent 70%)` }}
                    />

                    <div
                      className="absolute top-5 right-5 w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                      style={{ backgroundColor: `${service.color}CC` }}
                    >
                      <Icon size={22} className="text-white" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>

                      <div className="flex items-center gap-2 mt-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                        Learn more
                        <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <WaveDivider color="#0A0F1E" />

{/* ============================================================
    STRATEGIC PARTNERSHIP — DUAL CORE
    ============================================================ */}
<section className="relative py-24 md:py-32 px-4 bg-[#080B14] overflow-hidden">
  {/* ============ AMBIENT BACKGROUND ============ */}
  <div className="absolute inset-0">
    {/* Subtle stars (fewer, calmer) */}
    <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
      {[...Array(40)].map((_, i) => (
        <circle
          key={i}
          cx={`${(i * 47) % 100}%`}
          cy={`${(i * 61) % 100}%`}
          r={((i * 5) % 10) / 10 + 0.3}
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

    {/* Two opposing glows — purple (Lotina) and blue (T3Clar) */}
    <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px]" />
    <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[120px]" />
  </div>

  {/* Grid */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
      backgroundSize: '60px 60px',
    }}
  />

  <div className="max-w-7xl mx-auto relative z-10">
    {/* ============ HEADER ============ */}
    <Reveal>
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/[0.04] border border-white/10 backdrop-blur-sm rounded-full text-white/60 text-xs font-bold tracking-[0.2em] uppercase mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          Strategic Partnership
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.02] text-white max-w-4xl mx-auto">
          Where capital{' '}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
            meets code
          </span>
        </h2>
        <p className="text-white/40 mt-6 max-w-xl mx-auto">
          Two forces. One orbit. An ecosystem built at the intersection of investment and engineering.
        </p>
      </div>
    </Reveal>

    {/* ============ DUAL CORE PANEL ============ */}
    <Reveal delay={0.1}>
      <div className="relative max-w-6xl mx-auto mb-20">
        {/* Merged card */}
        <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm">
          
          {/* Top split bar — purple to blue */}
          <div className="h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500" />

          {/* Grid layout — 2 columns with center badge */}
          <div className="relative grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* ---------- LEFT: LOTINA ---------- */}
            <div className="relative p-8 md:p-12 group">
              {/* Ambient purple glow */}
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative">
                {/* Label */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-purple-300 text-[10px] font-bold tracking-[0.25em] uppercase">
                    Capital Engine
                  </span>
                </div>

                {/* Logo + name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center p-2 shadow-lg shrink-0">
                    <img src="/lotina.png" alt="Lotina" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                      Lotina
                    </h3>
                    <p className="text-white/50 text-sm">Investments</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Provides the capital, market access, and strategic vision that
                  powers the ecosystem.
                </p>

                {/* Capabilities */}
                <div className="space-y-3 mb-8">
                  {[
                    { icon: TrendingUp, text: 'Investment Capital' },
                    { icon: Globe, text: 'Market Access' },
                    { icon: Handshake, text: 'Strategic Vision' },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.text}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                      >
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                          <Icon size={14} className="text-purple-300" />
                        </div>
                        <span className="text-sm text-white/80 font-medium">{item.text}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-purple-500/5 border border-purple-500/20 p-4">
                    <div className="text-2xl font-black text-purple-300">2+</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider mt-1">
                      Ventures
                    </div>
                  </div>
                  <div className="rounded-2xl bg-purple-500/5 border border-purple-500/20 p-4">
                    <div className="text-2xl font-black text-purple-300">3</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider mt-1">
                      Markets
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------- RIGHT: T3CLAR ---------- */}
            <div className="relative p-8 md:p-12 group">
              {/* Ambient blue glow */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative">
                {/* Label */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-blue-300 text-[10px] font-bold tracking-[0.25em] uppercase">
                    Technology Engine
                  </span>
                </div>

                {/* Logo + name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center p-2 shadow-lg shrink-0">
                    <img src="/T3Clarlogo.png" alt="T3Clar" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                      T3Clar
                    </h3>
                    <p className="text-white/50 text-sm">Technology Solutions</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Builds the platforms, infrastructure, and software that turn
                  vision into working product.
                </p>

                {/* Capabilities */}
                <div className="space-y-3 mb-8">
                  {[
                    { icon: Code, text: 'Software Engineering' },
                    { icon: Cloud, text: 'Cloud & AI Systems' },
                    { icon: Layers, text: 'Product Design' },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.text}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                          <Icon size={14} className="text-blue-300" />
                        </div>
                        <span className="text-sm text-white/80 font-medium">{item.text}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-blue-500/5 border border-blue-500/20 p-4">
                    <div className="text-2xl font-black text-blue-300">150+</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider mt-1">
                      Projects
                    </div>
                  </div>
                  <div className="rounded-2xl bg-blue-500/5 border border-blue-500/20 p-4">
                    <div className="text-2xl font-black text-blue-300">24/7</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider mt-1">
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------- CENTER FUSION BADGE ---------- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block">
              <div className="relative">
                {/* Outer pulse rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 animate-ping" style={{ animationDuration: '3s' }} />

                {/* Badge */}
                <div className="relative w-20 h-20 rounded-full bg-[#080B14] border-2 border-white/10 flex items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.4)]">
                  {/* Inner gradient ring */}
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-blue-500 opacity-90" />
                  <div className="absolute inset-2 rounded-full bg-[#080B14]" />

                  {/* × symbol */}
                  <span className="relative text-white font-black text-2xl">×</span>
                </div>
              </div>
            </div>

            {/* ---------- MOBILE DIVIDER BADGE ---------- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 md:hidden">
              <div className="relative w-14 h-14 rounded-full bg-[#080B14] border-2 border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-blue-500 opacity-90" />
                <div className="absolute inset-1.5 rounded-full bg-[#080B14]" />
                <span className="relative text-white font-black text-lg">×</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>

    {/* ============ OUTPUT — PLATFORMS ============ */}
    <Reveal delay={0.2}>
      <div className="relative">
        {/* Divider label */}
        <div className="flex items-center gap-4 mb-12 max-w-4xl mx-auto">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
            <div className="w-1 h-1 rounded-full bg-pink-400 animate-pulse" />
            <span className="text-white/50 text-[10px] font-bold tracking-[0.25em] uppercase">
              Platforms Born From The Fusion
            </span>
            <div className="w-1 h-1 rounded-full bg-pink-400 animate-pulse" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
        </div>

        {/* Platform grid — 4 equal cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'XRide', tag: 'Mobility', color: '#2563EB', img: '/jinja-cityscape.jpg', status: 'Live' },
            { name: 'ShopIt', tag: 'Commerce', color: '#10B981', img: '/MS.jpg', status: 'Live' },
            { name: 'Clexarly', tag: 'Analytics', color: '#8B5CF6', img: '/SoftwareDevelopment.jpg', status: 'Live' },
            { name: 'GripShule', tag: 'Education', color: '#F59E0B', img: '/gripshule.png', status: 'Active' },
          ].map((platform) => (
            <div
              key={platform.name}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={platform.img}
                  alt={platform.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B14] via-[#080B14]/40 to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 mix-blend-overlay"
                  style={{ background: `linear-gradient(to top, ${platform.color}, transparent)` }}
                />

                {/* Status dot */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: platform.color }}
                  />
                  <span className="text-[9px] font-bold text-white uppercase tracking-wider">
                    {platform.status}
                  </span>
                </div>

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1"
                       style={{ color: platform.color }}>
                    {platform.tag}
                  </div>
                  <h4 className="text-white font-black text-lg leading-tight">
                    {platform.name}
                  </h4>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                style={{ backgroundColor: platform.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </Reveal>

    {/* ============ CLOSING LINE ============ */}
    <Reveal delay={0.3}>
      <div className="relative max-w-3xl mx-auto text-center mt-20">
        <p className="text-white/60 text-lg md:text-xl leading-relaxed italic">
          &ldquo;Every platform we launch lives at the intersection of{' '}
          <span className="text-purple-300 font-semibold not-italic">patient capital</span> and{' '}
          <span className="text-blue-300 font-semibold not-italic">relentless engineering</span>.
          This is not a partnership of convenience — it&apos;s a partnership of conviction.&rdquo;
        </p>

        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-400" />
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10">
            <img src="/lotina.png" alt="Lotina" className="w-5 h-5 object-contain" />
            <span className="text-white/40 text-[10px] font-bold tracking-wider">×</span>
            <img src="/T3Clarlogo.png" alt="T3Clar" className="w-5 h-5 object-contain" />
          </div>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-400" />
        </div>
      </div>
    </Reveal>
  </div>
</section>
      {/* ============================================================
          INDUSTRIES — IMAGE CARDS
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                Collaborating Across Industries
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mt-4 max-w-2xl mx-auto">
                Building solutions together across{' '}
                <span className="text-[#2563EB]">multiple sectors.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon
              return (
                <Reveal key={industry.title} delay={i * 0.08}>
                  <div className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/40 to-transparent" />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-500"
                      style={{ background: `linear-gradient(to top, ${industry.color}, ${industry.color}80 40%, transparent)` }}
                    />

                    <div className="absolute top-5 left-5 w-14 h-14 rounded-2xl flex items-center justify-center bg-white/15 backdrop-blur-md border border-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon size={24} className="text-white" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-black text-white mb-2">{industry.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed max-w-xs">{industry.description}</p>

                      <div className="flex items-center gap-2 mt-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                        Explore
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          VISION
          ============================================================ */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="relative rounded-[40px] overflow-hidden">
              <div className="absolute inset-0">
                <img src="/jinja-cityscape.jpg" alt="Jinja" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E]/95 via-[#0A0F1E]/85 to-[#1E3A5F]/80" />
              </div>

              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                  backgroundSize: '50px 50px',
                }}
              />

              <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 md:p-16 lg:p-20 items-center">
                <div>
                  <span className="text-blue-400 text-xs font-bold tracking-[0.25em] uppercase">
                    Our Vision
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mt-4">
                    Building Jinja&apos;s digital{' '}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      future.
                    </span>
                  </h2>
                  <p className="text-white/60 leading-relaxed mt-6">
                    We envision a connected Jinja where transportation, shopping, healthcare,
                    payments, businesses and communities work together through smart digital
                    infrastructure.
                  </p>
                  <p className="text-white/60 leading-relaxed mt-4">
                    Our goal is to build a technology ecosystem that simplifies everyday life
                    and unlocks endless opportunities for growth across the region.
                  </p>

                  <div className="grid grid-cols-3 gap-4 mt-10">
                    {[
                      { value: '24/7', label: 'Support' },
                      { value: '99.9%', label: 'Uptime' },
                      { value: '3', label: 'Countries' },
                    ].map((s) => (
                      <div key={s.label} className="border-l-2 border-blue-400/40 pl-4">
                        <div className="text-2xl font-black text-white">{s.value}</div>
                        <div className="text-xs text-white/50 mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="scale-90 md:scale-100">
                  <OrbitalEcosystem />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          MISSION
          ============================================================ */}
      <section className="relative py-24 md:py-32 px-4 bg-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-50/60 to-transparent rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mt-4 max-w-2xl mx-auto leading-tight">
                Creating technology that{' '}
                <span className="text-[#2563EB]">empowers.</span>
              </h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                Our mission is to design, develop and deliver innovative digital solutions
                that empower businesses, improve services and create lasting value for communities.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {missionPillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <Reveal key={pillar.title} delay={i * 0.1}>
                  <div className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(37,99,235,0.1)] hover:-translate-y-1 transition-all duration-500">
                    <div className="relative h-48 overflow-hidden">
                      <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-80`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/40 to-transparent" />

                      <div className="absolute top-4 right-5 text-5xl font-black text-white/30">
                        {pillar.number}
                      </div>

                      <div className="absolute bottom-5 left-6 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Icon size={24} className="text-white" />
                      </div>
                    </div>

                    <div className="p-7">
                      <h3 className="text-xl font-bold text-[#0F172A] mb-3">{pillar.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{pillar.description}</p>
                      <div className="w-0 h-0.5 rounded-full mt-5 group-hover:w-12 transition-all duration-500" style={{ backgroundColor: pillar.color }} />
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.4}>
            <p className="text-center text-gray-400 text-xs mt-12">
              Built on trust. Driven by purpose. Delivered with excellence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          WHY PARTNER + OPPORTUNITIES
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden h-full min-h-[500px]">
                <img src="/44.jpg" alt="Team" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E]/95 via-[#0A0F1E]/85 to-[#2563EB]/40" />

                <div className="relative z-10 p-8 md:p-12">
                  <span className="text-blue-400 text-xs font-bold tracking-[0.25em] uppercase">
                    Why Partner With T3Clar
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mt-4">
                    Growing together. Succeeding{' '}
                    <span className="text-blue-400">together.</span>
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed mt-4">
                    We believe in long-term relationships built on trust, innovation and shared success.
                  </p>

                  <div className="space-y-3 mt-8">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-6 h-6 bg-blue-500/30 rounded-full flex items-center justify-center shrink-0">
                          <Check size={13} className="text-blue-300" />
                        </div>
                        <span className="text-sm text-white/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {opportunities.map((opp, i) => {
                const Icon = opp.icon
                return (
                  <Reveal key={opp.title} delay={i * 0.08}>
                    <div className="group relative h-full min-h-[240px] rounded-3xl overflow-hidden hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                      <img src={opp.image} alt={opp.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/70 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2563EB]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                        <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                          <Icon size={18} className="text-white" />
                        </div>
                        <h3 className="text-white font-bold text-base mb-1">{opp.title}</h3>
                        <p className="text-white/60 text-xs leading-relaxed">{opp.description}</p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          APPROACH
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                  <img src="/It-soln2.jpeg" alt="T3Clar team" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/60 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100 max-w-[240px]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                      <Award size={18} className="text-[#2563EB]" />
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Recognition</span>
                  </div>
                  <div className="text-3xl font-black text-[#2563EB]">98%</div>
                  <div className="text-xs text-gray-400 mt-1">Client satisfaction rate</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                  Our Approach
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] leading-tight mt-4">
                  People. Process.{' '}
                  <span className="text-[#2563EB]">Technology.</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mt-4">
                  We combine the right people, efficient processes and modern technology to build
                  solutions that are scalable, secure and future-ready.
                </p>

                <div className="mt-8">
                  <Accordion items={[
                    { title: 'Discovery & Strategy', description: 'We start by understanding your business, your users and your goals — then map out a clear path forward.' },
                    { title: 'Design & Engineering', description: 'Our team designs and builds with precision, using modern tools and proven methodologies.' },
                    { title: 'Launch & Scale', description: 'We deploy, monitor and iterate — ensuring your solution grows with your business.' },
                  ]} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIAL
          ============================================================ */}
      <section className="py-16 px-4 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="relative bg-white rounded-3xl p-10 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px]" />

              <Quote size={48} className="text-[#2563EB]/20 absolute top-8 left-8" />
              <div className="relative z-10 text-center">
                <p className="text-gray-700 text-xl md:text-2xl leading-relaxed italic max-w-3xl mx-auto">
                  &ldquo;T3Clar is a valuable technology partner. Their innovation, reliability and
                  commitment to excellence make collaboration easy and impactful.&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4 mt-8">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center p-2 shadow-sm">
                    <img src="/44.jpg" alt="Stanbic" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-[#0F172A]">Meddy A.</div>
                    <div className="text-sm text-gray-500">CEO, Meddy Furniture Uganda</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          CTA — FINAL
          ============================================================ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="relative bg-gradient-to-br from-[#0A0F1E] via-[#1E3A5F] to-[#2563EB] rounded-[40px] p-10 md:p-16 lg:p-20 overflow-hidden">
              <svg className="absolute bottom-0 left-0 w-full h-40 opacity-20" viewBox="0 0 1440 160" preserveAspectRatio="none">
                <path fill="white" fillOpacity="0.4">
                  <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0,80 C360,40 720,120 1080,80 C1260,60 1380,100 1440,80 L1440,160 L0,160 Z;M0,100 C360,60 720,140 1080,100 C1260,80 1380,120 1440,100 L1440,160 L0,160 Z;M0,80 C360,40 720,120 1080,80 C1260,60 1380,100 1440,80 L1440,160 L0,160 Z" />
                </path>
                <path fill="white" fillOpacity="0.2">
                  <animate attributeName="d" dur="12s" repeatCount="indefinite" values="M0,100 C300,60 600,140 900,100 C1200,60 1380,120 1440,100 L1440,160 L0,160 Z;M0,120 C300,80 600,160 900,120 C1200,80 1380,140 1440,120 L1440,160 L0,160 Z;M0,100 C300,60 600,140 900,100 C1200,60 1380,120 1440,100 L1440,160 L0,160 Z" />
                </path>
              </svg>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center shrink-0 border border-white/20 p-3">
                    <img src="/T3Clarlogo.png" alt="T3Clar" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-white">
                      Ready to partner with us?
                    </h2>
                    <p className="text-blue-100/70 mt-1">
                      Let&apos;s connect, collaborate and create impact.
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="group relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2563EB] rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] shrink-0"
                >
                  Become a Partner
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}