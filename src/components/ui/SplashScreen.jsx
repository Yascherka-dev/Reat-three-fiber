import { useState, useEffect } from 'react'
import styles from './SplashScreen.module.css'

export function SplashScreen({ onEnter }) {
  const [visible, setVisible] = useState(true)
  const [leaving, setLeaving] = useState(false)

  function handleEnter() {
    setLeaving(true)
    onEnter()
    setTimeout(() => setVisible(false), 1000)
  }

  if (!visible) return null

  return (
    <div className={`${styles.screen} ${leaving ? styles.leaving : ''}`}>
      <div className={styles.noise} />

      <div className={styles.topBar}>
        <span className={styles.tag}>R3F × THREE.JS</span>
      </div>

      <div className={styles.center}>
        <div className={styles.badge}>GARAGE EN CONSTRUCTION</div>
        <h1 className={styles.title}>CAR<br />CONFIGURATOR</h1>
        <p className={styles.sub}>
          Bienvenue dans l'atelier. Choisissez votre modèle,<br />
          personnalisez chaque détail. Le garage vous attend.
        </p>
        <button className={styles.enterBtn} onClick={handleEnter}>
          <span>ENTRER DANS LE GARAGE</span>
          <span className={styles.arrow}>→</span>
        </button>
      </div>

      <div className={styles.bottomBar}>
        <span>7 MODÈLES</span>
        <span className={styles.dot}>·</span>
        <span>SHADERS TEMPS RÉEL</span>
        <span className={styles.dot}>·</span>
        <span>REACT THREE FIBER</span>
      </div>
    </div>
  )
}
