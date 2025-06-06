import { Categorie } from "@/components"
import { URL_FETCHING_STRAPI } from "@/constants"
import type { Category } from "@/models"
import { fetching } from "@/services"

export async function Categories() {
	const response = await fetching<Category[]>(URL_FETCHING_STRAPI.CATEGORIES)
	if (response instanceof Error) {
		return <h2>¡Hubo un error!</h2>
	}
	const { data: categories } = response
	return (
		<section className="flex flex-col gap-4 p-4 md:p-8">
			<h2 className="font-bold text-xl sm:text-2xl md:text-3xl uppercase font-fontTitle text-center">
				Encuentra lo que buscas
			</h2>
			<ul className="grid grid-cols-4 md:grid-cols-6 lg:8">
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
