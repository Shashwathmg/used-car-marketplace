import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://used-car-marketplace-sigma.vercel.app"
  ),

  title: {
    default: "Used Car Marketplace",
    template: "%s | Used Car Marketplace",
  },

  description:
    "Browse premium used cars with search, sorting, and detailed vehicle information.",

  keywords: [
    "used cars",
    "car marketplace",
    "BMW",
    "Audi",
    "Mercedes",
    "Next.js",
  ],

  authors: [
    {
      name: "Shashwathagowda M",
    },
  ],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Used Car Marketplace",

    description:
      "Search, compare and explore premium used vehicles.",

    url:
      "https://used-car-marketplace-sigma.vercel.app",

    siteName:
      "Used Car Marketplace",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Used Car Marketplace",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Used Car Marketplace",

    description:
      "Search and explore premium used cars.",

    images: [
      "/og-image.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}