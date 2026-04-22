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
        camera={{ position: [0, 3, 9], fov: 42 }}
        gl={{ antialias: true }}
        style={{ background: '#0a0a0f' }}
      >
        <Experience cameraResetRef={cameraActionsRef} started={started} />
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={1.42} radius={0.72} mipmapBlur />
        </EffectComposer>
      </Canvas>
      <Leva hidden={!started} />
      {started && <Overlay cameraActionsRef={cameraActionsRef} />}
      <SplashScreen onEnter={() => setStarted(true)} />
    </div>
  )
}
