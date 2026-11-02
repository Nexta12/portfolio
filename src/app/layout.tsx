import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Udeze Ernest — Senior Software Engineer & Founder, z-code Technologies Ltd",
  description:
    "Portfolio of Udeze Ernest. Senior Software Engineer and Founder of z-code Technologies Ltd, parent company of Z-Remote, PrepFocus, and Spider WebCrawler.",
  keywords: [
    "Senior Software Engineer",
    "Founder",
    "z-code Technologies Ltd",
    "Z-Remote",
    "PrepFocus",
    "Spider WebCrawler",
    "Distributed Systems",
    "Next.js",
    "React 19",
    "Kafka",
    "Cloud Architecture",
  ],
  authors: [{ name: "Udeze Ernest" }],
  creator: "Udeze Ernest",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Udeze Ernest — Senior Software Engineer & Founder, z-code Technologies Ltd",
    description:
      "Engineering resilient systems and enterprise software platforms including Z-Remote, PrepFocus, and Spider WebCrawler.",
    siteName: "Udeze Ernest Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Udeze Ernest — Senior Software Engineer & Founder",
    description:
      "Founder of z-code Technologies Ltd — building Z-Remote, PrepFocus, and Spider WebCrawler.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#08090d] text-zinc-100">{children}</body>
    </html>
  );
}
