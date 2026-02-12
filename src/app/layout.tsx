import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./styles/main.css";
import { Analytics } from "@vercel/analytics/next";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
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
    "Digital Marketing",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Landon Cuny | Marketing Student & Content Creator",
    description:
      "Marketing student at SDSU with 25,000+ followers and 130M+ views.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Satoshi:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={instrumentSerif.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
