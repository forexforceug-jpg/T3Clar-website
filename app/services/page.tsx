import Image from 'next/image'
import Link from 'next/link'
import { 
  Code, Smartphone, Globe, Layout, ShoppingBag, Cloud, CreditCard, 
  Settings, Rocket, Users, Lightbulb, Shield, Lock, UserCheck, 
  Hexagon, ArrowRight, Sparkles, Check, Zap
} from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Robust, scalable and secure software solutions tailored to your business needs.',
    image: '/Custom Software Development.jpg',
    color: '#2563EB',
    tag: 'Engineering',
    featured: true,
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'High-performance mobile apps for Android and iOS built with modern frameworks.',
    image: '/Mobile App Development.jpeg',
    color: '#7C3AED',
    tag: 'Mobile',
  },
  {
    icon: Globe,
    title: 'Website Design & Development',
    description: 'Modern, responsive websites that create lasting impressions and drive results.',
    image: '/Website Design & Development.jpg',
    color: '#06B6D4',
    tag: 'Web',
  },
  {
    icon: Layout,
    title: 'Business Management Systems',
    description: 'Smart systems that streamline operations, improve efficiency and drive growth.',
    image: '/Business Management Systems.jpg',
    color: '#10B981',
    tag: 'Enterprise',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce platforms designed to help you sell more and reach further.',
    image: '/E-commerce Solutions.webp',
    color: '#F59E0B',
    tag: 'Commerce',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Secure, reliable and scalable cloud infrastructure to power your business applications.',
    image: '/Cloud Solutions.jpg',
    color: '#0EA5E9',
    tag: 'Infrastructure',
  },
  {
    icon: CreditCard,
    title: 'Payment Integration Systems',
    description: 'Safe and seamless payment gateways integrated into your digital platforms.',
    image: '/Payment Integration Systems.jpg',
    color: '#EF4444',
    tag: 'Fintech',
  },
  {
    icon: Settings,
    title: 'Automation Solutions',
    description: 'Smart automation that reduces manual processes and streamlines your workflows.',
    image: '/Automation Solutions.jpg',
    color: '#8B5CF6',
    tag: 'Automation',
  },
  {
    icon: Rocket,
    title: 'UI/UX Design',
    description: 'User-centered designs that create beautiful experiences and drive engagement.',
    image: '/UI/UX Design.jpg',
    color: '#EC4899',
    tag: 'Design',
  },
  {
    icon: Users,
    title: 'Technology Consulting',
    description: 'Expert guidance to help you make the right technology decisions for your business.',
    image: '/Technology Consulting.png',
    color: '#14B8A6',
    tag: 'Advisory',
  },
]

const commitments = [
  { icon: Lightbulb, title: 'Innovative', description: 'Fresh thinking on every build' },
  { icon: Shield, title: 'Scalable', description: 'Grows with your business' },
  { icon: Lock, title: 'Secure', description: 'Enterprise-grade protection' },
  { icon: UserCheck, title: 'Customer-First', description: 'You lead every decision' },
]

