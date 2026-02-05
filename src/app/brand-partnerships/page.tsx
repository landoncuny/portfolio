import { FadeIn, FadeInView } from "@/components/motion";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { creatorStats } from "@/content/site-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Collaborations",
  description: "Collaborating with brands like Woody Clothing, Hollister, Pacsun and more to create authentic content that drives engagement and results.",
};

export default function BrandPartnershipsPage() {
  return (
    <>
      {/* Hero - Centered with Photo Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#f0e6d8]">
        {/* Background Photo Placeholder */}
        <div className="absolute inset-0">
          <PhotoPlaceholder
            src="/images/brand-hero.jpg"
            alt="Brand Collaborations"
            aspect="wide"
            label="Brand Hero Photo"
            className="w-full h-full rounded-none"
            priority
          />
          {/* Light transparent overlay */}
          <div className="absolute inset-0 bg-white/50" />
        </div>

        {/* Centered Text */}
        <div className="relative z-10 text-center px-6">
          <FadeIn delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-cursive font-bold text-gray-900">
              Brand Collaborations
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-sm md:text-base text-gray-800 font-semibold tracking-wide mt-4">
              Creating authentic content that drives results
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8">
              Featured Partners
            </h2>
          </FadeInView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Kinetic Apps Inc.", url: "https://kineticapps.ai/", position: "center" },
              { name: "Woody Clothing", url: "https://woodyclothing.com/", position: "center" },
              { name: "Yordy Jewelry", url: "https://www.yordy.co/", position: "center" },
              { name: "Hollister", url: "https://www.hollisterco.com/shop/us", position: "center" },
              { name: "Pacsun", url: "https://www.pacsun.com/", position: "center" },
              { name: "Silverlake Flea Market", url: "https://www.silverlakeflea.com/", position: "center top" },
              { name: "Bravest Studios", url: "https://braveststudios.com/", position: "center 45%" },
              { name: "Prism Clothing", url: "https://prismclothing.bigcartel.com/", position: "center" },
            ].map((partner, index) => (
              <FadeInView key={partner.name} delay={0.1 + index * 0.05}>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#a67c52] transition-colors"
                >
                  <PhotoPlaceholder
                    src={`/images/partner-${index + 1}.jpg`}
                    alt={partner.name}
                    aspect="video"
                    label={`${partner.name} Photo`}
                    className="rounded-none"
                    objectPosition={partner.position}
                  />
                  <div className="p-3 text-center">
                    <h3 className="text-xs font-semibold text-gray-900">{partner.name}</h3>
                  </div>
                </a>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Working with Brands - Text Left, Photo Right */}
      <section className="py-12 bg-[#f0e6d8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            <div className="flex flex-col">
              <FadeInView>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
                  Working with Brands
                </h2>
              </FadeInView>
              <FadeInView delay={0.1} className="flex-1 flex">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col justify-center flex-1">
                  <p className="text-gray-600 text-2xl leading-relaxed mb-6">
                    With an engaged audience of 25,000+ followers and over 130 million views,
                    I've had the opportunity to partner with brands that align with my content
                    and values. My approach focuses on creating authentic content that resonates
                    with my audience while delivering real value for brand partners.
                  </p>
                  <p className="text-gray-600 text-2xl leading-relaxed">
                    I've developed a professional approach for managing brand collaborations
                    from initial outreach to final deliverables, ensuring clear communication
                    and measurable results throughout the entire process.
                  </p>
                </div>
              </FadeInView>
            </div>
            <div className="space-y-5">
              <FadeInView delay={0.1}>
                <PhotoPlaceholder
                  src="/images/brand-1.jpg"
                  alt="Brand collaboration work"
                  aspect="video"
                  label="Brand Photo 1"
                  className="rounded-2xl"
                  objectPosition="center top"
                />
              </FadeInView>
              <FadeInView delay={0.15}>
                <PhotoPlaceholder
                  src="/images/brand-2.jpg"
                  alt="Brand collaboration work"
                  aspect="video"
                  label="Brand Photo 2"
                  className="rounded-2xl"
                />
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* My Partnership Process - Photos Left, Numbered Steps Right */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            <FadeInView delay={0.1} className="flex items-center justify-center h-full">
              <PhotoPlaceholder
                src="/images/brand-3.jpg"
                alt="Partnership process"
                label="Brand Photo 3"
                className="w-full h-full"
                objectFit="contain"
              />
            </FadeInView>
            <div className="flex flex-col">
              <FadeInView>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
                  My Partnership Process
                </h2>
              </FadeInView>
              <div className="space-y-4 flex-1">
                <FadeInView delay={0.1}>
                  <div className="bg-[#f0e6d8] rounded-2xl p-5 border border-[#d4b896]">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="w-8 h-8 rounded-full bg-[#a67c52] text-white flex items-center justify-center text-sm font-medium shrink-0">1</span>
                      <h3 className="font-semibold text-gray-900 text-lg">Discovery & Alignment</h3>
                    </div>
                    <p className="text-gray-600 ml-12 text-base">
                      Understanding the brand's goals and ensuring authentic alignment with my content.
                    </p>
                  </div>
                </FadeInView>
                <FadeInView delay={0.15}>
                  <div className="bg-[#f0e6d8] rounded-2xl p-5 border border-[#d4b896]">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="w-8 h-8 rounded-full bg-[#a67c52] text-white flex items-center justify-center text-sm font-medium shrink-0">2</span>
                      <h3 className="font-semibold text-gray-900 text-lg">Creative Development</h3>
                    </div>
                    <p className="text-gray-600 ml-12 text-base">
                      Developing content that naturally integrate the brand while maintaining authenticity.
                    </p>
                  </div>
                </FadeInView>
                <FadeInView delay={0.2}>
                  <div className="bg-[#f0e6d8] rounded-2xl p-5 border border-[#d4b896]">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="w-8 h-8 rounded-full bg-[#a67c52] text-white flex items-center justify-center text-sm font-medium shrink-0">3</span>
                      <h3 className="font-semibold text-gray-900 text-lg">Production & Delivery</h3>
                    </div>
                    <p className="text-gray-600 ml-12 text-base">
                      Producing high-quality content aligned with brand guidelines from script to final edit, communicating with the brand throughout.
                    </p>
                  </div>
                </FadeInView>
                <FadeInView delay={0.25}>
                  <div className="bg-[#f0e6d8] rounded-2xl p-5 border border-[#d4b896]">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="w-8 h-8 rounded-full bg-[#a67c52] text-white flex items-center justify-center text-sm font-medium shrink-0">4</span>
                      <h3 className="font-semibold text-gray-900 text-lg">Performance Reporting</h3>
                    </div>
                    <p className="text-gray-600 ml-12 text-base">
                      Providing detailed reports and follow-ups with engagement metrics and insights to ensure the brand is satisfied with the results.
                    </p>
                  </div>
                </FadeInView>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Learned - Text Left, Photos Right */}
      <section className="py-12 bg-[#f0e6d8]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
              What I Learned
            </h2>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            <div className="grid grid-cols-2 gap-5">
              <FadeInView delay={0.1} className="flex">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col flex-1 justify-center">
                  <h3 className="font-semibold text-gray-900 mb-2 text-xl">Brand Collaboration</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Learned how to collaborate with brands through social media marketing and build lasting partnerships.</p>
                </div>
              </FadeInView>
              <FadeInView delay={0.15} className="flex">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col flex-1 justify-center">
                  <h3 className="font-semibold text-gray-900 mb-2 text-xl">UGC Creation</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Developed skills in creating user-generated content that feels authentic while meeting brand objectives.</p>
                </div>
              </FadeInView>
              <FadeInView delay={0.2} className="flex">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col flex-1 justify-center">
                  <h3 className="font-semibold text-gray-900 mb-2 text-xl">Contract Negotiation</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Learned to negotiate contracts, agree on deliverables, and develop fair rates for my work.</p>
                </div>
              </FadeInView>
              <FadeInView delay={0.25} className="flex">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col flex-1 justify-center">
                  <h3 className="font-semibold text-gray-900 mb-2 text-xl">Authentic Integration</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Mastered fitting advertisements into content without oversaturating my personal niche and brand.</p>
                </div>
              </FadeInView>
              <FadeInView delay={0.3} className="flex col-span-2">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col flex-1 justify-center">
                  <h3 className="font-semibold text-gray-900 mb-2 text-xl">Professional Communication</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Learned how to communicate with brands and conduct personal meetings to discuss deliverables, dates, and other important factors.</p>
                </div>
              </FadeInView>
            </div>
            <div className="space-y-5">
              <FadeInView delay={0.1}>
                <PhotoPlaceholder
                  src="/images/brand-5.jpg"
                  alt="What I learned"
                  aspect="wide"
                  label="Brand Photo 5"
                  className="rounded-2xl"
                />
              </FadeInView>
              <FadeInView delay={0.15}>
                <PhotoPlaceholder
                  src="/images/brand-6.jpg"
                  alt="What I learned"
                  aspect="square"
                  label="Brand Photo 6"
                  className="rounded-2xl"
                  objectPosition="center 15%"
                />
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 text-center">
              Tools I Use
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {["BILL AP & AR", "Stripe", "Adobe Premiere Pro", "CapCut", "Canva", "Instagram Insights", "TikTok Analytics"].map((tool) => (
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
    </>
  );
}
