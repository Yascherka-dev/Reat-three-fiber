import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import '../shaders/shaderMaterials.js'

export function CarBody({ geometry, color, roughness, metalness, shader, shaderParams }) {
  const shaderRef = useRef()

  useFrame((state) => {
    if (shaderRef.current) {
      shaderRef.current.uTime = state.clock.elapsedTime
    }
  })

  return (
    <mesh geometry={geometry} castShadow>
      {shader === 'none' && (
        <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
      )}
      {shader === 'disks' && (
        <disksShaderMaterial
          ref={shaderRef}
          transparent
          uAlpha={shaderParams.alpha}
          uMultiplier={shaderParams.multiplier}
          uColorA={shaderParams.colorA}
          uColorB={shaderParams.colorB}
        />
      )}
      {shader === 'stripes' && (
        <stripesShaderMaterial
          ref={shaderRef}
          transparent
          uAlpha={shaderParams.alpha}
          uMultiplier={shaderParams.multiplier}
          uColorA={shaderParams.colorA}
          uColorB={shaderParams.colorB}
        />
      )}
      {shader === 'hologram' && (
        <hologramShaderMaterial
          ref={shaderRef}
          transparent
          uAlpha={shaderParams.alpha}
          uMultiplier={shaderParams.multiplier}
          uColorA={shaderParams.colorA}
          uColorB={shaderParams.colorB}
        />
      )}
      {shader === 'wave' && (
        <waveShaderMaterial
          ref={shaderRef}
          transparent
          uAlpha={shaderParams.alpha}
          uMultiplier={shaderParams.multiplier}
          uColorA={shaderParams.colorA}
          uColorB={shaderParams.colorB}
        />
      )}
    </mesh>
  )
}
