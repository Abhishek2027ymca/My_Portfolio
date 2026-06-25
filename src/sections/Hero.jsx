import { useRef, useEffect, useState, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { heroContent, personalInfo } from '../data/content'

const GalaxyScene = lazy(() => import('../scenes/GalaxyScene'))

export default function Hero() {
  const scrollY = useRef(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => { scrollY.current = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 1.5rem', textAlign: 'center', overflow: 'hidden' }}>

      {/* 3D Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {mounted && (
          <Suspense fallback={null}>
            <GalaxyScene scrollY={scrollY} />
          </Suspense>
        )}
      </div>

      {/* Vignette */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(ellipse 80% 70% at 50% 55%, transparent 25%, #05060A 70%)', pointerEvents: 'none' }} />

      {/* Content */}
      <motion.div
        style={{ position: 'relative', zIndex: 2, maxWidth: '52rem' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ fontFamily: 'JetBrains Mono', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#00F0FF', marginBottom: '1rem' }}
        >
          // Frontend Developer
        </motion.p>

        {/* Heading */}
        <motion.h1
          style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, color: '#F5F7FA', lineHeight: 1.1, marginBottom: '1.25rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          {heroContent.greeting}{' '}
          <span style={{ color: '#00F0FF', textShadow: '0 0 30px rgba(0,240,255,0.5)' }}>
            {heroContent.name}
          </span>
        </motion.h1>

        {/* Tagline — fixed color to bright white */}
        <motion.p
          style={{ color: '#E2E8F0', fontSize: '1.2rem', maxWidth: '36rem', margin: '0 auto 1.75rem', lineHeight: 1.7, fontFamily: 'Inter', fontWeight: 400 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          {heroContent.tagline}
        </motion.p>

        {/* Buttons */}
        <motion.div
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <button
            className="btn-primary"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {heroContent.ctaPrimary}
          </button>
          <a
            href={personalInfo.resumeUrl}
            download
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            {/* Download icon */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {heroContent.ctaSecondary}
          </a>
        </motion.div>

        {/* Stats row */}
        {/* <motion.div
          style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {[
            { value: '250+', label: 'DSA Problems' },
            { value: '1415', label: 'LeetCode Peak' },
            { value: 'Top 10', label: 'Zenith Hackathon' },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.5rem', color: '#00F0FF', lineHeight: 1 }}>{value}</p>
              <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#8A93A6', marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</p>
            </div>
          ))}
        </motion.div> */}
      </motion.div>
    </section>
  )
}