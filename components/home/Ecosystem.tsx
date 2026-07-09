import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const platforms = [
  {
    name: 'XRide',
    nameParts: { colored: 'X', white: 'Ride' },
    description: 'Smart transportation for a moving city.',
    image: '/jinja-cityscape.jpg',
    overlay: 'from-blue-900/60 to-transparent',
    color: '#2563EB',
  },
  {
    name: 'ShopIt',
    nameParts: { colored: 'Shop', white: 'It' },
    description: 'Shop more. We deliver.',
    image: '/jinja-cityscape.jpg',
    overlay: 'from-green-900/60 to-transparent',
    color: '#10B981',
  },
  {
    name: 'Clexarly',
    nameParts: { colored: 'Clex', white: 'arly' },
    description: 'Digital growth & business solutions.',
    image: '/jinja-cityscape.jpg',
    overlay: 'from-purple-900/60 to-transparent',
    color: '#8B5CF6',
  },
]

export default function Ecosystem() {
  return (
    <section className="py-24 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
              OUR ECOSYSTEM
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mt-4">
              Connected platforms.{' '}
              <span className="text-[#2563EB]">Stronger together.</span>
            </h2>
          </div>
          <Link
            href="/ecosystem"
            className="text-[#2563EB] font-semibold hover:gap-2 transition-all inline-flex items-center gap-1 shrink-0"
          >
            Explore The Ecosystem →
          </Link>
        </div>

        {/* Strategic Partnership Banner */}
        <div className="bg-gradient-to-r from-[#F5F3FF] via-white to-[#EFF6FF] rounded-3xl p-6 md:p-8 mb-10 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center">
                <span className="text-xl font-black text-[#7C3AED]">L</span>
              </div>
              <span className="text-[#7C3AED] font-bold text-sm md:text-base">LOTINA INVESTMENTS</span>
            </div>
            <span className="text-xl text-gray-300">×</span>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                <span className="text-xl font-black text-[#2563EB]">T</span>
              </div>
              <span className="text-[#2563EB] font-bold text-sm md:text-base">T3CLAR</span>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4 max-w-xl mx-auto">
            Investment meets innovation. Together, we power a connected digital ecosystem.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <div key={platform.name} className="group cursor-pointer relative">
              <div className="relative h-72 rounded-3xl overflow-hidden">
                <img
                  src={platform.image}
                  alt={platform.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${platform.overlay}`} />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold">
                    <span style={{ color: platform.color }}>{platform.nameParts.colored}</span>
                    <span className="text-white">{platform.nameParts.white}</span>
                  </h3>
                  <p className="text-white/80 text-sm mt-1">{platform.description}</p>
                </div>

                {/* Arrow button */}
                <div className="absolute bottom-6 right-6 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full 
                              flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-400 text-xs mt-8">
          Powered by{' '}
          <span className="text-[#7C3AED] font-semibold">Lotina Investments</span>
          {' '}×{' '}
          <span className="text-[#2563EB] font-semibold">T3Clar</span>
          {' '}strategic technology partnership
        </p>
      </div>
    </section>
  )
}