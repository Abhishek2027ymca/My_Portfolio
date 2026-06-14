import { Github, Linkedin, Mail, Code2 } from 'lucide-react'
import { personalInfo } from '../data/content'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #1E2433', backgroundColor: '#05060A', padding: '2.5rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
        <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#8A93A6' }}>
          © {new Date().getFullYear()} <span style={{ color: '#F5F7FA' }}>Abhishek Singh</span>. Built with React + R3F.
        </p>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {[
            { href: `mailto:${personalInfo.email}`, Icon: Mail, label: 'Email' },
            { href: personalInfo.socials.github, Icon: Github, label: 'GitHub' },
            { href: personalInfo.socials.linkedin, Icon: Linkedin, label: 'LinkedIn' },
            { href: personalInfo.socials.leetcode, Icon: Code2, label: 'LeetCode' },
          ].map(({ href, Icon, label }) => (
            <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
              aria-label={label} style={{ color: '#8A93A6', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#00F0FF'}
              onMouseLeave={e => e.currentTarget.style.color = '#8A93A6'}>
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}