"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);
  const [displaySrc, setDisplaySrc] = useState(() => contactDecorSrc(null));
  const [opacity, setOpacity] = useState(1);
  const displaySrcRef = useRef(displaySrc);
  displaySrcRef.current = displaySrc;
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}`;

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
            you&apos;re building I&apos;ll reply within a few days.
          </p>
        </div>
        <div
          className="flex w-full flex-col gap-3 sm:max-w-md sm:flex-row sm:items-center lg:max-w-none lg:flex-col lg:items-stretch"
          onMouseLeave={() => setSocialHover(null)}
        >
          <Button
            size="lg"
            className="w-1/2 cursor-pointer rounded-full shadow-sm"
            onMouseEnter={() => setSocialHover("email")}
            onClick={() => setIsEmailDialogOpen(true)}
          >
            <Mail className="size-4" aria-hidden />
            Email me
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
      <Dialog open={isEmailDialogOpen} onOpenChange={setIsEmailDialogOpen}>
        <DialogContent className="fixed top-1/2 left-1/2 z-50 w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-border/70 bg-card/95 p-0 backdrop-blur-sm sm:max-w-md">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[62%]"
            aria-hidden
          >
            <Image
              src="/Gmail.png"
              alt=""
              fill
              className="object-contain object-right opacity-[0.50]"
              sizes="(max-width: 740px) 70vw, 18rem"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-background/98 via-background/90 to-background/60"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-[45%] z-0 w-24 bg-gradient-to-r from-background/95 to-transparent"
            aria-hidden
          />
          <DialogHeader className="relative z-10 px-6 pt-6">
            <DialogTitle className="text-xl font-semibold tracking-tight">
              Thanks for visiting my portfolio
            </DialogTitle>
            <DialogDescription className="text-[15px] leading-relaxed text-muted-foreground">
              If you&apos;d like to connect,
              please leave a message by email, and I&apos;ll respond as soon as
              possible.
            </DialogDescription>
          </DialogHeader>
          <div className="relative z-10 px-6 pt-2 pb-6">
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Button className="sm:min-w-32" asChild>
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsEmailDialogOpen(false)}
              >
                Open Gmail
              </a>
            </Button>
            <DialogClose asChild>
              <Button variant="outline" className="sm:min-w-24">
                Close
              </Button>
            </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
