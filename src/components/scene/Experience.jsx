import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { button, useControls } from 'leva'
import { Garage } from './Garage.jsx'
import { CameraRig } from './CameraRig.jsx'
import { CarLoader } from '../cars/CarLoader.jsx'

export function Experience({ cameraResetRef, started }) {
  const podiumRef = useRef()
  const carGroupRef = useRef()

  useFrame((_state, delta) => {
    if (podiumRef.current) podiumRef.current.rotation.y += delta / 2
  })

  useControls({
    'restart animation': button(() => {
      if (!carGroupRef.current) return
      carGroupRef.current.position.y = 5
      gsap.to(carGroupRef.current.position, { y: -1.18, duration: 1.5, ease: 'power3.out' })
    }),
  })

  return (
    <>
      <CameraRig resetRef={cameraResetRef} started={started} />
      <Garage podiumRef={podiumRef} />
      <CarLoader />
    </>
  )
}
