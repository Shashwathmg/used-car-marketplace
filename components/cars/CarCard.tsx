"use client";

import { Car } from "@/types/car";

import { useCarsStore }
from "@/store/carsStore";

interface Props {
  car: Car;
}

export default function CarCard({
  car,
}: Props) {
  const {
    setSelectedCar,
  } = useCarsStore();

  return (
    <div
      onClick={() =>
        setSelectedCar(car)
      }
      className="
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                cursor-pointer
                "
    >
      <img
        src={car.image}
        alt={car.model}
        className="
        h-60
        w-full
        object-cover
        "
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold">
          {car.make}
        </h2>

        <p>{car.model}</p>

        <p>{car.year}</p>

        <p className="mt-3 text-green-600 font-semibold">
          $
          {car.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}