import { motion } from 'framer-motion'
import { skillCategories } from '../data/content'
import FadeIn from '../components/FadeIn'

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <FadeIn>
          <p className="section-label">// 03 Skills</p>
          <h2 className="section-heading" style={{ marginBottom: '3rem' }}>Tech Stack</h2>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {skillCategories.map(({ category, skills }, i) => (
            <motion.div
              key={category}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#00F0FF', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>{category}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.07 + j * 0.04 }}
                    style={{ fontFamily: 'JetBrains Mono', fontSize: '0.8rem', padding: '0.375rem 0.75rem', borderRadius: '0.375rem', backgroundColor: '#05060A', border: '1px solid #1E2433', color: '#8A93A6', cursor: 'default', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.target.style.borderColor = 'rgba(0,240,255,0.5)'; e.target.style.color = '#F5F7FA' }}
                    onMouseLeave={e => { e.target.style.borderColor = '#1E2433'; e.target.style.color = '#8A93A6' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}