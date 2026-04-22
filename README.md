# Car Configurator — React Three Fiber

Configurateur 3D interactif construit avec React Three Fiber. Intro cinématique, personnalisation en temps réel, 7 modèles.

> Interactive 3D car configurator built with React Three Fiber. Cinematic intro, real-time customization, 7 models.

---

## Stack

- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) — rendu React pour Three.js
- [@react-three/drei](https://github.com/pmndrs/drei) — OrbitControls, Environment, useGLTF, useProgress…
- [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing) — Bloom
- [Zustand](https://github.com/pmndrs/zustand) — état global
- [GSAP](https://gsap.com/) — animations caméra & voitures
- [Leva](https://github.com/pmndrs/leva) — contrôles shaders en direct
- [react-colorful](https://github.com/omgovich/react-colorful) — color picker personnalisé
- [Vite](https://vitejs.dev/) — outil de build

---

## Lancer le projet / Getting started

```bash
npm install
npm run dev
```

Ouvrir / Open [http://localhost:5173](http://localhost:5173)

---

## Fonctionnalités / Features

| FR | EN |
|----|----|
| Écran d'accueil cinématique avec fondu et voyage caméra | Cinematic splash screen with fade + camera travel |
| 7 voitures avec couleur, finition et shader en temps réel | 7 cars with live color, finish and shader |
| Shaders : disques, rayures, hologramme, vague (Leva) | Shaders: disks, stripes, hologram, wave (Leva) |
| Présets caméra : Face / Côté / Dessus / Reset | Camera presets: Front / Side / Top / Reset |
| Auto-rotation après 3s d'inactivité | Auto-rotate after 3s idle |
| Fiche technique par modèle | Car specs per model |
| Écran de chargement avec barre de progression | Loading screen with progress bar |
| Layout responsive mobile | Responsive mobile layout |

---

## Structure du projet / Project structure

```
src/
├── components/
│   ├── cars/        # Composants voitures + CarLoader
│   ├── scene/       # Experience, Garage, CameraRig
│   └── ui/          # Overlay, SplashScreen, ColorPanel, CarSpecs, LoadingScreen
├── config/          # Liste des voitures, finitions, shaders
├── shaders/         # Shaders GLSL + matériaux
└── store/           # Store Zustand
public/
├── models/          # Modèles GLB
└── thumbnails/      # Vignettes du sélecteur
```
