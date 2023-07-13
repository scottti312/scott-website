import { writable } from 'svelte/store';

function themeStore() {
  const { subscribe, set, update } = writable(true)

  return {
    subscribe,
    beLight: () => update((n) => true),
    beDark: () => update((n) => false),
  }
}

export const themeControl = themeStore();