import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

import disksVert from './disks.vertex.glsl'
import disksFrag from './disks.fragment.glsl'
import stripesVert from './stripes.vertex.glsl'
import stripesFrag from './stripes.fragment.glsl'
import hologramVert from './hologram.vertex.glsl'
import hologramFrag from './hologram.fragment.glsl'
import waveVert from './wave.vertex.glsl'
import waveFrag from './wave.fragment.glsl'

const DisksShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uAlpha: 0.5,
    uMultiplier: 12,
    uColorA: new THREE.Color('#ff0000'),
    uColorB: new THREE.Color('#0000ff'),
  },
  disksVert,
  disksFrag,
)

const StripesShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uAlpha: 0.5,
    uMultiplier: 42,
    uColorA: new THREE.Color('#ff0000'),
    uColorB: new THREE.Color('#ffff00'),
  },
  stripesVert,
  stripesFrag,
)

const HologramShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uAlpha: 0.8,
    uMultiplier: 20,
    uColorA: new THREE.Color('#00ffff'),
    uColorB: new THREE.Color('#0044ff'),
  },
  hologramVert,
  hologramFrag,
)

const WaveShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uAlpha: 0.7,
    uMultiplier: 8,
    uColorA: new THREE.Color('#ff6600'),
    uColorB: new THREE.Color('#ffff00'),
  },
  waveVert,
  waveFrag,
)

extend({
  DisksShaderMaterial,
  StripesShaderMaterial,
  HologramShaderMaterial,
  WaveShaderMaterial,
})
