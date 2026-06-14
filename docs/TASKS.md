# TASKS.md - Implementation Plan

## Phase 1: Setup
- [ ] Scaffold Vite + React project
- [ ] Install & configure Tailwind CSS
- [ ] Install R3F, Drei, Three.js, Framer Motion, lucide-react
- [ ] Set up folder structure (`src/components`, `src/data`, `src/scenes`)
- [ ] Add fonts (Space Grotesk, Inter) via Google Fonts / local
- [ ] Set up `content.js` with placeholder data from INFO.md
- [ ] Set up Tailwind theme tokens (colors from DESIGN.md)

## Phase 2: Layout & Navigation
- [ ] Build fixed nav bar (logo/name + section links)
- [ ] Set up smooth scroll / section anchors
- [ ] Build page shell with section containers (About, Projects, Skills, Experience, Achievements, Contact)
- [ ] Mobile responsive nav (hamburger menu)

## Phase 3: 3D Scene (Hero)
- [ ] Set up R3F Canvas + base scene
- [ ] Build particle galaxy (instanced particles or Points)
- [ ] Add central glowing object (icosahedron/sphere with emissive material)
- [ ] Add slow auto-rotation
- [ ] Add bloom/glow post-processing (if perf allows)
- [ ] Hook scroll progress to camera position/zoom (morph effect)
- [ ] Test performance on mobile, add fallback (reduced particle count) if needed

## Phase 4: Sections (Content)
- [ ] Hero section (headline, tagline, CTAs, 3D background)
- [ ] About section (bio, education, current role)
- [ ] Projects section (cards grid, placeholder data, hover effects)
- [ ] Skills section (categorized tags/grid)
- [ ] Experience/Timeline section
- [ ] Achievements section
- [ ] Contact section (form + resume download + socials)

## Phase 5: Polish
- [ ] Scroll-triggered animations (Framer Motion `whileInView`)
- [ ] Hover/glow effects on cards, buttons, links
- [ ] Loading state for 3D scene
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Accessibility check (contrast, alt text, keyboard nav)
- [ ] SEO basics (meta tags, title, favicon)

## Phase 6: Deploy
- [ ] Build production bundle
- [ ] Deploy to Vercel
- [ ] Test live site (3D performance, forms, links)
- [ ] Final content swap (real project images, links, resume)

---

## Notes for Future Iteration
- Replace placeholder projects with finalized list
- Wire contact form to EmailJS/Formspree
- Add real social links and screenshots
- Optional: add blog/case-study pages (multi-page extension)
