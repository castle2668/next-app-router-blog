import "./globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import Layout from "@/components/layout";
import { cn } from "@/lib/utils";

interface RootLayoutProps {
  children: React.ReactNode;
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontKurewa = localFont({
  src: "../../public/fonts/KurewaGothicCjkTc-Regular.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-kurewa",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seanhuang.dev"),
  alternates: {
    canonical: "/",
  },
  title: {
    template: "%s | Sean's Blog",
    default: "Sean's Blog",
  },
  description: "I post about programming and web development.",
  openGraph: {
    title: "Sean's Blog",
    description: "I post about programming and web development.",
    images: [
      {
        url: "/avatar.jpeg",
        width: 400,
        height: 400,
        alt: "An image showing avatar",
        type: "image/jpeg",
      },
    ],
    type: "website",
    locale: "zh_tw",
    url: "/",
    siteName: "Sean's Blog",
  },
  twitter: {
    creator: "@castle2668",
    site: "@castle2668",
    card: "summary_large_image",
  },
  keywords: [
    "sean huang",
    "programming",
    "web development",
    "frontend engineer",
  ],
  authors: {
    name: "castle2668",
    url: "https://www.seanhuang.dev",
  },
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="zh-Hant-TW">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          `${fontKurewa.variable} ${fontSans.variable}`
        )}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
