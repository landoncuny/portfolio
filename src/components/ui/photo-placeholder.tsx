"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhotoPlaceholderProps {
  src?: string;
  alt: string;
  className?: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  label?: string;
  priority?: boolean;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  scale?: number;
}

export function PhotoPlaceholder({
  src,
  alt,
  className,
  aspect = "square",
  label = "Add Photo",
  priority = false,
  objectPosition = "center",
  objectFit = "cover",
  scale = 1,
}: PhotoPlaceholderProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[2/1]",
  };

  if (src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          aspectClasses[aspect],
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn(
            objectFit === "contain" ? "object-contain" : "object-cover",
          )}
          style={{
            objectPosition,
            transform: `scale(${scale})`,
            borderRadius: objectFit === "contain" ? "1rem" : undefined
          }}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950 group cursor-pointer",
        aspectClasses[aspect],
        className
      )}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 to-pink-400 opacity-20 blur-xl" />
      </div>

      {/* Icon and label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-indigo-400 dark:text-indigo-300">
        <svg
          className="w-12 h-12 opacity-50 group-hover:opacity-70 transition-opacity"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <span className="text-sm font-medium opacity-50 group-hover:opacity-70 transition-opacity">
          {label}
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-pink-500 opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
        <div className="text-white text-center">
          <svg
            className="w-10 h-10 mx-auto mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span className="font-semibold">{label}</span>
        </div>
      </div>
    </div>
  );
}

// Grid of photos component
interface PhotoGridProps {
  photos: Array<{ src?: string; alt: string }>;
  className?: string;
}

export function PhotoGrid({ photos, className }: PhotoGridProps) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-4", className)}>
      {photos.map((photo, i) => (
        <PhotoPlaceholder
          key={i}
          src={photo.src}
          alt={photo.alt}
          aspect={i === 0 ? "video" : "square"}
          className={i === 0 ? "col-span-2" : ""}
          label={`Photo ${i + 1}`}
        />
      ))}
    </div>
  );
}
