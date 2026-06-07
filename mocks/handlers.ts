import { http, HttpResponse } from "msw";

const cars = [
  {
    id: 1,
    make: "BMW",
    model: "X5",
    year: 2022,
    price: 45000,
    mileage: 10000,
    fuelType: "Petrol",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54",
    description:
      "Luxury SUV with premium interior."
  },

  {
    id: 2,
    make: "Audi",
    model: "A6",
    year: 2021,
    price: 35000,
    mileage: 15000,
    fuelType: "Diesel",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
    description:
      "Executive sedan with advanced features."
  },

  {
    id: 3,
    make: "Mercedes",
    model: "C-Class",
    year: 2023,
    price: 55000,
    mileage: 5000,
    fuelType: "Petrol",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    description:
      "Elegant and sporty luxury sedan."
  }
];

export const handlers = [
  http.get("/api/cars", () => {
    return HttpResponse.json(cars);
  })
];