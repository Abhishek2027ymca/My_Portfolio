# Abhishek Singh — Portfolio

Single-page, 3D-enhanced developer portfolio. React + Vite + Tailwind CSS +
React Three Fiber.

## Setup (run locally)

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Project Docs
See `/docs`:
- `PRD.md` — requirements & scope
- `DESIGN.md` — design system (colors, type, spacing)
- `INFO.md` — content/copy reference
- `TASKS.md` — phased build plan

## Editing Content
All text, project data, skills, links etc. live in `src/data/content.js`.
Edit that file to update the site — no need to touch components for content
changes.

## Adding Your Resume
Place your resume PDF at `public/resume.pdf` (the Download Resume button
links here).

## Build Phases
1. ✅ Setup (Vite, Tailwind, fonts, content data)
2. Layout & navigation
3. 3D hero scene (R3F particle galaxy)
4. Content sections
5. Polish (animations, responsiveness, a11y)
6. Deploy (Vercel)
