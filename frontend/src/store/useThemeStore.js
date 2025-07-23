import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("varta-theme") || "night",
  setTheme: (theme) => {
    localStorage.setItem("varta-theme",theme);
    set({theme})
  }
}))