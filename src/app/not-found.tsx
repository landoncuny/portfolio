import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-6">
        <FadeIn>
          <h1 className="text-8xl font-bold text-neutral-200 dark:text-neutral-800">
            404
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 text-2xl font-bold text-neutral-900 dark:text-white">
            Page not found
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" size="lg">
              Go Home
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
