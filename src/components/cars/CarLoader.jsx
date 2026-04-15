import { Suspense, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useControls } from 'leva'
import { useGLTF } from '@react-three/drei'
import { useConfiguratorStore } from '../../store/useConfiguratorStore.js'
import { CARS } from '../../config/cars.config.js'
import { Cybertruck } from './Cybertruck.jsx'
import { SportsCar } from './SportsCar.jsx'
import { SUV } from './SUV.jsx'
import { MuscleCar } from './MuscleCar.jsx'
import { ConceptCar } from './ConceptCar.jsx'

const CAR_COMPONENTS = {
  cybertruck: Cybertruck,
  conceptcar002: SportsCar,
  conceptcar040: SUV,
  conceptcar033: MuscleCar,
}

CARS.forEach((car) => {
  if (!CAR_COMPONENTS[car.id]) useGLTF.preload(car.file)
})

export function CarLoader() {
  const activeCar = useConfiguratorStore((s) => s.activeCar)
  const color = useConfiguratorStore((s) => s.color)
  const finish = useConfiguratorStore((s) => s.finish)
  const shader = useConfiguratorStore((s) => s.shader)
  const setShader = useConfiguratorStore((s) => s.setShader)

  const [displayCar, setDisplayCar] = useState(activeCar)
  const groupRef = useRef()

  const { shaderSelect } = useControls({
    shaderSelect: {
      label: 'Shader',
      options: { none: 'none', disks: 'disks', stripes: 'stripes', hologram: 'hologram', wave: 'wave' },
      value: 'none',
    },
  })

  const disksParams = useControls('disks', {
    alpha: { value: 0.5, min: 0, max: 1 },
    multiplier: { value: 12, min: 1, max: 64 },
    colorA: '#ff0000',
    colorB: '#0000ff',
  })

  const stripesParams = useControls('stripes', {
    alpha: { value: 0.5, min: 0, max: 1 },
    multiplier: { value: 42, min: 1, max: 142 },
    colorA: '#ff0000',
    colorB: '#ffff00',
  })

  const hologramParams = useControls('hologram', {
    alpha: { value: 0.8, min: 0, max: 1 },
    multiplier: { value: 20, min: 1, max: 80 },
    colorA: '#00ffff',
    colorB: '#0044ff',
  })

  const waveParams = useControls('wave', {
    alpha: { value: 0.7, min: 0, max: 1 },
    multiplier: { value: 8, min: 1, max: 40 },
    colorA: '#ff6600',
    colorB: '#ffff00',
  })

  const shaderParamsMap = {
    disks: disksParams,
    stripes: stripesParams,
    hologram: hologramParams,
    wave: waveParams,
  }

  useEffect(() => {
    setShader(shaderSelect)
  }, [shaderSelect, setShader])

  // Animation d'entrée initiale
  useEffect(() => {
    if (!groupRef.current) return
    groupRef.current.position.y = 5
    gsap.to(groupRef.current.position, { y: -1.18, duration: 1.5, ease: 'power3.out' })
  }, [])

  // Transition lors du changement de voiture
  useEffect(() => {
    if (activeCar === displayCar || !groupRef.current) return
    gsap.to(groupRef.current.position, {
      y: -8,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        setDisplayCar(activeCar)
        groupRef.current.position.y = 8
        gsap.to(groupRef.current.position, { y: -1.18, duration: 0.5, ease: 'power2.out' })
      },
    })
  }, [activeCar, displayCar])

  const CarComponent = CAR_COMPONENTS[displayCar]
  const carConfig = CARS.find((c) => c.id === displayCar)
  const shaderParams = shaderParamsMap[shader] ?? disksParams

  if (!CarComponent && !carConfig) return null

  return (
    <group ref={groupRef}>
      <Suspense fallback={null}>
        {CarComponent ? (
          <CarComponent
            color={color}
            finish={finish}
            shader={shader}
            shaderParams={shaderParams}
          />
        ) : (
          <ConceptCar
            url={carConfig.file}
            bodyMaterialName={carConfig.bodyMesh}
            position={carConfig.position ?? [0, 1.18, 0]}
            rotation={carConfig.rotation ?? [0, 0, 0]}
            color={color}
            finish={finish}
            shader={shader}
            shaderParams={shaderParams}
          />
        )}
      </Suspense>
    </group>
  )
}
