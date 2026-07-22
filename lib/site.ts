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
  /** Live demos live here — Selected work cards CTA to this portal. */
  portalUrl: "https://zart-portal.vercel.app/",
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
  /**
   * Case notes on this site. Live demos open via `portalUrl`.
   */
  projects: [
    {
      title: "Ellen’s Bakery",
      description:
        "A bakery website showcasing cakes and pastries with a warm, product-first layout.",
      outcome: "Bakery site with clear product presentation.",
      previewImage: "/pops.png",
      tags: ["Next.js", "Tailwind", "Marketing"],
    },
    {
      title: "Barber Salon",
      description:
        "A barber salon site with booking flow and blog content — built for easy browsing and conversions.",
      outcome: "Salon site with booking and content.",
      previewImage: "/UI5.png",
      tags: ["React", "Tailwind", "Booking"],
    },
    {
      title: "CueSing",
      description:
        "A karaoke experience with a song library — focused on playful UI and fast browsing.",
      outcome: "Karaoke UI with song library browsing.",
      previewImage: "/UI1.png",
      tags: ["Next.js", "Tailwind", "Interactive"],
    },
    {
      title: "Studio Zero",
      description:
        "A karaoke-style product surface with a song library and a clean, modern interface.",
      outcome: "Interactive karaoke site experience.",
      previewImage: "/codeee.png",
      tags: ["Next.js", "Tailwind", "Interactive"],
    },
  ],
} as const;

export type ProjectEntry = (typeof site.projects)[number];
export type SkillEntry = (typeof site.skills)[number];
