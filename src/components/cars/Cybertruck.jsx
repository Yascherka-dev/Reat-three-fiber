import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three'
import { FINISH_PROPS } from '../../config/cars.config.js'
import { CarBody } from './CarBody.jsx'

export function Cybertruck({ color, finish, shader, shaderParams }) {
  const { nodes, materials } = useGLTF('/models/cybertruck.gltf')
  const { roughness, metalness } = FINISH_PROPS[finish]

  useEffect(() => {
    materials.lights.toneMapped = false
    materials.warninglights.toneMapped = false
    materials.warninglights.color = new THREE.Color(0.32, 0, 0)
  }, [materials])

  return (
    <group dispose={null} position={[0, 1.18, 0]}>
      <mesh geometry={nodes.interior001.geometry} material={materials.lights} />
      <mesh geometry={nodes.interior001_2.geometry}>
        <meshStandardMaterial opacity={0.92} transparent roughness={0.2} color="black" envMapIntensity={1} />
      </mesh>
      <mesh geometry={nodes.interior001_3.geometry} material={materials.glassframes} castShadow />
      <mesh geometry={nodes.interior001_4.geometry} material={materials.warninglights} />
      <mesh geometry={nodes.interior001_5.geometry} material={materials.black} castShadow />
      <mesh geometry={nodes.steer.geometry} material={materials.gray} />
      <mesh geometry={nodes.tires001.geometry} material={materials.tires} castShadow />
      <mesh geometry={nodes.tires001_1.geometry} material={materials.rims} castShadow />
      <CarBody
        geometry={nodes.interior001_6.geometry}
        color={color}
        roughness={roughness}
        metalness={metalness}
        shader={shader}
        shaderParams={shaderParams}
      />
    </group>
  )
}

useGLTF.preload('/models/cybertruck.gltf')
