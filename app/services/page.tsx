import Link from 'next/link'
import {
  Code, Smartphone, Globe, Layout, ShoppingBag, Cloud, CreditCard,
  Settings, Rocket, Users, Lightbulb, Shield, Lock, UserCheck,
  ArrowUpRight,
} from 'lucide-react'

const services = [
  { number: '01', icon: Code, title: 'Custom Software Development', category: 'Engineering', description: 'Robust, scalable and secure software solutions tailored to your business needs.', image: '/Custom Software Development.jpg' },
  { number: '02', icon: Smartphone, title: 'Mobile App Development', category: 'Product', description: 'High-performance mobile apps for Android and iOS built with modern frameworks.', image: '/Mobile App Development.jpeg' },
  { number: '03', icon: Globe, title: 'Website Design & Development', category: 'Web', description: 'Modern, responsive websites that create lasting impressions and drive results.', image: '/Website Design & Development.jpg' },
  { number: '04', icon: Layout, title: 'Business Management Systems', category: 'Enterprise', description: 'Smart systems that streamline operations, improve efficiency and drive growth.', image: '/Business Management Systems.jpg' },
  { number: '05', icon: ShoppingBag, title: 'E-commerce Solutions', category: 'Commerce', description: 'End-to-end e-commerce platforms designed to help you sell more and reach further.', image: '/E-commerce Solutions.webp' },
  { number: '06', icon: Cloud, title: 'Cloud Solutions', category: 'Infrastructure', description: 'Secure, reliable and scalable cloud infrastructure to power your business applications.', image: '/Cloud Solutions.jpg' },
  { number: '07', icon: CreditCard, title: 'Payment Integration Systems', category: 'Fintech', description: 'Safe and seamless payment gateways integrated into your digital platforms.', image: '/Payment Integration Systems.jpg' },
  { number: '08', icon: Settings, title: 'Automation Solutions', category: 'Automation', description: 'Smart automation that reduces manual processes and streamlines your workflows.', image: '/Automation Solutions.jpg' },
  { number: '09', icon: Rocket, title: 'UI/UX Design', category: 'Design', description: 'User-centered designs that create beautiful experiences and drive engagement.', image: '/UI/UX Design.jpg' },
  { number: '10', icon: Users, title: 'Technology Consulting', category: 'Advisory', description: 'Expert guidance to help you make the right technology decisions for your business.', image: '/Technology Consulting.png' },
]

const commitments = [
  { icon: Lightbulb, title: 'Innovative', description: 'Fresh thinking on every build' },
  { icon: Shield, title: 'Scalable', description: 'Grows with your business' },
  { icon: Lock, title: 'Secure', description: 'Enterprise-grade protection' },
  { icon: UserCheck, title: 'Customer-First', description: 'You lead every decision' },
]

