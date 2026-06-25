import { aboutContent } from '../data/content'
import FadeIn from '../components/FadeIn'

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <FadeIn>
          <p className="section-label"></p>
          <h2 className="section-heading" style={{ marginBottom: '3rem' }}>{aboutContent.heading}</h2>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <FadeIn delay={0.15} direction="right">
            <p style={{ color: '#8A93A6', lineHeight: 1.8, fontSize: '1.0625rem' }}>{aboutContent.bio}</p>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <FadeIn delay={0.25}>
              <div className="card">
                <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#00F0FF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Education</p>
                <p style={{ fontFamily: 'Space Grotesk', fontWeight: 600, color: '#F5F7FA' }}>{aboutContent.education.institution}</p>
                <p style={{ color: '#8A93A6', fontSize: '0.875rem', marginTop: '0.25rem' }}>{aboutContent.education.degree}</p>
                <p style={{ color: '#8A93A6', fontSize: '0.875rem' }}>{aboutContent.education.years}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.35}>
              <div className="card">
                <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#00F0FF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Current Role</p>
                <p style={{ fontFamily: 'Space Grotesk', fontWeight: 600, color: '#F5F7FA' }}>{aboutContent.currentRole.title}</p>
                <p style={{ color: '#8A93A6', fontSize: '0.875rem', marginTop: '0.25rem' }}>{aboutContent.currentRole.company}</p>
                <p style={{ color: '#8A93A6', fontSize: '0.875rem' }}>{aboutContent.currentRole.period}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}