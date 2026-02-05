import type { Metadata } from "next";
import { PageHeader, Section, SectionHeader } from "@/components/ui/section";
import { ProofBar } from "@/components/ui/proof-bar";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { creatorStats, siteConfig } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Content & Growth",
  description:
    "Landon Cuny's content creation journey - 25,000+ followers, 130M+ views, and brand partnerships with Woody Clothing, Kinetic Apps, and more.",
};

const platformStats = [
  { metric: creatorStats.totalFollowers, label: "Total Followers" },
  { metric: creatorStats.totalViews, label: "Total Views" },
  { metric: creatorStats.brandPartners.length + "+", label: "Brand Partners" },
  { metric: "3", label: "Platforms" },
];

export default function ContentPage() {
  return (
    <>
      <PageHeader
        title="Content & Growth"
        description="Building audiences, creating engaging content, and partnering with brands to drive results."
      />

      {/* Stats */}
      <Section className="pt-0 bg-white">
        <ProofBar items={platformStats} />
      </Section>

      {/* Creator Story */}
      <Section className="bg-[#fafafa]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInView>
            <span className="text-sm font-medium uppercase tracking-wider text-[#3b82f6]">
              My Creator Journey
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
              From hobby to career skill
            </h2>
            <p className="mt-4 text-gray-600">
              What started as creating content for fun evolved into a deep understanding
              of audience psychology, platform algorithms, and content strategy. Building
              an engaged community of 25,000+ followers taught me more about marketing
              than any textbook could.
            </p>
            <p className="mt-4 text-gray-600">
              With 130+ million views across platforms, I&apos;ve learned what resonates,
              what drives engagement, and how to consistently deliver value that keeps
              audiences coming back.
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <PhotoPlaceholder
              src="/images/content-creator.jpg"
              alt="Content Creation"
              aspect="square"
              label="Creator Photo"
            />
          </FadeInView>
        </div>
      </Section>

      {/* Platforms */}
      <Section className="bg-white">
        <SectionHeader
          title="Platforms"
          subtitle="Creating native content optimized for each platform's unique audience and algorithm."
        />
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {creatorStats.platforms.map((platform) => (
            <StaggerItem key={platform}>
              <div className="bg-[#fafafa] border border-gray-100 rounded-xl p-6 text-center h-full hover:border-[#93c5fd] transition-colors">
                <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center mx-auto mb-4">
                  {platform === "Instagram" && (
                    <svg
                      className="w-6 h-6 text-[#3b82f6]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  )}
                  {platform === "TikTok" && (
                    <svg
                      className="w-6 h-6 text-[#3b82f6]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  )}
                  {platform === "YouTube" && (
                    <svg
                      className="w-6 h-6 text-[#3b82f6]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900">
                  {platform}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {platform === "Instagram" &&
                    "Reels, Stories, and feed content for engagement and community building"}
                  {platform === "TikTok" &&
                    "Short-form viral content optimized for the For You Page algorithm"}
                  {platform === "YouTube" &&
                    "Long-form content and livestream event marketing"}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Brand Partners */}
      <Section className="bg-[#fafafa]">
        <SectionHeader
          title="Brand Partnerships"
          subtitle="Collaborating with brands to create authentic content that drives results."
        />
        <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-2xl">
          {creatorStats.brandPartners.map((brand) => (
            <StaggerItem key={brand}>
              <div className="bg-white border border-gray-100 rounded-xl p-6 flex items-center gap-4 hover:border-[#93c5fd] transition-colors">
                <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-[#3b82f6]">
                    {brand.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {brand}
                  </h3>
                  <p className="text-sm text-gray-500">Brand Partner</p>
                </div>
              </div>
            </StaggerItem>
          ))}
          <StaggerItem>
            <div className="bg-white border border-gray-100 rounded-xl p-6 flex items-center gap-4 hover:border-[#93c5fd] transition-colors">
              <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-[#3b82f6]">
                  +
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  And Others
                </h3>
                <p className="text-sm text-gray-500">Additional Partners</p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* Highlights */}
      <Section className="bg-white">
        <SectionHeader
          title="Highlights"
          subtitle="Key achievements from my content creation journey."
        />
        <StaggerContainer className="grid sm:grid-cols-2 gap-4">
          {creatorStats.highlights.map((highlight, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start p-4 bg-[#fafafa] border border-gray-100 rounded-xl hover:border-[#93c5fd] transition-colors">
                <svg
                  className="w-5 h-5 text-[#3b82f6] mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-600">{highlight}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Connect */}
      <Section className="bg-[#fafafa]">
        <FadeInView>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Follow along
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Connect with me on social media to see my latest content and behind-the-scenes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button href={siteConfig.social.instagram} external variant="secondary" size="lg">
                Instagram
              </Button>
              <Button href={siteConfig.social.tiktok} external variant="secondary" size="lg">
                TikTok
              </Button>
              <Button href={siteConfig.social.youtube} external variant="secondary" size="lg">
                YouTube
              </Button>
              <Button href={siteConfig.social.linkedin} external variant="secondary" size="lg">
                LinkedIn
              </Button>
            </div>
          </div>
        </FadeInView>
      </Section>

      {/* CTA */}
      <Section className="bg-[#3b82f6]">
        <FadeInView>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Want to collaborate?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              I&apos;m open to brand partnerships and marketing opportunities.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Get in Touch
              </Button>
              <Button href="/work" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-[#3b82f6]">
                View Case Studies
              </Button>
            </div>
          </div>
        </FadeInView>
      </Section>
    </>
  );
}
