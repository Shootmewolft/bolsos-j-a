import { Product } from "@/models";
import { Product as ProductItem } from "@/products/components";

interface Props {
  title: string;
  products: Product[];
}

export function Section({ title, products }: Props) {
  return (
    <section className="flex flex-col items-center px-8 py-5 gap-4">
      <h2 className="font-bold text-3xl uppercase font-fontTitle">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            description={product.description}
            calification={product.calification}
            price={product.price}
            slug={product.slug}
          />
        ))}
      </div>
    </section>
  );
}
