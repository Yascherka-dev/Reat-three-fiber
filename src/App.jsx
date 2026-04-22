import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { useRef, useState } from 'react'
import { Leva } from 'leva'
import { Experience } from './components/scene/Experience.jsx'
import { Overlay } from './components/ui/Overlay.jsx'
import { SplashScreen } from './components/ui/SplashScreen.jsx'

export default function App() {
  const cameraActionsRef = useRef()
  const [started, setStarted] = useState(false)

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas
        camera={{ position: [6, 18, 28], fov: 42 }}
        gl={{ antialias: true }}
        style={{ background: '#0a0a0f' }}
      >
        <Experience cameraResetRef={cameraActionsRef} started={started} />
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={1.42} radius={0.72} mipmapBlur />
        </EffectComposer>
      </Canvas>
      <div style={{
        position: 'fixed',
        inset: 0,
        background: '#07070c',
        zIndex: 200,
        opacity: started ? 0 : 1,
        transition: 'opacity 1.4s ease 0.2s',
        pointerEvents: 'none',
      }} />
      <Leva hidden={!started} />
      {started && <Overlay cameraActionsRef={cameraActionsRef} />}
      <SplashScreen onEnter={() => setStarted(true)} />
    </div>
  )
}
