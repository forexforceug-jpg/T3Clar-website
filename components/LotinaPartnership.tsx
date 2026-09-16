import Link from 'next/link'

export default function LotinaPartnership({ variant = 'default' }: { variant?: 'default' | 'compact' | 'large' }) {
  
  // Compact - for nav/footer inline use
  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2 text-sm">
        <span className="text-[#7C3AED] font-bold">LOTINA INVESTMENTS</span>
        <span className="text-gray-400 text-xs">×</span>
        <span className="text-[#2563EB] font-bold">T3CLAR</span>
      </div>
    )
  }

  // Large - for hero/featured sections
  if (variant === 'large') {
    return (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/5 via-transparent to-[#2563EB]/5 rounded-3xl" />
        
        <div className="relative text-center p-8 md:p-12">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#7C3AED]/10 to-[#2563EB]/10 
                         rounded-full text-[#7C3AED] text-xs font-bold tracking-wider uppercase mb-6">
            ✦ Strategic Partnership
          </span>

          {/* Two logos side by side */}
          <div className="flex items-center justify-center gap-6 md:gap-10 mb-8">
            {/* Lotina */}
            <div className="text-center">
              <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-3">
                <div className="absolute inset-0 bg-[#7C3AED]/10 rounded-2xl rotate-6" />
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-3xl md:text-4xl font-black text-[#7C3AED]">L</span>
                  </div>
                </div>
              </div>
              <span className="text-sm md:text-base font-black text-[#7C3AED]">LOTINA</span>
              <p className="text-xs text-gray-400 mt-1">Strategic Growth</p>
            </div>

            {/* × */}
            <div className="text-3xl md:text-4xl font-light text-gray-300">×</div>

            {/* T3Clar */}
            <div className="text-center">
              <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-3">
                <div className="absolute inset-0 bg-[#2563EB]/10 rounded-2xl -rotate-6" />
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-black text-[#2563EB]">T</span>
                </div>
              </div>
              <span className="text-sm md:text-base font-black text-[#2563EB]">T3CLAR</span>
              <p className="text-xs text-gray-400 mt-1">Technology Innovation</p>
            </div>
          </div>

          {/* Heading */}
          <div className="flex items-center justify-center gap-4 text-xl md:text-3xl font-black mb-4">
            <span className="text-[#7C3AED]">LOTINA INVESTMENTS</span>
            <span className="text-gray-300">×</span>
            <span className="text-[#2563EB]">T3CLAR</span>
          </div>

          <p className="text-gray-600 text-base md:text-lg font-medium">
            Investment meets innovation.
          </p>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Together, we are building a connected ecosystem of businesses, platforms, and digital 
            infrastructure designed for long-term growth.
          </p>
        </div>
      </div>
    )
  }

  // Default - for sidebar/section headers
  return (
    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#F5F3FF] to-[#EFF6FF] rounded-2xl">
      {/* Lotina */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center">
          <span className="text-lg font-black text-[#7C3AED]">L</span>
        </div>
        <div>
          <span className="text-[#7C3AED] font-bold text-sm">LOTINA INVESTMENTS</span>
          <div className="text-[10px] text-gray-400">Investment · Growth · Partnerships</div>
        </div>
      </div>

      {/* × */}
      <span className="text-xl text-gray-300 font-light">×</span>

      {/* T3Clar */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
          <span className="text-lg font-black text-[#2563EB]">T</span>
        </div>
        <div>
          <span className="text-[#2563EB] font-bold text-sm">T3CLAR</span>
          <div className="text-[10px] text-gray-400">Technology · Software · Innovation</div>
        </div>
      </div>
    </div>
  )
}