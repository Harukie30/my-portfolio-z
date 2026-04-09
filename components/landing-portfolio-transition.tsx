"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { useOpenPortfolioHover } from "@/components/landing-decor-hover";
import { Button } from "@/components/ui/button";

const DELAY_MS = 3000;

const LOADING_LOGOS = [
  { src: "/nextjs.png", label: "Next.js" },
  { src: "/Typescript.png", label: "TypeScript" },
  { src: "/React.png", label: "React" },
  { src: "/tailwind.png", label: "Tailwind CSS" },
] as const;

type Ctx = {
  pending: boolean;
  goPortfolio: () => void;
};

const PortfolioNavContext = createContext<Ctx | null>(null);

export function usePortfolioNav() {
  const ctx = useContext(PortfolioNavContext);
  if (!ctx) {
    throw new Error("usePortfolioNav must be used within PortfolioNavProvider");
  }
  return ctx;
}

export function PortfolioNavProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const goPortfolio = useCallback(() => {
    if (pending) return;
    setPending(true);
    window.setTimeout(() => {
      router.push("/portfolio");
    }, DELAY_MS);
  }, [pending, router]);

  const value = useMemo(
    () => ({ pending, goPortfolio }),
    [pending, goPortfolio]
  );

  return (
    <PortfolioNavContext.Provider value={value}>
      {children}
      {pending ? <PortfolioLoadingOverlay /> : null}
    </PortfolioNavContext.Provider>
  );
}

function PortfolioLoadingOverlay() {
  const [logoIndex, setLogoIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setLogoIndex((i) => (i + 1) % LOADING_LOGOS.length);
    }, 650);
    return () => window.clearInterval(id);
  }, []);

  const current = LOADING_LOGOS[logoIndex];

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-background/90 backdrop-blur-md supports-backdrop-filter:bg-background/80"
    >
      <div className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
        <div
          key={current.src}
          className="relative h-full w-full overflow-hidden rounded-2xl bg-muted/30 p-3 ring-1 ring-border/50 motion-safe:animate-pulse"
        >
          <Image
            src={current.src}
            alt=""
            width={128}
            height={128}
            className="h-full w-full object-contain"
            priority
          />
        </div>
      </div>
      <p className="text-sm font-medium text-muted-foreground">
        Loading portfolio…
      </p>
      <p className="font-mono text-[11px] tracking-wide text-muted-foreground/80 uppercase">
        {current.label}
      </p>
      <span className="sr-only">
        Please wait, loading portfolio. Currently showing {current.label}{" "}
        logo.
      </span>
    </div>
  );
}

export function OpenPortfolioButton() {
  const { pending, goPortfolio } = usePortfolioNav();
  const decorHover = useOpenPortfolioHover();

  return (
    <Button
      size="lg"
      type="button"
      className="min-w-[14rem] rounded-full px-8 cursor-pointer hover:bg-primary/60 shadow-sm group"
      onClick={goPortfolio}
      disabled={pending}
      onMouseEnter={() => decorHover?.setOpenPortfolioHovered(true)}
      onMouseLeave={() => decorHover?.setOpenPortfolioHovered(false)}
      onFocus={() => decorHover?.setOpenPortfolioHovered(true)}
      onBlur={() => decorHover?.setOpenPortfolioHovered(false)}
    >
      Open portfolio
      <ArrowRight
        className="size-4 transition-transform  group-hover:translate-x-0.5"
        aria-hidden
      />
    </Button>
  );
}
