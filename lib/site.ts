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
      title: "UI Components Showcase",
      description:
        "A collection of reusable UI components built with Next.js, Tailwind CSS, and shadcn/ui, focusing on consistency and clean design.",
      href: "#",
      /** Fallback + hover peek when using carouselImages below. */
      previewImage: "/nextjs.png",
      /**
       * Only this project: multiple images in the modal carousel.
       * Swap paths for your own files under /public.
       */
      carouselImages: [
        "/nextjs.png",
        "/UI1.png",
        "/UI2.png",
        "/UI3.png",
        "/UI4.png",
        "/UI5.png",
      ],
      tags: ["Next.js", "Storybook"],
    },
    {
      title: "Dashboard UI",
      description:
        "A responsive dashboard interface with tables, filters, and clean layout design, focused on usability and structured front-end development.",
      href: "#",
      previewImage: "/React.png",
      tags: ["React", "TanStack Table"],
    },
    {
      title: "Landing Page UI",
      description:
        "HA responsive landing page designed with clean layout, optimized images, and smooth user experience using modern front-end tools.",
      href: "#",
      previewImage: "/tailwind.png",
      tags: ["Next.js", "Tailwind"],
    },
  ],
} as const;

export type ProjectEntry = (typeof site.projects)[number];
export type SkillEntry = (typeof site.skills)[number];
