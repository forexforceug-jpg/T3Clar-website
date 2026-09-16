'use client'

import Link from 'next/link'
import { Play, ArrowRight } from 'lucide-react'

export default function EcosystemPage() {
  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] 
                        bg-gradient-to-br from-blue-50/40 via-purple-50/20 to-transparent rounded-full blur-[120px]" />
          
          <div className="absolute inset-0 opacity-[0.015]">
            <div className="h-full w-full bg-[radial-gradient(circle,#2563EB_1px,transparent_1px)] bg-[size:25px_25px]" />
          </div>

          {/* Right side Jinja image */}
          <div className="absolute right-0 top-0 bottom-0 w-[55%]">
            <img src="/jinja-cityscape.jpg" alt="Jinja" className="w-full h-full object-cover opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/30 to-white" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20">
          <div className="max-w-3xl">
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.3em] uppercase">
              WELCOME TO T3CLAR
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mt-4 tracking-tight">
              Technology that<br />
              powers{' '}
              <span className="text-[#2563EB]">Jinja&apos;s</span>
              <br />future.
            </h1>
            
            <p className="text-gray-500 text-lg leading-relaxed mt-6 max-w-lg">
              We build powerful digital solutions connecting businesses, services and 
              communities through technology.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563EB] text-white rounded-full 
                         font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
              >
                Explore Our Solutions →
              </Link>
              
              <button className="inline-flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center
                             group-hover:border-[#2563EB] transition-colors">
                  <Play size={16} className="fill-gray-700 group-hover:fill-[#2563EB] ml-0.5" />
                </div>
                <span className="font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                  Watch Our Story
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DO - LARGE IMAGES ON ORBIT ============ */}
      <section className="relative py-24 md:py-32 px-4 bg-white overflow-hidden">
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/25 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50/15 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
              WHAT WE DO
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mt-4 max-w-2xl mx-auto">
              Digital solutions for{' '}
              <span className="text-[#2563EB]">every need.</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              We design, build and scale digital products and platforms that solve real problems.
            </p>
            <Link href="/services" className="inline-flex items-center gap-1 text-[#2563EB] font-semibold mt-4 hover:gap-2 transition-all">
              View All Services →
            </Link>
          </div>

          {/* Orbital Image Display */}
          <div className="relative h-[600px] md:h-[750px]">
            
            {/* Big visible orbit rings + connections */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 650" preserveAspectRatio="xMidYMid meet">
              <ellipse cx="400" cy="325" rx="360" ry="260" fill="none" stroke="#2563EB" strokeWidth="2" opacity="0.15" />
              <ellipse cx="400" cy="325" rx="290" ry="210" fill="none" stroke="#7C3AED" strokeWidth="1.5" opacity="0.1" strokeDasharray="10,8" />
              
              {/* Connection spokes from center to each position */}
              {[0, 60, 120, 180, 240, 300].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                return (
                  <line key={angle} x1="400" y1="325" x2={400 + 330 * Math.cos(rad)} y2={325 + 240 * Math.sin(rad)} 
                        stroke="#2563EB" strokeWidth="1" opacity="0.2" strokeDasharray="4,6" />
                );
              })}
              
              {/* Glowing nodes along orbit */}
              {[...Array(12)].map((_, i) => {
                const a = (i * 30 * Math.PI) / 180;
                return (
                  <circle key={i} cx={400 + 350 * Math.cos(a)} cy={325 + 250 * Math.sin(a)} r="3" fill="#2563EB" opacity="0.4">
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" begin={`${i*0.3}s`} />
                  </circle>
                );
              })}
            </svg>

            {/* Center Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative w-24 h-24 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-full 
                            flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.4)]">
                <span className="text-white font-black text-3xl">T</span>
              </div>
            </div>

            {/* Service Images around orbit */}
            {[
              { label: 'Software Dev', img: '/SoftwareDevelopment.jpg', angle: 0 },
              { label: 'Mobile Apps', img: '/MS.jpg', angle: 60 },
              { label: 'Web Development', img: '/jinja-cityscape.jpg', angle: 120 },
              { label: 'E-commerce', img: '/jinja-cityscape.jpg', angle: 180 },
              { label: 'Cloud Solutions', img: '/CloudInfrastructure.webp', angle: 240 },
              { label: 'Business Systems', img: '/jinja-cityscape.jpg', angle: 300 },
            ].map((service) => {
              const rad = (service.angle * Math.PI) / 180;
              const x = 50 + 42 * Math.cos(rad);
              const y = 50 + 34 * Math.sin(rad);
              
              return (
                <div
                  key={service.label}
                  className="absolute group z-10"
                  style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                >
                  <div className="relative w-[170px] h-[115px] md:w-[210px] md:h-[145px] rounded-2xl overflow-hidden
                                shadow-[0_12px_40px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]
                                group-hover:scale-110 transition-all duration-500">
                    <img src={service.img} alt={service.label} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-white text-sm font-bold">{service.label}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ OUR ECOSYSTEM - LARGE IMAGES WITH CONNECTIONS ============ */}
      <section className="relative py-24 md:py-32 px-4 bg-[#F8FAFC] overflow-hidden">
        
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-50/15 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
              OUR ECOSYSTEM
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mt-4 max-w-2xl mx-auto">
              Connected platforms.{' '}
              <span className="text-[#2563EB]">Endless possibilities.</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Our ecosystem works together to simplify everyday life and transform how Jinja moves, shops, grows and connects.
            </p>
            <Link href="/ecosystem" className="inline-flex items-center gap-1 text-[#2563EB] font-semibold mt-4 hover:gap-2 transition-all">
              Explore the Ecosystem →
            </Link>
          </div>

          {/* Circular Ecosystem with Images */}
          <div className="relative h-[650px] md:h-[750px]">
            
            {/* Visible rings + spokes */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 700" preserveAspectRatio="xMidYMid meet">
              <circle cx="400" cy="350" r="310" fill="none" stroke="#2563EB" strokeWidth="2.5" opacity="0.12" />
              <circle cx="400" cy="350" r="250" fill="none" stroke="#7C3AED" strokeWidth="1.5" opacity="0.08" strokeDasharray="12,8" />
              <circle cx="400" cy="350" r="190" fill="none" stroke="#2563EB" strokeWidth="1" opacity="0.15" />
              
              {/* Thick connection spokes */}
              {[0, 72, 144, 216, 288].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                return (
                  <line key={angle} x1="400" y1="350" x2={400 + 290 * Math.cos(rad)} y2={350 + 290 * Math.sin(rad)} 
                        stroke="#2563EB" strokeWidth="2" opacity="0.25" strokeDasharray="6,5" />
                );
              })}
              
              {/* Glowing nodes at intersections */}
              {[0, 72, 144, 216, 288].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                return (
                  <circle key={angle} cx={400 + 290 * Math.cos(rad)} cy={350 + 290 * Math.sin(rad)} r="6" fill="#2563EB" opacity="0.5">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                );
              })}
            </svg>

            {/* Center Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative w-32 h-32 bg-white rounded-[32px] shadow-[0_24px_70px_rgba(37,99,235,0.12)] 
                            flex items-center justify-center border border-blue-100/50">
                <div className="text-center">
                  <div className="text-3xl font-black">
                    <span className="text-[#2563EB]">T3</span>
                    <span className="text-[#0F172A]">Clar</span>
                  </div>
                  <div className="w-12 h-0.5 bg-[#2563EB]/30 rounded-full mx-auto mt-1.5" />
                  <div className="text-[10px] text-gray-400 mt-1">Digital Ecosystem</div>
                </div>
              </div>
            </div>

            {/* Platform Images on orbit */}
            {[
              { name: 'XRide', desc: 'Smart transportation for a moving world.', img: '/jinja-cityscape.jpg', angle: -90 },
              { name: 'ShopIt', desc: 'A local marketplace at your fingertips.', img: '/jinja-cityscape.jpg', angle: -18 },
              { name: 'Clexarly', desc: 'Data and insights that drive growth.', img: '/jinja-cityscape.jpg', angle: 54 },
              { name: 'Lotina Investments', desc: 'Investing in innovation and the future.', img: '/jinja-cityscape.jpg', angle: 126 },
              { name: 'Cloud Infrastructure', desc: 'Secure, scalable and always available.', img: '/CloudInfrastructure.webp', angle: 198 },
            ].map((platform) => {
              const rad = (platform.angle * Math.PI) / 180;
              const x = 50 + 38 * Math.cos(rad);
              const y = 50 + 38 * Math.sin(rad);
              
              return (
                <div
                  key={platform.name}
                  className="absolute group z-10"
                  style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                >
                  <div className="relative w-[190px] h-[130px] md:w-[230px] md:h-[155px] rounded-2xl overflow-hidden
                                shadow-[0_16px_50px_rgba(0,0,0,0.1)] group-hover:shadow-[0_24px_70px_rgba(37,99,235,0.12)]
                                group-hover:scale-110 transition-all duration-500">
                    <img src={platform.img} alt={platform.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h4 className="text-white font-bold text-base">{platform.name}</h4>
                      <p className="text-white/70 text-xs mt-1 leading-relaxed">{platform.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ VISION BANNER ============ */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden h-[400px]">
            <img
              src="/jinja-cityscape.jpg"
              alt="Jinja at night"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-transparent" />
            
            <div className="absolute inset-0 flex items-center p-10 md:p-16">
              <div className="max-w-xl">
                <span className="text-white/70 text-xs font-bold tracking-[0.25em] uppercase">
                  BUILDING JINJA&apos;S FUTURE
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mt-4">
                  Together, we are building a smarter, connected Jinja.
                </h2>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-[#2563EB] rounded-full 
                           font-bold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Partner With Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}