import { useRef, useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroVideo from '../assets/hero/hero.mp4'
import heroPoster from '../assets/about/profile.png'
import { heroContent, socialLinks } from '../data/portfolioData'

export default function Hero() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' })

    const handleLoad = () => {
      AOS.refresh()
    }

    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  const toggleVideo = (e) => {
    e.stopPropagation()
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-5rem)] md:h-[calc(100vh-5rem)] overflow-hidden bg-[#E9CCBC] flex items-center"
    >
      {/* Full-bleed background hero video / portrait with natural consistent colors */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-[50%_top] sm:object-[60%_center] md:object-[72%_center] lg:object-[76%_center] z-0"
        playsInline
        poster={heroPoster}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Floating Social Bar (Desktop) */}
      <div className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 mix-blend-difference flex-col space-y-5 items-center">
        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-white hover:scale-125 transition-all duration-200"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
        )}
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-white hover:scale-125 transition-all duration-200"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        )}
        <a
          href={socialLinks.instagram || 'https://instagram.com'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="text-white hover:scale-125 transition-all duration-200"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>

      {/* Main Hero Content: Shifted to Left */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 flex items-center min-h-[calc(100vh-5rem)] md:min-h-0 md:h-full">
        {/* Constrained Left Container to prevent overlapping the subject area */}
        <div className="w-full sm:max-w-sm md:max-w-[360px] lg:max-w-[420px] xl:max-w-[460px] text-left pt-64 sm:pt-72 md:pt-0">
          <div className="bg-[#E9CCBC]/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-5 sm:p-6 md:p-0 rounded-2xl md:rounded-none border border-black/10 md:border-none shadow-lg md:shadow-none">
            {/* Mobile Social Links */}
            <div data-aos="fade-up" className="lg:hidden flex space-x-4 mb-3">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-black/70 hover:text-black transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-black/70 hover:text-black transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
              <a
                href={socialLinks.instagram || 'https://instagram.com'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="text-black/70 hover:text-black transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            {/* Line 1: Main Greeting */}
            <h2
              data-aos="fade-up"
              className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight mb-2"
            >
              Hi, I'm Harshita Gururaj Onkar
            </h2>

            {/* Lines 2 & 3: Developer Title on TWO separate lines */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] mb-4"
            >
              <span className="block">Python Full Stack</span>
              <span className="block">Developer</span>
            </h1>

            {/* Subtitle */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-black/85 text-xs sm:text-sm md:text-base font-medium leading-relaxed mb-6 sm:mb-8"
            >
              {heroContent.subtitle}
            </p>

            {/* Action Buttons Row */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-wrap gap-2.5 sm:gap-3 items-center"
            >
              {/* View My Work */}
              <a
                href={heroContent.ctaPrimary.href}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black text-white font-bold text-xs sm:text-sm hover:bg-neutral-800 hover:scale-105 transition-all duration-200 shadow-md cursor-pointer"
              >
                {heroContent.ctaPrimary.text}
              </a>

              {/* Contact Me */}
              <a
                href={heroContent.ctaSecondary.href}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-transparent border-2 border-black text-black font-bold text-xs sm:text-sm hover:bg-black hover:text-white transition-all duration-200 cursor-pointer"
              >
                {heroContent.ctaSecondary.text}
              </a>

              {/* Download Resume */}
              {heroContent.ctaResume && heroContent.ctaResume.href && (
                <a
                  href={heroContent.ctaResume.href}
                  download
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black/5 hover:bg-black/10 border border-black/30 text-black font-semibold text-xs sm:text-sm hover:border-black transition-all duration-200 flex items-center space-x-1.5 cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 fill-none stroke-currentColor stroke-2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>{heroContent.ctaResume.text}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Play Reel Control (Bottom Right) */}
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="absolute bottom-6 sm:bottom-8 right-6 md:right-10 z-20 flex flex-col items-center cursor-pointer group"
        onClick={toggleVideo}
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-black/40 bg-white/70 backdrop-blur-md flex items-center justify-center hover:scale-110 hover:bg-black hover:border-black transition-all duration-300 shadow-md">
          {isPlaying ? (
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 fill-black group-hover:fill-white transition-colors"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 fill-black group-hover:fill-white translate-x-0.5 transition-colors"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
        <span className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-widest text-black uppercase mt-1.5 text-center select-none group-hover:text-black transition-colors">
          {isPlaying ? 'Pause Reel' : 'Play Reel'}
        </span>
      </div>

      {/* Bouncing Down Arrow Indicator */}
      <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none text-black/60 z-20">
        <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
