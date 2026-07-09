import Image from 'next/image'
import Link from 'next/link'
import { 
  Code, Smartphone, Globe, Layout, ShoppingBag, Cloud, CreditCard, 
  Settings, Rocket, Users, Lightbulb, Shield, Lock, UserCheck, Hexagon 
} from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'We create robust, scalable and secure software solutions tailored to your business needs.',
    image: '/jinja-cityscape.jpg',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'High-performance mobile applications for Android and iOS platforms built with modern frameworks.',
    image: '/jinja-cityscape.jpg',
  },
  {
    icon: Globe,
    title: 'Website Design & Development',
    description: 'Modern, responsive and fast websites that create a lasting impression and drive results.',
    image: '/jinja-cityscape.jpg',
  },
  {
    icon: Layout,
    title: 'Business Management Systems',
    description: 'Smart systems that streamline operations, improve efficiency and drive growth.',
    image: '/jinja-cityscape.jpg',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce platforms designed to help you sell more and reach further.',
    image: '/jinja-cityscape.jpg',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Secure, reliable and scalable cloud infrastructure to power your business applications.',
    image: '/jinja-cityscape.jpg',
  },
  {
    icon: CreditCard,
    title: 'Payment Integration Systems',
    description: 'Safe and seamless payment gateways integrated into your digital platforms.',
    image: '/jinja-cityscape.jpg',
  },
  {
    icon: Settings,
    title: 'Automation Solutions',
    description: 'Smart automation that reduces manual processes and automates your workflows.',
    image: '/jinja-cityscape.jpg',
  },
  {
    icon: Rocket,
    title: 'UI/UX Design',
    description: 'User-centered designs that create beautiful experiences and drive engagement.',
    image: '/jinja-cityscape.jpg',
  },
  {
    icon: Users,
    title: 'Technology Consulting',
    description: 'Expert guidance to help you make the right technology decisions for your business.',
    image: '/jinja-cityscape.jpg',
  },
]

const commitments = [
  { icon: Lightbulb, title: 'Innovative Solutions', color: 'text-blue-500' },
  { icon: Shield, title: 'Scalable Architecture', color: 'text-blue-600' },
  { icon: Lock, title: 'Secure & Reliable', color: 'text-blue-700' },
  { icon: UserCheck, title: 'Customer Focused', color: 'text-blue-800' },
]

export default function ServicesPage() {
  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
          <img
            src="/jinja-cityscape.jpg"
            alt="Modern technology office"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-50% to-white/5" />
          <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-gradient-to-r from-white/90 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20">
          <div className="max-w-3xl">
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.3em] uppercase">
              OUR SERVICES
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0F172A] leading-[1.05] mt-4 tracking-tight">
              Technology solutions designed for{' '}
              <span className="text-[#2563EB]">impact</span>
              {' '}and built for{' '}
              <span className="text-[#2563EB]">growth.</span>
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mt-6 max-w-xl">
              We design, develop and deliver powerful digital solutions that help businesses 
              automate, scale and stay ahead in a rapidly changing world.
            </p>
            
            <Link
              href="#services-grid"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#2563EB] text-white rounded-full 
                       font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
            >
              Explore Our Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SERVICES CATALOGUE ============ */}
      <section id="services-grid" className="py-24 md:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
              WHAT WE DO
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mt-4">
              Comprehensive services for modern{' '}
              <span className="text-[#2563EB]">businesses.</span>
            </h2>
            <div className="w-16 h-0.5 bg-[#2563EB] mx-auto mt-4" />
          </div>

          {/* Services Grid - 5 columns, 2 rows */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group">
                {/* Image */}
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute -bottom-3 left-4 w-10 h-10 bg-white rounded-xl flex items-center 
                                justify-center shadow-lg border border-gray-100">
                    <service.icon size={18} className="text-[#2563EB]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-sm font-bold text-[#0F172A] mt-4 mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="text-[#2563EB] text-xs font-semibold hover:gap-1 transition-all inline-flex items-center gap-0.5"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUR COMMITMENT SECTION ============ */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#F0F4FF] to-[#E5EDFF] rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-5">
              
              {/* Left - Bridge Image */}
              <div className="lg:col-span-2 relative h-64 lg:h-auto">
                <img
                  src="/jinja-cityscape.jpg"
                  alt="Jinja bridge"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#F0F4FF]" />
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-3 p-8 md:p-12">
                <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                  OUR COMMITMENT
                </span>
                
                <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] leading-tight mt-4">
                  Quality. Innovation. Reliability.
                </h2>
                
                <p className="text-gray-600 leading-relaxed mt-4 max-w-xl">
                  We are committed to delivering high-quality solutions using modern technologies 
                  and best practices to ensure your success.
                </p>

                {/* Commitment Principles */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
                  {commitments.map((item) => (
                    <div key={item.title} className="text-center">
                      <div className="w-12 h-12 mx-auto bg-white rounded-xl flex items-center justify-center shadow-sm mb-3">
                        <item.icon size={20} className="text-[#2563EB]" />
                      </div>
                      <h4 className="text-xs font-bold text-[#0F172A]">{item.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#0F172A] via-[#1E3A5F] to-[#2563EB] rounded-3xl p-10 md:p-14 
                        flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                <Hexagon size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white">
                  Have a project in mind?
                </h2>
                <p className="text-blue-100 mt-1">
                  Let&apos;s build something amazing together.
                </p>
              </div>
            </div>

            {/* Right */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2563EB] rounded-full 
                       font-bold hover:bg-blue-50 transition-colors shadow-lg shrink-0"
            >
              Start Your Project →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}