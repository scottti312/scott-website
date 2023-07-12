import { writable } from 'svelte/store';

function themeStore() {
  const { subscribe, set, update } = writable(true)

  return {
    subscribe,
    beLight: () => update((n) => true),
    beDark: () => update((n) => false),
  }
}

function gradientStore() {
  const { subscribe, set, update } = writable(true)
}

export const themeControl = themeStore();