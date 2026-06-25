import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/content'

function ProjectCard({ project }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ width: '100%', height: '11rem', borderRadius: '0.5rem', backgroundColor: '#05060A', border: '1px solid #1E2433', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {project.image
          ? <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#1E2433' }}>[screenshot coming soon]</p>
        }
      </div>
      <div>
        {project.date && <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#8A93A6', marginBottom: '0.25rem' }}>{project.date}</p>}
        <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, color: '#F5F7FA', fontSize: '1.25rem' }}>{project.name}</h3>
        <p style={{ color: '#00F0FF', fontSize: '0.8rem', fontFamily: 'JetBrains Mono' }}>{project.subtitle}</p>
      </div>
      <p style={{ color: '#8A93A6', fontSize: '0.875rem', lineHeight: 1.7, flex: 1 }}>{project.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {project.stack.map(tech => (
          <span key={tech} style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', padding: '0.25rem 0.6rem', borderRadius: '0.25rem', border: '1px solid #1E2433', color: '#8A93A6' }}>{tech}</span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem' }}>
        <a href={project.repoUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', color: '#8A93A6', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#00F0FF'}
          onMouseLeave={e => e.currentTarget.style.color = '#8A93A6'}>
          <Github size={15} /> Repo
        </a>
        <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', color: '#8A93A6', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#00F0FF'}
          onMouseLeave={e => e.currentTarget.style.color = '#8A93A6'}>
          <ExternalLink size={15} /> Live
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 1.5rem', backgroundColor: '#0B0E17' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <p className="section-label"> </p>
        <h2 className="section-heading" style={{ marginBottom: '3rem' }}>Things I've Built</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}