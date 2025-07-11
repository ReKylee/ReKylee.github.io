export interface Project {
  id: string;
  title: string;
  extension: "sysX" | "dbin" | "build"; // Custom file extensions
  date: string; // e.g., "Jul 08 2024"
  description: string;
  visual: {
    type: "image" | "video";
    src: string;
  };
  tech: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

// Fill this array with your actual project data
export const projects: Project[] = [
  {
    id: "proj_gamejam_2024",
    title: "Game Jam Winner 2024",
    extension: "sysX",
    date: "Jul 08 2024",
    description:
      'Led a team of four to create a game in 48 hours for the Global Game Jam, focusing on the theme of "Repetition". The result was a critically acclaimed puzzle-platformer that won the local "Best Design" award.',
    visual: {
      type: "video",
      src: "/videos/sample-video.mp4", // Replace with your video in /static/videos
    },
    tech: ["Unity", "C#", "Leadership", "Aseprite"],
    links: {
      github: "#", // Replace with your link
      live: "#",
    },
  },
  {
    id: "proj_academic_datastruct",
    title: "Data Structures Visualizer",
    extension: "dbin",
    date: "Mar 15 2024",
    description:
      "An academic project to visualize common data structures like linked lists and binary trees using interactive animations, built as a final for my CS201 course. Features a clean UI and step-by-step execution.",
    visual: {
      type: "image",
      src: "/images/sample-image.png", // Replace with your image in /static/images
    },
    tech: ["Svelte", "TypeScript", "D3.js", "Vite"],
    links: {
      github: "#",
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
      src: "/images/sample-image.png", // Replace with your image
    },
    tech: ["Node.js", "TypeScript", "MongoDB", "Zod", "Neverthrow"],
    links: {
      github: "#",
    },
  },
];
