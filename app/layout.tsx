import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "T3Clar - Building Jinja's Digital Future",
  description: 'Enterprise-grade technology solutions for businesses in Jinja and beyond.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-clip">
      <body className={`${inter.variable} font-sans bg-white text-gray-900 antialiased overflow-x-clip`}>
        <Navbar />
        {/* main has NO positioning or z-index classes */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}