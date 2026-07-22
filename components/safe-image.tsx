"use client";

import Image, { type ImageProps } from "next/image";
import { useState, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

type SafeImageProps = ImageProps & {
  fallbackLabel?: string;
  fallbackClassName?: string;
};

function labelFromSrc(src: ImageProps["src"]) {
  if (typeof src !== "string") return "Image";
  const fileName = src.split("/").pop()?.split(".").shift();
  return fileName?.replace(/[-_]+/g, " ") || "Image";
}

function initialsFromLabel(label: string) {
  const initials = label
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return initials || label.slice(0, 2).toUpperCase() || "??";
}

function dimension(value: ImageProps["width"] | ImageProps["height"]) {
  if (typeof value === "number") return `${value}px`;
  if (typeof value === "string") return value;
  return undefined;
}

export function SafeImage({
  alt,
  className,
  fallbackClassName,
  fallbackLabel,
  onError,
  src,
  ...props
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    const label = fallbackLabel || labelFromSrc(src);
    const style: CSSProperties = {
      ...props.style,
      ...(props.fill
        ? {}
        : {
            width: dimension(props.width),
            height: dimension(props.height),
          }),
    };

    return (
      <div
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
        className={cn(
          "flex items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-linear-to-br from-blue-500/15 via-sky-400/10 to-cyan-300/20 p-2 text-center shadow-inner",
          props.fill && "absolute inset-0",
          className,
          fallbackClassName
        )}
        style={style}
      >
        <span className="font-mono text-xs font-semibold tracking-wide text-primary sm:text-sm">
          {initialsFromLabel(label)}
        </span>
      </div>
    );
  }

  const hasFixedDimensions =
    props.width != null && props.height != null && !props.fill;

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      draggable={false}
      loading={props.priority ? undefined : props.loading ?? "lazy"}
      className={cn("select-none [-webkit-user-drag:none]", className)}
      style={{
        ...props.style,
        ...(hasFixedDimensions ? { width: "auto", height: "auto" } : {}),
      }}
      onContextMenu={(event) => {
        event.preventDefault();
        props.onContextMenu?.(event);
      }}
      onDragStart={(event) => {
        event.preventDefault();
        props.onDragStart?.(event);
      }}
      onError={(event) => {
        setFailed(true);
        onError?.(event);
      }}
    />
  );
}
