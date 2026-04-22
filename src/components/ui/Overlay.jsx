import { CarPicker } from './CarPicker.jsx'
import { ColorPanel } from './ColorPanel.jsx'
import { LoadingScreen } from './LoadingScreen.jsx'
import styles from './Overlay.module.css'

export function Overlay({ cameraActionsRef }) {
  return (
    <div className={styles.overlay}>
      <LoadingScreen />
      <ColorPanel cameraActionsRef={cameraActionsRef} />
      <CarPicker />
    </div>
  )
}
