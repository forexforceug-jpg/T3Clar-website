import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTAStrip() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#EEF2FF] via-[#F5F3FF] to-[#E0E7FF] px-8 py-8 md:px-12 md:py-10">
          {/* Decorative orbs */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl" />

          {/* Faint grid */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-[10px] text-[#2563EB] font-bold tracking-[0.25em] uppercase mb-2">
                Ready when you are
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-[#0F172A]">
                Let&apos;s build something remarkable.
              </h3>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-[#2563EB] text-white rounded-full font-bold hover:bg-blue-700 transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 shrink-0"
            >
              Start Your Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}