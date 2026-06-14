export default function SectionDivider() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0' }}>
      <div style={{
        width: '60%', height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(0,240,255,0.2), transparent)',
      }} />
    </div>
  )
}
