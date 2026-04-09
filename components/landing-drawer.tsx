"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
} from "lucide-react";

import { usePortfolioNav } from "@/components/landing-portfolio-transition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function SkillBadge({ skill }: { skill: { name: string; image: string } }) {
  return (
    <Badge
      variant="secondary"
      className={cn("gap-1.5 pr-2.5 pl-1.5 font-normal")}
    >
      <Image
        src={skill.image}
        alt=""
        width={18}
        height={18}
        className="size-[18px] shrink-0 rounded-sm object-contain"
        aria-hidden
        unoptimized={skill.image.endsWith(".svg")}
      />
      <span>{skill.name}</span>
    </Badge>
  );
}

/**
 * Right-side panel for the landing page: quick navigation, contact, and tech stack.
 */
export function LandingDrawer({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const { pending, goPortfolio } = usePortfolioNav();

  function handleOpenPortfolio() {
    setOpen(false);
    goPortfolio();
  }

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          disabled={pending}
          className={cn(
            "size-10 rounded-full border-border/80 bg-background/70 shadow-sm backdrop-blur-sm",
            className
          )}
          aria-label="Open menu"
        >
          <Menu className="size-5" aria-hidden />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[100dvh] data-[vaul-drawer-direction=right]:w-full data-[vaul-drawer-direction=right]:sm:max-w-md">
        <DrawerHeader className="border-b border-border/60 text-left">
          <DrawerTitle>{site.name}</DrawerTitle>
          <DrawerDescription className="text-pretty">
            {site.role} · {site.location}
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-4 py-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {site.tagline}
          </p>

          <div>
            <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Tech stack
            </p>
            <div className="flex flex-wrap gap-2">
              {site.skills.map((s) => (
                <SkillBadge key={s.name} skill={s} />
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <p className="mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Links
            </p>
            <Button
              type="button"
              variant="default"
              className="w-full justify-between gap-2 rounded-lg"
              onClick={handleOpenPortfolio}
              disabled={pending}
            >
              <span>Open full portfolio</span>
              <ArrowRight className="size-4 shrink-0" aria-hidden />
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-2 rounded-lg"
              asChild
            >
              <a href={`mailto:${site.email}`}>
                <Mail className="size-4" aria-hidden />
                Email
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-2 rounded-lg"
              asChild
            >
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-4" aria-hidden />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-2 rounded-lg"
              asChild
            >
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-4" aria-hidden />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="flex items-start gap-2 rounded-lg border border-border/60 bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
            <MapPin className="mt-0.5 size-3.5 shrink-0" aria-hidden />
            <span>
              Add a PDF resume or extra links in{" "}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.7rem]">
                lib/site.ts
              </code>{" "}
              when you&apos;re ready.
            </span>
          </div>
        </div>

        <DrawerFooter className="border-t border-border/60 pt-2">
          <DrawerClose asChild>
            <Button variant="secondary" className="w-full rounded-lg">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
