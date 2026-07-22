"use client";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function PortfolioProjects() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <ol className="divide-y divide-border/60 border-y border-border/60">
        {site.projects.map((project, index) => (
          <li key={project.title}>
            <a
              href={site.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-4 py-5 transition-colors hover:bg-muted/30 sm:items-center sm:gap-8 sm:px-2"
            >
              <div className="flex min-w-0 flex-1 gap-4 sm:gap-6">
                <span className="font-mono text-xs text-muted-foreground tabular-nums pt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 space-y-1">
                  <p className="font-heading text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    {project.title}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.outcome}
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 pt-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                Portal
                <ArrowUpRight
                  className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </span>
            </a>
          </li>
        ))}
      </ol>

      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card px-6 py-8 sm:px-10 sm:py-10">
        <div
          className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,oklch(0.65_0.16_252/0.22),transparent_70%)] blur-2xl dark:bg-[radial-gradient(circle,oklch(0.5_0.18_252/0.3),transparent_70%)]"
          aria-hidden
        />
        <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg space-y-3">
            <p className="font-mono text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Live demos
            </p>
            <h3 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Explore the builds in Vision Engine
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Open the portal to try selected projects live, then come back
              here if you want to work together.
            </p>
          </div>
          <Button
            size="lg"
            className="w-full shrink-0 rounded-full px-7 shadow-sm sm:w-auto"
            asChild
          >
            <a
              href={site.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open portal
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
