import { useState, useRef, useEffect } from 'react'
import { HexColorPicker, HexColorInput } from 'react-colorful'
import styles from './CustomColorPicker.module.css'

export function CustomColorPicker({ color, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    function onPointerDown(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        title="Custom color"
      >
        <span className={styles.swatch} style={{ background: color }} />
        <span className={styles.hex}>{color.toUpperCase()}</span>
        <span className={styles.arrow}>{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className={styles.popup}>
          <HexColorPicker color={color} onChange={onChange} />
          <div className={styles.inputRow}>
            <span className={styles.hash}>#</span>
            <HexColorInput
              color={color}
              onChange={onChange}
              className={styles.input}
              prefixed={false}
            />
          </div>
        </div>
      )}
    </div>
  )
}
