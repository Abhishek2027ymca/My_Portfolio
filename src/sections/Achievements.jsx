import { motion } from 'framer-motion'
import { achievements } from '../data/content'
import { Trophy } from 'lucide-react'
import FadeIn from '../components/FadeIn'

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <FadeIn>
          <p className="section-label"></p>
          <h2 className="section-heading" style={{ marginBottom: '3rem' }}>Milestones</h2>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', maxWidth: '40rem' }}>
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              className="card"
              style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem', backgroundColor: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Trophy size={15} color="#00F0FF" />
              </div>
              <div>
                <p style={{ fontFamily: 'Space Grotesk', fontWeight: 600, color: '#F5F7FA' }}>{item.title}</p>
                <p style={{ color: '#8A93A6', fontSize: '0.875rem', marginTop: '0.2rem' }}>{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}