import { internshipsList } from '../data/portfolioData'

function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top row */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs text-white/50 uppercase tracking-wider">
            {intern.duration}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white mt-4 tracking-tight">
          {intern.role}
        </h3>
        <p className="text-sm font-bold uppercase tracking-wider text-red-200 mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider font-bold text-white/60 mb-2">
            Skills Gained:
          </h4>
          <ul className="space-y-1.5 text-sm text-white/90 list-disc list-inside">
            {intern.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technologies */}
      <div className="border-t border-white/10 pt-4 mt-4">
        <h4 className="text-xs uppercase tracking-wider font-bold text-white/60 mb-2">
          Technologies:
        </h4>
        <div className="flex flex-wrap gap-2">
          {intern.tech.map((t, idx) => (
            <span
              key={idx}
              className="font-mono text-[11px] px-2.5 py-1 rounded bg-black/30 border border-white/10 text-white/90"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Internships() {
  if (!internshipsList || internshipsList.length === 0) return null

  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Torn-paper divider at top edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a] rotate-180 -translate-y-[1px]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative pulsing black star */}
      <svg
        className="absolute bottom-12 left-10 w-10 h-10 text-black opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Header */}
      <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black uppercase text-black tracking-tight mb-3">
          Work Experience
        </h2>
        <p className="text-red-100 font-medium text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Practical industry internships in full-stack web development, AI integration, and software engineering.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto relative z-10">
        {internshipsList.map((intern, index) => (
          <InternshipCard key={index} intern={intern} index={index} />
        ))}
      </div>
    </section>
  )
}
