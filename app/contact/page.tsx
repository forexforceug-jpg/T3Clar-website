'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowUpRight, Mail, Phone, MapPin, MessageCircle,
  Clock, Lock, Send, ChevronDown,
} from 'lucide-react'

const contactMethods = [
  {
    label: 'Call Us',
    value: '+256 (0) 7609-68636',
    detail: 'Mon – Fri · 08:00 – 18:00 EAT',
    href: 'tel:+256760968636',
  },
  {
    label: 'Email Us',
    value: 'hello@t3clar.com',
    detail: 'Replies within 24 hours',
    href: 'mailto:hello@t3clar.com',
  },
  {
    label: 'WhatsApp',
    value: '+256 701 168 867',
    detail: 'Chat with us directly',
    href: 'https://wa.me/256701168867',
  },
  {
    label: 'Visit Us',
    value: 'Plot 33 Lubas Road, Jinja',
    detail: 'Uganda · East Africa',
    href: '#map',
  },
]

const enquiryTypes = [
  'Website Development',
  'Mobile App Development',
  'Custom Software',
  'Cloud Solutions',
  'UI/UX Design',
  'Technology Consulting',
  'Partnership',
  'Other',
]

const officeNotes = [
  { label: 'Workspace', value: 'Modern studio designed for engineering and design work.' },
  { label: 'Collaboration', value: 'Open floor plan where ideas get built, not just discussed.' },
  { label: 'Access', value: 'Easy access and parking in the heart of Jinja City.' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">

          <div className="editorial-strip">
            <span className="editorial-mono">§ Contact · T3Clar</span>
            <span className="editorial-mono hidden sm:inline">Response within 24 hours</span>
            <span className="editorial-mono">Jinja · Uganda</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <span className="editorial-mono mb-6 block">
                Get in Touch
              </span>
              <h1 className="editorial-title text-5xl md:text-7xl lg:text-[5rem]">
                Let&apos;s build
                <br />
                <span className="editorial-accent">something lasting.</span>
              </h1>

              <p className="editorial-body text-lg md:text-xl mt-10 max-w-lg">
                We&apos;re here to help you turn ideas into powerful digital
                solutions. Reach out and let&apos;s create impact together.
              </p>

              <div className="flex flex-wrap items-center gap-8 mt-12">
                <a href="#contact-form" className="group inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#0B1220] px-6 py-3.5 rounded-full hover:bg-[#1D4ED8] transition-all duration-300">
                  Send a message
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a href="mailto:hello@t3clar.com" className="link-underline group">
                  Or email us directly
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img src="/33.png" alt="T3Clar studio" className="w-full h-full object-cover" />
              </div>
              <div className="mt-3 flex items-start justify-between gap-4">
                <span className="editorial-mono">Fig. 01 · Studio</span>
                <span className="editorial-mono">Jinja, Uganda</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FORM + CONTACT METHODS
          ============================================================ */}
      <section id="contact-form" className="py-24 md:py-32 px-4 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto">

          <div className="editorial-strip">
            <span className="editorial-mono">§ 01 · Correspondence</span>
            <span className="editorial-mono hidden sm:inline">Choose how you&apos;d like to reach us</span>
            <span className="editorial-mono">Two ways to connect</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* ───── LEFT: FORM ───── */}
            <div className="lg:col-span-7">
              <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-slate-300/70">
                <span className="editorial-mono">Send us a message</span>
                <span className="editorial-mono">/ 05 fields</span>
              </div>

              <h2 className="editorial-title text-3xl md:text-4xl mb-6">
                Tell us about
                <br />
                <span className="editorial-accent">your project.</span>
              </h2>

              <p className="editorial-body text-base mb-10 max-w-xl">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
                Every message is read by a real person.
              </p>

              {submitted ? (
                <div className="py-12 border-y border-dashed border-slate-300/70">
                  <div className="editorial-mono mb-4">Message received</div>
                  <p className="editorial-body text-xl text-[#0B1220] max-w-md">
                    Thank you. We&apos;ll be in touch within 24 hours — usually sooner.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="link-underline group mt-8"
                  >
                    Send another message
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                  className="space-y-8 max-w-xl"
                >
                  {/* Name */}
                  <div>
                    <label className="editorial-mono mb-2 block">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-0 border-b border-slate-300/70 focus:border-[#1D4ED8] focus:outline-none focus:ring-0 pb-3 text-base text-[#0B1220] placeholder:text-slate-400 transition-colors"
                      placeholder="e.g. Jane Mukasa"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="editorial-mono mb-2 block">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-0 border-b border-slate-300/70 focus:border-[#1D4ED8] focus:outline-none focus:ring-0 pb-3 text-base text-[#0B1220] placeholder:text-slate-400 transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="editorial-mono mb-2 block">Phone <span className="text-slate-400">(optional)</span></label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-0 border-b border-slate-300/70 focus:border-[#1D4ED8] focus:outline-none focus:ring-0 pb-3 text-base text-[#0B1220] placeholder:text-slate-400 transition-colors"
                      placeholder="+256 ..."
                    />
                  </div>

                  {/* Interest */}
                  <div>
                    <label className="editorial-mono mb-2 block">What are you interested in?</label>
                    <div className="relative">
                      <select
                        required
                        className="w-full bg-transparent border-0 border-b border-slate-300/70 focus:border-[#1D4ED8] focus:outline-none focus:ring-0 pb-3 text-base text-[#0B1220] appearance-none cursor-pointer transition-colors"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a service...</option>
                        {enquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="editorial-mono mb-2 block">Tell us about your project</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-transparent border-0 border-b border-slate-300/70 focus:border-[#1D4ED8] focus:outline-none focus:ring-0 pb-3 text-base text-[#0B1220] placeholder:text-slate-400 resize-none transition-colors"
                      placeholder="What are you building, and what problem are you trying to solve?"
                    />
                  </div>

                  {/* Submit row */}
                  <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#0B1220] px-6 py-3.5 rounded-full hover:bg-[#1D4ED8] transition-all duration-300"
                    >
                      <Send size={14} />
                      Send message
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Lock size={12} />
                      <span className="editorial-mono">Encrypted · Never shared</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* ───── RIGHT: CONTACT METHODS ───── */}
            <div className="lg:col-span-5">
              <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-slate-300/70">
                <span className="editorial-mono">Or reach us directly</span>
              </div>

              <div className="divide-y divide-slate-200/70">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    className="group flex items-start gap-4 py-6 hover:bg-white -mx-3 px-3 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="editorial-mono mb-2">{method.label}</div>
                      <div className="text-base font-semibold text-[#0B1220] group-hover:text-[#1D4ED8] transition-colors mb-1">
                        {method.value}
                      </div>
                      <div className="editorial-mono">{method.detail}</div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-slate-400 group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1 shrink-0"
                    />
                  </a>
                ))}
              </div>

              {/* Hours block */}
              <div className="mt-10 pt-8 border-t border-dashed border-slate-300/70">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={14} className="text-[#1D4ED8]" strokeWidth={2} />
                  <span className="editorial-mono">Working hours</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between pb-2 border-b border-slate-200/70">
                    <span className="text-sm text-slate-600">Monday — Friday</span>
                    <span className="text-sm font-semibold text-[#0B1220]">08:00 – 18:00</span>
                  </div>
                  <div className="flex items-baseline justify-between pb-2 border-b border-slate-200/70">
                    <span className="text-sm text-slate-600">Saturday</span>
                    <span className="text-sm font-semibold text-[#0B1220]">By appointment</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-slate-600">Sunday</span>
                    <span className="text-sm font-semibold text-[#0B1220]">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MAP + OFFICE
          ============================================================ */}
      <section id="map" className="py-24 md:py-32 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">

          <div className="editorial-strip">
            <span className="editorial-mono">§ 02 · Our Studio</span>
            <span className="editorial-mono hidden sm:inline">Jinja City · Uganda</span>
            <span className="editorial-mono">Plot 33 Lubas Road</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end mb-16">
            <div className="lg:col-span-8">
              <h2 className="editorial-title text-4xl md:text-6xl lg:text-7xl">
                Visit us in
                <br />
                <span className="editorial-accent">the heart of Jinja.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-slate-300/60">
              <p className="editorial-body">
                Located in Jinja City, our studio is always open to visitors,
                partners and curious minds.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Map */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-slate-200 bg-slate-100">
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
              <div className="mt-3 flex items-start justify-between gap-4">
                <span className="editorial-mono">Fig. 02 · Map</span>
                <a
                  href="https://maps.google.com/?q=Plot+33+Lubas+Road+Jinja+Uganda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-mono hover:text-[#1D4ED8] transition-colors inline-flex items-center gap-1"
                >
                  Open in Maps
                  <ArrowUpRight size={10} />
                </a>
              </div>
            </div>

            {/* Office notes */}
            <div className="lg:col-span-5">
              <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-slate-300/70">
                <span className="editorial-mono">The Studio</span>
                <span className="editorial-mono">/ 03 notes</span>
              </div>

              <div className="space-y-8">
                {officeNotes.map((note, i) => (
                  <div key={note.label} className="pb-6 border-b border-slate-200/70 last:border-b-0">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="editorial-mono shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-lg font-bold text-[#0B1220]">{note.label}</h3>
                    </div>
                    <p className="editorial-body text-sm pl-10">
                      {note.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Address block */}
              <div className="mt-10 pt-8 border-t border-dashed border-slate-300/70">
                <div className="editorial-mono mb-3">Address</div>
                <p
                  className="text-base text-[#0B1220] leading-relaxed"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  Plot 33 Lubas Road<br />
                  Jinja City<br />
                  Uganda · East Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CLOSING CTA
          ============================================================ */}
      <section className="py-24 md:py-32 px-4 bg-[#F1F5F9]">
        <div className="max-w-6xl mx-auto">

          <div className="editorial-strip">
            <span className="editorial-mono">§ 03 · Studio Status</span>
            <span className="editorial-mono hidden sm:inline">Available for new work</span>
            <span className="editorial-mono">Est. 2021</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <h2 className="editorial-title text-4xl md:text-6xl lg:text-7xl">
                Whether you have
                <br />
                <span className="editorial-accent">a question or a project —</span>
                <br />
                we&apos;re listening.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-slate-300/60">
              <p className="editorial-body mb-8">
                Whether it&apos;s a rough idea or a detailed brief, our inbox is open.
                We read every message and reply within a business day.
              </p>
              <a href="mailto:hello@t3clar.com" className="link-underline group">
                hello@t3clar.com
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="mt-20 pt-6 border-t border-dashed border-slate-300/70 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="editorial-mono">Studio status · Available</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="editorial-mono">Jinja, Uganda</span>
              <span className="w-px h-3 bg-slate-300" />
              <span className="editorial-mono">Est. 2021</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}