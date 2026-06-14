import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef()
  const ringRef = useRef()
  const mouse   = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    const raf = requestAnimationFrame(animate)

    // Grow ring on clickable elements
    const onEnter = () => ringRef.current && (ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.8)')
    const onLeave = () => ringRef.current && (ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)')
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Hide on touch devices
  if (window.matchMedia('(hover: none)').matches) return null

  return (
    <>
      {/* Dot */}
      <div ref={dotRef} style={{
        position: 'fixed', zIndex: 9999, pointerEvents: 'none',
        width: '6px', height: '6px', borderRadius: '50%',
        backgroundColor: '#00F0FF',
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.2s',
        boxShadow: '0 0 8px rgba(0,240,255,0.8)',
      }} />
      {/* Ring */}
      <div ref={ringRef} style={{
        position: 'fixed', zIndex: 9998, pointerEvents: 'none',
        width: '32px', height: '32px', borderRadius: '50%',
        border: '1px solid rgba(0,240,255,0.5)',
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.15s ease',
      }} />
    </>
  )
}