'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          NAVBAR
          - Fixed at top, z-index 9999 (inline, un-overridable)
          - Always has visible background (never fully transparent)
          - Uses viewport-relative width, no max-width constraint
          ═══════════════════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 h-14 md:h-16 transition-colors duration-300 ${
          scrolled
            ? 'bg-[#F7F3EB]/95 backdrop-blur-md border-b border-[#0A0F1F]/10'
            : 'bg-[#F7F3EB]/70 backdrop-blur-sm border-b border-transparent'
        }`}
        style={{
          zIndex: 9999,
          width: '100vw',
          maxWidth: '100vw',
        }}
      >
        <div className="w-full h-full px-4 md:px-8 lg:px-10">
          <div className="flex items-center justify-between h-full gap-3">

            {/* ───── Logo ───── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 min-w-0"
            >
              <div className="relative w-8 h-8 md:w-9 md:h-9 shrink-0">
                <Image
                  src="/t3logo.png"
                  alt="T3Clar"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-none min-w-0">
                <span className="text-[13px] md:text-sm font-black tracking-[-0.02em] text-[#0A0F1F]">
                  T3Clar
                </span>
                <span className="text-[8px] md:text-[9px] font-mono tracking-[0.25em] uppercase text-[#0A0F1F]/50 mt-0.5">
                  Studio
                </span>
              </div>
            </Link>

            {/* ───── Desktop Nav ───── */}
            <div className="hidden lg:flex items-center gap-1 shrink-0">
              {navItems.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative px-3 py-2 text-[13px] font-medium transition-colors ${
                      active
                        ? 'text-[#0A0F1F]'
                        : 'text-[#0A0F1F]/60 hover:text-[#0A0F1F]'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-3 right-3 -bottom-px h-px bg-[#0A0F1F]"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                )
              })}

              <Link
                href="/contact"
                className="group ml-4 inline-flex items-center gap-2 text-[13px] font-medium text-[#F7F3EB] bg-[#0A0F1F] px-4 py-2 hover:bg-[#0EA5E9] transition-colors duration-300"
              >
                Let&apos;s talk
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>

            {/* ───── Mobile Hamburger ───── */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="lg:hidden inline-flex items-center justify-center
                       w-10 h-10
                       shrink-0
                       text-[#0A0F1F]
                       hover:bg-[#0A0F1F]/5
                       active:bg-[#0A0F1F]/10
                       transition-colors
                       relative"
              style={{ zIndex: 10000 }}
            >
              {mobileOpen ? (
                <X size={22} strokeWidth={2.2} />
              ) : (
                <Menu size={22} strokeWidth={2.2} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════
          MOBILE MENU
          ═══════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="lg:hidden fixed inset-0 bg-[#0A0F1F]/40"
              style={{ zIndex: 9998 }}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden fixed top-14 left-0 right-0 bg-[#F7F3EB] border-b border-[#0A0F1F]/10 shadow-[0_8px_30px_rgba(10,15,31,0.06)]"
              style={{
                zIndex: 9999,
                width: '100vw',
                maxWidth: '100vw',
              }}
            >
              <div className="w-full px-4 py-4 space-y-1">
                {navItems.map((item, i) => {
                  const active = pathname === item.href
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-baseline gap-4 px-2 py-3 text-base font-medium border-b border-[#0A0F1F]/8 last:border-b-0 ${
                        active ? 'text-[#0A0F1F]' : 'text-[#0A0F1F]/60'
                      }`}
                    >
                      <span className="text-[10px] font-mono tracking-[0.25em] text-[#0A0F1F]/30">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </Link>
                  )
                })}

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="group mt-3 inline-flex items-center justify-between w-full text-sm font-medium text-[#F7F3EB] bg-[#0A0F1F] px-5 py-3.5"
                >
                  Start a project
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}