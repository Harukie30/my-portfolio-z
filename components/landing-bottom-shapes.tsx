"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Tech logos scattered across the landing hero (decorative, low contrast).
 * Placed toward the edges so the center copy stays readable.
 */
const SCATTERED = [
  {
    src: "/nextjs.png",
    label: "Next.js",
    className:
      "left-[2%] top-[14%] h-24 w-40 -rotate-[14deg] sm:left-[6%] sm:top-[16%] sm:h-28 sm:w-44 md:h-32 md:w-52",
  },
  {
    src: "/Typescript.png",
    label: "TypeScript",
    className:
      "right-[4%] top-[26%] h-16 w-16 rotate-[10deg] sm:right-[8%] sm:top-[30%] sm:h-[4.5rem] sm:w-[4.5rem] md:top-[34%] md:h-20 md:w-20",
  },
  {
    src: "/React.png",
    label: "React",
    className:
      "bottom-[22%] left-[6%] h-24 w-24 -rotate-[8deg] sm:bottom-[20%] sm:left-[10%] sm:h-28 sm:w-28 md:bottom-[18%] md:h-32 md:w-32",
  },
  {
    src: "/tailwind.png",
    label: "Tailwind CSS",
    className:
      "bottom-[8%] right-[6%] h-20 w-32 rotate-[6deg] sm:bottom-[10%] sm:right-[10%] sm:h-24 sm:w-40 md:bottom-[12%] md:h-28 md:w-48",
  },
] as const;

export function LandingBottomShapes({ visible = false }: { visible?: boolean }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-[1] overflow-hidden transition-opacity duration-300 ease-out",
        visible ? "opacity-100" : "opacity-0"
      )}
      aria-hidden
    >
      {SCATTERED.map(({ src, label, className }) => (
        <div
          key={src}
          title={label}
          className={cn(
            "absolute opacity-[0.48] saturate-[0.95] dark:opacity-[0.58]",
            className
          )}
        >
          <div className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-border/30">
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 768px) 160px, 220px"
              className="object-contain drop-shadow-sm"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
