import { Product as ProductItem } from "@/components";
import { URL_FETCHING_STRAPI } from "@/constants";
import { sectionProductsType } from "@/models";
import { fetching } from "@/services";

interface Props {
  title: string;
  url: string;
}

export async function Section({ title, url }: Props) {
  const data = await fetching<sectionProductsType[]>(
    `${url}/${URL_FETCHING_STRAPI.SECTION}`
  );
  if (data instanceof Error) {
    console.error(data.message);
    return;
  }

  return (
    <section className="flex flex-col items-center px-8 py-5 gap-4">
      <h2 className="font-bold text-3xl uppercase font-fontTitle">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {data[0].products.map((product) => (
          <ProductItem
            key={product.id}
            images={product.images}
            name={product.name}
            description={product.description}
            calification={product.calification}
            price={product.price}
            slug={product.slug}
            category={product.category}
          />
        ))}
      </div>
    </section>
  );
}
