import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://used-car-marketplace-sigma.vercel.app"
  ),

  title: {
    default:
      "Used Car Marketplace | Next.js, TypeScript & Zustand Project",

    template:
      "%s | Used Car Marketplace",
  },

  description:
    "A modern used car marketplace built with Next.js, TypeScript, Zustand, and Tailwind CSS featuring search, sorting, responsive design, SEO optimization, and interactive vehicle detail modals.",

  keywords: [
    "used cars",
    "car marketplace",
    "buy used cars",
    "BMW",
    "Audi",
    "Mercedes",
    "Next.js",
    "TypeScript",
    "Zustand",
    "Tailwind CSS",
    "frontend project",
  ],

  authors: [
    {
      name: "Shashwathagowda M",
    },
  ],

  creator: "Shashwathagowda M",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title:
      "Used Car Marketplace | Next.js, TypeScript & Zustand Project",

    description:
      "Browse premium used cars, compare prices, explore vehicle details, and experience a modern responsive marketplace built using Next.js and TypeScript.",

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

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Used Car Marketplace | Next.js, TypeScript & Zustand Project",

    description:
      "Browse premium used cars, compare vehicle information, and explore a modern responsive marketplace experience.",

    images: [
      "/og-image.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}