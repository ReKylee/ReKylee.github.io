import { writable } from "svelte/store";

// A writable store that holds the harshness value (0.0 to 1.0)
// We'll start with a subtle default value.
export const crtHarshness = writable(0.15);
