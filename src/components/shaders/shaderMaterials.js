import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import * as THREE from 'three'

import disksVertex from '../../shaders/disks.vertex.glsl'
import disksFragment from '../../shaders/disks.fragment.glsl'
import stripesVertex from '../../shaders/stripes.vertex.glsl'
import stripesFragment from '../../shaders/stripes.fragment.glsl'
import hologramVertex from '../../shaders/hologram.vertex.glsl'
import hologramFragment from '../../shaders/hologram.fragment.glsl'
import waveVertex from '../../shaders/wave.vertex.glsl'
import waveFragment from '../../shaders/wave.fragment.glsl'

const defaultUniforms = {
  uAlpha: 0.5,
  uMultiplier: 12,
  uColorA: new THREE.Color('#ff0000'),
  uColorB: new THREE.Color('#0000ff'),
  uTime: 0,
}

export const DisksShaderMaterial = shaderMaterial({ ...defaultUniforms }, disksVertex, disksFragment)
export const StripesShaderMaterial = shaderMaterial({ ...defaultUniforms }, stripesVertex, stripesFragment)
export const HologramShaderMaterial = shaderMaterial(
  { ...defaultUniforms, uColorA: new THREE.Color('#00ffff'), uColorB: new THREE.Color('#0044ff') },
  hologramVertex,
  hologramFragment
)
export const WaveShaderMaterial = shaderMaterial(
  { ...defaultUniforms, uColorA: new THREE.Color('#ff6600'), uColorB: new THREE.Color('#ffff00') },
  waveVertex,
  waveFragment
)

extend({ DisksShaderMaterial, StripesShaderMaterial, HologramShaderMaterial, WaveShaderMaterial })
