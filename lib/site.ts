/** Edit this file to personalize your portfolio copy and links. */
export const site = {
  name: "Amadeus Mozart",
  /** Shown on the entry page (/) before visitors open your portfolio */
  landingIntro: "Welcome — thanks for stopping by.",
  role: "Frontend Developer",
  tagline:
    "I build fast, accessible interfaces with React, TypeScript, and a focus on craft and performance.",
  email: "amadeusmozartlabao@gmail.com",
  location: "Philippines",
  /** Hero avatar: put your photo in `/public` (square ~800px is ideal). Use `""` for initials only. */
  portraitImage: "/amadeus mozart.jpg",
  availableForFreelance: true,
  /** Short list under Selected work — what clients can hire you for. */
  services: [
    {
      title: "Landing & marketing pages",
      detail: "Clear heroes, responsive layouts, and smooth scroll experiences.",
    },
    {
      title: "Dashboards & admin UIs",
      detail: "Role-based views, clean tables, and flows that stay easy to use.",
    },
    {
      title: "UI systems & components",
      detail: "Reusable patterns with Next.js, Tailwind, and shadcn/ui.",
    },
  ],
  social: {
    github: "https://github.com/Harukie30",
    linkedin: "in/amadeus-mozart-labao-5829a241b",
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
      /** Name shown in the Live projects modal (not the card title). */
      liveName: "Component Gallery",
      description:
        "A growing library of reusable UI patterns built with Next.js, Tailwind CSS, and shadcn/ui — focused on consistent spacing, accessible defaults, and clean composition.",
      outcome: "Reusable UI patterns with accessible, consistent defaults.",
      /** Deployed live URL — shown in the shared Live projects modal. */
      href: "https://harukie30.github.io/UI-Components-Showcase/",
      previewImage: "/shad.png",
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
      /** Name shown in the Live projects modal (not the card title). */
      liveName: "HR Eval System",
      description:
        "An HR performance evaluation system with role-based views for employees, evaluators, and HR — focused on clean layouts, smooth flows, and clear feedback.",
      outcome: "Role-based HR views for employees, evaluators, and HR.",
      /** Deployed live URL — shown in the shared Live projects modal. */
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
      /** Name shown in the Live projects modal (not the card title). */
      liveName: "Marketing Landing",
      description:
        "A responsive marketing landing page with a clear hero, optimized imagery, and a smooth scroll experience — built with performance and readability in mind.",
      outcome: "Responsive marketing page with a clear hero and smooth scroll.",
      /** Deployed live URL — shown in the shared Live projects modal. */
      href: "#",
      previewImage: "/tailwind.png",
      tags: ["Next.js", "Tailwind"],
    },
  ],
} as const;

export type ProjectEntry = (typeof site.projects)[number];
export type SkillEntry = (typeof site.skills)[number];
