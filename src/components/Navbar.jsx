import { useState } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio&body=Hello ${personalInfo.name},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`

  return (
    <header className="sticky top-0 left-0 w-full z-50 py-3 sm:py-4 px-4 sm:px-6 pointer-events-none">
      <nav className="pointer-events-auto max-w-4xl lg:max-w-5xl mx-auto bg-[#000000] border border-white/15 rounded-full shadow-2xl px-5 sm:px-8 h-14 sm:h-16 flex items-center justify-between transition-all duration-300">
        {/* Brand Logo */}
        <a
          href="#"
          className="text-white text-lg sm:text-xl font-black tracking-tight hover:opacity-90 transition-opacity"
        >
          {personalInfo.brandName}
          <span className="text-[#ff2a2a]">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative text-white/80 hover:text-white font-medium text-xs sm:text-sm tracking-wide transition-colors py-1"
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop Hire Me CTA */}
        <div className="hidden md:block">
          <a
            href={hireMeMailto}
            className="px-5 py-2 rounded-full bg-white text-black font-bold text-xs sm:text-sm hover:bg-neutral-200 transition-all duration-200 shadow-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-1.5"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown Panel */}
      <div
        className={`md:hidden pointer-events-auto max-w-4xl mx-auto mt-2 bg-[#000000] border border-white/15 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none border-transparent'
        }`}
      >
        <div className="px-6 py-5 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white font-semibold text-base border-b border-white/10 pb-2 hover:text-white/70 transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href={hireMeMailto}
            onClick={() => setIsOpen(false)}
            className="w-full block text-center py-2.5 bg-white text-black font-bold text-sm rounded-full shadow hover:bg-neutral-200 transition-colors mt-2"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  )
}
