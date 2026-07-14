import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";
import favicon from "@/assets/favicon.png";
import logo from "@/assets/logo.png";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vuepoint.academy";
const faviconUrl = typeof favicon === "string" ? favicon : favicon.src;
const logoUrl = typeof logo === "string" ? logo : logo.src;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vuepoint Academy | Developing Highly Skilled Tech Talents",
    template: "%s | Vuepoint Academy",
  },
  description:
    "At Vuepoint, we turn individuals without tech skills into world-class tech talents. Join our bootcamps in Full Stack, Frontend, and Backend Engineering. Pay as you learn.",
  keywords: [
    "Vuepoint",
    "Vue Point",
    "tech academy",
    "coding bootcamp",
    "Holiday Bootcamp",
    "Full Stack Engineering",
    "Frontend Engineering",
    "Backend Engineering",
    "learn to code",
    "Nigeria",
    "Karshi",
  ],
  authors: [{ name: "Vuepoint", url: siteUrl }],
  creator: "Vuepoint",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Vuepoint Academy",
    title: "Vuepoint Academy | Developing Highly Skilled Tech Talents",
    description:
      "At Vuepoint, we turn individuals without tech skills into world-class tech talents. Pay as you learn.",
    images: [
      {
        url: logoUrl,
        width: 696,
        height: 176,
        alt: "Vuepoint Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vuepoint Academy | Developing Highly Skilled Tech Talents",
    description:
      "At Vuepoint, we turn individuals without tech skills into world-class tech talents.",
    images: [logoUrl],
  },
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: faviconUrl, type: "image/png", sizes: "493x436" },
      { url: "/favicon.ico", sizes: "256x256" },
    ],
    apple: { url: "/apple-touch-icon.png", type: "image/png", sizes: "256x256" },
    shortcut: { url: faviconUrl, type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
