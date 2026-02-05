import { FadeIn, FadeInView } from "@/components/motion";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, certifications } from "@/content/site-content";

export default function Home() {
  return (
    <>
      {/* Hero - Full Width Background */}
      <section className="relative min-h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-photo.jpg"
            alt="Landon Cuny"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Text Container - Percentage-based positioning */}
        <div className="absolute z-10 left-[20%] bottom-[30%]">
          <FadeIn delay={0.1}>
            <span className="block text-[clamp(2.5rem,5vw,4.5rem)] font-cursive text-gray-900 leading-[0.9]">
              Landon
            </span>
          </FadeIn>
          <FadeIn delay={0.12}>
            <span className="block text-[clamp(2.5rem,5vw,4.5rem)] font-cursive text-gray-900 ml-10 leading-[0.9]">
              Cuny
            </span>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-[clamp(0.7rem,1.2vw,0.875rem)] text-gray-800 font-body tracking-wide mt-2">
              Content Creator · Social Media Director · Student
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About Me */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <FadeInView delay={0.1}>
            <h2 className="text-2xl font-cursive text-gray-900 text-center mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              Hi! I'm Landon Cuny, a Marketing student at San Diego State University with real-world experience in content creation and social media growth. I built an engaged audience of 25,000+ followers and 130+ million views across all platforms. I am currently the Director of Social Media Growth for WHIT Education Platform.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Experience Links */}
      <section className="py-10 bg-[#eff6ff]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-3">
            {/* Content Creation */}
            <FadeInView delay={0.2}>
              <Link
                href="/content-creation"
                className="block bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#93c5fd] transition-colors group"
              >
                <PhotoPlaceholder
                  src="/images/content-preview.jpg"
                  alt="Content Creation"
                  aspect="video"
                  label="Content"
                  className="w-full rounded-none rounded-t-xl"
                />
                <div className="py-3 text-center">
                  <h3 className="font-cursive text-xl text-gray-900 group-hover:text-[#3b82f6] transition-colors">
                    Content Creation
                  </h3>
                </div>
              </Link>
            </FadeInView>

            {/* WHIT Education */}
            <FadeInView delay={0.3}>
              <Link
                href="/whit-education"
                className="block bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#93c5fd] transition-colors group"
              >
                {/* WHIT IMAGE POSITION - adjust objectPosition to crop (e.g., "center top", "center 70%", "center bottom") */}
                <PhotoPlaceholder
                  src="/images/whit-preview.jpg"
                  alt="WHIT Education"
                  aspect="video"
                  label="WHIT"
                  className="w-full rounded-none rounded-t-xl"
                  objectPosition="center 15%"
                />
                <div className="py-3 text-center">
                  <h3 className="font-cursive text-xl text-gray-900 group-hover:text-[#3b82f6] transition-colors">
                    WHIT Education
                  </h3>
                </div>
              </Link>
            </FadeInView>

            {/* Brand Partnerships */}
            <FadeInView delay={0.4}>
              <Link
                href="/brand-partnerships"
                className="block bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#93c5fd] transition-colors group"
              >
                <PhotoPlaceholder
                  src="/images/brand-preview.jpg"
                  alt="Brand Partnerships"
                  aspect="video"
                  label="Brands"
                  className="w-full rounded-none rounded-t-xl"
                  objectPosition="center 30%"
                />
                <div className="py-3 text-center">
                  <h3 className="font-cursive text-xl text-gray-900 group-hover:text-[#3b82f6] transition-colors">
                    Brand Partnerships
                  </h3>
                </div>
              </Link>
            </FadeInView>

            {/* Campus Involvement */}
            <FadeInView delay={0.5}>
              <Link
                href="/campus"
                className="block bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#93c5fd] transition-colors group"
              >
                <PhotoPlaceholder
                  src="/images/campus-preview.jpg"
                  alt="Campus Involvement"
                  aspect="video"
                  label="Campus"
                  className="w-full rounded-none rounded-t-xl"
                />
                <div className="py-3 text-center">
                  <h3 className="font-cursive text-xl text-gray-900 group-hover:text-[#3b82f6] transition-colors">
                    Campus Involvement
                  </h3>
                </div>
              </Link>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeInView>
            <h2 className="text-2xl font-cursive text-gray-900 text-center mb-8">
              Certifications
            </h2>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Excel Certification */}
            <FadeInView delay={0.1}>
              <a
                href="https://www.credly.com/badges/45067bbe-f884-4067-b798-0fae798d1161/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#eff6ff] rounded-xl p-5 border border-gray-100 hover:border-[#93c5fd] transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0">
                    {/* Excel Logo */}
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M23 1.5H8c-.3 0-.5.2-.5.5v2H1c-.3 0-.5.2-.5.5v15c0 .3.2.5.5.5h6.5v2c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5v-19c0-.3-.2-.5-.5-.5zM1.5 5h5.5v1.5h-4v8h4V16h-5.5V5zM7 8.5v5H3v-5h4zm.5 12V17h1v2.5h-1zm14.5 0H9.5V17H15v-1H9.5v-2H15v-1H9.5v-2H15v-1H9.5V8H15V7H9.5V4.5H22v16z" fill="#217346"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 group-hover:text-[#3b82f6] transition-colors text-sm leading-tight">
                      Microsoft Office Specialist: Excel Associate
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">Microsoft</p>
                  </div>
                </div>
              </a>
            </FadeInView>

            {/* SDSU AI Certification */}
            <FadeInView delay={0.2}>
              <a
                href="https://www.credly.com/badges/19380a88-2d31-4aa6-afb1-ef27b621d360/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#eff6ff] rounded-xl p-5 border border-gray-100 hover:border-[#93c5fd] transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#a6192e] rounded-lg flex items-center justify-center shrink-0">
                    {/* SDSU Logo - Simplified */}
                    <span className="text-white font-bold text-xs">SDSU</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 group-hover:text-[#3b82f6] transition-colors text-sm leading-tight">
                      Student Academic Applications of AI (AAAI)
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">San Diego State University</p>
                  </div>
                </div>
              </a>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 bg-[#dbeafe]">
        <div className="max-w-3xl mx-auto px-6">
          <FadeInView>
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-[#3b82f6] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {siteConfig.email}
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a
                href={`tel:${siteConfig.phone.replace(/-/g, "")}`}
                className="flex items-center gap-2 hover:text-[#3b82f6] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteConfig.phone}
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#3b82f6] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
