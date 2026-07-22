"use client";

import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SafeImage } from "@/components/safe-image";
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
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ProjectEntry } from "@/lib/site";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function projectThumbSrc(project: ProjectEntry): string {
  return project.previewImage;
}

function projectLiveIcon(project: ProjectEntry): string {
  return project.liveIcon;
}

function hasLiveHref(href: string) {
  return Boolean(href && href !== "#");
}

export function PortfolioProjects() {
  const [open, setOpen] = useState(false);
  const [focusedTitle, setFocusedTitle] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const openLinksModal = (project?: ProjectEntry) => {
    setFocusedTitle(project?.title ?? null);
    setOpen(true);
  };

  const handleCardActivate = (project: ProjectEntry) => {
    if (hasLiveHref(project.href)) {
      window.open(project.href, "_blank", "noopener,noreferrer");
      return;
    }
    openLinksModal(project);
  };

  return (
    <>
      <div className="grid gap-5 overflow-visible px-0 sm:gap-6 md:grid-cols-2 md:pl-40 lg:grid-cols-3">
        {site.projects.map((project) => {
          const isHovered = hoveredProject === project.title;
          const live = hasLiveHref(project.href);

          return (
            <div
              key={project.title}
              className="relative overflow-visible hover:z-20 focus-within:z-20"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              onFocusCapture={() => setHoveredProject(project.title)}
              onBlurCapture={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setHoveredProject(null);
                }
              }}
            >
              {/* Desktop only: preview slides out to the left of the card on hover */}
              <div
                className={cn(
                  "pointer-events-none absolute top-1/2 right-full z-20 mr-2 hidden w-0 -translate-y-1/2 overflow-hidden rounded-xl border border-border/50 bg-muted/40 shadow-[0_18px_44px_-14px_oklch(0_0_0/0.4)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:block dark:shadow-[0_18px_44px_-14px_oklch(0_0_0/0.55)]",
                  isHovered && "w-36"
                )}
              >
                <div className="relative h-44 w-36 shrink-0 bg-muted/30 p-2 sm:h-48">
                  <SafeImage
                    src={projectThumbSrc(project)}
                    alt=""
                    fallbackLabel={project.title}
                    fill
                    sizes="144px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              <Card
                role="button"
                tabIndex={0}
                onClick={() => handleCardActivate(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardActivate(project);
                  }
                }}
                className={cn(
                  "relative cursor-pointer overflow-hidden border-border/60 bg-card/80 transition-all duration-300",
                  "hover:-translate-y-1 hover:border-border hover:shadow-[0_20px_50px_-20px_oklch(0_0_0/0.2)]",
                  "dark:hover:shadow-[0_20px_50px_-20px_oklch(0_0_0/0.45)]",
                  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                )}
              >
                <div className="relative aspect-[16/10] w-full border-b border-border/50 bg-muted/30 p-4 md:hidden">
                  <SafeImage
                    src={projectThumbSrc(project)}
                    alt=""
                    fallbackLabel={project.title}
                    fill
                    sizes="100vw"
                    className="object-contain object-center p-3"
                  />
                </div>
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
                  <CardTitle
                    className={cn(
                      "text-lg transition-colors",
                      isHovered && "text-foreground"
                    )}
                  >
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="border-border/60 bg-muted/20">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors",
                      isHovered && "text-foreground"
                    )}
                  >
                    {live ? "Open live project" : "View live links"}
                    <ArrowUpRight
                      className={cn(
                        "size-3.5 transition-transform",
                        isHovered && "translate-x-0.5 -translate-y-0.5"
                      )}
                      aria-hidden
                    />
                  </span>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="w-full max-w-[calc(100%-2rem)] gap-0 overflow-hidden p-0 sm:max-w-md"
          showCloseButton
        >
          <DialogHeader className="gap-2 space-y-0 border-b border-border/60 px-6 py-5 pr-12 text-left sm:px-7">
            <DialogTitle className="font-heading text-xl font-semibold tracking-tight">
              Live projects
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed">
              Deployed links for the selected work. Open any project in a new
              tab.
            </DialogDescription>
          </DialogHeader>

          <ul className="divide-y divide-border/60 px-2 py-2 sm:px-3">
            {site.projects.map((project) => {
              const live = hasLiveHref(project.href);
              const isFocused = focusedTitle === project.title;

              return (
                <li key={project.title}>
                  <div
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-3 transition-colors",
                      isFocused && "bg-muted/50"
                    )}
                  >
                    <div className="relative size-11 shrink-0 overflow-hidden rounded-lg border border-border/50 bg-muted/40">
                      <SafeImage
                        src={projectLiveIcon(project)}
                        alt=""
                        fallbackLabel={project.liveName}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-foreground">
                        {project.liveName}
                      </p>
                      <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                        {project.outcome}
                      </p>
                    </div>
                    {live ? (
                      <Button
                        size="sm"
                        className="shrink-0 gap-1.5 rounded-full"
                        asChild
                      >
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open
                          <ExternalLink className="size-3.5" aria-hidden />
                        </a>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        className="shrink-0 rounded-full"
                        disabled
                      >
                        Soon
                      </Button>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </DialogContent>
      </Dialog>
    </>
  );
}
