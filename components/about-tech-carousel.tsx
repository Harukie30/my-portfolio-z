"use client";

import * as React from "react";

import { SafeImage } from "@/components/safe-image";
import type { SkillEntry } from "@/lib/site";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 2000;

type Props = {
  skills: readonly SkillEntry[];
};

export function AboutTechCarousel({ skills }: Props) {
  const [current, setCurrent] = React.useState(0);
  const [direction, setDirection] = React.useState<"forward" | "backward">(
    "forward"
  );
  const previousIndex = React.useRef(0);

  const goTo = React.useCallback(
    (nextIndex: number) => {
      const prevIndex = previousIndex.current;
      const count = skills.length;
      const forward =
        nextIndex > prevIndex || (prevIndex === count - 1 && nextIndex === 0);

      setDirection(forward ? "forward" : "backward");
      previousIndex.current = nextIndex;
      setCurrent(nextIndex);
    },
    [skills.length]
  );

  React.useEffect(() => {
    if (skills.length <= 1) return;

    const id = window.setInterval(() => {
      goTo((previousIndex.current + 1) % skills.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [goTo, skills.length]);

  if (skills.length <= 1) {
    const skill = skills[0];
    if (!skill) return null;

    return (
      <div className="flex justify-center py-4">
        <SafeImage
          src={skill.image}
          alt={skill.name}
          fallbackLabel={skill.name}
          width={72}
          height={72}
          className="h-14 w-14 object-contain sm:h-[4.5rem] sm:w-[4.5rem]"
          unoptimized={skill.image.endsWith(".svg")}
        />
      </div>
    );
  }

  const activeSkill = skills[current];
  if (!activeSkill) return null;

  return (
    <div className="mx-auto w-full max-w-[16rem] space-y-4 sm:mx-0 sm:max-w-[20rem]">
      <div
        className="relative h-28 overflow-hidden sm:h-40"
        role="region"
        aria-label="Tech stack carousel"
        aria-live="polite"
      >
        <div
          key={current}
          className={cn(
            "absolute inset-0 flex items-center justify-center px-2 py-3 sm:py-4",
            "animate-in fade-in duration-500 ease-out fill-mode-both",
            direction === "forward"
              ? "slide-in-from-right-10"
              : "slide-in-from-left-10"
          )}
        >
          <div className="relative h-full w-full max-w-[160px] sm:max-w-[240px]">
            <SafeImage
              src={activeSkill.image}
              alt={activeSkill.name}
              fallbackLabel={activeSkill.name}
              fill
              sizes="(max-width: 640px) 160px, 240px"
              className="object-contain"
              unoptimized={activeSkill.image.endsWith(".svg")}
              priority
            />
          </div>
        </div>
      </div>

      <p
        key={activeSkill.name}
        className={cn(
          "text-center text-sm font-medium text-foreground sm:text-left",
          "animate-in fade-in duration-300 fill-mode-both",
          direction === "forward"
            ? "slide-in-from-right-4"
            : "slide-in-from-left-4"
        )}
      >
        {activeSkill.name}
      </p>

      <div
        className="flex justify-center gap-1.5 sm:justify-start"
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
              "size-2 rounded-full transition-all duration-300",
              i === current
                ? "w-5 bg-primary"
                : "bg-muted-foreground/25 hover:bg-muted-foreground/45"
            )}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
