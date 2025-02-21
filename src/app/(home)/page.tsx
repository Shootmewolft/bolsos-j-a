import { CarouselHome, Categories, Customers, Section } from "@/components";

function HomePage() {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <CarouselHome className="w-full" />
      <Categories />
      <Section title="Top en ventas" url="new-arrivals" />
      <hr />
      <Section title="Nuevos productos" url="top-sellings" />
      <Customers />
    </div>
  );
}

export default HomePage;
