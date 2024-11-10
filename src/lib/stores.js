import { writable } from "svelte/store";

export let isHomepage = writable(false);
export let showModal = writable(false);