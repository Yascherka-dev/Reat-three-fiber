# Car Configurator — React Three Fiber

Interactive 3D car configurator built with React Three Fiber. Pick a car, customize its color, finish and shader in real time.

## Stack

- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) — React renderer for Three.js
- [@react-three/drei](https://github.com/pmndrs/drei) — helpers (OrbitControls, Environment, useGLTF…)
- [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing) — Bloom effect
- [Zustand](https://github.com/pmndrs/zustand) — global state
- [GSAP](https://gsap.com/) — car entry/exit animations
- [Leva](https://github.com/pmndrs/leva) — shader parameter controls
- [Vite](https://vitejs.dev/) — build tool

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Features

- **4 cars** — Cybertruck, Sports Car, SUV, Muscle Car
- **Color picker** — real-time body color change
- **Finish** — matte / glossy / metallic
- **Shaders** — disks, stripes, hologram, wave (with live parameter tweaks via Leva panel)
- **Animated transitions** — cars drop in/out with GSAP
- **Rotating podium** — auto-spinning platform
- **Orbit controls** — drag to inspect, scroll to zoom

## Project structure

```
src/
├── components/
│   ├── cars/        # Car components + CarLoader
│   ├── scene/       # Experience, Garage, CameraRig
│   └── ui/          # Overlay, CarPicker, ColorPanel
├── config/          # Car list + finish properties
├── shaders/         # GLSL shaders + shader materials
└── store/           # Zustand store
public/
├── models/          # GLB/GLTF car models
└── thumbnails/      # Car picker SVG thumbnails
```
