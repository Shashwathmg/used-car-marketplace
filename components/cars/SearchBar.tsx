"use client";

import { useCarsStore } from "@/store/carsStore";

export default function SearchBar() {
  const {
    searchTerm,
    setSearchTerm,
  } = useCarsStore();

  return (
    <input
      type="text"
      placeholder="Search BMW, Audi..."
      value={searchTerm}
      onChange={(e) =>
        setSearchTerm(
          e.target.value
        )
      }
      className="
      w-full
      p-4
      rounded-xl
      border
      bg-white
      "
    />
  );
}