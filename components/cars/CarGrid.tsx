import { Car } from "@/types/car";

import CarCard from "./CarCard";

interface Props {
  cars: Car[];
}

export default function CarGrid({
  cars,
}: Props) {
  if (!cars.length) {
    return (
      <div
        className="
        text-center
        py-20
        "
      >
        No cars found.
      </div>
    );
  }

  return (
    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-8
      "
    >
      {cars.map((car) => (
        <CarCard
          key={car.id}
          car={car}
        />
      ))}
    </div>
  );
}