import Link from 'next/link'
import { 
  Shield, Clock, Globe, Layout, Diamond, CreditCard, Code,
  Check, Plus, Hexagon, MessageCircle, FileText, Send, Rocket,
  Minus
} from 'lucide-react'

const packages = [
  {
    name: 'Basic Website',
    accent: '#2563EB',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    btnStyle: 'border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white',
    icon: Globe,
    description: 'A simple website to establish your online presence.',
    price: '$200',
    period: 'One-time',
    features: [
      'Up to 5 Pages',
      'Responsive Design',
      'Contact Form',
      'Basic SEO Setup',
      '1 Revision',
    ],
    buttonText: 'Choose Basic',
    popular: false,
  },
  {
    name: 'Standard Website',
    accent: '#10B981',
    bgLight: 'bg-green-50',
    textColor: 'text-green-600',
    borderColor: 'border-green-200',
    btnStyle: 'border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white',
    icon: Layout,
    description: 'Everything you need for a professional business website.',
    price: '$500',
    period: 'One-time',
    features: [
      'Up to 10 Pages',
      'Responsive Design',
      'CMS (Easy to Manage)',
      'Basic SEO Setup',
      'Contact Form',
      'Social Media Integration',
      '2 Revisions',
    ],
    buttonText: 'Choose Standard',
    popular: false,
  },
  {
    name: 'Premium Website',
    accent: '#2563EB',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-400',
    btnStyle: 'bg-[#2563EB] text-white hover:bg-blue-700',
    icon: Diamond,
    description: 'Advanced features for growing businesses that want more.',
    price: '$1,000',
    period: 'One-time',
    features: [
      'Up to 20 Pages',
      'Responsive Design',
      'CMS (Easy to Manage)',
      'Advanced SEO Setup',
      'Contact Form',
      'Social Media Integration',
      'Blog / News Section',
      '3 Revisions',
      'Analytics Integration',
      'Priority Support',
    ],
    buttonText: 'Choose Premium',
    popular: true,
  },
  {
    name: 'Payment Integration',
    accent: '#8B5CF6',
    bgLight: 'bg-purple-50',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    btnStyle: 'border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white',
    icon: CreditCard,
    description: 'Add secure payment capabilities to your website.',
    price: '$200',
    period: 'One-time / Add-on',
    features: [
      'Mobile Money Integration',
      'Online Payments (Card)',
      'Secure Checkout',
      'Payment Notifications',
      'Transaction Tracking',
      'Setup & Testing',
    ],
    buttonText: 'Add to Website',
    popular: false,
  },
  {
    name: 'Custom Solutions',
    accent: '#F59E0B',
    bgLight: 'bg-orange-50',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    btnStyle: 'border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white',
    icon: Code,
    description: 'Tailored solutions for your unique business needs.',
    price: "Let's Talk",
    period: 'Custom Quote',
    features: [
      'Custom Features',
      'Scalable Architecture',
      'Third-party Integrations',
      'Advanced Functionality',
      'Dedicated Support',
      'Ongoing Maintenance',
    ],
    buttonText: 'Request Quote',
    popular: false,
  },
]

const comparisonFeatures = [
  { feature: 'Responsive Design', basic: true, standard: true, premium: true, payment: '-', custom: true },
  { feature: 'CMS (Easy to Manage)', basic: '-', standard: true, premium: true, payment: '-', custom: true },
  { feature: 'SEO Setup', basic: 'Basic', standard: 'Basic', premium: 'Advanced', payment: '-', custom: 'Advanced' },
  { feature: 'Payment Integration', basic: '-', standard: '-', premium: '-', payment: true, custom: true },
  { feature: 'Revisions', basic: '1', standard: '2', premium: '3', payment: '-', custom: 'Unlimited' },
  { feature: 'Support', basic: 'Email', standard: 'Email', premium: 'Priority', payment: 'Email', custom: 'Dedicated' },
]

const processSteps = [
  { icon: MessageCircle, title: 'Consultation', description: 'We understand your goals and requirements.' },
  { icon: FileText, title: 'Planning', description: 'We plan the structure, content and features.' },
  { icon: Code, title: 'Development', description: 'Your website is designed and built with care.' },
  { icon: Send, title: 'Testing & Review', description: 'We test everything and refine the details.' },
  { icon: Rocket, title: 'Launch & Support', description: 'Your site goes live with continued support.' },
]

const faqs = [
  { question: 'How long does it take to build a website?' },
  { question: 'Can I update the website myself?' },
  { question: 'Do you provide domain and hosting?' },
  { question: 'Can I upgrade my package later?' },
  { question: 'Do you offer ongoing support?' },
  { question: 'What payment methods do you accept?' },
]

