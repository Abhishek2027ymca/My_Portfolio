import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, personalInfo } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['hero', ...navLinks.map(l => l.href.replace('#', ''))]
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'all 0.3s ease',
      backgroundColor: scrolled ? 'rgba(5,6,10,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #1E2433' : '1px solid transparent',
    }}>
      <nav style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={() => handleNav('#hero')}
          style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.125rem', color: '#F5F7FA', background: 'none', border: 'none', cursor: 'pointer' }}>
          AS<span style={{ color: '#00F0FF' }}>.</span>
        </button>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }} className="hidden md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <li key={link.href}>
                <button onClick={() => handleNav(link.href)} style={{
                  fontFamily: 'Inter', fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer',
                  color: isActive ? '#00F0FF' : '#8A93A6',
                  transition: 'color 0.2s',
                  position: 'relative',
                  paddingBottom: '4px',
                }}
                  onMouseEnter={e => { if (!isActive) e.target.style.color = '#F5F7FA' }}
                  onMouseLeave={e => { if (!isActive) e.target.style.color = '#8A93A6' }}
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      height: '1px', backgroundColor: '#00F0FF',
                      boxShadow: '0 0 6px rgba(0,240,255,0.8)',
                    }} />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        <a href={personalInfo.resumeUrl} download className="hidden md:inline-flex btn-secondary"
          style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
          Resume
        </a>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: '#8A93A6', background: 'none', border: 'none', cursor: 'pointer' }}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div style={{ backgroundColor: '#0B0E17', borderTop: '1px solid #1E2433', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <button key={link.href} onClick={() => handleNav(link.href)} style={{
                textAlign: 'left', fontFamily: 'Inter', background: 'none', border: 'none',
                cursor: 'pointer', fontSize: '1rem',
                color: isActive ? '#00F0FF' : '#8A93A6',
              }}>
                {link.label}
              </button>
            )
          })}
          <a href={personalInfo.resumeUrl} download className="btn-secondary" style={{ width: 'fit-content', marginTop: '0.5rem' }}>
            Resume
          </a>
        </div>
      )}
    </header>
  )
}