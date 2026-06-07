import { create } from "zustand";
import { Car } from "@/types/car";

interface CarsState {
  cars: Car[];

  selectedCar: Car | null;

  searchTerm: string;

  sortBy: string;

  setCars: (cars: Car[]) => void;

  setSelectedCar: (car: Car | null) => void;

  setSearchTerm: (term: string) => void;

  setSortBy: (sort: string) => void;
}

export const useCarsStore =
  create<CarsState>((set) => ({
    cars: [],

    selectedCar: null,

    searchTerm: "",

    sortBy: "",

    setCars: (cars) =>
      set({
        cars,
      }),

    setSelectedCar: (car) =>
      set({
        selectedCar: car,
      }),

    setSearchTerm: (term) =>
      set({
        searchTerm: term,
      }),

    setSortBy: (sort) =>
      set({
        sortBy: sort,
      }),
  }));