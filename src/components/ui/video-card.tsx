"use client";

import { useState, useRef } from "react";

interface VideoCardProps {
  src?: string;
  embedUrl?: string;
  platform?: "instagram" | "tiktok";
  views: string;
  likes: string;
}

export function VideoCard({ src, embedUrl, platform, views, likes }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="bg-[#ede9fe] rounded-2xl overflow-hidden border border-gray-100">
      <div className="relative aspect-[9/16]">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            className="w-full h-full border-0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            loading="lazy"
          />
        ) : src ? (
          <div className="cursor-pointer w-full h-full" onClick={handleClick}>
            <video
              ref={videoRef}
              src={src}
              className="w-full h-full object-cover"
              playsInline
              preload="metadata"
              onEnded={handleEnded}
            />
            {/* Play Button Overlay - only show when not playing */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-20 h-20 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
          </div>
        ) : null}
      </div>
      <div className="p-4 flex items-center justify-center gap-4 bg-white rounded-b-2xl">
        <span className="text-base font-bold text-[#8b5cf6]">{views}</span>
        <span className="text-gray-300 font-bold">·</span>
        <span className="text-base font-bold text-[#8b5cf6]">{likes}</span>
      </div>
    </div>
  );
}
