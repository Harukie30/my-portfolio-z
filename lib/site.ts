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
  /** Hero avatar: put your photo in `/public` (square ~800px is ideal). Use `""` for initials only. */
  portraitImage: "/amadeus mozart.jpg",
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
    { name: "shadcn/ui", image: "/shad.png" },
  ],
  projects: [
    {
      title: "UI Components Showcase",
      description:
        "A growing library of reusable UI patterns built with Next.js, Tailwind CSS, and shadcn/ui — focused on consistent spacing, accessible defaults, and clean composition.",
      href: "#",
      /** Fallback + hover peek when using carouselImages below. */
      previewImage: "/shad.png",
      /**
       * Only this project: multiple images in the modal carousel.
       * Swap paths for your own files under /public.
       */
      carouselImages: [
        "/UI1.png",
        "/UI2.png",
        "/UI3.png",
        "/UI4.png",
        "/UI5.png",
        "/UI6.png",
        "/UI7.png",
        "/UI8.png",
        "/reggg.png",
        "/modal.png",
      ],
      tags: ["Next.js", "Tailwind", "shadcn/ui"],
    },
    {
      title: "Performance Evaluation Dashboard",
      description:
        "An HR performance evaluation system with role-based views for employees, evaluators, and HR — focused on clean layouts, smooth flows, and clear feedback.",
      href: "#",
      previewImage: "/React.png",
      carouselImages: [
        "/emppp.png",
        "/evall.png",
        "/HR.png",
      ],
      tags: ["React", "Tailwind", "HR System"],
    },
    {
      title: "Landing Page UI",
      description:
        "A responsive marketing landing page with a clear hero, optimized imagery, and a smooth scroll experience — built with performance and readability in mind.",
      href: "#",
      previewImage: "/tailwind.png",
      tags: ["Next.js", "Tailwind"],
    },
  ],
} as const;

export type ProjectEntry = (typeof site.projects)[number];
export type SkillEntry = (typeof site.skills)[number];
