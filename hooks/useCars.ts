"use client";

import { useEffect, useState } from "react";

import { Car } from "@/types/car";

import { useCarsStore } from "@/store/carsStore";

export const useCars = () => {
  const {
    cars,
    setCars,
    searchTerm,
    sortBy,
  } = useCarsStore();

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response =
          await fetch("/api/cars");

        const data =
          await response.json();

        setCars(data);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [setCars]);

  let filteredCars = [...cars];

  if (searchTerm) {
    filteredCars =
      filteredCars.filter((car) =>
        `${car.make} ${car.model}`
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
      );
  }

  if (
    sortBy === "price-low-high"
  ) {
    filteredCars.sort(
      (a, b) =>
        a.price - b.price
    );
  }

  if (
    sortBy === "price-high-low"
  ) {
    filteredCars.sort(
      (a, b) =>
        b.price - a.price
    );
  }

  if (sortBy === "newest") {
    filteredCars.sort(
      (a, b) =>
        b.year - a.year
    );
  }

  if (sortBy === "oldest") {
    filteredCars.sort(
      (a, b) =>
        a.year - b.year
    );
  }

  return {
    cars: filteredCars,
    loading,
  };
};