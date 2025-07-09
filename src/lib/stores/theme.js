import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const createThemeStore = () => {
  const initialValue = browser ? window.localStorage.getItem('theme') ?? 'light' : 'light';
  const { subscribe, set } = writable(initialValue);

  return {
    subscribe,
    setTheme: (/** @type {string} */ theme) => {
      if (browser) {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
      }
      set(theme);
    },
    init: () => {
      if (browser) {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
        set(initialTheme);
        document.documentElement.classList.add(initialTheme);
      }
    }
  };
};

export const theme = createThemeStore();
