import { writable } from 'svelte/store';

function themeStore() {
  const { subscribe, set, update } = writable(true)

  return {
    subscribe,
    beLight: () => {
      update((n) => true);
      localStorage.setItem("theme", "light");
    },
    beDark: () => {
      update((n) => false);
      localStorage.setItem("theme", "dark");
    }
  }
}

export const themeControl = themeStore();