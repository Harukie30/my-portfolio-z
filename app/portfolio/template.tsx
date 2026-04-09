import { cn } from "@/lib/utils";

/** Re-mounts on client navigations so enter animation runs when opening the portfolio. */
export default function PortfolioTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex min-h-full flex-col",
        "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:fill-mode-both",
        "motion-reduce:animate-none"
      )}
    >
      {children}
    </div>
  );
}
