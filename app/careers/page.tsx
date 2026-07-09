import Link from 'next/link'
import { 
  Users, Rocket, Lightbulb, Handshake, MapPin, Search, 
  ChevronDown, Play, Quote, TrendingUp, Heart, GraduationCap, 
  Shield, Mail, Clock, Briefcase
} from 'lucide-react'

const workplaceHighlights = [
  { icon: Users, number: '50+', label: 'Talented People' },
  { icon: Rocket, number: '', label: 'Growth Opportunities' },
  { icon: Lightbulb, number: '', label: 'Innovative Environment' },
  { icon: Handshake, number: '', label: 'Impact Driven Work' },
  { icon: MapPin, number: '', label: 'Jinja, Uganda', sublabel: 'Our Home' },
]

const departments = [
  { name: 'All Departments', count: 12, active: true },
  { name: 'Engineering', count: 5, active: false },
  { name: 'Product', count: 2, active: false },
  { name: 'Design', count: 2, active: false },
  { name: 'Business', count: 2, active: false },
  { name: 'Marketing', count: 1, active: false },
]

const jobs = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    description: 'Build scalable web applications and platforms that power our ecosystem.',
    location: 'Jinja, Uganda',
    type: 'Full-time',
  },
  {
    title: 'Mobile App Developer (Flutter)',
    department: 'Engineering',
    description: 'Develop high-performance mobile apps for Android and iOS platforms.',
    location: 'Jinja, Uganda',
    type: 'Full-time',
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    description: 'Create meaningful user experiences that delight and engage users.',
    location: 'Jinja, Uganda',
    type: 'Full-time',
  },
  {
    title: 'Product Manager',
    department: 'Product',
    description: 'Lead product strategy and build solutions that solve real user problems.',
    location: 'Jinja, Uganda',
    type: 'Full-time',
  },
]

const benefits = [
  { icon: TrendingUp, title: 'Career Growth', description: 'Opportunity to learn, grow and advance your career.' },
  { icon: Users, title: 'Collaborative Culture', description: 'Work with amazing people in a supportive environment.' },
  { icon: Heart, title: 'Work-Life Balance', description: 'We value your well-being and personal time.' },
  { icon: GraduationCap, title: 'Learning & Development', description: 'Continuous learning and upskilling opportunities.' },
  { icon: Shield, title: 'Meaningful Impact', description: 'Build solutions that make a real difference.' },
]