export default function PackagesPage() {
  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
          <img
            src="/Cloud Solutions.jpg"
            alt="Technology showcase"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-50% to-white/5" />
          <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-gradient-to-r from-white/90 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <span className="text-[#2563EB] text-xs font-bold tracking-[0.3em] uppercase">
                OUR PACKAGES
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-black leading-[1.05] mt-4 tracking-tight">
                Website Packages Built for <br />
                <span className="text-[#2563EB]">Every Stage</span>
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed mt-6 max-w-xl">
                Choose the perfect package for your business needs. All websites are modern, 
                responsive and built with performance in mind.
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Shield size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0F172A] text-sm">100% Secure</div>
                    <div className="text-xs text-gray-400">Secure & reliable</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Clock size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0F172A] text-sm">Quick Delivery</div>
                    <div className="text-xs text-gray-400">On-time, every time</div>
                  </div>
                </div>
              </div>
            </div>

                       {/* Right - Device Mockup */}
            <div className="relative h-[400px] bg-gradient-to-br from-[#F0F4FF] to-[#E8EEFF] rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-32 bg-white rounded-2xl shadow-xl mx-auto mb-4 flex items-center justify-center border border-gray-100 p-4">
                  <img
                    src="/t3logo.png"
                    alt="T3Clar"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="text-sm font-bold text-[#0F172A]">Solutions that drive growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRICING CARDS ============ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-white rounded-2xl border-2 p-6 flex flex-col transition-all hover:shadow-xl ${
                  pkg.popular ? 'border-[#2563EB] shadow-lg shadow-blue-500/10' : 'border-gray-100'
                }`}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-xs font-bold 
                                px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 ${pkg.bgLight} rounded-xl flex items-center justify-center mb-4`}>
                  <pkg.icon size={22} className={pkg.textColor} />
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-[#0F172A] mb-1">{pkg.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{pkg.description}</p>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-3xl font-black text-[#0F172A]">{pkg.price}</span>
                  <span className="text-gray-400 text-sm ml-1">{pkg.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check size={14} className="text-[#2563EB] mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className={`w-full py-3 rounded-full font-semibold text-sm border-2 transition-all ${pkg.btnStyle}`}>
                  {pkg.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPARE PACKAGES ============ */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#F0F4FF] to-[#E8EEFF] rounded-3xl p-8 md:p-12 overflow-x-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-8">
              Compare Packages
            </h2>
            
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-sm font-bold text-[#0F172A]">Features</th>
                  <th className="text-center py-3 text-sm font-bold text-[#2563EB]">Basic</th>
                  <th className="text-center py-3 text-sm font-bold text-[#10B981]">Standard</th>
                  <th className="text-center py-3 text-sm font-bold text-[#2563EB]">Premium</th>
                  <th className="text-center py-3 text-sm font-bold text-[#8B5CF6]">Payment Add-on</th>
                  <th className="text-center py-3 text-sm font-bold text-[#F59E0B]">Custom</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100">
                    <td className="py-3 text-sm text-gray-700 font-medium">{row.feature}</td>
                    <td className="text-center py-3">
                      {row.basic === true ? <Check size={16} className="text-[#2563EB] mx-auto" /> :
                       row.basic === '-' ? <Minus size={16} className="text-gray-300 mx-auto" /> :
                       <span className="text-xs text-gray-600">{row.basic}</span>}
                    </td>
                    <td className="text-center py-3">
                      {row.standard === true ? <Check size={16} className="text-[#10B981] mx-auto" /> :
                       row.standard === '-' ? <Minus size={16} className="text-gray-300 mx-auto" /> :
                       <span className="text-xs text-gray-600">{row.standard}</span>}
                    </td>
                    <td className="text-center py-3">
                      {row.premium === true ? <Check size={16} className="text-[#2563EB] mx-auto" /> :
                       row.premium === '-' ? <Minus size={16} className="text-gray-300 mx-auto" /> :
                       <span className="text-xs text-gray-600">{row.premium}</span>}
                    </td>
                    <td className="text-center py-3">
                      {row.payment === true ? <Check size={16} className="text-[#8B5CF6] mx-auto" /> :
                       row.payment === '-' ? <Minus size={16} className="text-gray-300 mx-auto" /> :
                       <span className="text-xs text-gray-600">{row.payment}</span>}
                    </td>
                    <td className="text-center py-3">
                      {row.custom === true ? <Check size={16} className="text-[#F59E0B] mx-auto" /> :
                       row.custom === '-' ? <Minus size={16} className="text-gray-300 mx-auto" /> :
                       <span className="text-xs text-gray-600">{row.custom}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ DEVELOPMENT PROCESS ============ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#F0F4FF] to-[#E8EEFF] rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] leading-tight">
                  Our Development Process
                </h2>
                <p className="text-gray-600 text-sm mt-3">
                  A simple, transparent process designed to deliver exceptional results.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-1 text-[#2563EB] text-sm font-semibold mt-3 hover:gap-2 transition-all">
                  Learn more about our process →
                </Link>
              </div>
              
              <div className="lg:col-span-2 flex flex-wrap gap-4">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="flex items-center gap-3">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-1">
                        <step.icon size={18} className="text-[#2563EB]" />
                      </div>
                      <div className="text-xs font-bold text-[#0F172A]">{index + 1}. {step.title}</div>
                      <div className="text-[10px] text-gray-400 max-w-[100px]">{step.description}</div>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden sm:block w-8 h-px bg-[#2563EB]/30 mt-[-20px]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-10">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="flex items-center justify-between border border-gray-200 rounded-2xl p-5 
                                               hover:border-[#2563EB]/30 cursor-pointer transition-all">
                <span className="text-sm font-medium text-[#0F172A]">{faq.question}</span>
                <Plus size={18} className="text-[#2563EB] shrink-0" />
              </div>
            ))}
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
            </svg>

            <div className="relative z-10 flex items-center gap-5">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                <Hexagon size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  Have a project in mind?
                </h2>
                <p className="text-blue-100 mt-1">
                  Let&apos;s discuss your ideas and build something amazing together.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2563EB] rounded-full 
                       font-bold hover:bg-blue-50 transition-colors shadow-lg shrink-0"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}