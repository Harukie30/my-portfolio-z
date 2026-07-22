"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function DecorIcon({
  src,
  size,
  className,
}: {
  src: string;
  size: "sm" | "md" | "lg";
  className?: string;
}) {
  const box =
    size === "sm"
      ? "size-12 sm:size-16"
      : size === "md"
        ? "size-14 sm:size-[72px]"
        : "size-14 sm:size-[84px]";

  return (
    <div className={cn("relative shrink-0 overflow-hidden", box, className)}>
      <Image
        src={src}
        alt=""
        fill
        sizes="84px"
        className="object-contain"
        draggable={false}
      />
    </div>
  );
}

export function WorkDecor() {
  const [touchActive, setTouchActive] = useState(false);

  useEffect(() => {
    const el = document.getElementById("work");
    if (!el) return;

    const onPointerDown = () => setTouchActive(true);
    const onPointerUpOrCancel = () => setTouchActive(false);

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUpOrCancel);
    window.addEventListener("pointercancel", onPointerUpOrCancel);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUpOrCancel);
      window.removeEventListener("pointercancel", onPointerUpOrCancel);
    };
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 transition-opacity duration-300",
        // Mobile: soft background always visible so it feels closer to desktop
        "opacity-40 md:opacity-0",
        "group-hover/work:opacity-100 group-focus-within/work:opacity-100",
        touchActive ? "opacity-100" : ""
      )}
      aria-hidden
    >
      <div className="absolute top-2 left-3 rotate-[-14deg] opacity-60 transition-transform duration-500 sm:left-6 sm:opacity-75 group-hover/work:translate-y-1 group-focus-within/work:translate-y-1">
        <DecorIcon src="/Git.png" size="sm" className="rounded-full" />
      </div>
      <div className="absolute top-6 right-4 rotate-[10deg] opacity-55 transition-transform duration-500 sm:top-8 sm:right-12 sm:opacity-70 group-hover/work:-translate-y-1 group-focus-within/work:-translate-y-1">
        <DecorIcon src="/nextjs.png" size="md" className="rounded-full" />
      </div>
      <div className="absolute top-1/2 left-[6%] -translate-y-1/2 rotate-[-10deg] opacity-60 transition-transform duration-500 sm:left-[10%] sm:opacity-80 group-hover/work:-translate-x-1 group-focus-within/work:-translate-x-1">
        <DecorIcon src="/React.png" size="lg" className="rounded-xl" />
      </div>
      <div className="absolute right-[8%] bottom-4 rotate-[12deg] opacity-55 transition-transform duration-500 sm:right-[14%] sm:bottom-6 sm:opacity-75 group-hover/work:translate-y-1 group-focus-within/work:translate-y-1">
        <DecorIcon src="/tailwind.png" size="lg" className="rounded-xl" />
      </div>
      <div className="absolute bottom-6 left-[28%] rotate-[-8deg] opacity-50 transition-transform duration-500 sm:bottom-8 sm:left-[32%] sm:opacity-70 group-hover/work:translate-x-1 group-focus-within/work:translate-x-1">
        <DecorIcon src="/Typescript.png" size="md" className="rounded-xl" />
      </div>
      <div className="absolute top-3 left-[42%] rotate-[8deg] opacity-50 transition-transform duration-500 sm:top-4 sm:left-[44%] sm:opacity-70 group-hover/work:-translate-y-1 group-focus-within/work:-translate-y-1">
        <DecorIcon src="/codeee.png" size="md" className="rounded-xl" />
      </div>
    </div>
  );
}
