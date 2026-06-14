# DESIGN.md - Design System

## 1. Theme
Dark, sci-fi / cyberpunk aesthetic. Minimal UI chrome, lets the 3D scene and
neon accents do the visual heavy lifting. Inspired loosely by modern agency
portfolios (clean nav, bold section headers) but centered/simpler hero
layout (not edge-to-edge corner nav).

## 2. Color Palette

| Token            | Hex       | Usage                                  |
|------------------|-----------|-----------------------------------------|
| `--bg-primary`   | `#05060A` | Main background (near-black)            |
| `--bg-secondary` | `#0B0E17` | Section alt background, cards           |
| `--accent-cyan`  | `#00F0FF` | Primary neon accent (links, highlights) |
| `--accent-blue`  | `#3B82F6` | Secondary accent (gradients, glows)     |
| `--text-primary` | `#F5F7FA` | Headings, primary text                  |
| `--text-muted`   | `#8A93A6` | Body text, secondary info               |
| `--border`       | `#1E2433` | Borders, dividers                       |
| `--glow`         | `rgba(0,240,255,0.4)` | Box-shadows / glow effects |

Gradient accent (buttons, highlights): `linear-gradient(135deg, #00F0FF 0%, #3B82F6 100%)`

## 3. Typography

- **Headings:** Space Grotesk (futuristic, geometric, great for cyberpunk feel)
  - H1: 3.5rem–5rem (clamp for responsive), font-weight 700
  - H2: 2.25rem–3rem, font-weight 600
  - H3: 1.5rem, font-weight 600
- **Body:** Inter (clean, highly legible)
  - Base: 1rem (16px), line-height 1.6
  - Small: 0.875rem
- **Monospace (code snippets, tech tags):** JetBrains Mono or Fira Code

Load via Google Fonts or self-hosted for performance.

## 4. Spacing & Layout
- Max content width: 1280px, centered with padding `2rem` (desktop), `1rem` (mobile)
- Section vertical padding: `6rem` desktop / `3rem` mobile
- Grid gap: `1.5rem` standard
- Border radius: `0.75rem` (cards), `0.5rem` (buttons/inputs)
- 8px base spacing scale (Tailwind default works fine)

## 5. Component Styles

### Buttons
- Primary: gradient background (cyan→blue), dark text or white text, subtle glow on hover (`box-shadow` using `--glow`)
- Secondary: transparent bg, 1px cyan border, cyan text, fills on hover

### Cards (Project cards)
- Background: `--bg-secondary`
- Border: 1px solid `--border`, glows cyan on hover
- Slight scale-up (`scale-105`) + glow transition on hover
- Rounded corners, padding `1.5rem`

### Navigation
- Fixed top, transparent → blurred/dark on scroll (backdrop-blur)
- Logo/name left, nav links center or right, minimal — text links with
  underline-on-hover cyan accent

### Section Headers
- Small uppercase label above (e.g. "// 02 PROJECTS") in cyan, monospace
- Large heading below in Space Grotesk

## 6. 3D Scene Styling
- Particle galaxy: cyan/blue particle colors matching palette, central
  glowing object (icosahedron or sphere with wireframe/emissive material)
- Background: pure black/near-black to let particles pop
- Subtle bloom/glow post-processing if performance allows (Drei `<EffectComposer>` + `<Bloom>`)
- Camera transitions: smooth easing (lerp) tied to scroll progress, not jarring jumps

## 7. Animations
- Page load: fade-in + slight upward motion (Framer Motion)
- Scroll-triggered reveals for section content (fade + slide up, `whileInView`)
- 3D scene: continuous slow rotation of galaxy + scroll-driven camera movement/zoom
- Hover states: 150–250ms ease transitions

## 8. Reference
- Layout inspiration: Artemii Lebedev portfolio (minimal nav, bold typography,
  single dominant hero visual) — but simplified to a centered hero, not
  corner-anchored nav.
