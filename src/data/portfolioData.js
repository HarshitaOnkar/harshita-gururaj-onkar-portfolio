// ============================================================
// portfolioData.js — Portfolio Data Source
// Controls all text, links, projects, and information on the site.
// ============================================================

export const personalInfo = {
  name: "Harshita Gururaj Onkar",
  firstName: "Harshita Gururaj Onkar",
  brandName: "Harshita Gururaj Onkar", // shown in the preloader, navbar and footer
  title: "Python Full Stack Developer",
  location: "Bengaluru, India",
  phone: "",
  emails: {
    primary: "onkarharshita@gmail.com",
    secondary: "",
  },
  summary: "I am a Computer Science Engineering graduate with a strong interest in full-stack web development and building practical, user-focused applications.",
  resumeUrl: "/Harshita_CV.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/HarshitaOnkar",
  linkedin: "https://www.linkedin.com/in/harshita-onkar-fullstackdeveloper/",
  instagram: "https://www.instagram.com/harshita_onkar?vrfl=d3doanpna2hpb2Fw",
};

export const heroContent = {
  greeting: "Hi, I'm Harshita Gururaj Onkar",
  titleHighlight: "Python Full Stack Developer",
  subtitle: "Computer Science graduate passionate about crafting robust full-stack applications with Python, Django, React, and modern web technologies.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:onkarharshita@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Harshita_CV.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML)
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Harshita Gururaj Onkar</span>, a passionate Python Full Stack Developer based in Bengaluru, India. I specialize in building practical, user-focused web applications with clean architecture and intuitive interfaces, sharpening my skills through the placement training program at TAP Academy. Driven by curiosity and discipline, I love solving real-world challenges and transforming ideas into impactful digital solutions.`,
  techStack: ["Python", "Django", "JavaScript", "React", "MySQL", "Tailwind CSS"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured approach blending thoughtful architecture with user-centric development.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyze requirements, map out data models, and understand end-user needs to establish a solid foundation.",
    },
    {
      number: "02",
      title: "Design",
      text: "Architect clean database schemas and design responsive, intuitive user interfaces for optimal usability.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Implement robust backend logic with Python and Django, paired with modern, dynamic frontend components.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Test thoroughly, optimize performance, and deploy scalable web applications to reliable cloud platforms.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Python" }, { name: "JavaScript" }],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "React" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }, { name: "MongoDB" }],
    },
    {
      title: "Tools",
      skills: [{ name: "Git" }, { name: "GitHub" }, { name: "VS Code" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "CySeck Finishing School – Cohort 2",
    description: "Participated in a Government of Karnataka initiative focused on cybersecurity learning and skill development.",
    role: "Cohort Participant",
    badge: "Cybersecurity",
  },
  {
    title: "Hackathon – Solapur",
    description: "Participated in a competitive hackathon and successfully qualified for the first round, demonstrating problem-solving and technical agility.",
    role: "Participant",
    badge: "Hackathon",
  },
];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Software Development Intern",
    duration: "September 2026 – Ongoing",
    skills: ["Programming", "Problem Solving", "Full Stack Development", "Software Engineering"],
    tech: ["Python", "Django", "Web Technologies", "SQL"],
  },
  {
    organization: "KodNest",
    role: "Python Full Stack Developer Intern",
    duration: "February 2026 – August 2026",
    skills: ["Full Stack Development with AI", "Database Management", "Frontend Development"],
    tech: ["Python", "SQL", "HTML & CSS", "JavaScript"],
  },
];

export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Thrive in collaborative environments, effectively coordinating with peers to deliver cohesive software solutions.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Break down complex coding challenges into structured, manageable components to build reliable solutions.",
  },
  {
    name: "Leadership",
    icon: "🚀",
    desc: "Take initiative in project planning and guide team efforts toward achieving milestones with excellence.",
  },
  {
    name: "Time Management",
    icon: "⏱️",
    desc: "Prioritize tasks effectively to meet milestones and maintain high standards across project deliverables.",
  },
];

export const projects = [
  {
    id: "dwelldome",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "DwellDome – Home Management Web Application",
    description: "A web application designed to simplify home management through an organized and user-friendly interface.",
    techTags: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/HarshitaOnkar/DwellDome",
      demo: "https://dwelldome-harshita-j8z7.onrender.com/",
    },
    isFlagship: true,
  },
  {
    id: "foodwise",
    number: "02",
    badge: null,
    title: "FoodWise – Food Waste Management & Donation Platform",
    description: "A web application that helps restaurants manage surplus food by enabling food donations, discounted sales, and food storage tracking.",
    techTags: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/HarshitaOnkar/FoodWise",
      demo: "",
    },
    isFlagship: false,
  },
  {
    id: "helphive",
    number: "03",
    badge: null,
    title: "HelpHive – Service & Assistance Management Platform",
    description: "A web application that connects users seeking assistance with service providers, allowing users to explore services, submit requests, and manage assistance through an organized platform.",
    techTags: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/HarshitaOnkar",
      demo: "",
    },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component
export const certificates = {
  featured: [
    {
      name: "CySeck Finishing School – Cohort 2",
      issuer: "Government of Karnataka",
      icon: "🏅",
    },
  ],
  viewAllUrl: "https://www.linkedin.com/in/harshita-onkar-fullstackdeveloper/",
};

export const education = {
  degree: "B.E. Computer Science",
  institution: "P.D.A. College of Engineering Gulbarga",
  cgpa: "2022 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Python Full Stack Developer",
    "Python · Django · React · MySQL",
    "Building Practical, User-Focused Web Solutions",
  ],
  credential: "B.E. Computer Science",
  copyright: `© ${new Date().getFullYear()} Harshita Gururaj Onkar | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
