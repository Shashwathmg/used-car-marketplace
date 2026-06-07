"use client";

import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    async function enableMocking() {
      if (
        process.env.NODE_ENV ===
        "development"
      ) {
        const { worker } =
          await import(
            "@/mocks/browser"
          );

        await worker.start();
      }
    }

    enableMocking();
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}