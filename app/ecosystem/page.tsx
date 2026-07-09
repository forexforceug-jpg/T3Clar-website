import Link from 'next/link'
import { 
  Car, ShoppingBag, TrendingUp, Users, 
  MapPin, CreditCard, Smartphone, BarChart3,
  Globe, Clock, Shield, MessageCircle,
  ChevronRight, ArrowRight
} from 'lucide-react'

const platforms = [
  {
    name: 'XRide',
    coloredPart: 'X',
    whitePart: 'Ride',
    color: '#2563EB',
    bgColor: 'from-blue-900/70',
    subtitle: 'Smart Transportation Platform',
    description: 'Connecting passengers with reliable transport solutions through smart booking, real-time tracking and digital payments.',
    features: [
      { icon: Smartphone, label: 'Book Rides' },
      { icon: MapPin, label: 'Live Tracking' },
      { icon: CreditCard, label: 'Digital Payments' },
      { icon: Users, label: 'Driver Management' },
    ],
  },
  {
    name: 'ShopIt',
    coloredPart: 'Shop',
    whitePart: 'It',
    color: '#10B981',
    bgColor: 'from-green-900/70',
    subtitle: 'Shopping & Delivery Ecosystem',
    description: 'An all-in-one marketplace for restaurants, pharmacies, shops and local businesses with fast and secure deliveries.',
    features: [
      { icon: Globe, label: 'Order Online' },
      { icon: ShoppingBag, label: 'Business Listings' },
      { icon: Clock, label: 'Fast Delivery' },
      { icon: Shield, label: 'Secure Payments' },
    ],
  },
  {
    name: 'Clexarly',
    coloredPart: 'Clex',
    whitePart: 'arly',
    color: '#8B5CF6',
    bgColor: 'from-purple-900/70',
    subtitle: 'Digital Growth & Business Solutions',
    description: 'Helping businesses grow through digital marketing, automation, analytics and customer engagement solutions.',
    features: [
      { icon: BarChart3, label: 'Marketing Tools' },
      { icon: Settings, label: 'Automation' },
      { icon: TrendingUp, label: 'Analytics' },
      { icon: MessageCircle, label: 'Engagement' },
    ],
  },
]

const ecosystemFlow = [
  { icon: Car, label: 'XRide', description: 'Moves people across the city', color: '#2563EB' },
  { icon: ShoppingBag, label: 'ShopIt', description: 'Delivers what people need, when they need it', color: '#10B981' },
  { icon: TrendingUp, label: 'Clexarly', description: 'Helps businesses grow and scale', color: '#8B5CF6' },
  { icon: Users, label: 'Communities', description: 'Stronger connections. Better lives.', color: '#2563EB' },
]

// Need to import Settings
import { Settings } from 'lucide-react'

