import { CarPicker } from './CarPicker.jsx'
import { ColorPanel } from './ColorPanel.jsx'
import styles from './Overlay.module.css'

export function Overlay({ cameraActionsRef }) {
  return (
    <div className={styles.overlay}>
      <ColorPanel cameraActionsRef={cameraActionsRef} />
      <CarPicker />
    </div>
  )
}
