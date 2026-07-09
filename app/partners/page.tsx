import Link from 'next/link'
import { 
  Building2, Handshake, Globe, Code, TrendingUp, ShoppingCart, 
  Heart, GraduationCap, Car, Check, Quote, ArrowRight, Users, Sparkles
} from 'lucide-react'

const stats = [
  { icon: Building2, number: '25+', label: 'Partners' },
  { icon: Handshake, number: '10+', label: 'Industries' },
  { icon: Globe, number: '3', label: 'Countries' },
]

const industries = [
  { icon: Code, title: 'Technology', description: 'Innovating the future with cutting-edge solutions.' },
  { icon: TrendingUp, title: 'Finance', description: 'Driving financial inclusion and digital growth.' },
  { icon: ShoppingCart, title: 'Retail & E-commerce', description: 'Empowering businesses, enhancing customer experiences.' },
  { icon: Heart, title: 'Healthcare', description: 'Leveraging technology for better health outcomes.' },
  { icon: GraduationCap, title: 'Education', description: 'Building smart systems for learning and innovation.' },
  { icon: Car, title: 'Transportation', description: 'Creating intelligent mobility and connected transport solutions.' },
]

const partnerLogos = ['MTN', 'Stanbic Bank', 'Flutterwave', 'AWS', 'Huawei', 'Andela']

const benefits = [
  'Access to innovative solutions and technologies',
  'Collaborate on impactful projects',
  'Expand your market reach',
  'Grow your brand with T3Clar',
  'Dedicated partner support',
]

const opportunities = [
  { icon: Code, title: 'Technology Partnerships', description: 'Co-develop solutions and integrate technologies.' },
  { icon: Handshake, title: 'Strategic Alliances', description: 'Work together on initiatives that drive transformative change.' },
  { icon: Users, title: 'Referral Partnerships', description: 'Refer and grow together through mutual opportunities.' },
  { icon: TrendingUp, title: 'Investment Partnerships', description: 'Invest in ideas, solutions and the future.' },
]

