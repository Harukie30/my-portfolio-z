"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
        <Image src="/Git.png" alt="" width={48} height={48} className="rounded-full sm:h-16 sm:w-16" />
      </div>
      <div className="absolute top-6 right-4 rotate-[10deg] opacity-55 transition-transform duration-500 sm:top-8 sm:right-12 sm:opacity-70 group-hover/work:-translate-y-1 group-focus-within/work:-translate-y-1">
        <Image src="/nextjs.png" alt="" width={52} height={52} className="rounded-full sm:h-[72px] sm:w-[72px]" />
      </div>
      <div className="absolute top-1/2 left-[6%] -translate-y-1/2 rotate-[-10deg] opacity-60 transition-transform duration-500 sm:left-[10%] sm:opacity-80 group-hover/work:-translate-x-1 group-focus-within/work:-translate-x-1">
        <Image src="/React.png" alt="" width={56} height={56} className="rounded-xl sm:h-[84px] sm:w-[84px]" />
      </div>
      <div className="absolute right-[8%] bottom-4 rotate-[12deg] opacity-55 transition-transform duration-500 sm:right-[14%] sm:bottom-6 sm:opacity-75 group-hover/work:translate-y-1 group-focus-within/work:translate-y-1">
        <Image src="/tailwind.png" alt="" width={56} height={56} className="rounded-xl sm:h-[88px] sm:w-[88px]" />
      </div>
      <div className="absolute bottom-6 left-[28%] rotate-[-8deg] opacity-50 transition-transform duration-500 sm:bottom-8 sm:left-[32%] sm:opacity-70 group-hover/work:translate-x-1 group-focus-within/work:translate-x-1">
        <Image src="/Typescript.png" alt="" width={48} height={48} className="rounded-xl sm:h-[70px] sm:w-[70px]" />
      </div>
      <div className="absolute top-3 left-[42%] rotate-[8deg] opacity-50 transition-transform duration-500 sm:top-4 sm:left-[44%] sm:opacity-70 group-hover/work:-translate-y-1 group-focus-within/work:-translate-y-1">
        <Image src="/codeee.png" alt="" width={48} height={48} className="rounded-xl sm:h-[72px] sm:w-[72px]" />
      </div>
    </div>
  );
}

