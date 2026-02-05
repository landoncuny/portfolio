import type { Metadata } from "next";
import { PageHeader, Section, SectionHeader } from "@/components/ui/section";
import { Timeline } from "@/components/ui/timeline";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { experiences, organizations, certifications } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Landon Cuny's professional experience in social media marketing, content creation, and leadership roles.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        title="Experience"
        description="My journey through marketing, content creation, and leadership roles."
      />

      {/* Main Experience Timeline */}
      <Section className="pt-0 bg-white">
        <Timeline items={experiences} />
      </Section>

      {/* Campus & Community */}
      <Section className="bg-[#fafafa]">
        <SectionHeader
          title="Campus & Community"
          subtitle="Leadership and service roles that complement my professional experience."
        />
        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {organizations.map((org, i) => (
            <StaggerItem key={i}>
              <div className="bg-white border border-gray-100 rounded-xl p-6 h-full hover:border-[#93c5fd] transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {org.name}
                    </h3>
                    <p className="text-gray-600">{org.role}</p>
                    {org.type && (
                      <p className="text-sm text-gray-500 mt-1">{org.type}</p>
                    )}
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {org.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {org.highlights.map((highlight, j) => (
                    <li
                      key={j}
                      className="text-sm text-gray-600 flex items-start"
                    >
                      <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full mr-3 mt-1.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Certifications */}
      <Section className="bg-white">
        <SectionHeader
          title="Certifications"
          subtitle="Professional credentials and validated expertise."
        />
        <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <StaggerItem key={i}>
              <div className="bg-[#fafafa] border border-gray-100 rounded-xl p-6 text-center hover:border-[#93c5fd] transition-colors">
                <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-[#3b82f6]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{cert.issuer}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* CTA */}
      <Section className="bg-[#3b82f6]">
        <FadeInView>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              See my work in action
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Explore detailed case studies of my marketing projects and campaigns.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/work" variant="secondary" size="lg">
                View Case Studies
              </Button>
              <Button href="/resume" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-[#3b82f6]">
                Download Resume
              </Button>
            </div>
          </div>
        </FadeInView>
      </Section>
    </>
  );
}