const processSteps = [
  { number: '01', title: 'Discover', description: 'We learn your business, users and goals.' },
  { number: '02', title: 'Design', description: 'We blueprint the solution end-to-end.' },
  { number: '03', title: 'Build', description: 'We engineer with precision and care.' },
  { number: '04', title: 'Launch', description: 'We deploy, monitor and iterate.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img
            src="/heroimage.jpg"
            alt="Modern technology office"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 via-50% to-white/10" />
          <div className="absolute left-0 top-0 bottom-0 w-[60%] bg-gradient-to-r from-white/95 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[#2563EB] text-xs font-bold tracking-[0.3em] uppercase">
              <div className="w-8 h-px bg-[#2563EB]" />
              Our Services
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0F172A] leading-[1.02] mt-5 tracking-tight">
              Technology solutions designed for{' '}
              <span className="text-[#2563EB]">impact</span>
              {' '}— built for{' '}
              <span className="text-[#2563EB]">growth.</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mt-6 max-w-xl">
              We design, develop and deliver powerful digital solutions that help businesses
              automate, scale and stay ahead in a rapidly changing world.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-10">
              <Link
                href="#services-grid"
                className="group inline-flex items-center gap-2 px-7 py-4 bg-[#2563EB] text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20"
              >
                Explore Our Solutions
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-[#0F172A] border-2 border-gray-200 hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-300"
              >
                Talk to Us
              </Link>
            </div>

            {/* Quick metrics */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-gray-200">
              {[
                { value: '150+', label: 'Projects delivered' },
                { value: '10+', label: 'Industries served' },
                { value: '24/7', label: 'Support available' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-1 h-10 bg-gradient-to-b from-[#2563EB] to-transparent rounded-full" />
                  <div>
                    <div className="text-2xl font-black text-[#0F172A]">{s.value}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES — BENTO LAYOUT
          ============================================================ */}
      <section id="services-grid" className="py-24 md:py-32 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="inline-flex items-center gap-2 text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                <Sparkles size={14} />
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.05] mt-4 max-w-2xl">
                Comprehensive services for modern{' '}
                <span className="text-[#2563EB]">businesses.</span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[#2563EB] font-semibold shrink-0"
            >
              Start a project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
            {services.map((service, index) => {
              const Icon = service.icon
              // Featured: first card takes 2 cols on lg
              // Every 5th card after takes full row (index 4, 9) on lg
              const isFeatured = index === 0
              const isWide = index === 4 || index === 9
              
              const spanClass = isFeatured
                ? 'lg:col-span-2 lg:row-span-1'
                : isWide
                ? 'lg:col-span-3'
                : 'lg:col-span-2'

              return (
                <Link
                  key={service.title}
                  href="/contact"
                  className={`group relative rounded-3xl overflow-hidden bg-white border border-gray-100 hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-500 ${spanClass}`}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                    
                    {/* Color tint on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-500"
                      style={{ background: `linear-gradient(to top, ${service.color}, transparent 70%)` }}
                    />

                    {/* Tag */}
                    <div
                      className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md border border-white/25 text-white"
                      style={{ backgroundColor: `${service.color}CC` }}
                    >
                      {service.tag}
                    </div>

                    {/* Icon badge */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon size={22} style={{ color: service.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div
                      className="flex items-center gap-1.5 mt-4 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                      style={{ color: service.color }}
                    >
                      Learn more
                      <ArrowRight size={14} />
                    </div>
                  </div>

                  {/* Bottom color bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                    style={{ backgroundColor: service.color }}
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          PROCESS — HOW WE WORK
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mt-4 max-w-2xl mx-auto leading-tight">
              A proven process from{' '}
              <span className="text-[#2563EB]">idea to launch.</span>
            </h2>
          </div>

          {/* Process steps */}
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={step.number} className="relative group">
                  {/* Node dot on line */}
                  <div className="hidden md:flex absolute top-12 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-[#2563EB]/20 items-center justify-center z-10 group-hover:border-[#2563EB] group-hover:scale-110 transition-all duration-500">
                    <div className="w-2 h-2 rounded-full bg-[#2563EB] group-hover:animate-pulse" />
                  </div>

                  <div className="relative bg-white rounded-3xl p-6 md:p-8 border border-gray-100 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] transition-all duration-500 md:mt-24">
                    {/* Number */}
                    <div className="text-5xl font-black text-gray-100 absolute top-4 right-5 leading-none">
                      {step.number}
                    </div>

                    <div className="relative">
                      <h3 className="text-lg font-bold text-[#0F172A] mb-2">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>

                      <div className="w-0 h-0.5 bg-[#2563EB] rounded-full mt-4 group-hover:w-12 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          COMMITMENT
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[40px] overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-12">
              
              {/* Image */}
              <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[420px]">
                <img
                  src="/jinja-cityscape.jpg"
                  alt="Jinja bridge"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden" />

                {/* Floating badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-gray-100">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-[#2563EB] uppercase">Our Standard</div>
                  <div className="text-sm font-black text-[#0F172A] mt-0.5">Quality-first delivery</div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 bg-gradient-to-br from-[#F8FAFC] to-white">
                <span className="inline-flex items-center gap-2 text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                  <div className="w-6 h-px bg-[#2563EB]" />
                  Our Commitment
                </span>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0F172A] leading-[1.1] mt-4">
                  Quality. Innovation.{' '}
                  <span className="text-[#2563EB]">Reliability.</span>
                </h2>

                <p className="text-gray-600 leading-relaxed mt-5 max-w-xl">
                  We are committed to delivering high-quality solutions using modern technologies
                  and best practices to ensure your success.
                </p>

                {/* Commitment grid */}
                <div className="grid grid-cols-2 gap-4 mt-10">
                  {commitments.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                          <Icon size={18} className="text-[#2563EB]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#0F172A]">{item.title}</h4>
                          <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Trust list */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 pt-6 border-t border-gray-200">
                  {['ISO-ready practices', 'Modern tech stack', 'Agile delivery', '24/7 support'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check size={10} className="text-[#2563EB]" />
                      </div>
                      <span className="text-xs text-gray-600 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E3A5F] to-[#2563EB] p-10 md:p-16">
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />

            {/* Animated arcs */}
            <svg className="absolute right-0 top-0 bottom-0 w-2/3 opacity-20 pointer-events-none" viewBox="0 0 600 400" preserveAspectRatio="none">
              <path d="M 0 350 Q 200 50 600 150" stroke="#60A5FA" strokeWidth="1" fill="none" />
              <path d="M 0 250 Q 300 0 600 200" stroke="#60A5FA" strokeWidth="0.5" fill="none" strokeDasharray="4,6" />
              <circle cx="450" cy="120" r="3" fill="#60A5FA">
                <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="300" cy="180" r="2" fill="#60A5FA">
                <animate attributeName="r" values="2;4;2" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </svg>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-3xl flex items-center justify-center shrink-0 border border-white/20">
                  <Hexagon size={28} className="text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                    Have a project in mind?
                  </h2>
                  <p className="text-blue-100/80 mt-2">
                    Let&apos;s build something amazing together.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2563EB] rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] shrink-0"
              >
                Start Your Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Bottom meta row */}
            <div className="relative z-10 flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/10">
              {[
                { icon: Zap, label: 'Fast turnaround' },
                { icon: Shield, label: 'Enterprise secure' },
                { icon: Users, label: 'Dedicated team' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-2">
                    <Icon size={14} className="text-blue-300" />
                    <span className="text-white/70 text-xs font-medium">{item.label}</span>
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