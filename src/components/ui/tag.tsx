import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "accent" | "gradient";
  size?: "sm" | "md";
  className?: string;
}

export function Tag({
  children,
  variant = "default",
  size = "sm",
  className,
}: TagProps) {
  const variants = {
    default:
      "bg-[#eff6ff] text-[#3b82f6] border border-[#93c5fd]",
    outline:
      "border border-[#3b82f6] text-[#3b82f6]",
    accent:
      "bg-[#3b82f6] text-white",
    gradient:
      "bg-[#eff6ff] text-[#3b82f6] border border-[#93c5fd]",
  };

  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-1.5 text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full transition-all hover:scale-105",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}

// Tag list component
interface TagListProps {
  tags: string[];
  variant?: "default" | "outline" | "accent";
  size?: "sm" | "md";
  className?: string;
}

export function TagList({
  tags,
  variant = "default",
  size = "sm",
  className,
}: TagListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <Tag key={tag} variant={variant} size={size}>
          {tag}
        </Tag>
      ))}
    </div>
  );
}
