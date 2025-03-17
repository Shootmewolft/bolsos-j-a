"use client"
import { URL_FETCHING_STRAPI } from "@/constants"
import type { Product as ProductType } from "@/models"
import { fetching } from "@/services"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { Product, SkeletronProduct } from "../products/components"

interface Props {
	initialProducts: ProductType[]
	totalPages: number
	query: string
}

export function Products({ initialProducts, query, totalPages }: Props) {
	const [products, setProducts] = useState<ProductType[]>(initialProducts)
	const [page, setPage] = useState(1)

	const fetchingMore = async () => {
		const newProducts = await fetching<ProductType[]>(
			URL_FETCHING_STRAPI.PRODUCTS_WITHOUT_CATEGORY({
				query,
				page: page + 1,
			}),
		)
		if (newProducts instanceof Error || newProducts.data.length === 0) {
			return
		}
		setPage((prevPage) => prevPage + 1)
		setProducts((prevProducts: ProductType[]) => [
			...prevProducts,
			...newProducts.data,
		])
	}

	return (
		<>
			<InfiniteScroll
				dataLength={products.length}
				loader={<SkeletronProduct />}
				next={fetchingMore}
				hasMore={page < totalPages}
				className="grid grid-cols-2 md:grid-cols-3 gap-5 p-5 md:gap-8 md:p-8"
			>
				{products.map((product) => (
					<Product
						key={product.id}
						calification={product.calification}
						description={product.description}
						name={product.name}
						price={product.price}
						images={product.images}
						slug={product.slug}
						category={product.category}
					/>
				))}
			</InfiniteScroll>
			{page === totalPages && <p>No hay más productos</p>}
		</>
	)
}
