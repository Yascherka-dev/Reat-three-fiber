# Car Configurator — React Three Fiber

---

## 🇫🇷 Version française

Configurateur de voiture 3D interactif construit avec React Three Fiber. L'objectif était de créer une expérience de présentation produit immersive — comme un configurateur en ligne haut de gamme — entièrement dans le navigateur, sans moteur 3D externe.

### Lancer le projet

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173)

### Pourquoi ces technos ?

**React Three Fiber** — on aurait pu utiliser Three.js directement, mais R3F permet d'écrire la scène 3D comme des composants React. Ça rend le code maintenable, réutilisable, et compatible avec tout l'écosystème React (state, hooks, context).

**@react-three/drei** — une bibliothèque de helpers pour R3F. Elle fournit `OrbitControls` (rotation caméra à la souris), `Environment` (éclairage HDR réaliste), `useGLTF` (chargement de modèles 3D), et `useProgress` (suivi du chargement). Écrire tout ça from scratch aurait pris des semaines.

**@react-three/postprocessing** — ajoute des effets de post-traitement sur le rendu final. On utilise `Bloom` pour les reflets lumineux sur la carrosserie : ça donne cet aspect brillant et cinématique qu'on voit dans les rendus 3D pro.

**Zustand** — gestion d'état global ultra-légère. Redux serait surdimensionné ici. Zustand permet de partager la voiture active, la couleur, la finition et le shader entre tous les composants sans prop drilling.

**GSAP** — bibliothèque d'animation JavaScript de référence. Utilisée pour les transitions de caméra (intro cinématique, présets de vue) et les animations d'entrée des voitures. Beaucoup plus précis et fluide que les animations CSS pour du 3D.

**Leva** — panneau de contrôle flottant pour ajuster les paramètres des shaders en temps réel (intensité, fréquence, couleurs). Indispensable en développement pour tweaker les valeurs sans recharger la page.

**react-colorful** — color picker léger et sans dépendances. Remplace `<input type="color">` du navigateur par une roue de couleur personnalisée, intégrée dans l'UI de l'application.

**Vite** — outil de build moderne. Démarre en moins d'une seconde, hot reload instantané. Bien supérieur à Webpack/CRA pour un projet Three.js où on modifie souvent les shaders GLSL.

### Fonctionnalités

- Écran d'accueil avec fondu cinématique et voyage de caméra depuis les hauteurs
- 7 modèles de voitures, chacun avec ses propres specs techniques
- Couleur de carrosserie en temps réel via color picker personnalisé
- 3 finitions : mate, brillante, métallisée
- 4 shaders custom : disques, rayures, hologramme, vague — avec paramètres Leva
- Présets caméra : Face / Côté / Dessus / Reset avec transitions GSAP
- Auto-rotation de la caméra après 3 secondes d'inactivité
- Écran de chargement avec barre de progression
- Layout responsive pour mobile

### Structure

```
src/
├── components/
│   ├── cars/        # Un composant par voiture + CarLoader (sélecteur dynamique)
│   ├── scene/       # Experience (scène principale), Garage, CameraRig
│   └── ui/          # SplashScreen, Overlay, ColorPanel, CarSpecs, LoadingScreen
├── config/          # Données des voitures (specs, couleurs, finitions)
├── shaders/         # Shaders GLSL + matériaux Three.js associés
└── store/           # Store Zustand (voiture active, couleur, finition, shader)
public/
├── models/          # Modèles 3D au format GLB
└── thumbnails/      # Vignettes pour le sélecteur de voitures
```

---

## 🇬🇧 English version

An interactive 3D car configurator built with React Three Fiber. The goal was to build an immersive product presentation experience — like a premium online configurator — running entirely in the browser, with no external 3D engine.

### Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Why these technologies?

**React Three Fiber** — we could have used raw Three.js, but R3F lets you write the 3D scene as React components. This keeps the code maintainable, composable, and compatible with the full React ecosystem (state, hooks, context).

**@react-three/drei** — a helpers library for R3F. It provides `OrbitControls` (mouse-driven camera rotation), `Environment` (realistic HDR lighting), `useGLTF` (3D model loading), and `useProgress` (asset loading tracking). Building these from scratch would have taken weeks.

**@react-three/postprocessing** — adds post-processing effects on top of the rendered output. We use `Bloom` for the glowing reflections on the car body — it gives that cinematic, high-end look you see in professional 3D renders.

**Zustand** — minimal global state management. Redux would be overkill here. Zustand lets us share the active car, color, finish, and shader across all components without prop drilling.

**GSAP** — the industry-standard JavaScript animation library. Used for all camera transitions (cinematic intro, view presets) and car entry animations. Far more precise and fluid than CSS animations for 3D scene work.

**Leva** — a floating control panel for tweaking shader parameters in real time (intensity, frequency, colors). Essential during development to dial in values without reloading the page.

**react-colorful** — a lightweight, dependency-free color picker. Replaces the browser's native `<input type="color">` with a custom color wheel integrated into the app's UI.

**Vite** — modern build tool. Starts in under a second, instant hot reload. Far superior to Webpack/CRA for a Three.js project where you're constantly iterating on GLSL shaders.

### Features

- Cinematic splash screen with black curtain fade and camera travel from above
- 7 car models, each with its own technical specs
- Real-time body color via custom color picker
- 3 finish types: matte, glossy, metallic
- 4 custom shaders: disks, stripes, hologram, wave — all tweakable via Leva
- Camera presets: Front / Side / Top / Reset with smooth GSAP transitions
- Auto-rotate after 3 seconds of inactivity
- Loading screen with progress bar
- Responsive mobile layout

### Project structure

```
src/
├── components/
│   ├── cars/        # One component per car + CarLoader (dynamic selector)
│   ├── scene/       # Experience (main scene), Garage, CameraRig
│   └── ui/          # SplashScreen, Overlay, ColorPanel, CarSpecs, LoadingScreen
├── config/          # Car data (specs, colors, finishes)
├── shaders/         # GLSL shaders + associated Three.js materials
└── store/           # Zustand store (active car, color, finish, shader)
public/
├── models/          # 3D models in GLB format
└── thumbnails/      # Thumbnails for the car selector
```
