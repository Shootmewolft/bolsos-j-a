import { CarouselHome, Customers, Section } from "@/components";

export const electronics = [
  {
    id: 1,
    name: "Smartphone X",
    description: "High-end smartphone with 128GB storage.",
    price: 999.99,
    calification: 4,
    slug: "smartphone-x"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    description: "Noise-canceling wireless headphones.",
    price: 199.99,
    calification: 5,
    slug: "wireless-headphones"
  },
  {
    id: 3,
    name: "4K Smart TV",
    description: "Ultra HD 4K smart TV.",
    price: 699.99,
    calification: 3.5,
    slug: "4k-smart-tv"
  },
  {
    id: 4,
    name: "Laptop Pro 15",
    description: "Professional-grade laptop with Retina display.",
    price: 1299.99,
    calification: 2.5,
    slug: "laptop-pro-15"
  },
];

export const fashion = [
  {
    id: 5,
    name: "Leather Jacket",
    description: "Premium leather jacket.",
    price: 249.99,
    calification: 3.5,
    slug: "leather-jacket"
  },
  {
    id: 6,
    name: "Running Shoes",
    description: "Lightweight running shoes.",
    price: 89.99,
    calification: 5,
    slug: "running-shoes"
  },
  {
    id: 7,
    name: "Casual T-Shirt",
    description:
      "Soft cotton casual t-shirt available in various colors and sizes.",
    price: 19.99,
    calification: 4,
    slug: "casual-t-shirt"
  },
  {
    id: 8,
    name: "Jeans Classic",
    description:
      "Classic fit jeans made from high-quality denim for comfort and durability.",
    price: 49.99,
    calification: 4,
    slug: "jeans-classic"
  },
];

function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      <CarouselHome className="w-full" />
      <Section title="Top en ventas" products={fashion} />
      <hr />
      <Section title="Nuevos productos" products={electronics} />
      <Customers />
    </div>
  );
}

export default HomePage;
