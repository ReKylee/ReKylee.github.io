export type SkillLevel = "proficient" | "advanced" | "expert";

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
