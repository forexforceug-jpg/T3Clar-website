'use client'

const brands = [
  { name: 'XRide', tagline: 'Tourism', logo: '/ttlogo.png' },
  { name: 'ShopIt', tagline: 'E-commerce', logo: '/shopit.jpg' },
  { name: 'Tata Owen', tagline: 'Business Solutions', logo: '/owen.png' },
  { name: 'Lotina Investments', tagline: 'Investment Partners', logo: '/lotina.png' },
  { name: 'GoViral', tagline: 'Marketing Platform', logo: '/goviral.ico' },
  { name: 'Fork & Go', tagline: 'Food Delivery', logo: '/Fork and Go.png' },
  { name: 'LowKey FX', tagline: 'Trading Platforms', logo: '/logoTp.png' },
  { name: 'Meddy Furniture', tagline: 'Furniture Store', logo: '/meddy.png' },
  { name: 'Munolink', tagline: 'E-commerce', logo: '/muno.png' },
  { name: 'GripShule', tagline: 'School Management', logo: '/gripshule.png' },
]

export default function BrandCarousel() {
  const track = [...brands, ...brands]

  return (
    <div className="relative overflow-hidden py-2">
      {/* Fade edges match the paper background */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F7F3EB] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-r from-transparent to-[#F7F3EB] z-10 pointer-events-none" />

      <div
        className="flex items-center"
        style={{
          width: 'max-content',
          animation: 'marquee-scroll 55s linear infinite',
        }}
      >
        {track.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="group flex items-center gap-4 md:gap-5 px-6 md:px-8 shrink-0 cursor-default border-r border-[#0A0F1F]/8"
          >
            {/* Logo — bigger, grayscale */}
            <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Brand info */}
            <div className="flex flex-col whitespace-nowrap">
              <span className="text-sm md:text-[15px] font-medium tracking-[-0.005em] text-[#0A0F1F]">
                {brand.name}
              </span>
              <span className="text-[9px] md:text-[10px] font-mono tracking-[0.2em] uppercase text-[#0A0F1F]/40 mt-1">
                {brand.tagline}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}