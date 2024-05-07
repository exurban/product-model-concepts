import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Product Model Concepts",
    template: "%s | Product Model Concepts",
  },
  description:
    "How Product Model concepts fit and work together to build impactful products.",
  openGraph: {
    title: "Product Model Concepts",
    description:
      "How Product Model concepts fit and work together to build impactful products.",
    url: baseUrl,
    siteName: "Product Model Concepts",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/bjg-photo/image/upload/v1712864044/3-initial-pmf_gbnsfi.png",
      },
    ],
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

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="subpixel-antialiased">
        <nav className="sticky top-0 z-50">
          <Navbar />
        </nav>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 z-10">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
