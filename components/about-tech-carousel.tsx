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
      <ul className="flex flex-wrap items-center justify-center gap-6 sm:justify-start sm:gap-8">
        {skills.map((skill) => (
          <li key={skill.name} className="flex items-center justify-center">
            <Image
              src={skill.image}
              alt={skill.name}
              width={72}
              height={72}
              className="h-14 w-14 object-contain sm:h-[4.5rem] sm:w-[4.5rem]"
              unoptimized={skill.image.endsWith(".svg")}
            />
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
              <div className="flex justify-center px-2 py-4">
                <div className="relative flex h-32 w-full max-w-[200px] items-center justify-center sm:h-40 sm:max-w-[240px]">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    fill
                    sizes="(max-width: 640px) 200px, 240px"
                    className="object-contain"
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
