# Harshita Gururaj Onkar — Portfolio

Modern, responsive single-page developer portfolio showcasing full-stack projects, technical skillset, and leadership experience.

**Live site:** https://YOUR-SITE-URL/

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

## Tech Stack

- **React 19** — Component-driven frontend architecture
- **Vite** — Next-generation frontend tooling and fast HMR
- **Tailwind CSS 4** — Modern utility-first CSS styling
- **Framer Motion** — Smooth gesture animations and spring transitions
- **AOS** — Scroll-triggered entry animations
- **EmailJS** — Client-side form handling and direct email delivery
- **WebGL** — Interactive fluid cursor dynamics

## Run Locally

Clone the repository and install dependencies:

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

To enable the interactive contact form with EmailJS, create a `.env.local` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

If these keys are not provided, the contact form automatically falls back to your local email client.
