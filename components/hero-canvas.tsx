'use client'

import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const { viewport } = useThree()
  const mouse = useRef({ x: 0, y: 0 })

  const { positions, count } = useMemo(() => {
    const count = 2600
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // distribute on a sphere shell with slight randomness
      const r = 2.6 + Math.random() * 1.6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    return { positions, count }
  }, [])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y += delta * 0.04
    pointsRef.current.rotation.x += delta * 0.012
    // subtle parallax toward pointer
    const px = (state.pointer.x * viewport.width) / 14
    const py = (state.pointer.y * viewport.height) / 14
    pointsRef.current.position.x += (px - pointsRef.current.position.x) * 0.04
    pointsRef.current.position.y += (py - pointsRef.current.position.y) * 0.04
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#5fe3d0"
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function FloatingKnot() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.15
    meshRef.current.rotation.y += delta * 0.1
  })
  return (
    <mesh ref={meshRef} scale={1.15}>
      <torusKnotGeometry args={[1, 0.28, 180, 32]} />
      <meshStandardMaterial
        color="#0e2a2a"
        emissive="#0b6b63"
        emissiveIntensity={0.35}
        roughness={0.35}
        metalness={0.9}
        wireframe
      />
    </mesh>
  )
}

export function HeroCanvas() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#5fe3d0" />
        <pointLight position={[-5, -3, 2]} intensity={0.6} color="#3a7bd5" />
        <FloatingKnot />
        <ParticleField />
      </Suspense>
    </Canvas>
  )
}
