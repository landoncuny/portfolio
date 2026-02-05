import { FadeIn, FadeInView } from "@/components/motion";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { VideoCard } from "@/components/ui/video-card";
import { siteConfig, creatorStats } from "@/content/site-content";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Creation",
  description: "Building audiences on Instagram, TikTok, and YouTube with 25,000+ followers and 130M+ views through engaging content and strategic growth.",
};

export default function ContentCreationPage() {
  return (
    <>
      {/* Hero - Centered with Photo Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* Background Photo Placeholder */}
        <div className="absolute inset-0">
          <PhotoPlaceholder
            src="/images/content-hero.jpg"
            alt="Content Creation"
            aspect="wide"
            label="Content Hero Photo"
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
              Content Creation
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-sm md:text-base text-gray-800 font-semibold tracking-wide mt-4">
              April 2025 – Present
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInView>
            <p className="text-center text-sm font-medium text-[#8b5cf6] uppercase tracking-wider mb-6">
              Metrics
            </p>
          </FadeInView>
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <FadeInView delay={0.1}>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-serif text-[#8b5cf6]">{creatorStats.totalFollowers}</p>
                <p className="text-gray-600 mt-1">Followers</p>
              </div>
            </FadeInView>
            <FadeInView delay={0.15}>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-serif text-[#8b5cf6]">{creatorStats.totalViews}</p>
                <p className="text-gray-600 mt-1">Total Views</p>
              </div>
            </FadeInView>
            <FadeInView delay={0.2}>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-serif text-[#8b5cf6]">$6,000+</p>
                <p className="text-gray-600 mt-1">Revenue</p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Highest Performing Videos */}
      <section className="py-12 bg-[#ede9fe]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8">
              Highest Performing Videos
            </h2>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-8">
            <FadeInView delay={0.1}>
              <VideoCard
                embedUrl="https://www.instagram.com/p/DLvc9dhhVHR/embed/"
                platform="instagram"
                views="10.9M views"
                likes="697K likes"
              />
            </FadeInView>
            <FadeInView delay={0.15}>
              <VideoCard
                embedUrl="https://www.tiktok.com/embed/v2/7596116701188590861"
                platform="tiktok"
                views="7.1M views"
                likes="691K likes"
              />
            </FadeInView>
            <FadeInView delay={0.2}>
              <VideoCard
                embedUrl="https://www.instagram.com/p/DK-LaE5yC24/embed/"
                platform="instagram"
                views="12.2M views"
                likes="520K likes"
              />
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Why My Videos Went Viral */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_400px] gap-10 items-stretch">
            <div className="flex flex-col">
              <FadeInView>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
                  Why My Videos Went Viral
                </h2>
              </FadeInView>
              <div className="grid grid-cols-2 gap-5 flex-1">
                <FadeInView delay={0.1} className="flex">
                  <div className="bg-[#ede9fe] rounded-2xl p-6 border border-[#d4c8f5] font-nunito flex flex-col flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 text-base">Strategic Hook</h3>
                    <p className="text-gray-600 text-base leading-relaxed">Capture attention in the first second with strong visuals, clear framing, and an immediate emotional cue like humor or surprise.</p>
                  </div>
                </FadeInView>
                <FadeInView delay={0.15} className="flex">
                  <div className="bg-[#ede9fe] rounded-2xl p-6 border border-[#d4c8f5] font-nunito flex flex-col flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 text-base">Trend Timing</h3>
                    <p className="text-gray-600 text-base leading-relaxed">Track emerging sounds, formats, and cultural moments early, then adapt them to feel original and audience-aligned.</p>
                  </div>
                </FadeInView>
                <FadeInView delay={0.2} className="flex">
                  <div className="bg-[#ede9fe] rounded-2xl p-6 border border-[#d4c8f5] font-nunito flex flex-col flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 text-base">Authentic Storytelling</h3>
                    <p className="text-gray-600 text-base leading-relaxed">Prioritize personality and relatability over polish, giving viewers a genuine reason to stop, watch, and connect.</p>
                  </div>
                </FadeInView>
                <FadeInView delay={0.25} className="flex">
                  <div className="bg-[#ede9fe] rounded-2xl p-6 border border-[#d4c8f5] font-nunito flex flex-col flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 text-base">Engagement Strategy</h3>
                    <p className="text-gray-600 text-base leading-relaxed">Design each post to encourage interaction through prompts or share-worthy moments. Engagement is built into every video.</p>
                  </div>
                </FadeInView>
              </div>
            </div>
            <FadeInView delay={0.1}>
              <PhotoPlaceholder
                src="/images/content-viral.jpg"
                alt="Viral content"
                aspect="portrait"
                label="Viral Photo"
                className="rounded-2xl h-full"
              />
            </FadeInView>
          </div>
        </div>
      </section>

      {/* My Content Journey - Photo on LEFT */}
      <section className="py-12 bg-[#ede9fe]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[400px_1fr] gap-10 items-start">
            <FadeInView delay={0.1}>
              <PhotoPlaceholder
                src="/images/content-journey.jpg"
                alt="Content journey"
                aspect="square"
                label="Journey Photo"
                className="rounded-2xl"
              />
            </FadeInView>
            <div>
              <FadeInView>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
                  My Content Journey
                </h2>
              </FadeInView>
              <FadeInView delay={0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 font-nunito">
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    I started creating content to express creativity and connect through fashion and humor. What began as a personal passion quickly grew as I recognized the power of consistent, intentional short-form content.
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    As LandonDresses grew, so did my understanding of platforms, algorithms, and storytelling. Through testing and iteration, I developed repeatable formats that led to 25,000+ followers and 130+ million views.
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Today, LandonDresses operates as both a personal brand and content company, combining creativity, analytics, and authenticity to drive engagement and consistent revenue.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_400px] gap-10 items-stretch">
            <div className="flex flex-col">
              <FadeInView>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
                  What I Learned
                </h2>
              </FadeInView>
              <div className="grid grid-cols-2 gap-5 flex-1">
                <FadeInView delay={0.1} className="flex">
                  <div className="bg-[#ede9fe] rounded-2xl p-6 border border-[#d4c8f5] font-nunito flex flex-col flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 text-base">Understanding Algorithms</h3>
                    <p className="text-gray-600 text-base leading-relaxed">Platforms reward retention, clarity, and consistency. Understanding viewer behavior allows me to design content that gets discovered organically.</p>
                  </div>
                </FadeInView>
                <FadeInView delay={0.15} className="flex">
                  <div className="bg-[#ede9fe] rounded-2xl p-6 border border-[#d4c8f5] font-nunito flex flex-col flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 text-base">Audience Engagement</h3>
                    <p className="text-gray-600 text-base leading-relaxed">Growth comes from connection. Actively engaging with comments and messages turns viewers into a loyal community.</p>
                  </div>
                </FadeInView>
                <FadeInView delay={0.2} className="flex">
                  <div className="bg-[#ede9fe] rounded-2xl p-6 border border-[#d4c8f5] font-nunito flex flex-col flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 text-base">Content Strategy</h3>
                    <p className="text-gray-600 text-base leading-relaxed">Sustainable growth requires balance. I blend trends into my niche while staying authentic, consistent, and planned.</p>
                  </div>
                </FadeInView>
                <FadeInView delay={0.25} className="flex">
                  <div className="bg-[#ede9fe] rounded-2xl p-6 border border-[#d4c8f5] font-nunito flex flex-col flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 text-base">Analytics & Optimization</h3>
                    <p className="text-gray-600 text-base leading-relaxed">Every post is data. I analyze performance to refine hooks, pacing, and structure for continuous improvement.</p>
                  </div>
                </FadeInView>
              </div>
            </div>
            <FadeInView delay={0.1} className="flex items-stretch">
              <div className="grid grid-cols-2 gap-5 flex-1">
                {/* Instagram */}
                <div className="flex items-center justify-center">
                  <svg className="w-32 h-32 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </div>
                {/* TikTok */}
                <div className="flex items-center justify-center">
                  <svg className="w-32 h-32 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </div>
                {/* YouTube */}
                <div className="flex items-center justify-center">
                  <svg className="w-32 h-32 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                {/* Facebook */}
                <div className="flex items-center justify-center">
                  <svg className="w-32 h-32 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Where to Find Me */}
      <section className="py-12 bg-[#ede9fe]">
        <div className="max-w-2xl mx-auto px-6">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 text-center">
              Where to Find Me
            </h2>
          </FadeInView>
          <FadeInView delay={0.1}>
            <div className="flex justify-center gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl border border-gray-200 hover:border-[#a78bfa] transition-colors group"
              >
                <svg className="w-5 h-5 text-[#8b5cf6]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
                <span className="font-medium text-gray-900 group-hover:text-[#8b5cf6] transition-colors">Instagram</span>
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl border border-gray-200 hover:border-[#a78bfa] transition-colors group"
              >
                <svg className="w-5 h-5 text-[#8b5cf6]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
                <span className="font-medium text-gray-900 group-hover:text-[#8b5cf6] transition-colors">TikTok</span>
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl border border-gray-200 hover:border-[#a78bfa] transition-colors group"
              >
                <svg className="w-5 h-5 text-[#8b5cf6]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="font-medium text-gray-900 group-hover:text-[#8b5cf6] transition-colors">YouTube</span>
              </a>
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