const processSteps = [
  { number: '01', title: 'Discover', description: 'We learn your business, your users and your goals — then map out a clear path forward.' },
  { number: '02', title: 'Design', description: 'We blueprint the solution end-to-end, from information architecture to interface design.' },
  { number: '03', title: 'Build', description: 'We engineer with precision and care, using modern tools and proven methodologies.' },
  { number: '04', title: 'Launch', description: 'We deploy, monitor and iterate — ensuring your solution grows with your business.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative py-24 md:py-32 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">

          <div className="editorial-strip">
            <span className="editorial-mono">§ Services · T3Clar</span>
            <span className="editorial-mono hidden sm:inline">Ten disciplines · One studio</span>
            <span className="editorial-mono">Updated 2025</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <span className="editorial-mono mb-6 block">
                What We Build
              </span>
              <h1 className="editorial-title text-5xl md:text-7xl lg:text-[5rem]">
                Technology solutions
                <br />
                designed for{' '}
                <span className="editorial-accent">impact.</span>
              </h1>

              <p className="editorial-body text-lg md:text-xl mt-10 max-w-lg">
                We design, develop and deliver powerful digital solutions that help
                businesses automate, scale and stay ahead in a rapidly changing world.
              </p>

              <div className="flex flex-wrap items-center gap-8 mt-12">
                <Link href="#services-grid" className="group inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#0B1220] px-6 py-3.5 rounded-full hover:bg-[#1D4ED8] transition-all duration-300">
                  Explore Services
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link href="/contact" className="link-underline group">
                  Talk to us
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img src="/heroimage.jpg" alt="Modern technology studio" className="w-full h-full object-cover" />
              </div>
              <div className="mt-3 flex items-start justify-between gap-4">
                <span className="editorial-mono">Fig. 01 · Studio</span>
                <span className="editorial-mono">Jinja, Uganda</span>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-24 pt-10 border-t border-dashed border-slate-300/70 grid md:grid-cols-3 gap-10">
            {[
              { value: '150+', label: 'Projects delivered' },
              { value: '10+', label: 'Industries served' },
              { value: '24/7', label: 'Support coverage' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-black text-[#0B1220] tabular-nums leading-none tracking-tight">
                  {s.value}
                </div>
                <div className="editorial-mono mt-3">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES — Numbered catalogue with photos
          ============================================================ */}
      <section id="services-grid" className="py-24 md:py-32 px-4 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto">

          <div className="editorial-strip">
            <span className="editorial-mono">§ 01 · Catalogue</span>
            <span className="editorial-mono hidden sm:inline">Ten services · All industries</span>
            <span className="editorial-mono">2021 — present</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end mb-20">
            <div className="lg:col-span-8">
              <h2 className="editorial-title text-4xl md:text-6xl lg:text-7xl">
                Comprehensive services
                <br />
                for <span className="editorial-accent">modern businesses.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-slate-300/60">
              <p className="editorial-body">
                Ten disciplines spanning engineering, product, infrastructure,
                creative and advisory work.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.title} className="group">
                  {/* Photo */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                      <Icon size={14} className="text-[#1D4ED8]" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Meta row */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#1D4ED8]">
                      {service.number}
                    </span>
                    <span className="editorial-mono">{service.category}</span>
                  </div>

                  {/* Title + copy */}
                  <h3 className="text-xl font-bold text-[#0B1220] leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="editorial-body text-sm mb-4">
                    {service.description}
                  </p>

                  <Link href="/contact" className="link-underline group/link">
                    Discuss this service
                    <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          PROCESS
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">

          <div className="editorial-strip">
            <span className="editorial-mono">§ 02 · Process</span>
            <span className="editorial-mono hidden sm:inline">How we work</span>
            <span className="editorial-mono">Four phases</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end mb-20">
            <div className="lg:col-span-8">
              <h2 className="editorial-title text-4xl md:text-6xl lg:text-7xl">
                A proven process from
                <br />
                <span className="editorial-accent">idea to launch.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-slate-300/60">
              <p className="editorial-body">
                Every engagement follows the same four-phase rhythm — from
                discovery to launch and beyond.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {processSteps.map((step, i) => (
              <div key={step.number} className="relative">
                <div className="rule-h mb-6" />

                <div className="flex items-baseline justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-[0.3em] text-[#1D4ED8]">
                    {step.number}
                  </span>
                  <span className="editorial-mono">/ 04</span>
                </div>

                <h3 className="text-2xl leading-tight mb-4 text-[#0B1220]"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  {step.title}
                </h3>

                <p className="editorial-body text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          COMMITMENT
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto">

          <div className="editorial-strip">
            <span className="editorial-mono">§ 03 · Our Standard</span>
            <span className="editorial-mono hidden sm:inline">Four commitments</span>
            <span className="editorial-mono">Quality-first delivery</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img src="/jinja-cityscape.jpg" alt="Jinja bridge" className="w-full h-full object-cover" />
              </div>
              <div className="mt-3 flex items-start justify-between gap-4">
                <span className="editorial-mono">Fig. 03 · Our Standard</span>
                <span className="editorial-mono">Jinja, Uganda</span>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <h2 className="editorial-title text-4xl md:text-5xl mb-8">
                Quality. Innovation.
                <br />
                <span className="editorial-accent">Reliability.</span>
              </h2>

              <p className="editorial-body text-lg mb-12 max-w-xl">
                We are committed to delivering high-quality solutions using modern
                technologies and best practices to ensure your success.
              </p>

              {/* Commitments */}
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8 mb-12">
                {commitments.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="pb-6 border-b border-slate-300/60">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-full border border-slate-300/60 flex items-center justify-center">
                          <Icon size={14} className="text-[#1D4ED8]" strokeWidth={2} />
                        </div>
                        <h3 className="text-base font-bold text-[#0B1220]">{item.title}</h3>
                      </div>
                      <p className="editorial-body text-sm">
                        {item.description}
                      </p>
                    </div>
                  )
                })}
              </div>

              {/* Trust list */}
              <div className="pt-6 border-t border-dashed border-slate-300/70">
                <div className="editorial-mono mb-4">Standards</div>
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                  {['ISO-ready practices', 'Modern tech stack', 'Agile delivery', '24/7 support'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="w-3 h-px bg-slate-400" />
                      {item}
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
      <section className="py-24 md:py-32 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">

          <div className="editorial-strip">
            <span className="editorial-mono">§ 04 · Correspondence</span>
            <span className="editorial-mono hidden sm:inline">Response within 24 hours</span>
            <span className="editorial-mono">t3clar.com/contact</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h2 className="editorial-title text-4xl md:text-6xl lg:text-7xl">
                Have a project
                <br />
                <span className="editorial-accent">in mind?</span>
              </h2>
              <p className="editorial-body text-lg md:text-xl mt-8 max-w-xl">
                Tell us about what you&apos;re building. We read every message and reply
                within a business day.
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
                <div>
                  <div className="editorial-mono mb-2">Hours</div>
                  <div className="text-base font-semibold text-[#0B1220]">Monday — Friday · 09:00–18:00 EAT</div>
                </div>
              </div>

              <Link href="/contact" className="link-underline group">
                Start your project
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