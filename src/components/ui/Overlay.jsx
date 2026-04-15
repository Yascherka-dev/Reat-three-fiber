import { CarPicker } from './CarPicker.jsx'
import { ColorPanel } from './ColorPanel.jsx'
import styles from './Overlay.module.css'

export function Overlay({ cameraResetRef }) {
  return (
    <div className={styles.overlay}>
      <ColorPanel cameraResetRef={cameraResetRef} />
      <CarPicker />
    </div>
  )
}
