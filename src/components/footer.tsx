import { siteConfig } from "@/content/site-content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#93c5fd] bg-[#eff6ff]">
      <div className="max-w-4xl mx-auto px-6 py-8 text-center">
        <p className="text-sm text-gray-600">
          © {currentYear} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
