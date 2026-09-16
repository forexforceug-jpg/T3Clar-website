import Link from 'next/link'

export default function Mission() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-[#0A0F1E] via-[#1E3A5F] to-[#2563EB] rounded-[40px] overflow-hidden">
          {/* Cityscape */}
          <div className="absolute right-0 top-0 bottom-0 w-2/3">
            <img
              src="/jinja-cityscape.jpg"
              alt="Jinja cityscape"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0A0F1E]/60 to-[#0A0F1E]" />
          </div>

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Animated arcs */}
          <svg className="absolute right-0 top-0 w-2/3 h-full opacity-30 pointer-events-none" viewBox="0 0 600 400">
            <path d="M 0 350 Q 200 50 600 150" stroke="#60A5FA" strokeWidth="1" fill="none">
              <animate attributeName="stroke-dashoffset" from="0" to="1000" dur="12s" repeatCount="indefinite" />
              <animate attributeName="stroke-dasharray" values="0 1000;1000 0" dur="12s" repeatCount="indefinite" />
            </path>
            <path d="M 0 250 Q 300 0 600 200" stroke="#60A5FA" strokeWidth="0.5" fill="none" strokeDasharray="4,6" />
            <circle cx="450" cy="120" r="3" fill="#60A5FA">
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="300" cy="180" r="2" fill="#60A5FA">
              <animate attributeName="r" values="2;4;2" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="520" cy="250" r="2.5" fill="#60A5FA">
              <animate attributeName="r" values="2.5;4.5;2.5" dur="3s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* Content */}
          <div className="relative z-10 p-10 md:p-16 lg:p-20 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-blue-300 text-xs font-bold tracking-[0.25em] uppercase">
              <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" />
              Our Mission
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] mt-5">
              Building Jinja&apos;s digital infrastructure for a better tomorrow.
            </h2>

            <p className="text-blue-100/70 leading-relaxed mt-5 text-lg">
              We are not just building software — we are building the digital foundation of Jinja.
            </p>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 mt-8 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/15 hover:border-white/40 transition-all duration-300"
            >
              Our Vision for Jinja
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            {/* Bottom metric row */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10">
              {[
                { value: '5', label: 'Platforms' },
                { value: '3', label: 'Countries' },
                { value: '∞', label: 'Ambition' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-white">{s.value}</div>
                  <div className="text-[10px] text-white/40 mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}