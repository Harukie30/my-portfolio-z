"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type SocialHover = "email" | "github" | "linkedin" | null;

function contactDecorSrc(hover: SocialHover) {
  if (hover === "github") return "/Git.png";
  if (hover === "linkedin") return "/link.png";
  if (hover === "email") return "/Gmail.png";
  return "/colab.png";
}

/** Fade-out duration before swapping src; matches transition below (0.2s). */
const FADE_MS = 200;

export function PortfolioContactCard() {
  const [socialHover, setSocialHover] = useState<SocialHover>(null);
  const [displaySrc, setDisplaySrc] = useState(() => contactDecorSrc(null));
  const [opacity, setOpacity] = useState(1);
  const displaySrcRef = useRef(displaySrc);
  displaySrcRef.current = displaySrc;

  useEffect(() => {
    const next = contactDecorSrc(socialHover);
    if (next === displaySrcRef.current) return;

    setOpacity(0);
    const t = window.setTimeout(() => {
      setDisplaySrc(next);
      setOpacity(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setOpacity(1));
      });
    }, FADE_MS);

    return () => window.clearTimeout(t);
  }, [socialHover]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 shadow-[0_1px_0_0_oklch(0_0_0/0.04)_inset] sm:p-12 dark:shadow-[0_1px_0_0_oklch(1_0_0/0.06)_inset]">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,oklch(0.65_0.16_252/0.28),transparent_70%)] blur-2xl dark:bg-[radial-gradient(circle,oklch(0.5_0.18_252/0.38),transparent_70%)]"
        aria-hidden
      />

      {/* Default colab.png; Git / LinkedIn / Gmail on hover — all at 50% opacity */}
      <div
        className="pointer-events-none absolute bottom-2 right-2 z-[1] h-44 w-44 sm:bottom-4 sm:right-4 sm:h-52 sm:w-52 lg:bottom-5 lg:right-5 lg:h-60 lg:w-60"
        aria-hidden
      >
        <div className="relative h-full w-full opacity-50">
          <div
            className={cn(
              "relative h-full w-full transition-opacity duration-200 ease-in-out",
              opacity === 0 ? "opacity-0" : "opacity-100"
            )}
          >
            <Image
              src={displaySrc}
              alt=""
              fill
              sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 240px"
              className="object-contain object-right object-bottom"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl space-y-4">
          <p className="font-mono text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Let&apos;s work together
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Open to freelance and full-time roles. Send a short note with what
            you&apos;re building—I&apos;ll reply within a few days.
          </p>
        </div>
        <div
          className="flex w-full flex-col gap-3 sm:max-w-md sm:flex-row sm:items-center lg:max-w-none lg:flex-col lg:items-stretch"
          onMouseLeave={() => setSocialHover(null)}
        >
          <Button size="lg" className="rounded-full shadow-sm w-1/2" asChild>
            <a
              href={`mailto:${site.email}`}
              onMouseEnter={() => setSocialHover("email")}
            >
              <Mail className="size-4" aria-hidden />
              Email me
            </a>
          </Button>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="lg"
              className="flex-1 rounded-full border-border/80 bg-background/50 sm:flex-initial"
              asChild
            >
              <a
                href={site.social.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setSocialHover("github")}
              >
                <ExternalLink className="size-4" aria-hidden />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1 rounded-full border-border/80 bg-background/50 sm:flex-initial"
              asChild
            >
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setSocialHover("linkedin")}
              >
                <ExternalLink className="size-4" aria-hidden />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
