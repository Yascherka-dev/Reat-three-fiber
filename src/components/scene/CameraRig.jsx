import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useRef } from 'react'

export function CameraRig({ resetRef }) {
  const controls = useRef()
  const { camera } = useThree()

  if (resetRef) {
    resetRef.current = () => {
      camera.position.set(0, 3, 9)
      controls.current?.target.set(0, 0, 0)
      controls.current?.update()
    }
  }

  return (
    <OrbitControls
      ref={controls}
      minPolarAngle={0.2}
      maxPolarAngle={Math.PI / 2}
      enableDamping
      dampingFactor={0.05}
    />
  )
}
