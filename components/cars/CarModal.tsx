"use client";

import { useEffect } from "react";

import { useCarsStore } from "@/store/carsStore";

export default function CarModal() {
  const {
    selectedCar,
    setSelectedCar,
  } = useCarsStore();

  useEffect(() => {
    if (selectedCar) {
      document.body.style.overflow =
        "hidden";
    }

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [selectedCar]);

  if (!selectedCar) {
    return null;
  }

  return (
    <div
      className="
      fixed
      inset-0
      z-50

      bg-black/70
      backdrop-blur-sm

      flex
      items-center
      justify-center

      p-4

      overflow-y-auto
      "
      onClick={() =>
        setSelectedCar(null)
      }
    >
      <div
        onClick={(e) =>
          e.stopPropagation()
        }
        className="
        bg-white

        rounded-3xl

        max-w-4xl
        w-full

        max-h-[90vh]

        overflow-y-auto

        shadow-2xl
        "
      >
        <img
          src={selectedCar.image}
          alt={selectedCar.model}
          className="
          w-full
          h-80
          object-cover
          "
        />

        <div className="p-8">
          <div
            className="
            flex
            justify-between
            items-start
            "
          >
            <div>
              <h2
                className="
                text-4xl
                font-bold
                "
              >
                {selectedCar.make}
              </h2>

              <p
                className="
                text-xl
                text-gray-500
                mt-1
                "
              >
                {selectedCar.model}
              </p>
            </div>

            <button
              onClick={() =>
                setSelectedCar(null)
              }
              className="
              px-6
              py-2

              bg-red-500
              text-white

              rounded-lg

              hover:bg-red-600
              "
            >
              Close
            </button>
          </div>

          <div
            className="
            grid
            md:grid-cols-2
            gap-6
            mt-8
            "
          >
            <div
              className="
              bg-gray-100
              p-4
              rounded-xl
              "
            >
              <p className="font-semibold">
                Year
              </p>

              <p>
                {selectedCar.year}
              </p>
            </div>

            <div
              className="
              bg-gray-100
              p-4
              rounded-xl
              "
            >
              <p className="font-semibold">
                Price
              </p>

              <p>
                $
                {selectedCar.price.toLocaleString()}
              </p>
            </div>

            <div
              className="
              bg-gray-100
              p-4
              rounded-xl
              "
            >
              <p className="font-semibold">
                Mileage
              </p>

              <p>
                {selectedCar.mileage.toLocaleString()} km
              </p>
            </div>

            <div
              className="
              bg-gray-100
              p-4
              rounded-xl
              "
            >
              <p className="font-semibold">
                Fuel Type
              </p>

              <p>
                {selectedCar.fuelType}
              </p>
            </div>

            <div
              className="
              bg-gray-100
              p-4
              rounded-xl
              "
            >
              <p className="font-semibold">
                Transmission
              </p>

              <p>
                {selectedCar.transmission}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3
              className="
              text-2xl
              font-semibold
              mb-3
              "
            >
              Description
            </h3>

            <p
              className="
              text-gray-700
              leading-relaxed
              "
            >
              {selectedCar.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}