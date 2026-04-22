import { useState } from 'react'
import { CarPicker } from './CarPicker.jsx'
import { CarSpecs } from './CarSpecs.jsx'
import { ColorPanel } from './ColorPanel.jsx'
import { LoadingScreen } from './LoadingScreen.jsx'
import styles from './Overlay.module.css'

export function Overlay({ cameraActionsRef }) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className={styles.overlay}>
      <LoadingScreen />
      <ColorPanel cameraActionsRef={cameraActionsRef} drawerOpen={drawerOpen} />
      <button
        className={styles.drawerToggle}
        onClick={() => setDrawerOpen((v) => !v)}
        aria-label="Toggle configurator"
      >
        {drawerOpen ? '✕' : '⚙'}
      </button>
      <CarSpecs />
      <CarPicker />
    </div>
  )
}
