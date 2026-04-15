import { CARS } from '../../config/cars.config.js'
import { useConfiguratorStore } from '../../store/useConfiguratorStore.js'
import styles from './CarPicker.module.css'

export function CarPicker() {
  const activeCar = useConfiguratorStore((s) => s.activeCar)
  const setActiveCar = useConfiguratorStore((s) => s.setActiveCar)

  return (
    <div className={styles.picker}>
      {CARS.map((car) => (
        <button
          key={car.id}
          className={`${styles.carBtn} ${activeCar === car.id ? styles.active : ''}`}
          onClick={() => setActiveCar(car.id)}
        >
          <img
            className={styles.thumb}
            src={car.thumbnail}
            alt={car.label}
            onError={(e) => { e.target.style.opacity = '0.2' }}
          />
          <span className={styles.label}>{car.label}</span>
        </button>
      ))}
    </div>
  )
}
