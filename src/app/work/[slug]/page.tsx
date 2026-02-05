import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FadeIn, FadeInView } from "@/components/motion";
import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/content/site-content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.id === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.id === slug);

  if (!study) {
    notFound();
  }

  // Find adjacent case studies for navigation
  const currentIndex = caseStudies.findIndex((s) => s.id === slug);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <Link
              href="/work"
              className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Work
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <span className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              {study.category}
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
              {study.title}
            </h1>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
              {study.summary}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      <Section className="py-8">
        <FadeInView>
          <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl flex items-center justify-center">
            <span className="text-neutral-400 dark:text-neutral-600 text-lg">
              Project Visual
            </span>
          </div>
        </FadeInView>
      </Section>

      {/* Content */}
      <Section className="pt-8">
        <div className="max-w-3xl mx-auto">
          {/* Context */}
          <FadeInView>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                Context
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400">{study.context}</p>
            </div>
          </FadeInView>

          {/* Goal */}
          <FadeInView delay={0.1}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                Goal
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400">{study.goal}</p>
            </div>
          </FadeInView>

          {/* Strategy */}
          <FadeInView delay={0.15}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                Strategy
              </h2>
              <ul className="space-y-3">
                {study.strategy.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-neutral-600 dark:text-neutral-400"
                  >
                    <span className="w-6 h-6 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center text-xs font-medium text-neutral-500 mr-3 mt-0.5 flex-shrink-0">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>

          {/* Execution */}
          <FadeInView delay={0.2}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                Execution
              </h2>
              <ul className="space-y-3">
                {study.execution.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-neutral-600 dark:text-neutral-400"
                  >
                    <span className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>

          {/* Tools */}
          <FadeInView delay={0.25}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                Tools Used
              </h2>
              <TagList tags={study.tools} size="md" />
            </div>
          </FadeInView>

          {/* What I Learned */}
          <FadeInView delay={0.3}>
            <div className="mb-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                What I Learned
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400">{study.learned}</p>
            </div>
          </FadeInView>
        </div>
      </Section>

      {/* Navigation */}
      <Section className="bg-neutral-50 dark:bg-neutral-900/50">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          {prevStudy ? (
            <Link
              href={`/work/${prevStudy.id}`}
              className="group flex-1 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            >
              <span className="text-sm text-neutral-500">Previous</span>
              <div className="mt-2 font-semibold text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                {prevStudy.title}
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {nextStudy ? (
            <Link
              href={`/work/${nextStudy.id}`}
              className="group flex-1 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors text-right"
            >
              <span className="text-sm text-neutral-500">Next</span>
              <div className="mt-2 font-semibold text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                {nextStudy.title}
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <FadeInView>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
              Interested in working together?
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              I&apos;d love to discuss how I can bring this kind of thinking to your team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Get in Touch
              </Button>
              <Button href="/work" variant="outline" size="lg">
                View More Work
              </Button>
            </div>
          </div>
        </FadeInView>
      </Section>
    </>
  );
}
