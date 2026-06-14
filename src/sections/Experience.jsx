import { motion } from 'framer-motion'
import { experience } from '../data/content'
import FadeIn from '../components/FadeIn'

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 1.5rem', backgroundColor: '#0B0E17' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <FadeIn>
          <p className="section-label">// 04 Experience</p>
          <h2 className="section-heading" style={{ marginBottom: '3rem' }}>Where I've Worked</h2>
        </FadeIn>
        <div style={{ position: 'relative', borderLeft: '1px solid #1E2433', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {experience.map((item, i) => (
            <motion.div
              key={i}
              style={{ position: 'relative' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <motion.span
                style={{ position: 'absolute', left: '-2.4rem', top: '0.35rem', width: '0.75rem', height: '0.75rem', borderRadius: '50%', backgroundColor: '#00F0FF', boxShadow: '0 0 10px rgba(0,240,255,0.5)', display: 'block' }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.15 + 0.2 }}
              />
              <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#8A93A6', marginBottom: '0.25rem' }}>{item.period}</p>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, color: '#F5F7FA', fontSize: '1.125rem' }}>{item.role}</h3>
              <p style={{ color: '#00F0FF', fontSize: '0.8rem', fontFamily: 'JetBrains Mono', marginBottom: '0.75rem' }}>{item.org}</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {item.points.map((pt, j) => (
                  <li key={j} style={{ display: 'flex', gap: '0.75rem', color: '#8A93A6', fontSize: '0.875rem', lineHeight: 1.7 }}>
                    <span style={{ color: '#00F0FF', flexShrink: 0, marginTop: '0.15rem' }}>▹</span>{pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}