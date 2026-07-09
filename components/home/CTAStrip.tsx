import Link from 'next/link'

export default function CTAStrip() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-[#EEF2FF] to-[#E0E7FF] rounded-2xl px-8 py-6 
                      flex items-center justify-end">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#2563EB] text-white rounded-full 
                     font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
          >
            Start Your Project →
          </Link>
        </div>
      </div>
    </section>
  )
}