import { FadeIn, FadeInView } from "@/components/motion";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WHIT Education Platform",
  description: "Director of Social Media Growth at WHIT Education Platform - leading content strategy and social media growth for an education technology company.",
};

export default function WHITEducationPage() {
  return (
    <>
      {/* Hero - Centered with Photo Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#f5f5dc]">
        {/* Background Photo */}
        <div className="absolute inset-0">
          <PhotoPlaceholder
            src="/images/whit-hero.jpg"
            alt="WHIT Education"
            aspect="wide"
            label="WHIT Hero Photo"
            className="w-full h-full rounded-none"
            objectFit="contain"
            scale={0.85}
            priority
          />
          {/* Light transparent overlay */}
          <div className="absolute inset-0 bg-white/60" />
        </div>

        {/* Centered Text */}
        <div className="relative z-10 text-center px-6">
          <FadeIn delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-cursive font-bold text-gray-900">
              WHIT Education
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-sm md:text-base text-gray-800 font-semibold tracking-wide mt-4">
              December 2025 – Present
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About the Role - Text Left, Photos Right */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            <div className="flex flex-col">
              <FadeInView>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
                  About the Role
                </h2>
              </FadeInView>
              <FadeInView delay={0.1} className="flex-1 flex">
                <div className="bg-[#f5f5dc] rounded-2xl p-8 border border-[#d4c8a0] flex flex-col justify-center flex-1">
                  <p className="text-gray-600 text-2xl leading-normal mb-6">
                    Leading social media strategy for an education technology platform focused on
                    empowering students to find their voice. WHIT is built on the belief that every
                    student deserves to be heard and have the tools to express themselves effectively.
                  </p>
                  <p className="text-gray-600 text-2xl leading-normal">
                    As Director of Social Media Growth, I was tasked with building the brand's
                    social presence from the ground up ahead of product launch, developing a
                    comprehensive strategy that resonates with educators across K-12 and higher education.
                  </p>
                </div>
              </FadeInView>
            </div>
            <div className="space-y-5">
              <FadeInView delay={0.1}>
                <PhotoPlaceholder
                  src="/images/whit-1.jpg"
                  alt="WHIT Education work"
                  aspect="video"
                  label="WHIT Photo 1"
                  className="rounded-2xl"
                />
              </FadeInView>
              <FadeInView delay={0.15}>
                <PhotoPlaceholder
                  src="/images/whit-2.jpg"
                  alt="WHIT Education work"
                  aspect="video"
                  label="WHIT Photo 2"
                  className="rounded-2xl"
                />
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* What I've Learned at WHIT - Photos Left, Text Right */}
      <section className="py-12 bg-[#f5f5dc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            <div className="space-y-5">
              <FadeInView delay={0.1}>
                <PhotoPlaceholder
                  src="/images/whit-3.jpg"
                  alt="WHIT Education work"
                  aspect="video"
                  label="WHIT Photo 3"
                  className="rounded-2xl"
                />
              </FadeInView>
              <FadeInView delay={0.15} className="mt-10">
                <PhotoPlaceholder
                  src="/images/whit-4.jpg"
                  alt="WHIT Education work"
                  aspect="video"
                  label="WHIT Photo 4"
                  className="rounded-2xl"
                />
              </FadeInView>
            </div>
            <div className="flex flex-col">
              <FadeInView>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
                  What I've Learned at WHIT
                </h2>
              </FadeInView>
              <div className="grid grid-cols-2 gap-5 flex-1">
                <FadeInView delay={0.1} className="flex">
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col flex-1 justify-center">
                    <h3 className="font-semibold text-gray-900 mb-3 text-xl">Startup Mindset</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">Learned to work cross-functional roles and adapt quickly in an early-stage startup environment.</p>
                  </div>
                </FadeInView>
                <FadeInView delay={0.15} className="flex">
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col flex-1 justify-center">
                    <h3 className="font-semibold text-gray-900 mb-3 text-xl">AI Development</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">Gained hands-on experience using AI tools to build platforms and ensure user-friendliness without sacrificing quality.</p>
                  </div>
                </FadeInView>
                <FadeInView delay={0.2} className="flex">
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col flex-1 justify-center">
                    <h3 className="font-semibold text-gray-900 mb-3 text-xl">User Research</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">Conducted real in-class testing with teachers and students to verify product viability and gather feedback.</p>
                  </div>
                </FadeInView>
                <FadeInView delay={0.25} className="flex">
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col flex-1 justify-center">
                    <h3 className="font-semibold text-gray-900 mb-3 text-xl">Social Media Strategy</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">Learned to create a cohesive brand and social media strategy in the education industry from the ground up.</p>
                  </div>
                </FadeInView>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product & Startup Experience - Text Left, Photos Right */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
              Product & Startup Experience
            </h2>
          </FadeInView>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-stretch">
            <div className="flex flex-col space-y-5">
              <FadeInView delay={0.1} className="flex-1 flex">
                <div className="bg-[#f5f5dc] rounded-2xl p-6 border border-[#d4c8a0] flex flex-col justify-center flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">AI-Powered Development</h3>
                  <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                    Aided in developing WHIT's platform using AI tools for backend coding,
                    leveraging Claude AI and ChatGPT Codex to accelerate development and
                    refine core features.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white text-[#a16207] text-sm rounded-full">Claude AI</span>
                    <span className="px-3 py-1 bg-white text-[#a16207] text-sm rounded-full">Prompt Engineering</span>
                    <span className="px-3 py-1 bg-white text-[#a16207] text-sm rounded-full">Backend Coding</span>
                  </div>
                </div>
              </FadeInView>
              <FadeInView delay={0.15} className="flex-1 flex">
                <div className="bg-[#f5f5dc] rounded-2xl p-6 border border-[#d4c8a0] flex flex-col justify-center flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">In-Class Testing & Pitching</h3>
                  <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                    Assisted with real in-class testing alongside teachers and students to
                    validate the product, and helped develop pitches for school districts
                    to drive implementation and support go-to-market efforts.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white text-[#a16207] text-sm rounded-full">User Testing</span>
                    <span className="px-3 py-1 bg-white text-[#a16207] text-sm rounded-full">District Pitches</span>
                    <span className="px-3 py-1 bg-white text-[#a16207] text-sm rounded-full">Product Validation</span>
                  </div>
                </div>
              </FadeInView>
            </div>
            <div className="space-y-5">
              <FadeInView delay={0.1}>
                <PhotoPlaceholder
                  src="/images/whit-5.jpg"
                  alt="WHIT Product Development"
                  aspect="video"
                  label="WHIT Photo 5"
                  className="rounded-2xl"
                  objectFit="contain"
                />
              </FadeInView>
              <FadeInView delay={0.15}>
                <PhotoPlaceholder
                  src="/images/whit-6.jpg"
                  alt="WHIT Startup Experience"
                  aspect="video"
                  label="WHIT Photo 6"
                  className="rounded-2xl"
                />
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 bg-[#f5f5dc]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 text-center">
              Tools & Platforms
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {["PowerPoint", "Claude AI", "ChatGPT Codex", "Prompt Engineering", "Canva", "Excel", "CapCut", "LinkedIn"].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Visit WHIT */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
              See WHIT in Action
            </h2>
            <a
              href="https://whitai.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#a16207] text-white rounded-full font-semibold hover:bg-[#854d0e] transition-colors"
            >
              Visit whitai.app
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
