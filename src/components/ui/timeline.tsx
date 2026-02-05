"use client";

import { cn } from "@/lib/utils";
import { StaggerContainer, StaggerItem } from "@/components/motion";

interface TimelineItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  type?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <StaggerContainer className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#93c5fd]" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <StaggerItem key={item.id}>
            <TimelineEntry item={item} isFirst={index === 0} />
          </StaggerItem>
        ))}
      </div>
    </StaggerContainer>
  );
}

function TimelineEntry({
  item,
  isFirst,
}: {
  item: TimelineItem;
  isFirst: boolean;
}) {
  return (
    <div className="relative pl-8 md:pl-20">
      {/* Dot indicator */}
      <div
        className={cn(
          "absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 rounded-full border-2",
          isFirst
            ? "bg-[#3b82f6] border-[#3b82f6]"
            : "bg-white border-[#93c5fd]"
        )}
      />

      {/* Content */}
      <div className="bg-[#fafafa] border border-gray-100 rounded-xl p-6 hover:border-[#93c5fd] transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {item.role}
            </h3>
            <p className="text-gray-600">
              {item.company}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              {item.period}
            </span>
            {item.period.includes("Present") && (
              <span className="px-2 py-0.5 text-xs font-medium bg-[#eff6ff] text-[#3b82f6] rounded-full">
                Current
              </span>
            )}
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-600">
          {item.description}
        </p>

        <ul className="mt-4 space-y-2">
          {item.responsibilities.map((responsibility, i) => (
            <li
              key={i}
              className="text-sm text-gray-600 flex items-start"
            >
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full mr-3 mt-1.5 flex-shrink-0" />
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
