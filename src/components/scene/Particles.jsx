import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 120

export function Particles() {
  const points = useRef()

  const { positions, speeds, offsets } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3)
    const speeds = new Float32Array(COUNT)
    const offsets = new Float32Array(COUNT)

    for (let i = 0; i < COUNT; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 1.2 + Math.random() * 3.5
      positions[i * 3]     = Math.cos(angle) * radius
      positions[i * 3 + 1] = -1.2 + Math.random() * 5
      positions[i * 3 + 2] = Math.sin(angle) * radius
      speeds[i]  = 0.08 + Math.random() * 0.15
      offsets[i] = Math.random() * Math.PI * 2
    }
    return { positions, speeds, offsets }
  }, [])

  useFrame(({ clock }) => {
    if (!points.current) return
    const pos = points.current.geometry.attributes.position.array
    const t = clock.elapsedTime

    for (let i = 0; i < COUNT; i++) {
      pos[i * 3 + 1] += speeds[i] * 0.004
      // drift horizontal subtil
      pos[i * 3]     += Math.sin(t * 0.3 + offsets[i]) * 0.001
      pos[i * 3 + 2] += Math.cos(t * 0.3 + offsets[i]) * 0.001
      // reboucle quand la particule dépasse le haut
      if (pos[i * 3 + 1] > 4) pos[i * 3 + 1] = -1.2
    }
    points.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#88ccff"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
