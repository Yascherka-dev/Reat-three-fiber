import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'
import styles from './LoadingScreen.module.css'

export function LoadingScreen() {
  const { progress, active } = useProgress()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!active && progress === 100) {
      const t = setTimeout(() => setVisible(false), 600)
      return () => clearTimeout(t)
    }
  }, [active, progress])

  if (!visible) return null

  const done = !active && progress === 100

  return (
    <div className={`${styles.screen} ${done ? styles.fadeOut : ''}`}>
      <div className={styles.content}>
        <div className={styles.title}>CAR CONFIGURATOR</div>
        <div className={styles.subtitle}>React Three Fiber</div>

        <div className={styles.barWrap}>
          <div className={styles.bar} style={{ width: `${progress}%` }} />
        </div>

        <div className={styles.percent}>{Math.round(progress)}%</div>
      </div>
    </div>
  )
}
