import { Category } from "@/models"
import { fetching } from "@/services"
import { Categorie } from "@/components"
import { URL_FETCHING_STRAPI } from "@/constants"

export async function Categories() {
  const response = await fetching<Category[]>(URL_FETCHING_STRAPI.CATEGORIES)
  if (response instanceof Error) {
    return <h2>¡Hubo un error!</h2>
  }
  const { data: categories } = response
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
  )
}
