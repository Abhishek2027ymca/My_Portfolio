import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Stars() {
  const ref = useRef()

  const positions = useMemo(() => {
    const pos = new Float32Array(3000 * 3)
    for (let i = 0; i < 3000; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 80
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60
    }
    return pos
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    // Very slow drift
    ref.current.rotation.y = state.clock.elapsedTime * 0.008
    ref.current.rotation.x = state.clock.elapsedTime * 0.003
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.018}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  )
}

export default function StarBackground() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.2]}
      >
        <Stars />
      </Canvas>
    </div>
  )
}