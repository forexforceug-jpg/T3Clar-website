'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  MapPin, Mail, Phone, ArrowUpRight, ArrowRight,
} from 'lucide-react'

/* ============================================================
   DATA
   ============================================================ */

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Software Development', href: '/services' },
    { label: 'Mobile App Development', href: '/services' },
    { label: 'Web Development', href: '/services' },
    { label: 'Cloud Solutions', href: '/services' },
    { label: 'UI/UX Design', href: '/services' },
    { label: 'Technology Consulting', href: '/services' },
  ],
  ecosystem: [
    { label: 'XRide', href: '/ecosystem' },
    { label: 'ShopIt', href: '/ecosystem' },
    { label: 'Clexarly', href: '/ecosystem' },
    { label: 'Lotina Investments', href: '/ecosystem' },
  ],
}

const socials = [
  { label: 'TW', aria: 'Twitter', href: '#' },
  { label: 'LN', aria: 'LinkedIn', href: '#' },
  { label: 'GH', aria: 'GitHub', href: '#' },
  { label: 'IG', aria: 'Instagram', href: '#' },
]

/* ============================================================
   FOOTER
   ============================================================ */

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0A0F1F] border-t border-white/[0.08] overflow-hidden text-white">

      {/* Ambient glows */}
      <div
        className="absolute -bottom-40 -left-40 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, rgba(14,165,233,0.04) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(101,163,13,0.10) 0%, rgba(101,163,13,0.03) 40%, transparent 70%)',
        }}
      />

      {/* Faint dotted grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pt-16 pb-10">

        {/* ═══════════════════════════════════════════════
            TOP STRIP — coordinate / meta
           ═══════════════════════════════════════════════ */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-white/[0.08] pb-4 mb-14">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#0EA5E9]">
              T3Clar · Studio
            </span>
            <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-white/40 hidden md:inline">
              Footer · v4.0
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-white/40">
            Jinja, UG · 0.4320°N · 33.2041°E
          </span>
        </div>

        {/* ═══════════════════════════════════════════════
            MAIN GRID
           ═══════════════════════════════════════════════ */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 mb-16">

          {/* ───── Brand column ───── */}
          <div className="col-span-12 lg:col-span-4">
            {/* Logo + wordmark */}
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative w-11 h-11 shrink-0">
                <Image
                  src="/t3logo.png"
                  alt="T3Clar"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-black tracking-[-0.02em] text-white">
                  T3Clar
                </span>
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-white/50 mt-1">
                  Studio
                </span>
              </div>
            </Link>

            {/* Description */}
            <p
              className="text-sm leading-[1.8] text-white/65 mb-6 max-w-sm"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Building Jinja&apos;s digital future through innovative technology
              solutions and a connected ecosystem that empowers businesses
              across Uganda.
            </p>

            {/* Partnership note */}
            <div className="mb-6 pl-4 border-l-2 border-[#0EA5E9]/50">
              <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50 mb-2">
                Partnership
              </div>
              <p
                className="text-xs leading-[1.7] text-white/60 italic"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                In strategic partnership with{' '}
                <span className="not-italic font-semibold text-[#0EA5E9]">Lotina Investments</span>.
              </p>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.aria}
                  className="group w-9 h-9 border border-white/[0.15] flex items-center justify-center
                           text-[10px] font-mono tracking-wider text-white/60
                           hover:text-white hover:border-[#0EA5E9] hover:bg-[#0EA5E9]
                           transition-all duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* ───── Company ───── */}
          <div className="col-span-6 lg:col-span-2">
            <h4 className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50 mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#0EA5E9]" />
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ───── Services ───── */}
          <div className="col-span-6 lg:col-span-3">
            <h4 className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50 mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#0EA5E9]" />
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ───── Contact + Ecosystem ───── */}
          <div className="col-span-12 lg:col-span-3">
            <h4 className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50 mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#0EA5E9]" />
              Contact
            </h4>

            <ul className="space-y-3.5 mb-8">
              <li>
                <a
                  href="https://maps.google.com/?q=Plot+33+Lubas+Road+Jinja+Uganda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-white/65 hover:text-white transition-colors"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0 text-[#0EA5E9]" strokeWidth={1.8} />
                  <span className="leading-[1.6]">Plot 33 Lubas Road<br />Jinja · Uganda</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@t3clar.com"
                  className="group flex items-center gap-3 text-sm text-white/65 hover:text-white transition-colors"
                >
                  <Mail size={14} className="shrink-0 text-[#0EA5E9]" strokeWidth={1.8} />
                  <span>hello@t3clar.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+256701168867"
                  className="group flex items-center gap-3 text-sm text-white/65 hover:text-white transition-colors"
                >
                  <Phone size={14} className="shrink-0 text-[#0EA5E9]" strokeWidth={1.8} />
                  <span>+256 701 168 867</span>
                </a>
              </li>
            </ul>

            {/* Ecosystem mini-list */}
            <h4 className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50 mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-[#0EA5E9]" />
              Ecosystem
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {footerLinks.ecosystem.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-white/55 hover:text-[#0EA5E9] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            NEWSLETTER
           ═══════════════════════════════════════════════ */}
        <div className="border-t border-dashed border-white/[0.12] py-10">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 lg:col-span-5">
              <h4
                className="text-lg font-bold text-white tracking-[-0.01em] mb-2"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Stay updated with T3Clar.
              </h4>
              <p className="text-sm text-white/55 leading-[1.7]">
                Get the latest tech insights, platform updates and studio news.
                No spam — just signal.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 lg:justify-end"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 sm:max-w-xs bg-transparent border-0 border-b border-white/[0.2] 
                           focus:border-[#0EA5E9] focus:outline-none focus:ring-0 pb-3 pt-1
                           text-base text-white placeholder:text-white/30 
                           transition-colors"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 text-sm font-medium 
                           text-[#0A0F1F] bg-white px-6 py-3 hover:bg-[#0EA5E9] hover:text-white
                           transition-all duration-300"
                >
                  Subscribe
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
              <div className="mt-3 text-[10px] font-mono tracking-[0.25em] uppercase text-white/40 lg:text-right">
                We respect your inbox
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            BOTTOM BAR
           ═══════════════════════════════════════════════ */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40">
              © {year} T3Clar
            </span>
            <span className="w-px h-3 bg-white/20 hidden sm:block" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40">
              All rights reserved
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {[
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Cookies', href: '/cookies' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.25em] uppercase text-white/50 hover:text-[#0EA5E9] transition-colors"
              >
                {link.label}
                <ArrowUpRight
                  size={10}
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#65A30D] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50">
              Studio status · Available
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}