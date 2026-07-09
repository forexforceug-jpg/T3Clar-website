import Link from 'next/link'
import { Code, Smartphone, Cloud } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software built for performance, scalability and real impact.',
    image: '/SoftwareDevelopment.jpg',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web Solutions',
    description: 'Beautiful digital experiences across all platforms and devices.',
    image: '/MS.jpg',
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description: 'Secure, reliable and scalable infrastructure for the future.',
    image: '/CloudInfrastructure.webp',
  },
]

export default function WhatWeDo() {
  return (
    <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#F0F4FF] to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-lg">
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
              WHAT WE DO
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mt-4">
              End-to-end digital solutions for a{' '}
              <span className="text-[#2563EB]">modern</span> world
            </h2>
          </div>
          <Link
            href="/services"
            className="text-[#2563EB] font-semibold hover:gap-2 transition-all inline-flex items-center gap-1 shrink-0"
          >
            View All Services →
          </Link>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="group cursor-pointer">
              <div className="relative h-72 rounded-3xl overflow-hidden mb-5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Floating icon */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl 
                              flex items-center justify-center shadow-lg">
                  <service.icon size={20} className="text-[#2563EB]" />
                </div>

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}