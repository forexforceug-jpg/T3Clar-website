'use client'

const brands = [
  { name: 'XRide', color: '#2563EB', logo: '/ttlogo.png', tagline: 'Tourism' },
  { name: 'ShopIt', color: '#10B981', logo: '/shopit.jpg', tagline: 'E-commerce Platform' },
  { name: 'Tata Owen', color: '#8B5CF6', logo: '/owen.png', tagline: 'Business Solutions' },
  { name: 'Lotina Investments', color: '#7C3AED', logo: '/lotina.png', tagline: 'Investment Partners' },
  { name: 'GoViral', color: '#2563EB', logo: '/goviral.ico', tagline: 'Marketing Platform' },
  { name: 'Fork & Go', color: '#06B6D4', logo: '/Fork and Go.png', tagline: 'Food Delivery' },
  { name: 'LowKey FX', color: '#733add', logo: '/logoTp.png', tagline: 'Trading Platforms' },
  { name: 'Meddy Furniture', color: '#53c57e', logo: '/meddy.png', tagline: 'Furniture Store' },
  { name: 'Munolink', color: '#77afe4', logo: '/muno.png', tagline: 'E-commerce Platform' },
  { name: 'GripShule', color: '#10B981', logo: '/gripshule.png', tagline: 'School Management Platform' },
]

export default function BrandCarousel() {
  // Duplicate array so the marquee loops seamlessly
  const track = [...brands, ...brands]

  return (
    <div className="relative overflow-hidden mt-5">
      {/* Soft fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div
        className="flex items-center"
        style={{
          width: 'max-content',
          animation: 'marquee-scroll 40s linear infinite',
        }}
      >
        {track.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex items-center gap-3 px-8 shrink-0 group cursor-default"
          >
            {/* Logo tile with brand color tint */}
            <div
              className="relative w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3"
              style={{
                backgroundColor: `${brand.color}12`,
                borderColor: `${brand.color}30`,
              }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-7 h-7 object-contain"
              />

              {/* Subtle pulse dot at corner */}
              <div
                className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full border-2 border-white"
                style={{ backgroundColor: brand.color }}
              />
            </div>

            {/* Brand info */}
            <div className="text-left whitespace-nowrap">
              <div className="text-sm font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                {brand.name}
              </div>
              <div
                className="text-[10px] font-bold uppercase tracking-[0.15em] mt-0.5"
                style={{ color: brand.color }}
              >
                {brand.tagline}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}