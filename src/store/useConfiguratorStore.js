import { create } from 'zustand'

export const useConfiguratorStore = create((set) => ({
  activeCar: 'cybertruck',
  setActiveCar: (id) => set({ activeCar: id, color: '#ffffff' }),

  color: '#ffffff',
  setColor: (color) => set({ color }),

  finish: 'glossy',
  setFinish: (finish) => set({ finish }),

  shader: 'none',
  setShader: (shader) => set({ shader }),

  environment: 'garage',
  setEnvironment: (environment) => set({ environment }),
}))
