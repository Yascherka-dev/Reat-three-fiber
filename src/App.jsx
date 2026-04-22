import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { useRef } from 'react'
import { Experience } from './components/scene/Experience.jsx'
import { Overlay } from './components/ui/Overlay.jsx'

export default function App() {
  const cameraActionsRef = useRef()

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 3, 9], fov: 42 }}
        gl={{ antialias: true }}
        style={{ background: '#0a0a0f' }}
      >
        <Experience cameraResetRef={cameraActionsRef} />
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={1.42} radius={0.72} mipmapBlur />
        </EffectComposer>
      </Canvas>
      <Overlay cameraActionsRef={cameraActionsRef} />
    </div>
  )
}