export default function EcosystemPage() {
  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
          <img
            src="/jinja-cityscape.jpg"
            alt="Jinja aerial view with digital network"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
          
          {/* Digital Network Overlay */}
          <svg className="absolute right-0 top-0 w-2/3 h-full opacity-30" viewBox="0 0 600 500">
            <path d="M 100 250 Q 200 100 350 150" stroke="#2563EB" strokeWidth="1" fill="none" />
            <path d="M 350 150 Q 450 180 500 100" stroke="#2563EB" strokeWidth="0.8" fill="none" />
            <path d="M 100 250 Q 250 350 400 300" stroke="#60A5FA" strokeWidth="1" fill="none" />
            <path d="M 400 300 Q 480 280 550 350" stroke="#60A5FA" strokeWidth="0.8" fill="none" />
            <path d="M 200 80 Q 300 200 250 350" stroke="#2563EB" strokeWidth="0.6" fill="none" strokeDasharray="6,4" />
            <circle cx="100" cy="250" r="8" fill="none" stroke="#2563EB" strokeWidth="1.5" />
            <circle cx="350" cy="150" r="8" fill="none" stroke="#60A5FA" strokeWidth="1.5" />
            <circle cx="500" cy="100" r="6" fill="none" stroke="#2563EB" strokeWidth="1" />
            <circle cx="400" cy="300" r="8" fill="none" stroke="#60A5FA" strokeWidth="1.5" />
            <circle cx="250" cy="350" r="6" fill="none" stroke="#2563EB" strokeWidth="1" />
            <circle cx="550" cy="350" r="7" fill="none" stroke="#60A5FA" strokeWidth="1.5" />
            {/* Small data points */}
            {[...Array(15)].map((_, i) => (
              <circle key={i} cx={100 + Math.random() * 450} cy={50 + Math.random() * 400} r="2" fill="#2563EB" opacity="0.6" />
            ))}
          </svg>

          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-50% to-white/5" />
          <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-gradient-to-r from-white/90 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20">
          <div className="max-w-3xl">
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.3em] uppercase">
              OUR ECOSYSTEM
            </span>
            
            <h2 className="text-6xl md:text-7xl lg:text-7xl font-black leading-[1] mt-4 tracking-tight">
              <span className="text-[#0F172A] block">Connected Platforms.</span>
              <span className="text-[#2563EB] block">Stronger Together</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mt-8 max-w-xl">
              We are building a connected technology ecosystem that simplifies everyday life, 
              empowers businesses and transforms how Jinja moves, shops, grows and connects.
            </p>
            <Link
              href="#platforms"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 border-2 border-[#2563EB] text-[#2563EB] 
                       rounded-full font-semibold hover:bg-[#2563EB] hover:text-white transition-all"
            >
              Explore the Ecosystem →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ PLATFORMS INTRODUCTION ============ */}
      <section id="platforms" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
              OUR PLATFORMS
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mt-4">
              Different solutions. One{' '}
              <span className="text-[#2563EB]">digital ecosystem.</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
              Each platform is built to solve specific needs, but together they create a seamless 
              digital infrastructure connecting businesses, services and communities.
            </p>
          </div>
        </div>
      </section>

      {/* ============ PLATFORM CARDS ============ */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <div key={platform.name} className="group rounded-3xl overflow-hidden">
                {/* Image */}
                <div className="relative h-[500px]">
                  <img
                    src="/jinja-cityscape.jpg"
                    alt={platform.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${platform.bgColor} to-transparent`} />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    {/* Title */}
                    <h3 className="text-5xl font-black mb-2">
                      <span style={{ color: platform.color }}>{platform.coloredPart}</span>
                      <span className="text-white">{platform.whitePart}</span>
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-white/70 text-sm font-medium mb-3">
                      {platform.subtitle}
                    </p>
                    
                    {/* Description */}
                    <p className="text-white/80 text-sm leading-relaxed mb-6">
                      {platform.description}
                    </p>

                    {/* Features */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 grid grid-cols-4 gap-2 mb-6">
                      {platform.features.map((feature) => (
                        <div key={feature.label} className="text-center">
                          <feature.icon size={18} className="text-white mx-auto mb-1" />
                          <span className="text-white/70 text-[10px]">{feature.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Explore Link */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-white font-semibold text-sm group/link"
                      style={{ color: platform.color === '#2563EB' ? '#60A5FA' : platform.color === '#10B981' ? '#34D399' : '#A78BFA' }}
                    >
                      <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center">
                        <ChevronRight size={16} />
                      </div>
                      <span>Explore {platform.name}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW THEY WORK TOGETHER ============ */}
      <section className="py-24 md:py-32 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Text */}
            <div>
              <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                HOW THEY WORK TOGETHER
              </span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mt-4">
                <span className="text-[#0F172A]">One ecosystem.</span>
                <br />
                <span className="text-[#2563EB]">Infinite possibilities.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mt-4">
                Our platforms are interconnected to create powerful digital infrastructure 
                enabling smooth operations, data sharing and better experiences for everyone.
              </p>
            </div>

            {/* Right - Flow Diagram */}
            <div className="relative">
              {/* Flow items */}
              <div className="space-y-0">
                {ecosystemFlow.map((item, index) => (
                  <div key={item.label} className="flex items-center gap-4">
                    {/* Icon circle */}
                    <div className="w-16 h-16 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center shrink-0"
                         style={{ borderColor: item.color + '40' }}>
                      <item.icon size={24} style={{ color: item.color }} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                      <h4 className="font-bold text-[#0F172A] text-sm">{item.label}</h4>
                      <p className="text-gray-500 text-xs">{item.description}</p>
                    </div>

                    {/* Arrow down (except last) */}
                    {index < ecosystemFlow.length - 1 && (
                      <div className="absolute left-8 transform translate-y-16">
                        <ArrowRight size={20} className="text-gray-300 rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
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