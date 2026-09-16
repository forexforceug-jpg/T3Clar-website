import Link from 'next/link'

interface PageHeroProps {
  eyebrow?: string
  title: string
  highlightedWord?: string
  description?: string
  showButton?: boolean
  buttonText?: string
  buttonLink?: string
  imageSrc?: string
}

export default function PageHero({ 
  eyebrow = "T3CLAR",
  title, 
  highlightedWord,
  description,
  showButton = false,
  buttonText = "Learn More",
  buttonLink = "/contact",
  imageSrc = "/jinja-cityscape.jpg"
}: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-white">
      
      {/* Fullscreen background image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />
        <img
          src={imageSrc}
          alt="Jinja cityscape"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.5 }}
        />
        {/* Dark overlay - heavy on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-50% to-white/10" />
        <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-gradient-to-r from-white/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content - with extra top padding for navbar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-28 pb-20">
        <div className="max-w-3xl">
          
          {eyebrow && (
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.3em] uppercase">
              {eyebrow}
            </span>
          )}
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0F172A] leading-[1.05] mt-4 tracking-tight">
            {highlightedWord ? (
              title.split(highlightedWord).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="text-[#2563EB]">{highlightedWord}</span>
                  )}
                </span>
              ))
            ) : (
              title
            )}
          </h1>
          
          {description && (
            <p className="text-gray-600 text-lg leading-relaxed mt-6 max-w-xl">
              {description}
            </p>
          )}
          
          {showButton && (
            <Link
              href={buttonLink}
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#2563EB] text-white rounded-full 
                       font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
            >
              {buttonText} →
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}