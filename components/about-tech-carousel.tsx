"use client";

import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { SkillEntry } from "@/lib/site";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 3000;

type Props = {
  skills: readonly SkillEntry[];
};

export function AboutTechCarousel({ skills }: Props) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const fn = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  React.useEffect(() => {
    if (!api || reducedMotion || skills.length <= 1 || paused) return;
    const id = window.setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [api, reducedMotion, paused, skills.length]);

  if (reducedMotion || skills.length <= 1) {
    return (
      <ul className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
        {skills.map((skill) => (
          <li key={skill.name}>
            <div
              className={cn(
                "relative flex h-16 w-20 items-center justify-center rounded-xl border border-border/50 bg-background/60 p-2 shadow-sm",
                "sm:h-20 sm:w-24"
              )}
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={80}
                height={80}
                className="max-h-full max-w-full object-contain"
                unoptimized={skill.image.endsWith(".svg")}
              />
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div
      className="w-full space-y-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "center" }}
        className="w-full"
        aria-label="Tech stack carousel"
      >
        <CarouselContent>
          {skills.map((skill, idx) => (
            <CarouselItem key={skill.name}>
              <div className="flex justify-center px-2 py-2">
                <div
                  className={cn(
                    "relative h-32 w-full max-w-[220px] rounded-2xl border border-border/50 bg-muted/25 p-4 shadow-[0_12px_36px_-16px_oklch(0_0_0/0.35)] sm:h-36 sm:max-w-[260px]",
                    "dark:shadow-[0_12px_36px_-16px_oklch(0_0_0/0.55)]"
                  )}
                >
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    fill
                    sizes="(max-width: 640px) 220px, 260px"
                    className="object-contain p-3"
                    unoptimized={skill.image.endsWith(".svg")}
                    priority={idx === current}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <p className="text-center text-sm font-medium text-foreground" aria-live="polite">
        {skills[current]?.name}
      </p>

      <div
        className="flex justify-center gap-1.5"
        role="tablist"
        aria-label="Tech stack slides"
      >
        {skills.map((skill, i) => (
          <button
            key={skill.name}
            type="button"
            role="tab"
            aria-selected={i === current}
            tabIndex={i === current ? 0 : -1}
            aria-label={`Show ${skill.name}`}
            className={cn(
              "size-2 rounded-full transition-colors",
              i === current
                ? "bg-primary"
                : "bg-muted-foreground/25 hover:bg-muted-foreground/45"
            )}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
