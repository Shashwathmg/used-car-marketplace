import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cars Listing",
  description:
    "Explore premium used cars with search and sorting.",
};

export default function CarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}