export default function PartnersPage() {
  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
          <img
            src="/jinja-cityscape.jpg"
            alt="Jinja bridge at sunset"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.5 }}
          />
          
          {/* Network arcs */}
          <svg className="absolute right-0 top-0 w-2/3 h-full opacity-25" viewBox="0 0 600 500">
            <path d="M 0 250 Q 200 50 400 150 Q 500 200 600 100" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M 0 200 Q 150 80 300 180 Q 450 250 600 180" stroke="#60A5FA" strokeWidth="1" fill="none" strokeDasharray="8,5" />
            <path d="M 0 300 Q 250 350 500 250 Q 550 220 600 280" stroke="#2563EB" strokeWidth="0.8" fill="none" />
            {[...Array(10)].map((_, i) => (
              <circle key={i} cx={50 + Math.random() * 500} cy={50 + Math.random() * 400} r="3" fill="#2563EB" opacity="0.5" />
            ))}
          </svg>

          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-50% to-white/5" />
          <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-gradient-to-r from-white/90 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20">
          <div className="max-w-3xl">
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.3em] uppercase">
              OUR PARTNERS
            </span>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mt-4 tracking-tight">
              <span className="text-[#0F172A] block">Stronger</span>
              <span className="text-[#0F172A] block">Partnerships.</span>
              <span className="text-[#2563EB] block">Greater Impact.</span>
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mt-6 max-w-xl">
              T3Clar collaborates with forward-thinking organizations, innovators and industry leaders 
              to build technology solutions that transform businesses and communities.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#2563EB] text-white rounded-full 
                       font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
            >
              Partner With Us →
            </Link>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <stat.icon size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#2563EB]">{stat.number}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       {/* ============ STRATEGIC PARTNERSHIP - LOTINA × T3CLAR ============ */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        
        <div className="max-w-6xl mx-auto relative">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#7C3AED]/10 to-[#2563EB]/10 rounded-full text-[#7C3AED] text-xs font-bold tracking-wider uppercase mb-6">
              <Sparkles size={14} />
              Strategic Technology Partnership
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight">
              Investment meets{' '}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-transparent bg-clip-text">
                innovation.
              </span>
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
              Two organizations, one vision. Building a connected digital ecosystem for Jinja and beyond.
            </p>
          </div>

          {/* Main Partnership Card */}
          <div className="relative bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden">
            
            {/* Top gradient bar */}
            <div className="h-2 bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#2563EB]" />

            <div className="p-8 md:p-12 lg:p-16">
              
              {/* Two Organizations Side by Side */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                
                {/* Lotina Investments */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 to-transparent rounded-3xl" />
                  <div className="relative p-8 text-center">
                    {/* Image */}
                    <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6">
                      <img
                        src="/jinja-cityscape.jpg"
                        alt="Lotina Investments"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#7C3AED]/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                          <span className="text-3xl font-black text-[#7C3AED]">L</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-black text-[#7C3AED] mb-3">LOTINA INVESTMENTS</h3>
                    <p className="text-gray-500 text-sm mb-4">Strategic Growth Partner</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Investment', icon: '💰' },
                        { label: 'Expansion', icon: '📈' },
                        { label: 'Partnerships', icon: '🤝' },
                        { label: 'Growth', icon: '🚀' },
                      ].map((item) => (
                        <div key={item.label} className="bg-[#7C3AED]/5 rounded-xl p-3 text-center">
                          <span className="text-lg">{item.icon}</span>
                          <p className="text-xs font-semibold text-[#7C3AED] mt-1">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* T3Clar */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-transparent rounded-3xl" />
                  <div className="relative p-8 text-center">
                    {/* Image */}
                    <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6">
                      <img
                        src="/jinja-cityscape.jpg"
                        alt="T3Clar"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2563EB]/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                          <span className="text-3xl font-black text-[#2563EB]">T</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-black text-[#2563EB] mb-3">T3CLAR</h3>
                    <p className="text-gray-500 text-sm mb-4">Technology Innovation Partner</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Technology', icon: '💻' },
                        { label: 'Software', icon: '⚡' },
                        { label: 'Platforms', icon: '🔗' },
                        { label: 'Innovation', icon: '💡' },
                      ].map((item) => (
                        <div key={item.label} className="bg-[#2563EB]/5 rounded-xl p-3 text-center">
                          <span className="text-lg">{item.icon}</span>
                          <p className="text-xs font-semibold text-[#2563EB] mt-1">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection Visual */}
              <div className="relative py-6">
                <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-[#7C3AED]/30 via-gray-300 to-[#2563EB]/30" />
                <div className="relative flex items-center justify-center">
                  <div className="bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">
                    <span className="text-2xl font-light text-gray-400">×</span>
                  </div>
                </div>
              </div>

              {/* Down Arrow */}
              <div className="flex justify-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#7C3AED]/10 to-[#2563EB]/10 rounded-full flex items-center justify-center">
                  <ArrowRight size={20} className="text-gray-400 rotate-90" />
                </div>
              </div>

              {/* Connected Ecosystem */}
              <div className="bg-gradient-to-r from-[#F5F3FF] via-[#F8FAFC] to-[#EFF6FF] rounded-3xl p-8 md:p-10">
                <h4 className="text-center text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">
                  A Connected Digital Ecosystem
                </h4>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'XRide', color: '#2563EB', desc: 'Smart Transport' },
                    { name: 'ShopIt', color: '#10B981', desc: 'E-Commerce & Delivery' },
                    { name: 'Clexarly', color: '#8B5CF6', desc: 'Business Solutions' },
                    { name: 'Future Platforms', color: '#F59E0B', desc: 'Coming Soon' },
                  ].map((platform) => (
                    <div
                      key={platform.name}
                      className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 
                               hover:shadow-md hover:scale-105 transition-all duration-300 group cursor-default"
                    >
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-lg font-black"
                        style={{ backgroundColor: `${platform.color}15`, color: platform.color }}
                      >
                        {platform.name[0]}
                      </div>
                      <h5 className="font-bold text-gray-800 text-sm">{platform.name}</h5>
                      <p className="text-xs text-gray-400 mt-1">{platform.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-center text-gray-500 text-sm mt-8 max-w-xl mx-auto leading-relaxed">
                  Together, Lotina Investments and T3Clar power a growing network of interconnected 
                  digital platforms, combining strategic investment with cutting-edge technology 
                  to build the future of Jinja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============ INDUSTRIES SECTION ============ */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#F0F4FF] to-[#E8EEFF] rounded-3xl p-10 md:p-16">
            <div className="text-center mb-12">
              <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                COLLABORATING ACROSS INDUSTRIES
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mt-4">
                Building solutions together across{' '}
                <span className="text-[#2563EB]">multiple sectors.</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
              {industries.map((industry) => (
                <div key={industry.title} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                    <industry.icon size={24} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0F172A] mb-2">{industry.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PARTNER LOGOS ============ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
              OUR PARTNERS
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mt-4">
              Trusted by leading organizations
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {partnerLogos.map((logo) => (
              <div key={logo} className="h-24 bg-white border border-gray-100 rounded-2xl flex items-center justify-center
                                         hover:border-[#2563EB]/30 hover:shadow-lg transition-all">
                <span className="text-gray-400 font-bold text-lg">{logo}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#2563EB] text-[#2563EB] 
                               rounded-full font-semibold hover:bg-[#2563EB] hover:text-white transition-all">
              View All Partners →
            </button>
          </div>
        </div>
      </section>

      {/* ============ WHY PARTNER + OPPORTUNITIES ============ */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            
            {/* Left - Why Partner */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#F0F4FF] to-[#E8EEFF] rounded-3xl p-8 md:p-10">
              <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                WHY PARTNER WITH T3CLAR
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] leading-tight mt-4">
                Growing together. Succeeding{' '}
                <span className="text-[#2563EB]">together.</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                We believe in long-term relationships built on trust, innovation and shared success.
              </p>

              <div className="space-y-3 mt-6">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#2563EB]" />
                    </div>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Opportunities */}
            <div className="lg:col-span-3 relative rounded-3xl overflow-hidden">
              <img
                src="/jinja-cityscape.jpg"
                alt="Business partnership"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/90 via-[#0F172A]/80 to-[#0F172A]/70" />
              
              <div className="relative z-10 p-8 md:p-10">
                <span className="text-white/70 text-xs font-bold tracking-[0.25em] uppercase">
                  PARTNERSHIP OPPORTUNITIES
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mt-4">
                  Let&apos;s build the future of Jinja{' '}
                  <span className="text-[#60A5FA]">together.</span>
                </h2>

                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  {opportunities.map((opp) => (
                    <div key={opp.title} className="border border-white/10 rounded-2xl p-5">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-3">
                        <opp.icon size={18} className="text-[#60A5FA]" />
                      </div>
                      <h3 className="text-white font-bold text-sm mb-1">{opp.title}</h3>
                      <p className="text-white/60 text-xs">{opp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#F0F4FF] to-[#E8EEFF] rounded-3xl p-10 md:p-14">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Quote size={48} className="text-[#2563EB]/30 shrink-0" />
              <p className="text-gray-700 text-lg leading-relaxed flex-1 italic">
                &ldquo;T3Clar is a valuable technology partner. Their innovation, reliability and 
                commitment to excellence make collaboration easy and impactful.&rdquo;
              </p>
              <div className="flex items-center gap-4 shrink-0">
                <div className="w-px h-12 bg-gray-300" />
                <div>
                  <div className="font-bold text-[#0F172A]">Stanbic Bank</div>
                  <div className="text-sm text-gray-500">Patrick M.</div>
                  <div className="text-xs text-gray-400">Head of Digital, Stanbic Bank Uganda</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#0F172A] via-[#1E3A5F] to-[#2563EB] rounded-3xl p-10 md:p-16 
                        flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 200">
              <path d="M 0 100 Q 200 20 400 80 Q 600 130 800 60" stroke="white" strokeWidth="1" fill="none" />
              <path d="M 0 150 Q 300 180 500 100 Q 700 40 800 120" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="4,4" />
            </svg>

            <div className="relative z-10 flex items-center gap-5">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                <Handshake size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  Ready to partner with us?
                </h2>
                <p className="text-blue-100 mt-1">
                  Let&apos;s connect, collaborate and create impact.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2563EB] rounded-full 
                       font-bold hover:bg-blue-50 transition-colors shadow-lg shrink-0"
            >
              Become a Partner →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}