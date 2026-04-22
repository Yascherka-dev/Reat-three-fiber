import { CARS } from '../../config/cars.config.js'
import { useConfiguratorStore } from '../../store/useConfiguratorStore.js'
import { CustomColorPicker } from './CustomColorPicker.jsx'
import styles from './ColorPanel.module.css'

const FINISHES = ['matte', 'glossy', 'metallic']
const ENVIRONMENTS = ['garage', 'studio', 'city']

const CAMERA_PRESETS = [
  { label: 'Front', key: 'front' },
  { label: 'Side',  key: 'side' },
  { label: 'Top',   key: 'top' },
  { label: 'Reset', key: 'reset' },
]

export function ColorPanel({ cameraActionsRef }) {
  const activeCar = useConfiguratorStore((s) => s.activeCar)
  const color = useConfiguratorStore((s) => s.color)
  const finish = useConfiguratorStore((s) => s.finish)
  const setColor = useConfiguratorStore((s) => s.setColor)
  const setFinish = useConfiguratorStore((s) => s.setFinish)
  const environment = useConfiguratorStore((s) => s.environment)
  const setEnvironment = useConfiguratorStore((s) => s.setEnvironment)

  const carConfig = CARS.find((c) => c.id === activeCar)

  return (
    <div className={styles.panel}>
      <div className={styles.title}>{carConfig?.label ?? activeCar}</div>

      <div>
        <div className={styles.label}>Color</div>
        <div className={styles.swatches}>
          {carConfig?.colors.map((c) => (
            <button
              key={c}
              className={`${styles.swatch} ${color === c ? styles.active : ''}`}
              style={{ background: c }}
              onClick={() => setColor(c)}
              title={c}
            />
          ))}
        </div>
        <CustomColorPicker color={color} onChange={setColor} />
      </div>

      <div>
        <div className={styles.label}>Finish</div>
        <div className={styles.finishBtns}>
          {FINISHES.map((f) => (
            <button
              key={f}
              className={`${styles.finishBtn} ${finish === f ? styles.active : ''}`}
              onClick={() => setFinish(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className={styles.label}>Environment</div>
        <div className={styles.finishBtns}>
          {ENVIRONMENTS.map((e) => (
            <button
              key={e}
              className={`${styles.finishBtn} ${environment === e ? styles.active : ''}`}
              onClick={() => setEnvironment(e)}
            >
              {e}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className={styles.label}>Camera</div>
        <div className={styles.finishBtns}>
          {CAMERA_PRESETS.map(({ label, key }) => (
            <button
              key={key}
              className={styles.finishBtn}
              onClick={() => cameraActionsRef?.current?.[key]?.()}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
