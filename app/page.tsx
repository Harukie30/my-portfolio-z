import type { Metadata } from "next";

import { AbstractHeroShapes } from "@/components/abstract-hero-shapes";
import { LandingDecorHoverProvider } from "@/components/landing-decor-hover";
import { LandingDrawer } from "@/components/landing-drawer";
import {
  OpenPortfolioButton,
  PortfolioNavProvider,
} from "@/components/landing-portfolio-transition";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Welcome",
  description: site.landingIntro,
};

export default function LandingPage() {
  return (
    <PortfolioNavProvider>
      <div className="flex min-h-dvh flex-col">
        <main className="relative flex min-h-0 flex-1 flex-col">
          <section
            className="relative isolate flex min-h-dvh flex-1 flex-col overflow-hidden"
            aria-labelledby="welcome-heading"
          >
            <LandingDecorHoverProvider>
              <div
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,oklch(0.72_0.14_252/0.22),transparent_55%)] dark:bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,oklch(0.48_0.16_252/0.28),transparent_55%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_100%_50%,oklch(0.82_0.1_230/0.14),transparent_50%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_100%_50%,oklch(0.42_0.12_240/0.2),transparent_50%)]"
                aria-hidden
              />
              <AbstractHeroShapes />

              <div className="absolute right-4 top-4 z-30 sm:right-6 sm:top-6">
                <LandingDrawer />
              </div>

              <div
                className={cn(
                  "relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-28 pt-20 text-center sm:pb-32 sm:pt-28 md:pb-36 md:pt-32",
                  "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:fill-mode-both motion-safe:delay-100",
                  "motion-reduce:animate-none"
                )}
              >
                <p className="font-mono text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
                  {site.landingIntro}
                </p>
                <h1
                  id="welcome-heading"
                  className="mt-6 max-w-3xl font-heading text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
                >
                  Hey, I&apos;m{" "}
                  <span className="text-gradient">{site.name}</span>.
                </h1>
                <p className="mt-5 max-w-lg text-lg text-muted-foreground md:text-xl">
                  {site.role}. Step into my portfolio to see my work, background,
                  and how to reach me.
                </p>
                <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                  <OpenPortfolioButton />
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full   border-border/80 bg-background/50 px-8 backdrop-blur-sm"
                    asChild
                  >  
                  </Button>
                </div>
              </div>
            </LandingDecorHoverProvider>
          </section>
        </main>
      </div>
    </PortfolioNavProvider>
  );
}
