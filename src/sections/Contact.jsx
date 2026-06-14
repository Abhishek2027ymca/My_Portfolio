import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2, Send, Download } from 'lucide-react'
import { personalInfo } from '../data/content'
import FadeIn from '../components/FadeIn'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    // [PLACEHOLDER] Wire to EmailJS or Formspree
    console.log('Form submitted:', form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  const inputStyle = {
    width: '100%', backgroundColor: '#05060A', border: '1px solid #1E2433',
    borderRadius: '0.5rem', padding: '0.75rem 1rem', color: '#F5F7FA',
    fontFamily: 'Inter', fontSize: '0.875rem', outline: 'none',
    boxSizing: 'border-box', transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" style={{ padding: '6rem 1.5rem', backgroundColor: '#0B0E17' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <FadeIn>
          <p className="section-label">// 06 Contact</p>
          <h2 className="section-heading" style={{ marginBottom: '1rem' }}>Let's Build Something Together</h2>
          <p style={{ color: '#8A93A6', marginBottom: '3rem', maxWidth: '28rem' }}>
            Open to internships, freelance projects, or just a good tech conversation.
          </p>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <FadeIn delay={0.15} direction="right">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {['name', 'email', 'message'].map(field => (
                <div key={field}>
                  <label style={{ display: 'block', fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#8A93A6', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                    {field}
                  </label>
                  {field === 'message'
                    ? <textarea name={field} value={form[field]} onChange={handleChange} required rows={5}
                        placeholder="Tell me about your project..." style={{ ...inputStyle, resize: 'none' }}
                        onFocus={e => e.target.style.borderColor = '#00F0FF'}
                        onBlur={e => e.target.style.borderColor = '#1E2433'} />
                    : <input name={field} type={field === 'email' ? 'email' : 'text'} value={form[field]}
                        onChange={handleChange} required
                        placeholder={field === 'email' ? 'your@email.com' : 'Your name'}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#00F0FF'}
                        onBlur={e => e.target.style.borderColor = '#1E2433'} />
                  }
                </div>
              ))}
              <motion.button
                type="submit"
                className="btn-primary"
                style={{ justifyContent: 'center', width: '100%' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={15} /> {sent ? 'Message Sent!' : 'Send Message'}
              </motion.button>
              {sent && (
                <motion.p
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  style={{ color: '#00F0FF', fontFamily: 'JetBrains Mono', fontSize: '0.8rem', textAlign: 'center' }}
                >
                  ✓ I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </FadeIn>

          <FadeIn delay={0.25} direction="left">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center' }}>
              <div>
                <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#8A93A6', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Find me on</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { href: `mailto:${personalInfo.email}`, Icon: Mail, label: personalInfo.email },
                    { href: personalInfo.socials.github, Icon: Github, label: 'GitHub' },
                    { href: personalInfo.socials.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                    { href: personalInfo.socials.leetcode, Icon: Code2, label: 'LeetCode' },
                  ].map(({ href, Icon, label }) => (
                    <motion.a
                      key={label} href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#8A93A6', textDecoration: 'none' }}
                      whileHover={{ x: 6, color: '#00F0FF' }}
                      transition={{ duration: 0.2 }}
                    >
                      <span style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem', border: '1px solid #1E2433', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={16} />
                      </span>
                      <span style={{ fontFamily: 'Inter', fontSize: '0.875rem' }}>{label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
              <a href={personalInfo.resumeUrl} download className="btn-secondary" style={{ width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Download size={16} /> Download Resume
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}