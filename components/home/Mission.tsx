import Link from 'next/link'

export default function Mission() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-r from-[#0F2A5C] via-[#1E40AF] to-[#0F2A5C] rounded-3xl overflow-hidden">
          
          {/* Cityscape background on right */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2">
            <img
              src="/jinja-cityscape.jpg"
              alt="Jinja night cityscape"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1E40AF]/80" />
          </div>

          {/* Digital arcs */}
          <svg className="absolute right-0 top-0 w-1/2 h-full opacity-20" viewBox="0 0 400 300">
            <path d="M 50 250 Q 150 50 350 100" stroke="#60A5FA" strokeWidth="1" fill="none" />
            <path d="M 0 200 Q 200 0 400 150" stroke="#60A5FA" strokeWidth="0.5" fill="none" strokeDasharray="4,4" />
            <circle cx="300" cy="80" r="3" fill="#60A5FA" />
            <circle cx="200" cy="120" r="2" fill="#60A5FA" />
            <circle cx="350" cy="180" r="2.5" fill="#60A5FA" />
          </svg>

          {/* Content */}
          <div className="relative z-10 p-12 md:p-16 max-w-2xl">
            <span className="text-[#60A5FA] text-xs font-bold tracking-[0.25em] uppercase">
              OUR MISSION
            </span>
            
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mt-4">
              Building Jinja&apos;s digital infrastructure for a better tomorrow.
            </h2>
            
            <p className="text-blue-100/80 leading-relaxed mt-4">
              We are not just building software, we are building the digital foundation of Jinja.
            </p>
            
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-white/80 hover:text-white font-semibold mt-4 transition-colors"
            >
              Our Vision for Jinja →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}