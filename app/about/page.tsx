import PageHero from '@/components/PageHero'
import Image from 'next/image'
import Link from 'next/link'
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

      {/* ============ OUR STORY SECTION ============ */}
      <section className="py-24 md:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Story Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                  OUR STORY
                </span>
                <div className="flex-1 h-px bg-blue-100" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight">
                Solving{' '}
                <span className="text-[#2563EB]">real problems</span>
                {' '}with powerful technology.
              </h2>
              
              <p className="text-gray-600 leading-relaxed mt-6">
                T3Clar was founded on a simple belief: technology should solve real problems 
                and create real impact. We saw the challenges businesses in Jinja faced—outdated 
                systems, disconnected services, and limited access to quality digital solutions.
              </p>
              
              <p className="text-gray-600 leading-relaxed mt-4">
                We are passionate about building reliable systems, beautiful experiences and 
                smart solutions that help businesses, organizations and communities thrive in 
                the digital age. Every project we take on is driven by purpose, precision and 
                a commitment to excellence.
              </p>
              
              {/* Signature */}
              <div className="mt-8">
                <span className="text-[#2563EB] text-2xl font-['Brush_Script_MT',cursive] italic">
                  T3Clar Team
                </span>
              </div>
            </div>

            {/* Right - Office Photo */}
            <div className="relative h-[450px] rounded-3xl overflow-hidden">
              <img
                src="/jinja-cityscape.jpg"
                alt="T3Clar modern office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
              
              {/* T3Clar logo on wall */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#2563EB] rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">T</span>
                  </div>
                  <span className="text-[#0F172A] font-bold text-sm">T3Clar</span>
                </div>
              </div>
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