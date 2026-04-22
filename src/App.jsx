import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { useEffect, useRef, useState } from 'react'
import { Experience } from './components/scene/Experience.jsx'
import { Overlay } from './components/ui/Overlay.jsx'

export default function App() {
  const cameraResetRef = useRef()
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setFadeOut(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 3, 9], fov: 42 }}
        gl={{ antialias: true }}
        style={{ background: '#0a0a0f' }}
      >
        <Experience cameraResetRef={cameraResetRef} />
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={1.42} radius={0.72} mipmapBlur />
        </EffectComposer>
      </Canvas>
      <Overlay cameraResetRef={cameraResetRef} />
      <div style={{
        position: 'fixed', inset: 0, background: '#000',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 1.8s ease',
        pointerEvents: 'none',
        zIndex: 100,
      }} />
    </div>
  )
}
