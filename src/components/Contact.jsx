import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    if (!form) return

    const firstName = form.querySelector('#firstName')?.value?.trim() || ''
    const lastName = form.querySelector('#lastName')?.value?.trim() || ''
    const email = form.querySelector('#email')?.value?.trim() || ''
    const message = form.querySelector('#message')?.value?.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured = Boolean(
      serviceId &&
        templateId &&
        publicKey &&
        serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
        templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
        publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'
    )

    if (!isConfigured) {
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      )}`
      window.open(mailtoUrl, '_blank')
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, form, publicKey)
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background Giant Contact Parallax Word */}
      <motion.div
        style={{ y }}
        className="absolute top-10 left-0 w-full pointer-events-none z-0 overflow-hidden"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5 whitespace-nowrap pl-6"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Foreground Form Container aligned to the right */}
      <div className="relative z-10 w-full flex justify-end">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 rounded-tl-3xl shadow-2xl"
        >
          {/* Header row */}
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-bold text-white uppercase tracking-[0.2em]">
              Reach Me
            </span>
            <a
              href={socialLinks.instagram || 'https://www.instagram.com/harshita_onkar?vrfl=d3doanpna2hpb2Fw'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-md transition-all"
            >
              <span>DM on Instagram</span>
            </a>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-12 mt-12"
          >
            {/* Input grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column: inputs */}
              <div className="flex flex-col space-y-8">
                <input
                  id="firstName"
                  name="first_name"
                  type="text"
                  placeholder="First Name *"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white focus:border-white focus:outline-none text-white transition-colors"
                />
                <input
                  id="lastName"
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white focus:border-white focus:outline-none text-white transition-colors"
                />
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  placeholder="Your Email *"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white focus:border-white focus:outline-none text-white transition-colors"
                />
              </div>

              {/* Right Column: textarea */}
              <div className="flex flex-col">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message *"
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white focus:border-white focus:outline-none text-white resize-none min-h-[140px] transition-colors"
                />
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="flex flex-col space-y-6 pt-4 border-t border-white/20">
              {/* Permission Checkbox */}
              <div className="flex items-start space-x-3 text-xs text-white/80">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-0.5 accent-black rounded cursor-pointer"
                />
                <label htmlFor="consent" className="cursor-pointer select-none">
                  I agree that my submitted information will be used to respond to my inquiry.
                </label>
              </div>

              {/* Note */}
              <p className="text-xs text-white/80 leading-relaxed">
                Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
              </p>

              {/* Direct email link */}
              <p className="text-xs text-white/80">
                Need an urgent response? Email me directly at{' '}
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="underline font-bold text-white hover:text-black transition-colors"
                >
                  {personalInfo.emails.primary}
                </a>
              </p>

              {/* Submit Button */}
              <div className="pt-2">
                {status === 'sending' && (
                  <button
                    type="button"
                    disabled
                    className="px-8 py-4 rounded-full bg-white/20 border border-white/30 text-white/70 font-bold flex items-center justify-center space-x-3 cursor-wait"
                  >
                    <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    <span>Sending...</span>
                  </button>
                )}

                {status === 'success' && (
                  <button
                    type="button"
                    disabled
                    className="px-8 py-4 rounded-full bg-emerald-600 border border-emerald-500 text-white font-bold flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span>Sent Successfully ✓</span>
                  </button>
                )}

                {status === 'error' && (
                  <button
                    type="button"
                    disabled
                    className="px-8 py-4 rounded-full bg-red-950 border border-red-800 text-red-200 font-bold flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span>Failed — Try Again</span>
                  </button>
                )}

                {status === 'idle' && (
                  <button
                    type="submit"
                    className="group px-8 py-4 rounded-full border border-white text-white font-bold hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer shadow-lg"
                  >
                    <span>Send Message</span>
                    <svg
                      className="w-4 h-4 stroke-current stroke-2 fill-none transform transition-transform group-hover:translate-x-1.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
