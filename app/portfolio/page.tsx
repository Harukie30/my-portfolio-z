import { AbstractHeroShapes } from "@/components/abstract-hero-shapes";
import { PortfolioAboutSection } from "@/components/portfolio-about-section";
import { ContactConversationDecor } from "@/components/contact-conversation-decor";
import { FooterTime } from "@/components/footer-time";
import { PortfolioContactCard } from "@/components/portfolio-contact-card";
import { PortfolioProjects } from "@/components/portfolio-projects";
import { SafeImage } from "@/components/safe-image";
import { SiteHeader } from "@/components/site-header";
import { WorkDecor } from "@/components/work-decor";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:gap-16 sm:px-6 sm:py-28 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-20 lg:py-32">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-wrap items-center gap-2">
                {site.skills.slice(0, 4).map((s) => (
                  <span
                    key={s.name}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-border/60 bg-background/60 p-2 shadow-sm backdrop-blur-sm sm:size-11 dark:bg-background/50"
                    title={s.name}
                  >
                    <SafeImage
                      src={s.image}
                      alt={s.name}
                      fallbackLabel={s.name}
                      width={28}
                      height={28}
                      className="size-6 object-contain sm:size-7"
                    />
                  </span>
                ))}
              </div>
              <div className="space-y-5 sm:space-y-6">
                <div className="space-y-2">
                  <SectionLabel>
                    {site.availableForFreelance
                      ? "Open for freelance"
                      : "Available for work"}
                  </SectionLabel>
                  <p className="text-sm font-medium text-muted-foreground">
                    {site.role}
                  </p>
                </div>
                <h1
                  id="hero-heading"
                  className="font-heading text-3xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
                >
                  Hi, I&apos;m {site.name.split(" ")[0]}.{" "}
                  <span className="text-gradient">I ship interfaces</span>{" "}
                  people enjoy using.
                </h1>
                <p className="max-w-xl text-base text-muted-foreground leading-relaxed sm:text-lg md:text-xl">
                  {site.tagline}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button size="lg" className="w-full rounded-full px-7 shadow-sm sm:w-auto" asChild>
                  <a href="#work">View work</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full border-border/80 bg-background/50 px-7 backdrop-blur-sm sm:w-auto"
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
                  className="!size-52 border-[6px] border-background bg-muted sm:!size-80 lg:!size-96"
                >
                  {site.portraitImage ? (
                    <AvatarImage
                      src={site.portraitImage}
                      alt={`${site.name} — portrait`}
                      className="object-cover object-[center_22%]"
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
          className="group/work relative scroll-mt-28 overflow-visible border-b border-border/60 py-14 sm:py-20 lg:py-28"
          aria-labelledby="work-heading"
        >
          <WorkDecor />
          <div className="relative z-10 mx-auto max-w-6xl space-y-8 px-4 sm:space-y-12 sm:px-6">
            <div className="max-w-2xl space-y-3 sm:space-y-4">
              <SectionLabel>Portfolio</SectionLabel>
              <h2
                id="work-heading"
                className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
              >
                Selected work
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed sm:text-lg">
                Case notes from recent builds. Live demos live in the portal —
                this page is for craft, scope, and freelance fit.
              </p>
              {site.availableForFreelance ? (
                <p className="text-sm font-medium text-foreground/90">
                  Open for freelance · Next.js / React UI
                </p>
              ) : null}
            </div>

            <PortfolioProjects />

            <div className="max-w-3xl space-y-4">
              <SectionLabel>What I take on</SectionLabel>
              <ul className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                {site.services.map((service) => (
                  <li key={service.title} className="space-y-1.5">
                    <p className="text-sm font-semibold tracking-tight text-foreground">
                      {service.title}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between sm:pt-10">
              <p className="max-w-md text-sm text-muted-foreground leading-relaxed sm:text-base">
                Need something built? I&apos;m available for freelance frontend
                work.
              </p>
              <Button
                size="lg"
                className="w-full shrink-0 rounded-full px-7 shadow-sm sm:w-auto"
                asChild
              >
                <a href="#contact">Let&apos;s talk</a>
              </Button>
            </div>
          </div>
        </section>

        <PortfolioAboutSection />

        <section
          id="contact"
          className="group/contact-card relative scroll-mt-28 overflow-visible py-14 sm:py-20 lg:py-28"
          aria-labelledby="contact-heading"
        >
          <ContactConversationDecor />
          {/* Section background edges — soft on mobile, full on hover */}
          <div
            className="pointer-events-none absolute left-0 top-0 z-0 opacity-25 transition-opacity duration-200 group-hover/contact-card:opacity-100 group-focus-within/contact-card:opacity-100"
            aria-hidden
          >
            <div className="pl-3 pt-6 sm:pl-6 sm:pt-10">
              <SafeImage
                src="/nextjs.png"
                alt=""
                fallbackLabel="Next.js"
                width={80}
                height={80}
                className="opacity-35 blur-[0.5px] sm:h-[112px] sm:w-[112px]"
              />
            </div>
          </div>
          <div
            className="pointer-events-none absolute bottom-0 right-0 z-0 opacity-25 transition-opacity duration-200 group-hover/contact-card:opacity-100 group-focus-within/contact-card:opacity-100"
            aria-hidden
          >
            <div className="pb-6 pr-3 sm:pb-10 sm:pr-6">
              <SafeImage
                src="/shad.png"
                alt=""
                fallbackLabel="shadcn/ui"
                width={72}
                height={72}
                className="opacity-35 blur-[0.5px] sm:h-24 sm:w-24"
              />
            </div>
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
            <PortfolioContactCard />
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-muted/15 py-8 sm:py-10">
        <div className="grid gap-6 px-4 text-center sm:px-6 lg:grid-cols-3 lg:items-center lg:text-left">
          <div className="space-y-1 lg:justify-self-start">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              {site.location} (UTC+8)
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground lg:justify-self-center"
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
          <div className="flex justify-center lg:justify-self-end">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 shadow-sm backdrop-blur-sm">
              <span className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                Local Time
              </span>
              <span className="font-mono text-sm font-semibold text-foreground sm:text-base lg:text-lg">
                <FooterTime />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
