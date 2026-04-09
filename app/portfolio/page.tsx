import { AbstractHeroShapes } from "@/components/abstract-hero-shapes";
import { PortfolioAboutSection } from "@/components/portfolio-about-section";
import { ContactConversationDecor } from "@/components/contact-conversation-decor";
import { PortfolioContactCard } from "@/components/portfolio-contact-card";
import { PortfolioProjects } from "@/components/portfolio-projects";
import { SiteHeader } from "@/components/site-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio",
  description: site.tagline,
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
      {children}
    </p>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section
          id="top"
          className="relative isolate overflow-hidden border-b border-border/60"
          aria-labelledby="hero-heading"
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,oklch(0.72_0.14_252/0.22),transparent_55%)] dark:bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,oklch(0.48_0.16_252/0.28),transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_100%_50%,oklch(0.82_0.1_230/0.14),transparent_50%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_100%_50%,oklch(0.42_0.12_240/0.2),transparent_50%)]"
            aria-hidden
          />
          <AbstractHeroShapes />

          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:gap-16 sm:px-6 sm:py-28 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-20 lg:py-32">
            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap items-center gap-2">
                {site.skills.slice(0, 4).map((s) => (
                  <Badge
                    key={s.name}
                    variant="secondary"
                    className="rounded-full border border-border/60 bg-background/60 px-3 py-0.5 font-normal backdrop-blur-sm"
                  >
                    {s.name}
                  </Badge>
                ))}
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <SectionLabel>Available for work</SectionLabel>
                  <p className="text-sm font-medium text-muted-foreground">
                    {site.role}
                  </p>
                </div>
                <h1
                  id="hero-heading"
                  className="font-heading text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
                >
                  Hi, I&apos;m {site.name.split(" ")[0]}.{" "}
                  <span className="text-gradient">I ship interfaces</span>{" "}
                  people enjoy using.
                </h1>
                <p className="max-w-xl text-lg text-muted-foreground leading-relaxed md:text-xl">
                  {site.tagline}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="rounded-full px-7 shadow-sm" asChild>
                  <a href="#work">View work</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-border/80 bg-background/50 px-7 backdrop-blur-sm"
                  asChild
                >
                  <a href="#contact">Get in touch</a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div
                className={cn(
                  "relative p-1",
                  "rounded-full bg-linear-to-br from-blue-600/85 via-sky-500/75 to-cyan-400/80",
                  "shadow-[0_24px_80px_-12px_oklch(0.52_0.18_252/0.38)] dark:shadow-[0_24px_80px_-12px_oklch(0.48_0.2_252/0.45)]"
                )}
              >
                <Avatar
                  size="lg"
                  className="!size-64 border-[6px] border-background bg-muted sm:!size-80 lg:!size-96"
                >
                  {site.portraitImage ? (
                    <AvatarImage
                      src={site.portraitImage}
                      alt={`${site.name} — portrait`}
                    />
                  ) : null}
                  <AvatarFallback className="bg-muted text-6xl font-medium text-muted-foreground sm:text-7xl">
                    {initials(site.name)}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </section>

        <section
          id="work"
          className="group/work relative scroll-mt-28 overflow-hidden border-b border-border/60 py-20 sm:py-28"
          aria-labelledby="work-heading"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/work:opacity-100"
            aria-hidden
          >
            <div className="absolute -top-2 left-6 rotate-[-14deg] opacity-75 transition-transform duration-500 group-hover/work:translate-y-1">
              <Image src="/Git.png" alt="" width={64} height={64} className="rounded-full" />
            </div>
            <div className="absolute top-8 right-12 rotate-[10deg] opacity-70 transition-transform duration-500 group-hover/work:-translate-y-1">
              <Image src="/nextjs.png" alt="" width={72} height={72} className="rounded-full" />
            </div>
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 rotate-[-10deg] opacity-80 transition-transform duration-500 group-hover/work:-translate-x-1">
              <Image src="/React.png" alt="" width={84} height={84} className="rounded-xl" />
            </div>
            <div className="absolute right-[14%] bottom-6 rotate-[12deg] opacity-75 transition-transform duration-500 group-hover/work:translate-y-1">
              <Image src="/tailwind.png" alt="" width={88} height={88} className="rounded-xl" />
            </div>
            <div className="absolute bottom-8 left-[32%] rotate-[-8deg] opacity-70 transition-transform duration-500 group-hover/work:translate-x-1">
              <Image src="/Typescript.png" alt="" width={70} height={70} className="rounded-xl" />
            </div>
            <div className="absolute top-4 left-[44%] rotate-[8deg] opacity-70 transition-transform duration-500 group-hover/work:-translate-y-1">
              <Image src="/codeee.png" alt="" width={72} height={72} className="rounded-xl" />
            </div>
          </div>
          <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6">
            <div className="max-w-2xl space-y-4">
              <SectionLabel>Portfolio</SectionLabel>
              <h2
                id="work-heading"
                className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Selected work
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
              A collection of front-end projects built with Next.js, Tailwind CSS, and shadcn/ui
               focused on responsive design, clean user experience, and maintainable modern code.
              </p>
            </div>
            <PortfolioProjects />
          </div>
        </section>

        <PortfolioAboutSection />

        <section
          id="contact"
          className="group/contact-card relative scroll-mt-28 overflow-visible py-20 sm:py-28"
          aria-labelledby="contact-heading"
        >
          <ContactConversationDecor />
          {/* Section background edges — behind the card; hover the contact card to reveal */}
          <div
            className="pointer-events-none absolute left-0 top-0 z-0 opacity-0 transition-opacity duration-200 group-hover/contact-card:opacity-100"
            aria-hidden
          >
            <div className="pl-4 pt-8 sm:pl-6 sm:pt-10">
              <Image
                src="/nextjs.png"
                alt=""
                width={112}
                height={112}
                className="opacity-35 blur-[0.5px]"
              />
            </div>
          </div>
          <div
            className="pointer-events-none absolute bottom-0 right-0 z-0 opacity-0 transition-opacity duration-200 group-hover/contact-card:opacity-100"
            aria-hidden
          >
            <div className="pb-8 pr-4 sm:pb-10 sm:pr-6">
              <Image
                src="/shad.png"
                alt=""
                width={96}
                height={96}
                className="opacity-35 blur-[0.5px]"
              />
            </div>
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
            <PortfolioContactCard />
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-muted/15 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 text-center sm:px-6 lg:grid-cols-3 lg:items-center lg:text-left">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              {site.location} (UTC+8)
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground"
          >
            <a href="#work" className="transition-colors hover:text-foreground">
              Work
            </a>
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
            <a href="#top" className="transition-colors hover:text-foreground">
              Back to top
            </a>
          </nav>

          
        </div>
      </footer>
    </>
  );
}
