'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    
    setScrolled(false)
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-md' 
        : 'bg-transparent border-b border-transparent shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/t3logo.png"
              alt="T3Clar Logo"
              width={65}
              height={65}
              className="rounded-lg"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === item.href
                    ? 'text-[#2563EB] bg-blue-50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="h-0.5 bg-[#2563EB] mt-0.5 rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2 bg-[#2563EB] text-white rounded-full text-sm font-semibold 
                       hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
            >
              Let&apos;s Talk →
            </Link>
          </div>

          {/* Mobile toggle */}
          <button 
            className="lg:hidden p-2 rounded-lg text-gray-700" 
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white py-4 space-y-1 rounded-b-2xl shadow-lg border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                  pathname === item.href
                    ? 'text-[#2563EB] bg-blue-50'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center mt-2 mx-4 px-5 py-2.5 bg-[#2563EB] text-white rounded-full text-sm font-semibold"
            >
              Let&apos;s Talk
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}