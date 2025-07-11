import { writable } from "svelte/store";
import type { Project } from "$lib/data/projects";

type TerminalState =
    | "waiting"
    | "booting"
    | "listing_files"
    | "viewing_project";

interface TerminalStore {
    state: TerminalState;
    activeProject: Project | null;
}

export const terminalStore = writable<TerminalStore>({
    state: "waiting",
    activeProject: null,
});

// --- Helper Functions ---

export const startBooting = () => {
    terminalStore.update((store) => ({
        ...store,
        state: "booting",
    }));
};

export const viewProject = (project: Project) => {
    terminalStore.update(() => ({
        state: "viewing_project",
        activeProject: project,
    }));
};

export const closeProject = () => {
    terminalStore.update((store) => ({
        state: "listing_files",
        activeProject: null,
    }));
};

export const finishBooting = () => {
    terminalStore.update((store) => ({
        ...store,
        state: "listing_files",
    }));
};
