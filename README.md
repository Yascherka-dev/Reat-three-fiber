# Car Configurator — React Three Fiber

Interactive 3D car configurator built with React Three Fiber. Cinematic intro, real-time customization, 7 models.

## Stack

- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) — React renderer for Three.js
- [@react-three/drei](https://github.com/pmndrs/drei) — OrbitControls, Environment, useGLTF, useProgress…
- [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing) — Bloom
- [Zustand](https://github.com/pmndrs/zustand) — global state
- [GSAP](https://gsap.com/) — camera & car animations
- [Leva](https://github.com/pmndrs/leva) — shader parameter tweaks
- [react-colorful](https://github.com/omgovich/react-colorful) — custom color picker
- [Vite](https://vitejs.dev/) — build tool

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Features

- **Splash screen** — cinematic entry with fade + camera travel from above
- **7 cars** — each with live color, finish (matte / glossy / metallic) and custom shaders
- **Shaders** — disks, stripes, hologram, wave with live Leva controls
- **Camera presets** — Front / Side / Top / Reset with smooth GSAP transitions
- **Auto-rotate** — orbit auto-rotation kicks in after 3s idle
- **Car specs** — power, top speed, 0–100 per model
- **Loading screen** — progress bar while assets load
- **Responsive** — mobile drawer layout

## Project structure

```
src/
├── components/
│   ├── cars/        # Car components + CarLoader
│   ├── scene/       # Experience, Garage, CameraRig
│   └── ui/          # Overlay, SplashScreen, ColorPanel, CarSpecs, LoadingScreen
├── config/          # Car list + finish/shader config
├── shaders/         # GLSL shaders + materials
└── store/           # Zustand store
public/
├── models/          # GLB car models
└── thumbnails/      # Car picker thumbnails
```
