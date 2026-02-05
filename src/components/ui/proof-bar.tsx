"use client";

import { StaggerContainer, StaggerItem } from "@/components/motion";
import { cn } from "@/lib/utils";

interface ProofItem {
  metric: string;
  label: string;
}

interface ProofBarProps {
  items: ProofItem[];
  className?: string;
}

export function ProofBar({ items, className }: ProofBarProps) {
  return (
    <StaggerContainer
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6",
        className
      )}
      staggerDelay={0.1}
    >
      {items.map((item, index) => (
        <StaggerItem key={index}>
          <div className="text-center p-4 md:p-6 bg-[#eff6ff] rounded-xl border border-[#93c5fd]">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3b82f6]">
              {item.metric}
            </div>
            <div className="text-xs md:text-sm text-gray-600 mt-1">
              {item.label}
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
