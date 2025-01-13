import { Category } from "@/models";
import { fetching } from "@/services";
import { Categorie } from "@/components";
import { URL_FETCHING_STRAPI } from "@/constants";

export async function Categories() {
  const categories = await fetching<Category[]>(URL_FETCHING_STRAPI.CATEGORIES);
  if (categories instanceof Error) {
    console.error(categories.message);
    return;
  }
  return (
    <section className="flex flex-col gap-4 p-8">
      <h2 className="font-bold text-3xl uppercase font-fontTitle text-center">
        Encuentra lo que buscas
      </h2>
      <ul className="grid grid-cols-4 md:grid-cols-8">
        {categories.map((category) => (
          <Categorie
            key={category.id}
            icon={category.icon}
            name={category.name}
            slug={category.slug}
          />
        ))}
      </ul>
    </section>
  );
}
