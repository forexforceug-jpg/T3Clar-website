'use client'
import PageHero from '@/components/PageHero'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Lightbulb, Shield, Users, Car, ShoppingBag, Building2, Heart, CreditCard, UserCheck } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
          <img
            src="/jinja-cityscape.jpg"
            alt="Jinja bridge at sunset"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-50% to-white/10" />
          <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-gradient-to-r from-white/90 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
          
          {/* Subtle T in sky */}
          <div className="absolute top-1/4 right-1/3 opacity-[0.06]">
            <span className="text-[20rem] font-black text-[#2563EB] select-none">T</span>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20">
          <div className="max-w-3xl">
            {/* Decorative line */}
            <div className="w-12 h-0.5 bg-[#2563EB] mb-6" />
            
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.3em] uppercase">
              ABOUT T3CLAR
            </span>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mt-4 tracking-tight">
              <span className="text-[#0F172A] block">Technology.</span>
              <span className="text-[#0F172A] block">Innovation.</span>
              <span className="text-[#2563EB] block">Impact.</span>
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mt-8 max-w-xl">
              T3Clar is a software and technology solutions company based in Jinja, Uganda. 
              We design, develop and implement innovative digital solutions that transform 
              how businesses operate and grow.
            </p>
          </div>
        </div>
      </section>

            {/* ============ OUR SOLUTIONS - HONEYCOMB SECTION ============ */}
      <section className="relative py-24 md:py-32 px-4 bg-white overflow-hidden">
        
        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-50/30 via-purple-50/15 to-transparent rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-purple-50/15 rounded-full blur-[100px]" />
        
        {/* Dotted grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[radial-gradient(circle,#2563EB_1px,transparent_1px)] bg-[size:25px_25px]" />
        </div>

        {/* Curved lines at bottom */}
        <svg className="absolute bottom-0 left-0 w-72 h-32 opacity-[0.06]" viewBox="0 0 250 100">
          <path d="M-20 70 Q40 10 100 50 Q160 90 220 20" stroke="#2563EB" strokeWidth="1" fill="none" />
          <path d="M-10 85 Q50 30 110 65 Q170 95 240 40" stroke="#7C3AED" strokeWidth="0.5" fill="none" />
        </svg>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* ============ LEFT - CONTENT AREA ============ */}
            <div>
              {/* Label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
                <span className="text-[#2563EB] text-xs font-bold tracking-[0.2em] uppercase">
                  OUR SOLUTIONS
                </span>
              </div>
              
              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.05]">
                Solutions designed<br />
                to solve today's{' '}
                <span className="text-[#2563EB]">challenges</span>
              </h2>
              
              {/* Description */}
              <p className="text-gray-500 leading-relaxed mt-6 max-w-md">
                We help businesses innovate, automate and grow through tailored solutions 
                built using modern technology and industry best practices.
              </p>
              
              {/* CTA Button */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 border-2 border-[#2563EB]/20 text-[#2563EB] 
                         rounded-full font-semibold hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white 
                         transition-all duration-300"
              >
                Explore all solutions →
              </Link>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-black text-[#2563EB]">150+</div>
                    <div className="text-xs text-gray-400">Projects delivered successfully</div>
                  </div>
                </div>
                
                <div className="w-px h-10 bg-gray-200 hidden sm:block" />
                
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-black text-[#2563EB]">98%</div>
                    <div className="text-xs text-gray-400">Client satisfaction rate</div>
                  </div>
                </div>
                
                <div className="w-px h-10 bg-gray-200 hidden sm:block" />
                
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-black text-[#2563EB]">30+</div>
                    <div className="text-xs text-gray-400">Industries we serve</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ============ RIGHT - HONEYCOMB NETWORK ============ */}
            <div className="relative h-[550px] lg:h-[600px]">
              
              {/* Background hex grid */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 500 550" preserveAspectRatio="xMidYMid meet">
                <path d="M250 30 L330 72 L330 156 L250 198 L170 156 L170 72 Z" fill="none" stroke="#2563EB" strokeWidth="1.5" />
                <path d="M170 156 L250 198 L250 282 L170 324 L90 282 L90 198 Z" fill="none" stroke="#7C3AED" strokeWidth="1" />
                <path d="M330 156 L410 198 L410 282 L330 324 L250 282 L250 198 Z" fill="none" stroke="#2563EB" strokeWidth="1" />
                <path d="M90 282 L170 324 L170 408 L90 450 L10 408 L10 324 Z" fill="none" stroke="#7C3AED" strokeWidth="0.8" />
                <path d="M410 282 L490 324 L490 408 L410 450 L330 408 L330 324 Z" fill="none" stroke="#2563EB" strokeWidth="0.8" />
                {/* Glowing nodes */}
                {[[250,72],[330,156],[250,282],[170,156],[170,324],[330,324]].map(([cx,cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="2" fill="#2563EB" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" begin={`${i*0.4}s`} />
                  </circle>
                ))}
              </svg>

              {/* Center - T3Clar Photo Hexagon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative w-[180px] h-[210px]">
                  <div className="absolute -inset-4 bg-blue-100/20 rounded-full blur-2xl" />
                  <div className="relative w-full h-full overflow-hidden"
                       style={{
                         clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                       }}>
                    <img
                      src="/It-soln2.jpeg"
                      alt="T3Clar technology building"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
                    
                    {/* T3Clar badge on photo */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 
                                  flex items-center gap-2 shadow-lg">
                      <div className="w-6 h-6 bg-[#2563EB] rounded-md flex items-center justify-center">
                        <span className="text-white font-bold text-[10px]">T</span>
                      </div>
                      <span className="text-[#0F172A] font-bold text-xs">T3CLAR</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service hexagons around center */}
              {[
                { title: 'AI & Automation', desc: 'Intelligent automation streamlines processes and reduces operational costs.', icon: '🤖', top: '0%', left: '50%', transform: 'translate(-50%, 0)' },
                { title: 'Cloud Solutions', desc: 'Scalable, secure and reliable cloud infrastructure tailored to your business.', icon: '☁️', top: '28%', left: '5%', transform: 'translate(0, -50%)' },
                { title: 'Cybersecurity', desc: 'Enterprise-grade security solutions to protect your digital assets.', icon: '🛡️', top: '28%', right: '5%', transform: 'translate(0, -50%)' },
                { title: 'Custom Development', desc: 'Custom software solutions designed for unique business needs.', icon: '💻', top: '72%', left: '8%', transform: 'translate(0, -50%)' },
                { title: 'Data & Analytics', desc: 'Turn data into actionable insights that drive smarter decisions and growth.', icon: '📊', top: '72%', right: '8%', transform: 'translate(0, -50%)' },
              ].map((service, i) => (
                <div
                  key={service.title}
                  className="absolute group z-10"
                  style={{
                    top: service.top,
                    left: service.left,
                    right: service.right,
                    transform: service.transform,
                  }}
                >
                  <div className="w-[155px] h-[175px] flex flex-col items-center justify-center text-center p-4
                                bg-white/85 backdrop-blur-sm rounded-3xl
                                shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-blue-100/30
                                hover:shadow-[0_16px_45px_rgba(37,99,235,0.08)] hover:border-blue-200/50 
                                transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full 
                                  flex items-center justify-center mb-3">
                      <span className="text-lg">{service.icon}</span>
                    </div>
                    <h3 className="text-xs font-bold text-[#0F172A] mb-1">{service.title}</h3>
                    <p className="text-[10px] text-gray-400 leading-relaxed">{service.desc}</p>
                    <div className="w-5 h-0.5 bg-[#2563EB]/25 rounded-full mt-2.5" />
                  </div>
                  
                  {/* Connection node */}
                  <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#2563EB]/30 rounded-full shadow-[0_0_6px_rgba(37,99,235,0.3)]"
                       style={{ right: i < 2 ? '-8px' : 'auto', left: i >= 2 ? '-8px' : 'auto' }} />
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
      {/* ============ OUR VISION SECTION ============ */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#F0F4FF] to-[#E8EEFF] rounded-3xl p-10 md:p-16 overflow-hidden">
            
            {/* Background faded cityscape */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10">
              <img
                src="/jinja-cityscape.jpg"
                alt="Jinja aerial"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left - Vision Text */}
              <div>
                <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                  OUR VISION
                </span>
                
                <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mt-4">
                  Building Jinja&apos;s digital{' '}
                  <span className="text-[#2563EB]">future.</span>
                </h2>
                
                <p className="text-gray-600 leading-relaxed mt-6">
                  We envision a connected Jinja where transportation, shopping, healthcare, 
                  payments, businesses and communities work together through smart digital 
                  infrastructure.
                </p>
                
                <p className="text-gray-600 leading-relaxed mt-4">
                  Our goal is to build a technology ecosystem that simplifies everyday life 
                  and unlocks endless opportunities for growth across the region.
                </p>
              </div>

              {/* Right - Ecosystem Diagram */}
              <div className="relative h-[400px] flex items-center justify-center">
                {/* Center T logo */}
                <div className="absolute z-10 w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] 
                              rounded-full flex items-center justify-center shadow-xl shadow-blue-500/30">
                  <span className="text-white font-black text-3xl">T</span>
                </div>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
                  <line x1="150" y1="150" x2="150" y2="40" stroke="#2563EB" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
                  <line x1="150" y1="150" x2="70" y2="80" stroke="#2563EB" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
                  <line x1="150" y1="150" x2="70" y2="220" stroke="#2563EB" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
                  <line x1="150" y1="150" x2="230" y2="80" stroke="#2563EB" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
                  <line x1="150" y1="150" x2="230" y2="220" stroke="#2563EB" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
                  <line x1="150" y1="150" x2="150" y2="260" stroke="#2563EB" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
                </svg>

                {/* Nodes */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-blue-100">
                    <Car size={16} className="text-[#2563EB]" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium">Transport</span>
                </div>
                
                <div className="absolute top-20 left-16 flex flex-col items-center gap-1">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-blue-100">
                    <ShoppingBag size={16} className="text-[#2563EB]" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium">Shopping</span>
                </div>
                
                <div className="absolute bottom-20 left-16 flex flex-col items-center gap-1">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-blue-100">
                    <Building2 size={16} className="text-[#2563EB]" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium">Business</span>
                </div>
                
                <div className="absolute top-20 right-16 flex flex-col items-center gap-1">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-blue-100">
                    <Heart size={16} className="text-[#2563EB]" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium">Healthcare</span>
                </div>
                
                <div className="absolute bottom-20 right-16 flex flex-col items-center gap-1">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-blue-100">
                    <CreditCard size={16} className="text-[#2563EB]" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium">Payments</span>
                </div>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-blue-100">
                    <Users size={16} className="text-[#2563EB]" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium">Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OUR MISSION SECTION ============ */}
      <section className="py-24 md:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Left - Mission Text */}
            <div>
              <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                OUR MISSION
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] leading-tight mt-4">
                Creating technology that{' '}
                <span className="text-[#2563EB]">empowers.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mt-4 text-sm">
                Our mission is to design, develop and deliver innovative digital solutions 
                that empower businesses, improve services and create lasting value for communities.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-gray-200" />

            {/* Principles */}
            <div className="lg:col-span-2 grid sm:grid-cols-3 gap-8">
              
              {/* Innovate */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full border-2 border-[#2563EB]/30 flex items-center justify-center">
                  <Lightbulb size={24} className="text-[#2563EB]" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mt-4">Innovate</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  We embrace creativity and innovation to build smart solutions that solve 
                  real-world challenges.
                </p>
              </div>

              {/* Deliver */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full border-2 border-[#2563EB]/30 flex items-center justify-center">
                  <Shield size={24} className="text-[#2563EB]" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mt-4">Deliver</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  We are committed to quality, reliability and excellence in every product we build.
                </p>
              </div>

              {/* Empower */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full border-2 border-[#2563EB]/30 flex items-center justify-center">
                  <UserCheck size={24} className="text-[#2563EB]" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mt-4">Empower</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  We empower businesses and communities through technology and knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OUR APPROACH SECTION ============ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* Left - Team Photo */}
            <div className="relative h-[500px] rounded-l-3xl overflow-hidden">
              <img
                src="/jinja-cityscape.jpg"
                alt="T3Clar team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F172A]/20" />
            </div>

            {/* Right - Approach Content */}
            <div className="bg-gradient-to-br from-[#F0F4FF] to-[#E8EEFF] rounded-r-3xl p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
              
              {/* Decorative dots */}
              <div className="absolute top-8 right-8 flex gap-1.5">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/20" />
                ))}
              </div>

              <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                OUR APPROACH
              </span>
              
              <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] leading-tight mt-4">
                People. Process.{' '}
                <span className="text-[#2563EB]">Technology.</span>
              </h2>
              
              <p className="text-gray-600 leading-relaxed mt-4">
                We combine the right people, efficient processes and modern technology to build 
                solutions that are scalable, secure and future-ready.
              </p>
              
              <Link
                href="/services"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#2563EB] text-white rounded-full 
                         font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 w-fit"
              >
                Explore Our Services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}