export default function CareersPage() {
  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
          <img
            src="/jinja-cityscape.jpg"
            alt="T3Clar modern office"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-50% to-white/5" />
          <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-gradient-to-r from-white/90 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20">
          <div className="max-w-3xl">
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.3em] uppercase">
              CAREERS AT T3CLAR
            </span>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mt-4 tracking-tight">
              <span className="text-[#0F172A] block">Build the future.</span>
              <span className="text-[#2563EB] block">Grow together.</span>
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mt-6 max-w-xl">
              At T3Clar, we&apos;re more than a team—we&apos;re a community of innovators, 
              problem-solvers and dreamers building technology that transforms lives in Jinja and beyond.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                href="#open-positions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563EB] text-white rounded-full 
                         font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
              >
                Explore Opportunities →
              </Link>
              
              <button className="inline-flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center
                             group-hover:border-[#2563EB] transition-colors">
                  <Play size={16} className="fill-gray-700 group-hover:fill-[#2563EB] ml-0.5" />
                </div>
                <span className="font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                  Life at T3Clar
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WORKPLACE HIGHLIGHTS ============ */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#F0F4FF] to-[#E8EEFF] rounded-3xl px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {workplaceHighlights.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="w-12 h-12 mx-auto bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm">
                    <item.icon size={20} className="text-[#2563EB]" />
                  </div>
                  {item.number && (
                    <div className="text-2xl font-black text-[#2563EB]">{item.number}</div>
                  )}
                  <div className="text-sm font-bold text-[#0F172A]">{item.label}</div>
                  {item.sublabel && (
                    <div className="text-xs text-gray-400">{item.sublabel}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ OPEN POSITIONS ============ */}
      <section id="open-positions" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Left Sidebar - Filters */}
            <div className="space-y-6">
              <div>
                <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                  OPEN POSITIONS
                </span>
                <h2 className="text-3xl font-black text-[#0F172A] leading-tight mt-2">
                  Find your next opportunity.
                </h2>
              </div>

              {/* Departments Filter */}
              <div className="bg-[#F8FAFC] rounded-2xl p-5">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">DEPARTMENTS</h3>
                {departments.map((dept) => (
                  <button
                    key={dept.name}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm mb-1 transition-colors ${
                      dept.active 
                        ? 'bg-blue-50 text-[#2563EB] font-semibold' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {dept.name}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      dept.active ? 'bg-[#2563EB] text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {dept.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Locations Filter */}
              <div className="bg-[#F8FAFC] rounded-2xl p-5">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">LOCATIONS</h3>
                <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm bg-blue-50 text-[#2563EB] font-semibold mb-1">
                  All Locations
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#2563EB] text-white">12</span>
                </button>
                <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors">
                  Jinja, Uganda
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-500">12</span>
                </button>
              </div>
            </div>

            {/* Right - Job Listings */}
            <div className="lg:col-span-3">
              {/* Search Bar */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="flex-1 relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search roles, keywords..."
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-50 transition-all text-sm"
                  />
                </div>
                <button className="px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-600 flex items-center gap-2 hover:border-gray-300">
                  All Departments <ChevronDown size={16} />
                </button>
                <button className="px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-600 flex items-center gap-2 hover:border-gray-300">
                  All Locations <ChevronDown size={16} />
                </button>
                <button className="text-sm text-[#2563EB] font-medium hover:underline">Reset</button>
              </div>

              {/* Job Cards */}
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div key={job.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#2563EB]/20 
                                                 hover:shadow-lg transition-all flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#0F172A]">{job.title}</h3>
                      <span className="text-xs font-medium text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-full">
                        {job.department}
                      </span>
                      <p className="text-gray-500 text-sm mt-2">{job.description}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 shrink-0">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="px-5 py-2.5 border-2 border-[#2563EB] text-[#2563EB] rounded-full text-sm font-semibold 
                               hover:bg-[#2563EB] hover:text-white transition-all shrink-0"
                    >
                      View Details →
                    </Link>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <button className="px-8 py-3 border-2 border-gray-200 text-gray-600 rounded-full font-semibold 
                                 hover:border-[#2563EB] hover:text-[#2563EB] transition-all">
                  View All Open Positions →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY JOIN T3CLAR ============ */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
              WHY JOIN T3CLAR?
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mt-4">
              More than a job. A place to{' '}
              <span className="text-[#2563EB]">thrive.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
                <div className="w-14 h-14 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                  <benefit.icon size={22} className="text-[#2563EB]" />
                </div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LIFE AT T3CLAR ============ */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#F0F4FF] to-[#E8EEFF] rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              
              {/* Left - Text */}
              <div>
                <span className="text-[#2563EB] text-xs font-bold tracking-[0.25em] uppercase">
                  LIFE AT T3CLAR
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] leading-tight mt-4">
                  Great people. Greater{' '}
                  <span className="text-[#2563EB]">purpose.</span>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mt-4">
                  We celebrate diversity, encourage new ideas and empower everyone to do their best work.
                </p>
                <Link href="/about" className="inline-flex items-center gap-1 text-[#2563EB] text-sm font-semibold mt-4 hover:gap-2 transition-all">
                  See how we work →
                </Link>
              </div>

              {/* Center - Photo */}
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="/jinja-cityscape.jpg"
                  alt="T3Clar team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-black text-lg tracking-wider">
                  INNOVATE COLLABORATE IMPACT
                </div>
              </div>

              {/* Right - Testimonial */}
              <div className="relative">
                <Quote size={36} className="text-[#2563EB]/20 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed italic pl-6">
                  &ldquo;T3Clar gives me the freedom to innovate and the support to grow. 
                  Every day, I&apos;m proud of the impact we create.&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-4 pl-6">
                  <div className="w-10 h-10 bg-gray-300 rounded-full" />
                  <div>
                    <div className="font-bold text-[#0F172A] text-sm">Anita N.</div>
                    <div className="text-xs text-gray-500">Product Designer</div>
                  </div>
                </div>
                {/* Carousel dots */}
                <div className="flex gap-2 mt-4 pl-6">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
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
            
            {/* Network lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 200">
              <path d="M 0 100 Q 200 20 400 80 Q 600 130 800 60" stroke="white" strokeWidth="1" fill="none" />
            </svg>

            <div className="relative z-10 flex items-center gap-5">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                <Mail size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  Don&apos;t see the right role?
                </h2>
                <p className="text-blue-100 mt-1">
                  Send us your resume and let&apos;s stay in touch.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2563EB] rounded-full 
                       font-bold hover:bg-blue-50 transition-colors shadow-lg shrink-0"
            >
              Send Your CV →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}