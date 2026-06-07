import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
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
        "https://spn-sta.spinny.com/blog/20230522183738/BMW-M340i-1160x653.webp?compress=true&quality=80&w=1200&dpr=2.6",
      description:
        "Luxury SUV with premium interior and advanced driving assistance."
    },
    {
      id: 2,
      make: "Audi",
      model: "A6",
      year: 2021,
      price: 38000,
      mileage: 18000,
      fuelType: "Diesel",
      transmission: "Automatic",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      description:
        "Executive sedan offering comfort, performance, and technology."
    },
    {
      id: 3,
      make: "Mercedes-Benz",
      model: "C-Class",
      year: 2023,
      price: 52000,
      mileage: 5000,
      fuelType: "Petrol",
      transmission: "Automatic",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
      description:
        "Luxury sedan with elegant styling and cutting-edge features."
    },
    {
      id: 4,
      make: "Toyota",
      model: "Camry",
      year: 2022,
      price: 28000,
      mileage: 15000,
      fuelType: "Petrol",
      transmission: "Automatic",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341",
      description:
        "Reliable family sedan known for comfort and fuel efficiency."
    },
    {
      id: 5,
      make: "Honda",
      model: "Civic",
      year: 2021,
      price: 24000,
      mileage: 22000,
      fuelType: "Petrol",
      transmission: "Manual",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      description:
        "Sporty compact sedan with great fuel economy."
    },
    {
      id: 6,
      make: "Hyundai",
      model: "Creta",
      year: 2023,
      price: 27000,
      mileage: 8000,
      fuelType: "Petrol",
      transmission: "Automatic",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
      description:
        "Popular compact SUV loaded with modern features."
    },
    {
      id: 7,
      make: "Kia",
      model: "Seltos",
      year: 2022,
      price: 26000,
      mileage: 12000,
      fuelType: "Diesel",
      transmission: "Automatic",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a",
      description:
        "Stylish SUV offering practicality and premium interiors."
    },
    {
      id: 8,
      make: "Ford",
      model: "Mustang",
      year: 2020,
      price: 55000,
      mileage: 20000,
      fuelType: "Petrol",
      transmission: "Manual",
      image:
        "https://images.unsplash.com/photo-1494905998402-395d579af36f",
      description:
        "Iconic American muscle car with thrilling performance."
    },
    {
      id: 9,
      make: "Volkswagen",
      model: "Virtus",
      year: 2023,
      price: 25000,
      mileage: 7000,
      fuelType: "Petrol",
      transmission: "Automatic",
      image:
        "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa",
      description:
        "Premium sedan with German engineering and comfort."
    },
    {
      id: 10,
      make: "Skoda",
      model: "Slavia",
      year: 2022,
      price: 24500,
      mileage: 11000,
      fuelType: "Petrol",
      transmission: "Automatic",
      image:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
      description:
        "Elegant sedan with spacious interiors and strong performance."
    },
    {
      id: 11,
      make: "BMW",
      model: "3 Series",
      year: 2023,
      price: 60000,
      mileage: 4000,
      fuelType: "Petrol",
      transmission: "Automatic",
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
      description:
        "Performance-oriented luxury sedan with sporty dynamics."
    },
    {
      id: 12,
      make: "Audi",
      model: "Q7",
      year: 2022,
      price: 70000,
      mileage: 9000,
      fuelType: "Diesel",
      transmission: "Automatic",
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
      description:
        "Premium full-size SUV with advanced safety features."
    }
  ]);
}