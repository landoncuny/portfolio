import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/ui/card";
import { StaggerContainer, StaggerItem, FadeInView } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies showcasing Landon Cuny's marketing projects, content strategies, and campaign executions.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="Work & Case Studies"
        description="Detailed breakdowns of my marketing projects, content strategies, and campaign executions."
      />

      <Section className="pt-0 bg-white">
        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <StaggerItem key={study.id}>
              <ProjectCard
                title={study.title}
                category={study.category}
                summary={study.summary}
                href={`/work/${study.id}`}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Approach Section */}
      <Section className="bg-[#fafafa]">
        <div className="max-w-3xl">
          <FadeInView>
            <span className="text-sm font-medium uppercase tracking-wider text-[#3b82f6]">
              My Approach
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
              Strategy meets execution
            </h2>
            <p className="mt-4 text-gray-600">
              Every project I take on follows a consistent framework: understand the audience,
              define clear goals, execute with creativity, and measure what matters. I believe
              the best marketing combines data-driven insights with authentic storytelling.
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-100 rounded-xl p-6 hover:border-[#93c5fd] transition-colors">
                <div className="text-3xl font-bold text-[#3b82f6]">
                  1.
                </div>
                <h3 className="mt-2 font-semibold text-gray-900">
                  Research & Strategy
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Understanding the audience, market, and objectives before creating anything.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-6 hover:border-[#93c5fd] transition-colors">
                <div className="text-3xl font-bold text-[#3b82f6]">
                  2.
                </div>
                <h3 className="mt-2 font-semibold text-gray-900">
                  Creative Execution
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Producing content that resonates and drives the desired action.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-6 hover:border-[#93c5fd] transition-colors">
                <div className="text-3xl font-bold text-[#3b82f6]">
                  3.
                </div>
                <h3 className="mt-2 font-semibold text-gray-900">
                  Distribution & Growth
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Getting content in front of the right people at the right time.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-6 hover:border-[#93c5fd] transition-colors">
                <div className="text-3xl font-bold text-[#3b82f6]">
                  4.
                </div>
                <h3 className="mt-2 font-semibold text-gray-900">
                  Analysis & Iteration
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Measuring results and continuously improving based on data.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[#3b82f6]">
        <FadeInView>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let&apos;s create something together
            </h2>
            <p className="mt-4 text-lg text-white/80">
              I&apos;m always looking for new challenges and opportunities to grow.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Get in Touch
              </Button>
              <Button href="/content" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-[#3b82f6]">
                View Content & Growth
              </Button>
            </div>
          </div>
        </FadeInView>
      </Section>
    </>
  );
}
