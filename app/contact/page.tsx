import Link from 'next/link'
import { 
  MessageCircle, Shield, Phone, Mail, MapPin, Send,
  Lock, Headphones, Building2, Heart, Navigation,
  ChevronDown
} from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
          <img
            src="/33.png"
            alt="Jinja bridge at sunset"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
          
          {/* Network arcs */}
          <svg className="absolute right-0 top-0 w-2/3 h-full opacity-25" viewBox="0 0 600 500">
            <path d="M 0 200 Q 200 50 400 150 Q 500 200 600 100" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M 0 300 Q 250 350 450 200 Q 550 150 600 250" stroke="#60A5FA" strokeWidth="1" fill="none" strokeDasharray="8,5" />
            {[...Array(8)].map((_, i) => (
              <circle key={i} cx={50 + Math.random() * 500} cy={50 + Math.random() * 400} r="4" fill="#2563EB" opacity="0.4" />
            ))}
          </svg>

          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-50% to-white/5" />
          <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-gradient-to-r from-white/90 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <span className="text-[#2563EB] text-xs font-bold tracking-[0.3em] uppercase">
                CONTACT US
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mt-4 tracking-tight">
                Let&apos;s build something
                
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed mt-6 max-w-lg">
                We&apos;re here to help you turn ideas into powerful digital solutions. 
                Reach out to us and let&apos;s create impact together.
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <MessageCircle size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0F172A] text-sm">Quick Response</div>
                    <div className="text-xs text-gray-400">We respond within 24 hours.</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Shield size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0F172A] text-sm">Trusted Support</div>
                    <div className="text-xs text-gray-400">We&apos;re here for you every step.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Consultation Panel */}
            <div className="relative">
              <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#2563EB] rounded-2xl flex items-center justify-center">
                    <Headphones size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A]">Have a project in mind?</h3>
                    <p className="text-gray-500 text-sm">Book a free consultation and let&apos;s bring your vision to life.</p>
                  </div>
                </div>
                <button className="w-full mt-4 px-6 py-3 border-2 border-[#2563EB] text-[#2563EB] rounded-full font-semibold
                                 hover:bg-[#2563EB] hover:text-white transition-all text-sm">
                  Book a Call →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT FORM + INFO ============ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
              
              {/* Left - Contact Form */}
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-black text-[#0F172A] mb-2">Send us a message</h2>
                <p className="text-gray-500 text-sm mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-50 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-50 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-50 transition-all text-sm"
                    />
                  </div>
                  <div className="relative">
                    <select className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-50 transition-all text-sm text-gray-500 appearance-none">
                      <option>What are you interested in?</option>
                      <option>Website Development</option>
                      <option>Mobile App Development</option>
                      <option>Custom Software</option>
                      <option>Cloud Solutions</option>
                      <option>UI/UX Design</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                  <div>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-50 transition-all text-sm resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#2563EB] text-white rounded-xl font-semibold hover:bg-blue-700 
                             transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                  
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-2">
                    <Lock size={12} />
                    Your information is secure and will never be shared.
                  </div>
                </form>
              </div>

              {/* Right - Contact Info */}
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-black text-[#0F172A] mb-2">Get in touch</h2>
                <p className="text-gray-500 text-sm mb-8">Choose the way that works best for you.</p>
                
                <div className="space-y-4">
                  {/* Call Us */}
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl hover:border-[#2563EB]/20 transition-all">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-[#2563EB]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-sm">Call Us</div>
                      <div className="text-[#2563EB] font-semibold text-sm">+256 (0) 7609-68636</div>
                      <div className="text-gray-400 text-xs">Mon - Fri: 8:00 AM - 6:00 PM</div>
                    </div>
                  </div>

                  {/* Email Us */}
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl hover:border-[#2563EB]/20 transition-all">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-[#2563EB]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-sm">Email Us</div>
                      <div className="text-[#2563EB] font-semibold text-sm">hello@t3clar.com</div>
                      <div className="text-gray-400 text-xs">We&apos;ll reply within 24 hours</div>
                    </div>
                  </div>

                  {/* Visit Us */}
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl hover:border-[#2563EB]/20 transition-all">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-[#2563EB]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-sm">Visit Us</div>
                      <div className="text-[#2563EB] font-semibold text-sm">Plot 33 Lubas Road, Jinja, Uganda</div>
                      <div className="text-gray-400 text-xs">Let&apos;s meet and discuss your project</div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl hover:border-[#2563EB]/20 transition-all">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle size={20} className="text-[#2563EB]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-sm">WhatsApp</div>
                      <div className="text-[#2563EB] font-semibold text-sm">+256701168867</div>
                      <div className="text-gray-400 text-xs">Chat with us directly</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* ============ MAP + OFFICE ============ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left - Google Maps */}
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15958.819565566479!2d33.202611600000004!3d0.4320401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sug!4v1783693589646!5m2!1sen!2sug"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="T3Clar Office Location"
              />
            </div>

            {/* Right - Office Card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <h3 className="text-2xl font-black text-[#0F172A] mb-2">Our Office</h3>
              <p className="text-gray-500 text-sm mb-6">
                Located in the heart of Jinja City, we&apos;re always happy to welcome you.
              </p>
              
              <div className="w-full h-px bg-gray-100 mb-6" />
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Building2 size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0F172A] text-sm">Modern workspace</div>
                    <div className="text-gray-400 text-xs">Designed for innovation</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Heart size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0F172A] text-sm">Collaborative environment</div>
                    <div className="text-gray-400 text-xs">Where ideas come to life</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Navigation size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0F172A] text-sm">Easy access & parking</div>
                    <div className="text-gray-400 text-xs">Conveniently located for you</div>
                  </div>
                </div>
              </div>

              {/* Decorative skyline */}
              <div className="absolute bottom-0 right-0 opacity-5">
                <div className="flex gap-1 items-end">
                  <div className="w-6 h-16 bg-[#0F172A] rounded-t" />
                  <div className="w-6 h-24 bg-[#0F172A] rounded-t" />
                  <div className="w-6 h-12 bg-[#0F172A] rounded-t" />
                  <div className="w-6 h-20 bg-[#0F172A] rounded-t" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}