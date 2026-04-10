"use client";

import Image from "next/image";
import { useState } from "react";

import { AboutTechCarousel } from "@/components/about-tech-carousel";
import { Separator } from "@/components/ui/separator";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
      {children}
    </p>
  );
}

type HoverZone = "left" | "right" | null;

export function PortfolioAboutSection() {
  const [hover, setHover] = useState<HoverZone>(null);

  return (
    <section
      id="about"
      className="relative scroll-mt-28 overflow-hidden border-b border-border/60 py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      {/* Section-level positioning (same as before) — not clipped by the cards */}
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-0 hidden w-[44rem] -translate-x-24 items-center transition-opacity duration-300 md:flex",
          hover === "left" ? "opacity-100" : "opacity-0"
        )}
        aria-hidden
      >
        <Image
          src="/pops.png"
          alt=""
          width={680}
          height={432}
          className="rounded-2xl opacity-35 blur-[1px]"
        />
      </div>

      <div
        className={cn(
          "pointer-events-none absolute inset-y-1/4 right-0 z-0 hidden w-[min(36vw,22rem)] transition-opacity duration-300 lg:block",
          hover === "right" ? "opacity-100" : "opacity-0"
        )}
        aria-hidden
      >
        <div className="relative h-full min-h-[12rem] w-full overflow-hidden rounded-2xl opacity-50">
          <Image
            src="/hand.jpg"
            alt=""
            fill
            sizes="(max-width: 1024px) 0px, 416px"
            className="object-cover object-right"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 20%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 28%)",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1px_1fr] lg:gap-16">
          <div
            className="min-h-0"
            onMouseEnter={() => setHover("left")}
            onMouseLeave={() => setHover(null)}
          >
            <div className="space-y-5 rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:p-8 dark:bg-white">
              <SectionLabel>About</SectionLabel>
              <h2
                id="about-heading"
                className="font-heading text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              >
                Building with clarity
              </h2>
              <p className="text-lg leading-relaxed text-slate-700">
  I’m a front-end developer focused on building responsive and clean user interfaces using modern tools like Next.js, Tailwind CSS, and shadcn/ui. I enjoy turning ideas into functional UI while continuously improving my skills in design, usability, and code structure.
</p>
            </div>
          </div>
          <Separator
            orientation="vertical"
            className="hidden bg-linear-to-b from-transparent via-border to-transparent lg:block"
          />
          <Separator className="lg:hidden" />
          <div
            className="min-h-0"
            onMouseEnter={() => setHover("right")}
            onMouseLeave={() => setHover(null)}
          >
            <div className="flex flex-col justify-center gap-5">
              <h3 className="text-sm font-semibold tracking-tight">
                Stack &amp; focus
              </h3>
              <AboutTechCarousel skills={site.skills} />
              <p className="text-sm text-muted-foreground">
                Based in {site.location}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
