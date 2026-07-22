"use client";

import { useEffect, useState } from "react";

import { AboutTechCarousel } from "@/components/about-tech-carousel";
import { SafeImage } from "@/components/safe-image";
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
  const [touchZone, setTouchZone] = useState<HoverZone>(null);
  const activeHover = touchZone ?? hover;

  useEffect(() => {
    const clearTouch = () => setTouchZone(null);

    window.addEventListener("pointerup", clearTouch);
    window.addEventListener("pointercancel", clearTouch);

    return () => {
      window.removeEventListener("pointerup", clearTouch);
      window.removeEventListener("pointercancel", clearTouch);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative scroll-mt-28 overflow-hidden border-b border-border/60 py-14 sm:py-20 lg:py-28"
      aria-labelledby="about-heading"
      onMouseLeave={() => setHover(null)}
    >
      {/* Decorative backgrounds — soft always-on mobile, full reveal on hover/touch */}
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-0 flex items-center transition-opacity duration-300",
          "w-[min(78vw,40rem)] -translate-x-10 sm:-translate-x-16 lg:w-[44rem] lg:-translate-x-24",
          activeHover === "left" ? "opacity-100" : "opacity-25 md:opacity-0"
        )}
        aria-hidden
      >
        <SafeImage
          src="/pops.png"
          alt=""
          fallbackLabel="About"
          width={680}
          height={432}
          className="rounded-2xl opacity-35 blur-[1px]"
        />
      </div>

      <div
        className={cn(
          "pointer-events-none absolute inset-y-1/4 right-0 z-0 w-[min(55vw,22rem)] transition-opacity duration-300",
          activeHover === "right" ? "opacity-100" : "opacity-20 md:opacity-0"
        )}
        aria-hidden
      >
        <div className="relative h-full min-h-[10rem] w-full overflow-hidden rounded-2xl opacity-50 sm:min-h-[12rem]">
          <SafeImage
            src="/hand.jpg"
            alt=""
            fallbackLabel="Profile"
            fill
            sizes="(max-width: 1024px) 55vw, 416px"
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
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1fr_1px_1fr] lg:gap-16">
          <div
            className="min-h-0 touch-manipulation"
            onMouseEnter={() => setHover("left")}
            onMouseLeave={() => setHover(null)}
            onPointerDown={() => setTouchZone("left")}
          >
            <div className="space-y-4 rounded-2xl border border-border/60 bg-card p-5 shadow-sm sm:space-y-5 sm:p-8">
              <SectionLabel>About</SectionLabel>
              <h2
                id="about-heading"
                className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
              >
                Building with clarity
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I’m a front-end developer focused on building responsive and
                clean user interfaces using modern tools like Next.js, Tailwind
                CSS, and shadcn/ui. I enjoy turning ideas into functional UI
                while continuously improving my skills in design, usability, and
                code structure.
              </p>
            </div>
          </div>

          <Separator
            orientation="vertical"
            className="hidden bg-linear-to-b from-transparent via-border to-transparent lg:block"
          />
          <Separator className="lg:hidden" />

          <div
            className="min-h-0 touch-manipulation"
            onMouseEnter={() => setHover("right")}
            onMouseLeave={() => setHover(null)}
            onPointerDown={() => setTouchZone("right")}
          >
            <div className="flex -translate-x-3 flex-col items-center justify-center gap-4 text-center sm:-translate-x-5 sm:gap-5">
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
