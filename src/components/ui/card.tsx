import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScaleOnHover } from "@/components/motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  hover?: boolean;
}

export function Card({ children, className, href, hover = false }: CardProps) {
  const cardContent = (
    <div
      className={cn(
        "bg-white border border-gray-100 rounded-2xl p-6",
        hover && "hover:border-[#93c5fd] transition-all duration-300 hover:shadow-lg hover:shadow-[#3b82f6]/10",
        className
      )}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <ScaleOnHover>
        <Link href={href} className="block">
          {cardContent}
        </Link>
      </ScaleOnHover>
    );
  }

  if (hover) {
    return <ScaleOnHover>{cardContent}</ScaleOnHover>;
  }

  return cardContent;
}

// Metric Card for proof bar and stats
interface MetricCardProps {
  metric: string;
  label: string;
  className?: string;
}

export function MetricCard({ metric, label, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        "text-center px-6 py-4 bg-[#eff6ff] rounded-lg",
        className
      )}
    >
      <div className="text-2xl md:text-3xl font-bold text-gray-900">
        {metric}
      </div>
      <div className="text-sm text-gray-600 mt-1">
        {label}
      </div>
    </div>
  );
}

// Project/Case Study Card
interface ProjectCardProps {
  title: string;
  category: string;
  summary: string;
  href: string;
}

export function ProjectCard({
  title,
  category,
  summary,
  href,
}: ProjectCardProps) {
  return (
    <Card href={href} hover className="h-full flex flex-col group">
      <div className="flex items-center gap-2">
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#eff6ff] text-[#3b82f6] border border-[#93c5fd]">
          {category}
        </span>
      </div>
      <h3 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-[#3b82f6] transition-colors">
        {title}
      </h3>
      <p className="mt-3 text-gray-600 text-sm flex-grow">
        {summary}
      </p>
      <div className="mt-4 flex items-center text-sm font-semibold text-[#3b82f6]">
        View Case Study
        <svg
          className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </Card>
  );
}

// Experience Card
interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  isActive?: boolean;
}

export function ExperienceCard({
  company,
  role,
  period,
  description,
  responsibilities,
  isActive = false,
}: ExperienceCardProps) {
  return (
    <Card className="relative">
      {isActive && (
        <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium bg-[#eff6ff] text-[#3b82f6] rounded-full">
          Current
        </span>
      )}
      <div className="text-sm text-gray-500">
        {period}
      </div>
      <h3 className="mt-1 text-xl font-semibold text-gray-900">
        {role}
      </h3>
      <div className="text-gray-600">{company}</div>
      <p className="mt-4 text-gray-600 text-sm">
        {description}
      </p>
      <ul className="mt-4 space-y-2">
        {responsibilities.map((item, index) => (
          <li
            key={index}
            className="text-sm text-gray-600 flex items-start"
          >
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full mr-3 mt-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
