import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { FINISH_PROPS } from '../../config/cars.config.js'
import '../../shaders/shaderMaterials.js'

const SHADER_CLASSES = {
  disks: 'DisksShaderMaterial',
  stripes: 'StripesShaderMaterial',
  hologram: 'HologramShaderMaterial',
  wave: 'WaveShaderMaterial',
}

function makeShaderMaterial(shader, params) {
  const className = SHADER_CLASSES[shader]
  if (!className || !THREE[className]) return null
  const mat = new THREE[className]()
  mat.transparent = true
  mat.uAlpha = params.alpha
  mat.uMultiplier = params.multiplier
  mat.uColorA = new THREE.Color(params.colorA)
  mat.uColorB = new THREE.Color(params.colorB)
  return mat
}

export function ConceptCar({ url, bodyMaterialName, rotation, position, scale, color, finish, shader, shaderParams }) {
  const { scene } = useGLTF(url)
  const { roughness, metalness } = FINISH_PROPS[finish]
  const bodyMeshRef = useRef(null)
  const shaderMatRef = useRef(null)

  // Find body mesh once after scene load
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material?.name === bodyMaterialName) {
        bodyMeshRef.current = child
      }
    })
  }, [scene, bodyMaterialName])

  // Update body material on changes
  useEffect(() => {
    if (!bodyMeshRef.current) return

    if (shader === 'none') {
      bodyMeshRef.current.material = new THREE.MeshStandardMaterial({ color, roughness, metalness })
      shaderMatRef.current = null
    } else {
      const mat = makeShaderMaterial(shader, shaderParams)
      if (mat) {
        bodyMeshRef.current.material = mat
        shaderMatRef.current = mat
      }
    }
  }, [color, roughness, metalness, shader, shaderParams])

  useFrame((state) => {
    if (shaderMatRef.current) {
      shaderMatRef.current.uTime = state.clock.elapsedTime
    }
  })

  return (
    <group dispose={null} rotation={rotation} position={position} scale={scale ?? 1}>
      <primitive object={scene} />
    </group>
  )
}
