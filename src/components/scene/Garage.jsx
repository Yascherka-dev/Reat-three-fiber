import { ContactShadows, Environment, Lightformer, MeshReflectorMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { Particles } from './Particles.jsx'

const shiningWhite = new THREE.Color(1.1, 1.1, 1.1)
const shiningBlue = new THREE.Color(0.1, 0.5, 4.8)

export function Garage({ podiumRef }) {
  const square = useRef()
  const triangle = useRef()

  useFrame((_state, delta) => {
    if (square.current) square.current.rotation.z += delta / 42
    if (triangle.current) triangle.current.rotation.z += delta / 64
  })

  return (
    <>
      {/* Sol réfléchissant */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.35, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[400, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={15}
          roughness={0.8}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#111111"
          metalness={0.5}
          mirror={0.3}
        />
      </mesh>

      {/* Podium */}
      <group scale={[3, 0.4, 3]} position={[0, -0.2, 0]} ref={podiumRef}>
        <mesh receiveShadow>
          <cylinderGeometry />
          <meshStandardMaterial metalness={0.8} roughness={0.4} color="#222222" />
        </mesh>
        <mesh position={[0, 0.51, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
          <ringGeometry args={[0.92, 1, 32]} />
          <meshStandardMaterial color={shiningBlue} toneMapped={false} roughness={0.75} />
        </mesh>
      </group>

      <ContactShadows
        resolution={1024}
        frames={1}
        position={[0, -1.16, 0]}
        scale={15}
        blur={0.5}
        opacity={1}
        far={20}
      />

      <hemisphereLight intensity={0.3} />

      <mesh ref={square} scale={4} position={[4, -1.161, -1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 4, 1]} />
        <meshStandardMaterial color={shiningWhite} toneMapped={false} roughness={0.75} />
      </mesh>
      <mesh ref={triangle} scale={4} position={[-4, -1.161, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 3, 1]} />
        <meshStandardMaterial color={shiningWhite} roughness={0.75} toneMapped={false} />
      </mesh>

      <Environment resolution={512}>
        {[-9, -6, -3, 0, 3, 6, 9].map((z) => (
          <Lightformer key={z} intensity={2} rotation-x={Math.PI / 2} position={[0, 4, z]} scale={[10, 1, 1]} />
        ))}
        <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer form="ring" color="#ff4444" intensity={1.5} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      </Environment>

      <Particles />
    </>
  )
}
