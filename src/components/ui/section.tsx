import { cn } from "@/lib/utils";
import { FadeInView } from "@/components/motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <FadeInView className={cn("mb-12", align === "center" && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          {subtitle}
        </p>
      )}
    </FadeInView>
  );
}

// Page header for individual pages
interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden bg-white", className)}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#93c5fd] rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <FadeInView>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
              {description}
            </p>
          )}
        </FadeInView>
      </div>
    </div>
  );
}
