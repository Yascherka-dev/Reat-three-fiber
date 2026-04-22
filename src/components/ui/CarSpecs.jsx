import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useConfiguratorStore } from '../../store/useConfiguratorStore.js'
import { CARS } from '../../config/cars.config.js'
import styles from './CarSpecs.module.css'

export function CarSpecs() {
  const activeCar = useConfiguratorStore((s) => s.activeCar)
  const carConfig = CARS.find((c) => c.id === activeCar)
  const specs = carConfig?.specs
  const containerRef = useRef()

  useEffect(() => {
    if (!containerRef.current) return
    const items = containerRef.current.querySelectorAll('[data-spec]')
    gsap.fromTo(items,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: 'power2.out' }
    )
  }, [activeCar])

  if (!specs) return null

  return (
    <div className={styles.specs} ref={containerRef}>
      {Object.entries(specs).map(([key, value]) => (
        <div className={styles.stat} key={key} data-spec>
          <span className={styles.value}>{value}</span>
          <span className={styles.key}>{key}</span>
        </div>
      ))}
    </div>
  )
}
