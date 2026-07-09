'use client'

const brands = [
  { name: 'XRide', color: '#2563EB', logo: 'X', tagline: 'Smart Transport' },
  { name: 'ShopIt', color: '#10B981', logo: 'S', tagline: 'Delivery Platform' },
  { name: 'Clexarly', color: '#8B5CF6', logo: 'C', tagline: 'Business Solutions' },
  { name: 'Lotina Investments', color: '#7C3AED', logo: 'L', tagline: 'Investment Partners' },
  { name: 'XRide', name2: 'XRide', color: '#2563EB', logo: 'X', tagline: 'Smart Transport' },
  { name: 'ShopIt', name2: 'ShopIt', color: '#10B981', logo: 'S', tagline: 'Delivery Platform' },
  { name: 'Clexarly', name2: 'Clexarly', color: '#8B5CF6', logo: 'C', tagline: 'Business Solutions' },
  { name: 'Lotina Investments', name2: 'Lotina Investments', color: '#7C3AED', logo: 'L', tagline: 'Investment Partners' },
]

export default function BrandCarousel() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-white z-10" />
      
      {/* Scrolling track */}
      <div className="flex animate-scroll">
        {brands.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex items-center gap-3 px-8 py-2 shrink-0 group cursor-default"
          >
            {/* Logo circle */}
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shrink-0 transition-all duration-300 group-hover:scale-110"
              style={{ 
                backgroundColor: `${brand.color}15`,
                color: brand.color 
              }}
            >
              {brand.logo}
            </div>
            
            {/* Brand info */}
            <div className="text-left">
              <div className="text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors">
                {brand.name}
              </div>
              <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                {brand.tagline}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inline style for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </div>
  )
}
