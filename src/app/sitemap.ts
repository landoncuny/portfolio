import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://landoncuny.com";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/experience",
    "/work",
    "/content",
    "/resume",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Case study pages
  const caseStudyPages = caseStudies.map((study) => ({
    url: `${baseUrl}/work/${study.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...caseStudyPages];
}
