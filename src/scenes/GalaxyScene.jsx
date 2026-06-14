import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// ── Wireframe Icosphere ───────────────────────────────────────────────
function WireframeSphere({ scrollY }) {
  const outerRef = useRef()
  const innerRef = useRef()
  const glowRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const scroll = scrollY.current / Math.max(document.body.scrollHeight - window.innerHeight, 1)

    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.09
      outerRef.current.rotation.y = t * 0.13
      outerRef.current.rotation.z = t * 0.04
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.12
      innerRef.current.rotation.y = -t * 0.08
    }
    if (glowRef.current) {
      const pulse = 1 + Math.sin(t * 1.8) * 0.06
      glowRef.current.scale.setScalar(
        THREE.MathUtils.lerp(glowRef.current.scale.x, pulse, 0.05)
      )
      glowRef.current.material.opacity = 0.12 + Math.sin(t * 1.2) * 0.04
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Soft glow core */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.35, 32, 32]} />
        <meshBasicMaterial color="#00F0FF" transparent opacity={0.12} side={THREE.BackSide} />
      </mesh>

      {/* Outer icosahedron wireframe */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.55} />
      </mesh>

      {/* Inner icosahedron, counter-rotating */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.0, 1]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

// ── Orbiting Particles ────────────────────────────────────────────────
function OrbitParticles({ scrollY }) {
  const ref = useRef()
  const count = 120

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const phi   = Math.acos(2 * Math.random() - 1)
      const theta = Math.random() * Math.PI * 2
      const r     = 1.9 + Math.random() * 1.2
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.07
    ref.current.rotation.x = state.clock.elapsedTime * 0.03
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#00F0FF"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

// ── Equatorial Ring ───────────────────────────────────────────────────
function EquatorialRing({ scrollY }) {
  const ref = useRef()
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.z = state.clock.elapsedTime * 0.05
    ref.current.rotation.x = Math.PI / 2.4 + Math.sin(state.clock.elapsedTime * 0.3) * 0.08
  })
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.0, 0.006, 12, 180]} />
      <meshBasicMaterial color="#00F0FF" transparent opacity={0.4} />
    </mesh>
  )
}

// ── Background star field ─────────────────────────────────────────────
function StarField() {
  const positions = useMemo(() => {
    const pos = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 60
      pos[i * 3 + 1] = (Math.random() - 0.5) * 60
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60
    }
    return pos
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.015}
        sizeAttenuation
        transparent
        opacity={0.5}
        depthWrite={false}
      />
    </points>
  )
}

// ── Camera ────────────────────────────────────────────────────────────
function CameraRig({ scrollY }) {
  useFrame(({ camera }) => {
    const scroll = scrollY.current / Math.max(document.body.scrollHeight - window.innerHeight, 1)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 5 + scroll * 4, 0.04)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -scroll * 1.2, 0.04)
    camera.lookAt(0, 0, 0)
  })
  return null
}

// ── Lights ────────────────────────────────────────────────────────────
function Lights() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 3]}  intensity={2}   color="#00F0FF" />
      <pointLight position={[4, 3, -4]} intensity={1.2} color="#3B82F6" />
    </>
  )
}

// ── Export ────────────────────────────────────────────────────────────
export default function GalaxyScene({ scrollY }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 55 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <Lights />
      <CameraRig scrollY={scrollY} />
      <StarField />
      <WireframeSphere scrollY={scrollY} />
      <OrbitParticles scrollY={scrollY} />
      <EquatorialRing scrollY={scrollY} />
    </Canvas>
  )
}