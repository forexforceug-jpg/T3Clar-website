import Link from 'next/link'

const footerLinks = {
  company: ['About Us', 'Our Vision', 'Careers', 'Blog', 'Contact'],
  services: ['Software Development', 'Mobile App Development', 'Web Development', 'Cloud Solutions', 'UI/UX Design', 'IT Consulting'],
  ecosystem: ['XRide', 'ShopIt', 'Clexarly', 'Lotina Investments'],
  resources: ['Projects', 'Packages', 'Partners', 'News & Updates', 'FAQs'],
}

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center
                           shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-none">T3Clar</span>
                <span className="block text-xs text-gray-400 tracking-widest uppercase mt-0.5">
                  Digital Solutions
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-3 max-w-sm">
              Building Jinja&apos;s digital future through innovative technology solutions 
              and a connected ecosystem that empowers businesses across Uganda.
            </p>

            {/* Lotina Partnership */}
            <p className="text-gray-500 text-xs leading-relaxed mb-6 max-w-sm border-l-2 border-[#7C3AED]/50 pl-3 italic">
              Building a connected technology ecosystem in strategic partnership with{' '}
              <span className="text-[#A78BFA] font-semibold not-italic">Lotina Investments</span>.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { label: 'TW', href: '#' },
                { label: 'LN', href: '#' },
                { label: 'GH', href: '#' },
                { label: 'IG', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center
                           text-gray-400 text-xs font-semibold hover:text-white hover:border-[#2563EB]/50 
                           hover:bg-[#2563EB]/10 transition-all duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <Link
                    href="/services"
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Ecosystem
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.ecosystem.map((link) => (
                <li key={link}>
                  <Link
                    href="/ecosystem"
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Resources */}
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 mt-6">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <span className="mt-0.5">📍</span>
                <span>Jinja, Uganda</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span>📧</span>
                <a href="mailto:hello@t3clar.com" className="hover:text-white transition-colors">
                  hello@t3clar.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span>📞</span>
                <a href="tel:+256700123456" className="hover:text-white transition-colors">
                  +256 700 123456
                </a>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-5 pt-5 border-t border-white/[0.05]">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">
                Hours
              </h4>
              <p className="text-gray-400 text-xs">Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-400 text-xs">Sat: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-white/[0.05]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold text-sm mb-1">Stay Updated</h4>
              <p className="text-gray-500 text-xs">Get the latest tech insights and updates from T3Clar.</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-64 px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] 
                         rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none 
                         focus:border-[#2563EB]/50 transition-colors"
              />
              <button className="px-6 py-2.5 bg-[#2563EB] text-white rounded-lg text-sm font-semibold
                               hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center 
                      justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} T3Clar. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <Link
                key={link}
                href="#"
                className="text-gray-500 text-xs hover:text-white transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}