"use client";

import Hero from "@/components/cars/Hero";
import SearchBar from "@/components/cars/SearchBar";
import Filters from "@/components/cars/Filters";
import CarGrid from "@/components/cars/CarGrid";
import CarModal from "@/components/cars/CarModal";

import { useCars } from "@/hooks/useCars";

export default function CarsPage() {
  const { cars, loading } = useCars();

  return (
    <main
      className="
      min-h-screen
      bg-slate-100
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        "
      >
        <Hero />

        <div
          className="
          flex
          flex-col
          md:flex-row
          gap-4
          mb-10
          "
        >
          <SearchBar />
          <Filters />
        </div>

        {loading ? (
          <div
            className="
            text-center
            py-20
            text-xl
            "
          >
            Loading Cars...
          </div>
        ) : (
          <>
            <CarGrid cars={cars} />
            <CarModal />
          </>
        )}
      </div>
    </main>
  );
}