import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";
import favicon from "@/assets/favicon.png";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vuepoint.academy";

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
    "tech academy",
    "coding bootcamp",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Vuepoint Academy | Developing Highly Skilled Tech Talents",
    description:
      "At Vuepoint, we turn individuals without tech skills into world-class tech talents.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: { url: typeof favicon === "string" ? favicon : favicon.src, type: "image/png" },
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
