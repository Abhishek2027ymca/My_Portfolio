# PRD - Abhishek Singh Portfolio

## 1. Project Overview
A single-page, dynamic, 3D-enhanced developer portfolio website showcasing
Abhishek Singh's skills, projects, and experience. The site uses a cyberpunk
dark theme with an interactive 3D particle galaxy as the central visual
element, which morphs/transforms as the user scrolls through sections.

## 2. Target Users
- Recruiters / hiring managers (frontend, full-stack roles)
- Potential clients (freelance work)
- Fellow developers / open-source collaborators
- Personal network contacts

## 3. Core Features

### Must-Have (MVP)
- Single-page layout with smooth scroll navigation
- Hero section with 3D particle galaxy (R3F) as main visual
- 3D scene morphs/transforms based on scroll position (camera movement,
  object transitions)
- About section (bio, education, current role)
- Projects section (cards, placeholder data, fully editable via content file)
- Skills section (categorized: Languages, Frontend, Backend, Databases, Tools)
- Experience/Timeline section (Yuvocreations internship, Udaan POR)
- Achievements section (hackathon, LeetCode stats)
- Contact section: contact form + social links + resume download
- Fully responsive (mobile, tablet, desktop)
- Dark theme with cyan/electric blue neon accents

### Nice-to-Have (Future)
- Blog / case-study detail pages (multi-page extension)
- Theme toggle (light mode)
- Animated cursor / custom cursor effects
- Project filtering by tech stack
- Loading screen with 3D progress animation
- Easter eggs / interactive 3D elements (click to interact)
- Analytics integration

## 4. Pages / Routes
- Single page (`/`) with anchor-linked sections:
  - `#hero`
  - `#about`
  - `#projects`
  - `#skills`
  - `#experience`
  - `#achievements`
  - `#contact`
- (Future) `/projects/:id` for detailed case studies

## 5. Tech Stack
- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **3D:** React Three Fiber (R3F) + Drei + Three.js
- **Animations:** Framer Motion (UI), R3F/useScroll (3D scene)
- **Forms:** React Hook Form (contact form, can wire to EmailJS/Formspree later)
- **Icons:** lucide-react
- **Deployment:** Vercel

## 6. Content Management
All content (projects, skills, bio text, links) lives in a single
`src/data/content.js` (or `INFO.md` reference) file so updates don't require
touching component code. Placeholder data marked clearly for later
replacement.
