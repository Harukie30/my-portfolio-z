"use client";

import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHidden(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 pt-4 pb-2 transition-transform duration-300",
        hidden ? "-translate-y-[120%]" : "translate-y-0"
      )}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div
          className={cn(
            "flex h-12 items-center justify-between gap-3 rounded-full border border-border/60 bg-background/80 px-3 shadow-[0_1px_0_0_oklch(0_0_0/0.04)_inset] backdrop-blur-xl",
            "dark:border-border/50 dark:bg-background/70 dark:shadow-[0_1px_0_0_oklch(1_0_0/0.06)_inset]"
          )}
        >
          <a
            href="/"
            className="group flex items-center gap-2 pl-1.5 font-heading text-sm font-semibold tracking-tight"
          >
            <span
              className="size-2 rounded-full bg-linear-to-br from-blue-600 to-sky-400 shadow-[0_0_12px_oklch(0.55_0.18_252/0.5)] transition-transform group-hover:scale-110"
              aria-hidden
            />
            <span className="text-foreground">{site.name}</span>
          </a>
          <nav
            className="hidden items-center gap-0.5 md:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Button key={item.href} variant="ghost" size="sm" asChild>
                <a
                  href={item.href}
                  className="rounded-full text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </a>
              </Button>
            ))}
          </nav>
          <div className="flex items-center md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="shrink-0 rounded-full"
                  aria-label="Open menu"
                >
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(100%,20rem)]">
                <SheetHeader>
                  <SheetTitle className="text-left">On this page</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 pt-2" aria-label="Mobile">
                  {nav.map((item) => (
                    <Button
                      key={item.href}
                      variant="ghost"
                      className="justify-start"
                      asChild
                    >
                      <a href={item.href}>{item.label}</a>
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
