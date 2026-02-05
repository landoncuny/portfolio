import { FadeIn, FadeInView } from "@/components/motion";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { organizations } from "@/content/site-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Activities",
  description: "SDSU campus involvement including Alpha Kappa Psi, Excel/SQL tutoring, Student Disability Services, and more.",
};

export default function CampusPage() {
  return (
    <>
      {/* Hero - Centered with Photo Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#fce4ec]">
        {/* Background Photo Placeholder */}
        <div className="absolute inset-0">
          <PhotoPlaceholder
            src="/images/campus-hero.jpg"
            alt="Campus Activities"
            aspect="wide"
            label="Campus Hero Photo"
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
              Campus Activities
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-sm md:text-base text-gray-800 font-semibold tracking-wide mt-4">
              2024-2027 (Expected)
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Student Disability Services - Text Left, Photo Right */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col">
              <FadeInView>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
                  Student Disability Services
                </h2>
              </FadeInView>
              <FadeInView delay={0.1}>
                <div className="bg-[#fce4ec] rounded-2xl p-6 border border-[#f8bbd9]">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">Student Disability Services Assistant</h3>
                      <p className="text-[#a6192e] text-lg">San Diego State University</p>
                    </div>
                    <p className="text-gray-500 text-base">August 2025 – Present</p>
                  </div>
                  <p className="text-gray-600 text-xl leading-relaxed mb-3">
                    Supporting students with disabilities to enhance their campus experience and ensure equal access to education.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#a6192e] mt-2.5 shrink-0" />
                      <span className="text-gray-600 text-lg">Provided transportation support daily for 100+ students with disabilities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#a6192e] mt-2.5 shrink-0" />
                      <span className="text-gray-600 text-lg">Collaborated with SDSU staff to improve daily learning experiences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#a6192e] mt-2.5 shrink-0" />
                      <span className="text-gray-600 text-lg">Ensured timely and reliable service for students across campus</span>
                    </li>
                  </ul>
                </div>
              </FadeInView>
            </div>
            <div className="space-y-5">
              <FadeInView delay={0.1}>
                <PhotoPlaceholder
                  src="/images/campus-1.jpg"
                  alt="Student Disability Services"
                  aspect="wide"
                  label="Campus Photo 1"
                  className="rounded-2xl"
                />
              </FadeInView>
              <FadeInView delay={0.15}>
                <a
                  href="https://sds.sdsu.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity"
                >
                  <PhotoPlaceholder
                    src="/images/campus-2.jpg"
                    alt="Student Disability Services"
                    aspect="wide"
                    label="Campus Photo 2"
                    className="rounded-2xl"
                    objectFit="contain"
                  />
                </a>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* Excel & SQL Tutor - Photos Left, Text Right */}
      <section className="py-12 bg-[#fce4ec]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            <FadeInView delay={0.1} className="flex flex-col gap-6">
              {/* Top row - logos */}
              <div className="grid grid-cols-2 gap-6">
                {/* Excel */}
                <div className="flex items-center justify-center p-6">
                  <svg className="w-28 h-28" viewBox="0 0 96 96" fill="none">
                    <path d="M59.5 14H82.5C84.433 14 86 15.567 86 17.5V78.5C86 80.433 84.433 82 82.5 82H59.5V14Z" fill="#21A366"/>
                    <path d="M59.5 14H36V82H59.5V14Z" fill="#107C41"/>
                    <path d="M36 14H13.5C11.567 14 10 15.567 10 17.5V78.5C10 80.433 11.567 82 13.5 82H36V14Z" fill="#185C37"/>
                    <path d="M69 26H77V34H69V26ZM69 38H77V46H69V38ZM69 50H77V58H69V50ZM69 62H77V70H69V62Z" fill="#33C481"/>
                    <path d="M19 26H27V34H19V26ZM19 38H27V46H19V38ZM19 50H27V58H19V50ZM19 62H27V70H19V62Z" fill="#107C41"/>
                    <text x="48" y="55" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">X</text>
                  </svg>
                </div>
                {/* PostgreSQL */}
                <div className="flex items-center justify-center p-6">
                  <svg className="w-28 h-28" viewBox="0 0 128 128" fill="#336791">
                    <path d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.535 4.401 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.182 1.375 8.166 1.583 13.18.208 5.015.353 9.741 1.023 12.514.67 2.772 1.474 5.878 5.021 7.522 3.108 1.441 8.179 2.116 11.177.573 4.556-2.341 3.475-11.525 3.989-22.066z"/>
                  </svg>
                </div>
              </div>
              {/* Pivot Table Graphic */}
              <div className="bg-white rounded-2xl p-4 border border-gray-200">
                <div className="text-xs text-gray-500 mb-2 font-medium">Excel Pivot Table</div>
                <div className="overflow-hidden rounded-lg border border-gray-300">
                  {/* Header row */}
                  <div className="grid grid-cols-4 bg-[#217346] text-white text-xs font-semibold">
                    <div className="p-2 border-r border-green-600">Category</div>
                    <div className="p-2 border-r border-green-600">Q1</div>
                    <div className="p-2 border-r border-green-600">Q2</div>
                    <div className="p-2">Total</div>
                  </div>
                  {/* Data rows */}
                  <div className="grid grid-cols-4 text-xs bg-gray-50 border-b border-gray-200">
                    <div className="p-2 border-r border-gray-200 font-medium">Marketing</div>
                    <div className="p-2 border-r border-gray-200">$12,400</div>
                    <div className="p-2 border-r border-gray-200">$15,200</div>
                    <div className="p-2 font-semibold">$27,600</div>
                  </div>
                  <div className="grid grid-cols-4 text-xs bg-white border-b border-gray-200">
                    <div className="p-2 border-r border-gray-200 font-medium">Sales</div>
                    <div className="p-2 border-r border-gray-200">$24,800</div>
                    <div className="p-2 border-r border-gray-200">$31,500</div>
                    <div className="p-2 font-semibold">$56,300</div>
                  </div>
                  <div className="grid grid-cols-4 text-xs bg-gray-50">
                    <div className="p-2 border-r border-gray-200 font-bold">Grand Total</div>
                    <div className="p-2 border-r border-gray-200 font-bold">$37,200</div>
                    <div className="p-2 border-r border-gray-200 font-bold">$46,700</div>
                    <div className="p-2 font-bold text-[#217346]">$83,900</div>
                  </div>
                </div>
              </div>
            </FadeInView>
            <div className="flex flex-col">
              <FadeInView>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
                  Excel & SQL Tutor
                </h2>
              </FadeInView>
              <FadeInView delay={0.1}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">Microsoft Excel and SQL Tutor</h3>
                      <p className="text-[#a6192e] text-lg">San Diego State University</p>
                    </div>
                    <p className="text-gray-500 text-base">2024 – Present</p>
                  </div>
                  <p className="text-gray-600 text-xl leading-relaxed mb-3">
                    Helping students master data analysis tools for marketing, finance, and operations coursework.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#a6192e] mt-2.5 shrink-0" />
                      <span className="text-gray-600 text-lg">Assisted 25+ students in learning Excel and SQL efficiently</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#a6192e] mt-2.5 shrink-0" />
                      <span className="text-gray-600 text-lg">Guided students in applying data analysis to marketing, finance, and operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#a6192e] mt-2.5 shrink-0" />
                      <span className="text-gray-600 text-lg">Created simplified explanations for complex data concepts</span>
                    </li>
                  </ul>
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8">
              Organizations
            </h2>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            {organizations.map((org, index) => (
              <FadeInView key={org.name} delay={0.1 + index * 0.05} className="flex">
                <div className="bg-[#fce4ec] rounded-2xl p-6 border border-[#f8bbd9] flex flex-col flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{org.name}</h3>
                      <p className="text-[#a6192e]">{org.role}</p>
                      {org.type && <p className="text-sm text-gray-500">{org.type}</p>}
                    </div>
                    <p className="text-gray-500 text-sm">{org.period}</p>
                  </div>
                  {org.highlights && (
                    <ul className="space-y-2">
                      {org.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#a6192e] mt-2 shrink-0" />
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Coursework */}
      <section className="py-12 bg-[#fce4ec]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8">
              Relevant Coursework
            </h2>
          </FadeInView>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "B A 370: Marketing",
              "B A 360: Intro Operations & Supply Chain Management",
              "MIS 301: Statistic Analysis for Business",
              "B A 350: Management & Organization Behavior",
              "ACCTG 202: Managerial Accounting",
              "ACCTG 201: Financial Accounting",
              "MATH 120: Calculus for Business Analysis",
              "MIS 180: Principles Info Systems",
            ].map((course, index) => (
              <FadeInView key={course} delay={0.05 + index * 0.03}>
                <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                  <span className="text-gray-700 font-medium">{course}</span>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Other Work */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
              Other Experience
            </h2>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            <FadeInView delay={0.1}>
              <PhotoPlaceholder
                src="/images/campus-5.jpg"
                alt="In-N-Out work"
                label="Campus Photo 5"
                className="rounded-2xl h-full"
                objectPosition="center 25%"
              />
            </FadeInView>
            <FadeInView delay={0.15}>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 h-full">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">Restaurant Associate</h3>
                  <p className="text-[#a6192e]">In-N-Out Burger</p>
                  <p className="text-gray-500 text-sm">May 2025 – Jan 2026</p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Fast-paced customer service role in food industry.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#a6192e] mt-2 shrink-0" />
                    <span className="text-gray-600 text-sm">Received 3 promotions since May</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#a6192e] mt-2 shrink-0" />
                    <span className="text-gray-600 text-sm">Delivered exceptional customer service in high-volume environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#a6192e] mt-2 shrink-0" />
                    <span className="text-gray-600 text-sm">Prepared and assembled food to company standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#a6192e] mt-2 shrink-0" />
                    <span className="text-gray-600 text-sm">Took customer orders accurately and completed transactions at the register</span>
                  </li>
                </ul>
              </div>
            </FadeInView>
            <FadeInView delay={0.2}>
              <PhotoPlaceholder
                src="/images/campus-6.jpg"
                alt="Work experience"
                label="Campus Photo 6"
                className="rounded-2xl h-full"
              />
            </FadeInView>
          </div>
        </div>
      </section>

    </>
  );
}
