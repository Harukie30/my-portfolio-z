/** Edit this file to personalize your portfolio copy and links. */
export const site = {
  name: "Amadeus Mozart",
  /** Shown on the entry page (/) before visitors open your portfolio */
  landingIntro: "Welcome — thanks for stopping by.",
  role: "Frontend Developer",
  tagline:
    "I build fast, accessible interfaces with React, TypeScript, and a focus on craft and performance.",
  email: "abella_hero@yahoo.com",
  location: "Philippines",
  /** Hero avatar: put your photo at `public/portrait.jpg` (square ~800px is ideal). Use `""` for initials only. */
  portraitImage: "/hand.jpg",
  social: {
    github: "https://github.com/Harukie30",
    linkedin: "https://linkedin.com",
  },
  /** Tech stack: add matching files under `/public` or swap paths. */
  skills: [
    { name: "Next.js", image: "/nextjs.png" },
    { name: "TypeScript", image: "/Typescript.png" },
    { name: "React", image: "/React.png" },
    { name: "Tailwind CSS", image: "/tailwind.png" },
    { name: "Accessibility", image: "/globe.svg" },
  ],
  projects: [
    {
      title: "Design system site",
      description:
        "Documentation and live examples for a component library used across product teams.",
      details:
        "Led documentation IA, MDX content, and live playgrounds. Focused on accessible patterns, token naming, and adoption metrics with design and engineering.",
      href: "#",
      /** Shown in the “Selected work” hover preview (place your own shots in /public). */
      previewImage: "/nextjs.png",
      tags: ["Next.js", "Storybook"],
    },
    {
      title: "Commerce dashboard",
      description:
        "Responsive analytics UI with charts, filters, and keyboard-friendly data tables.",
      details:
        "Built filterable views, saved segments, and export flows. Emphasized table semantics, lazy loading, and consistent empty/loading states.",
      href: "#",
      previewImage: "/React.png",
      tags: ["React", "TanStack Table"],
    },
    {
      title: "Marketing landing",
      description:
        "High-conversion landing page with optimized images, SEO, and Core Web Vitals in mind.",
      details:
        "Structured content for SEO, image sizing and priority, and performance budgets. Collaborated on copy and conversion experiments.",
      href: "#",
      previewImage: "/tailwind.png",
      tags: ["Next.js", "Tailwind"],
    },
  ],
} as const;

export type ProjectEntry = (typeof site.projects)[number];
export type SkillEntry = (typeof site.skills)[number];
