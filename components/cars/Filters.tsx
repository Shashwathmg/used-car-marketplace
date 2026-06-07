"use client";

import { useCarsStore } from "@/store/carsStore";

export default function Filters() {
  const { setSortBy } =
    useCarsStore();

  return (
    <select
      onChange={(e) =>
        setSortBy(
          e.target.value
        )
      }
      className="
      p-4
      rounded-xl
      border
      bg-white
      "
    >
      <option value="">
        Sort Cars
      </option>

      <option value="price-low-high">
        Price Low → High
      </option>

      <option value="price-high-low">
        Price High → Low
      </option>

      <option value="newest">
        Newest
      </option>

      <option value="oldest">
        Oldest
      </option>
    </select>
  );
}