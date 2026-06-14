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
        style={{ position: 'relative', zIndex: 2, maxWidth: '48rem' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          // Frontend Developer
        </motion.p>

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

        <motion.p
          style={{ color: '#8A93A6', fontSize: '1.125rem', maxWidth: '36rem', margin: '0 auto 2.5rem', lineHeight: 1.7 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          {heroContent.tagline}
        </motion.p>

        <motion.div
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <button className="btn-primary" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
            {heroContent.ctaPrimary}
          </button>
          <a href={personalInfo.resumeUrl} download className="btn-secondary">
            {heroContent.ctaSecondary}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: '#8A93A6', zIndex: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '2.5rem', background: 'linear-gradient(to bottom, #00F0FF, transparent)', animation: 'pulse 2s infinite' }} />
      </motion.div>
    </section>
  )
}