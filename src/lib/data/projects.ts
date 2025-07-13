export interface Project {
    id: string;
    title: string;
    extension: "sysX" | "dbin" | "build";
    date: string;
    description: string;
    visual: {
        type: "image" | "video" | "embed";
        src: string;
    };
    tech: string[];
    links?: {
        github?: string;
        live?: string;
    };
}

export const projects: Project[] = [
    {
        id: "proj_gamejam_2025",
        title: "Global Game Jam 2025",
        extension: "sysX",
        date: "Jul 08 2025",
        description:
            'Led a team of six to create a game in 72 hours for the Global Game Jam, focusing on the theme of "Bubbles". The result was a small minigame collection called Pazpaz!',
        visual: {
            type: "image",
            src: "/pazpaz.gif",
        },
        tech: ["Unity", "C#", "Mobile", "Leadership"],
        links: {
            live: "https://rekyconan.itch.io/pazpaz",
        },
    },
    {
        id: "proj_kirby_charactercontroller",
        title: "Modular Character Controller",
        extension: "sysX",
        date: "Aug 04 2025",
        description:
            "My Year 2 Finals project in Game Development. An advanced, modular Character Controller made in Unity, with a Kirby theme. Meant to showcase the various SOLID principles.",
        visual: {
            type: "embed",
            src: "https://youtu.be/MLwYUZQl6t0",
        },
        tech: ["Unity", "C#", "SOLID", "Polished", "Game Logic"],
        links: {
            github: "https://github.com/ReKylee/KirbyCharacterController",
        },
    },
    {
        id: "proj_freelance_backend",
        title: "Freelance Backend System",
        extension: "build",
        date: "Dec 01 2023",
        description:
            "Designed and built a robust server-side system for a client using TypeScript and Domain-Driven Design. Managed full-stack components, from databases to complex business logic and admin endpoints.",
        visual: {
            type: "image",
            src: "/images/sample-image.png",
        },
        tech: [
            "Node.js",
            "Express",
            "TypeScript",
            "MySQL",
            "Zod",
            "Neverthrow",
        ],
        links: {
            github: "https://github.com/ReKylee/BarberAppBackendDemo",
        },
    },
    {
        id: "proj_notes_backend",
        title: "Freelance Backend System",
        extension: "sysX",
        date: "Aug 01 2025",
        description:
            "Developed the backend for our final Web Development project using TypeScript and Domain-Driven Design, handling everything from data modeling to admin-specific API endpoints.",
        visual: {
            type: "image",
            src: "/images/sample-image.png",
        },
        tech: [
            "Node.js",
            "Express",
            "TypeScript",
            "MongoDB",
            "Zod",
            "Neverthrow",
        ],
        links: {
            github: "https://github.com/ReKylee/PickMi-Backend",
        },
    },
    {
        id: "proj_inscryption_mp",
        title: "Multiplayer Inscryption",
        extension: "sysX",
        date: "Oct 05 2024",
        description:
            "My Year 1 Finals project in Game Development. Unity clone of Inscryption for an online two-player game mode!",
        visual: {
            type: "embed",
            src: "https://youtu.be/qL7ZnCpGWyk",
        },
        tech: ["Unity", "C#", "Client-Server", "Polished", "Game Logic"],
        links: {
            github: "https://github.com/ReKylee/InscryptionMultiplayerCollege",
        },
    },
    {
        id: "proj_gametracker",
        title: "Game Completion Tracking Website",
        extension: "build",
        date: "Mar 23 2025",
        description:
            "Designed and built, in a day, a responsive and sweet game completion tracker!",
        visual: {
            type: "image",
            src: "/GameTracker.gif",
        },
        tech: ["Node.js", "Express", "Javascript", "MySQL"],
        links: {},
    },
    {
        id: "proj_battleships",
        title: "Battleships In The Terminal",
        extension: "dbin",
        date: "Nov 26 2024",
        description:
            "The classic game of Battleships in your Terminal! Built with the FXUI library, this little project allows you to play against a novice AI!",
        visual: {
            type: "image",
            src: "/BattleshipsInTerminal.gif",
        },
        tech: ["C", "C++", "Libraries", "UI", "Game Logic"],
        links: {
            github: "https://github.com/ReKylee/BattleshipsHW",
        },
    },
    {
        id: "proj_ultimate_charactercatalog",
        title: "Ultimate Character Catalog",
        extension: "dbin",
        date: "Nov 26 2024",
        description:
            "Terminal UI built with the FXUI library to display a catalog of characters loaded from a file. Lets you add, remove, sort, search and update the catalog!",
        visual: {
            type: "image",
            src: "/CatalogApp.gif",
        },
        tech: ["C", "C++", "Libraries", "UI"],
        links: {
            github: "https://github.com/ReKylee/CatalogApp",
        },
    },
    {
        id: "proj_jujutsu_nvim",
        title: "Jujutsu NeoVim",
        extension: "build",
        date: "Jun 28 2025",
        description: "Jujutsu Version Control Integration for NeoVim",
        visual: {
            type: "image",
            src: "/jjnvim.gif",
        },
        tech: ["Lua"],
        links: {
            github: "https://github.com/ReKylee/jjui.nvim",
        },
    },
];
