import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Noto_Serif_Display, Yeseva_One, Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif",
  weight: ["400", "500", "600", "700"],
});

const yesevaOne = Yeseva_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cursive",
  weight: "400",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://landoncuny.com"),
  title: {
    default: "Landon Cuny | Marketing Student & Content Creator",
    template: "%s | Landon Cuny",
  },
  description:
    "Marketing student at San Diego State University with 25,000+ followers and 130M+ views. Specializing in social media growth, content creation, and data-driven marketing.",
  keywords: [
    "Landon Cuny",
    "Marketing Student",
    "Content Creator",
    "Social Media Marketing",
    "SDSU Marketing",
    "Digital Marketing Intern",
    "Growth Marketing",
    "Brand Partnerships",
  ],
  authors: [{ name: "Landon Cuny" }],
  creator: "Landon Cuny",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://landoncuny.com",
    title: "Landon Cuny | Marketing Student & Content Creator",
    description:
      "Marketing student at San Diego State University with 25,000+ followers and 130M+ views. Specializing in social media growth, content creation, and data-driven marketing.",
    siteName: "Landon Cuny",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Landon Cuny - Marketing Student & Content Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landon Cuny | Marketing Student & Content Creator",
    description:
      "Marketing student at SDSU with 25,000+ followers and 130M+ views.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${dmSans.variable} ${playfair.variable} ${notoSerifDisplay.variable} ${yesevaOne.variable} ${nunito.variable} font-body antialiased bg-white text-gray-900`}
      >
        <ThemeProvider>
          <Navigation />
          <div className="min-h-screen flex flex-col">
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
