"use client";

import { useCallback, useState, type ReactNode } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { ProjectEntry } from "@/lib/site";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function ModalSectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
      {children}
    </p>
  );
}

export function PortfolioProjects() {
  const [active, setActive] = useState<ProjectEntry | null>(null);

  const open = useCallback((project: ProjectEntry) => {
    setActive(project);
  }, []);

  const close = useCallback(() => {
    setActive(null);
  }, []);

  const hasLiveLink = active?.href && active.href !== "#";

  return (
    <>
      <div className="grid gap-6 px-1 md:grid-cols-2 md:px-0 lg:grid-cols-3">
        {site.projects.map((project) => (
          <div
            key={project.title}
            className="group/card relative overflow-visible transition-[transform,box-shadow] hover:z-20 focus-within:z-20"
          >
            {/* Anchored to the card’s left edge, grows left — stays outside the card */}
            <div
              className={cn(
                "pointer-events-none absolute right-full top-1/2 z-10 mr-2 -translate-y-1/2 overflow-hidden rounded-xl border border-border/50 bg-muted/40 shadow-[0_18px_44px_-14px_oklch(0_0_0/0.4)] transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:shadow-[0_18px_44px_-14px_oklch(0_0_0/0.55)]",
                "w-0 group-hover/card:w-36 group-focus-within/card:w-36",
                "motion-reduce:transition-none"
              )}
            >
              <div className="relative h-44 w-36 sm:h-48">
                <Image
                  src={project.previewImage}
                  alt=""
                  fill
                  sizes="144px"
                  className="object-cover object-left"
                />
              </div>
            </div>

            <Card
              role="button"
              tabIndex={0}
              onClick={() => open(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  open(project);
                }
              }}
              className={cn(
                "relative cursor-pointer overflow-visible border-border/60 bg-card/80 transition-all duration-300",
                "hover:-translate-y-1 hover:border-border hover:shadow-[0_20px_50px_-20px_oklch(0_0_0/0.2)]",
                "dark:hover:shadow-[0_20px_50px_-20px_oklch(0_0_0/0.45)]",
                "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              )}
            >
              <CardHeader className="gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="rounded-full font-normal"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-lg transition-colors group-hover/card:text-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="border-border/60 bg-muted/20">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="gap-1.5 px-0 text-muted-foreground hover:text-foreground"
                  onClick={(e) => {
                    e.stopPropagation();
                    open(project);
                  }}
                >
                  View details
                  <ArrowUpRight
                    className="size-3.5 transition-transform group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
                    aria-hidden
                  />
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && close()}>
        <DialogContent
          className={cn(
            "flex max-h-[min(92vh,44rem)] w-full max-w-[calc(100%-2rem)] flex-col gap-0 overflow-hidden rounded-2xl border-0 p-0 shadow-2xl",
            "ring-1 ring-border/80 bg-popover",
            "sm:max-w-xl md:max-w-2xl"
          )}
          showCloseButton
        >
          {active ? (
            <>
              <div
                className="h-1 w-full shrink-0 bg-gradient-to-r from-primary/25 via-primary/60 to-primary/25"
                aria-hidden
              />
              <div className="flex min-h-0 flex-1 flex-col">
                <DialogHeader className="gap-4 space-y-0 px-6 pt-6 pb-2 pr-14 text-left sm:px-8 sm:pt-8">
                  <div className="space-y-3">
                    <ModalSectionLabel>Project</ModalSectionLabel>
                    <DialogTitle className="font-heading text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-[1.75rem]">
                      {active.title}
                    </DialogTitle>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {active.tags.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="rounded-full border border-border/60 bg-background/80 px-2.5 py-0.5 font-normal backdrop-blur-sm"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </DialogHeader>

                <div className="space-y-2 px-6 sm:px-8">
                  <ModalSectionLabel>Overview</ModalSectionLabel>
                  <DialogDescription className="text-base leading-relaxed text-pretty text-foreground/85">
                    {active.description}
                  </DialogDescription>
                </div>

                <div className="flex min-h-0 flex-1 flex-col px-6 pt-6 pb-2 sm:px-8">
                  <div className="mb-3 shrink-0">
                    <ModalSectionLabel>Case study</ModalSectionLabel>
                  </div>
                  <ScrollArea className="h-[min(36vh,18rem)] rounded-xl border border-border/60 bg-muted/25">
                    <div className="p-4 text-sm leading-relaxed text-muted-foreground sm:p-5 sm:text-[0.9375rem] sm:leading-relaxed">
                      <p className="whitespace-pre-line">{active.details}</p>
                    </div>
                  </ScrollArea>
                </div>

                <DialogFooter className="mx-0 mb-0 mt-auto flex-row flex-wrap gap-2 border-t border-border/60 bg-muted/20 px-6 py-4 sm:justify-end sm:px-8">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="rounded-full border-border/80"
                    >
                      Close
                    </Button>
                  </DialogClose>
                  {hasLiveLink ? (
                    <Button className="rounded-full gap-1.5" asChild>
                      <a
                        href={active!.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit project
                        <ArrowUpRight className="size-4" aria-hidden />
                      </a>
                    </Button>
                  ) : null}
                </DialogFooter>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
