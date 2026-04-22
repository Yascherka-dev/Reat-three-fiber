import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const IDLE_DELAY = 3000

export function CameraRig({ resetRef }) {
  const controls = useRef()
  const { camera } = useThree()
  const [autoRotate, setAutoRotate] = useState(false)
  const idleTimer = useRef(null)

  useEffect(() => {
    camera.position.set(6, 18, 28)
    controls.current?.target.set(0, 0, 0)
    if (controls.current) controls.current.enabled = false

    gsap.to(camera.position, {
      x: 0, y: 3, z: 9,
      duration: 2.8,
      ease: 'power3.inOut',
      onUpdate: () => controls.current?.update(),
      onComplete: () => {
        if (controls.current) controls.current.enabled = true
        resetIdleTimer()
      },
    })
  }, [camera])

  function resetIdleTimer() {
    setAutoRotate(false)
    clearTimeout(idleTimer.current)
    idleTimer.current = setTimeout(() => setAutoRotate(true), IDLE_DELAY)
  }

  useEffect(() => {
    window.addEventListener('pointermove', resetIdleTimer)
    window.addEventListener('pointerdown', resetIdleTimer)
    window.addEventListener('keydown', resetIdleTimer)
    return () => {
      window.removeEventListener('pointermove', resetIdleTimer)
      window.removeEventListener('pointerdown', resetIdleTimer)
      window.removeEventListener('keydown', resetIdleTimer)
      clearTimeout(idleTimer.current)
    }
  }, [])

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
      autoRotate={autoRotate}
      autoRotateSpeed={0.6}
    />
  )
}
