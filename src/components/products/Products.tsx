import { PAGE, URL_FETCHING_STRAPI } from "@/constants"
import type { Product as ProductType } from "@/models"
import { fetching } from "@/services"
import { notFound } from "next/navigation"
import { Pagination } from "../category"
import { Product } from "./components"

interface Props {
	categoryProp: string
	page: string
	color: string
	size: string
	subCategory: string
}

export async function Products({
	categoryProp,
	page,
	color,
	size,
	subCategory,
}: Props) {
	const currentPage = !page ? 1 : Number(page)
	const products = await fetching<ProductType[]>(
		`${URL_FETCHING_STRAPI.PRODUCTS(
			categoryProp,
			PAGE.SIZE,
			currentPage,
			color,
			size,
			subCategory,
		)}`,
	)

	if (products instanceof Error) {
		return notFound()
	}

	if (products.data.length === 0) {
		return (
			<h2>
				Parece que no tenemos lo que estás buscando. Comunícate con nuestro
				equipo por WhatsApp para darte atención personalizada.
			</h2>
		)
	}

	return (
		<div className="flex flex-col gap-4 max-md:px-6 md:pr-16 h-full justify-between">
			<ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
				{products.data.map((product) => (
					<Product
						key={product.id}
						category={product.category}
						calification={product.calification}
						description={product.description}
						name={product.name}
						slug={product.slug}
						price={product.price}
						images={product.images}
					/>
				))}
			</ul>
			<Pagination totalPages={products.meta.pagination.pageCount} />
		</div>
	)
}
